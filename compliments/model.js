const mongoose = require("mongoose");

const complimentSchema = mongoose.Schema({
  timeStamp: { type: Date, required: true },
  messageContent: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

complimentSchema.methods.serialize = function() {
  return {
    id: this._id,
    timeStamp: this.timeStamp,
    messageContent: this.messageContent
  };
};

const Compliment = mongoose.model("Compliment", complimentSchema);
module.exports = { Compliment };
