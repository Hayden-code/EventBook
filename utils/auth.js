const jwt = require("jsonwebtoken");

const secret =
  process.env.SECRET || "some secret passphrase here for local development";
const expiration = "2h";

module.exports = ({ req }) => {
  return {
    authMiddleware: function () {
      let token =
        req.body.token || req.query.token || req.headers.authorization;

      if (req.headers.authorization) {
        token = token.split(" ").pop().trim();
      }

      if (!token) {
        return req;
      }

      try {
        const { data } = jwt.verify(token, secret, { maxAge: expiration });
        return data;
      } catch (err) {
        console.log("Invalid token", err);
      }

      return req;
    },
  };
};
