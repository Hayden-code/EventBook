const { Schema, model } = require("mongoose");

const eventSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
  },
  theme: {
    type: String,
  },
  host: { type: Schema.Types.ObjectId, ref: "User" },
  guests: [
    {
      userName: {
        type: String,
      },
    },
  ],
  isPrivate: {
    type: Boolean,
  },
});

const Event = model("Event", eventSchema);

module.exports = Event;
