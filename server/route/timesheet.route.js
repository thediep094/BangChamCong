const express = require("express");
const timesheetRouter = express.Router();
const timesheetController = require("../controller/timesheet.controller");
// api/timesheet/getbyid
timesheetRouter.get("/getbyid", timesheetController.getTimesheetById);

// api/timesheet/admin/getbymonth/
timesheetRouter.get(
    "/admin/getbymonth",
    timesheetController.getTimesheetsByMonth,
);

// api/timesheet/admin/getbyyêar/
timesheetRouter.get(
    "/admin/getbyyear",
    timesheetController.getTimesheetsByYear,
);
module.exports = timesheetRouter;
