const jwt = require("jsonwebtoken");

const secret =
  process.env.SECRET || "some secret passphrase here for local development";
const expiration = "2h";

function signToken({ email, userName, _id }) {
  const payload = { email, userName, _id };
  return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
}
module.exports = { signToken };
