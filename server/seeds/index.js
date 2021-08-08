const db = require("../config/connection");
const { User, Event } = require("../models");
const userSeed = require("./userSeed.json");
const eventSeed = require("./eventSeed.json");

db.once("open", async () => {
  try {
    await User.deleteMany({});
    await Event.deleteMany({});

    await User.create(userSeed);
    await Event.create(eventSeed);
    // for (let i = 0; i < eventSeed.length; i++) {
    //   const { _id, host, invitedGuests, goingGuests } = await Event.create(
    //     eventSeed[i]
    //   );
    //   const user = await User.findOneAndUpdate(
    //     { userName: host },
    //     {
    //       $addToSet: {
    //         event: _id,
    //       },
    //     }
    //   );
    // }
  } catch (err) {
    console.log(err);
    process.exit(1);
  }

  console.log("SEEDING COMPLETE");
  process.exit(0);
});
