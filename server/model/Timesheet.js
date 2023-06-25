const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const timesheetSchema = new Schema(
    {
        checkIn: { type: Date, required: true },
        checkOut: { type: Date },
        userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    },
    { timestamps: true },
);

const Timesheet = mongoose.model("Timesheet", timesheetSchema);
module.exports = Timesheet;
