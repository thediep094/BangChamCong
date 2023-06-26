const express = require("express");
const userRouter = express.Router();
const userController = require("../controller/user.controller");
const userMiddleware = require("../middleware/user.middleware");
const authMiddleware = require("../middleware/auth.middleware");

// api/user/account/id
userRouter.get(
    "/account",
    authMiddleware.checkRequired,
    authMiddleware.verifiyToken,
    userController.getUserById,
);

// api/user/admin/account/id
userRouter.get(
    "/admin/account/:id",
    authMiddleware.isAdmin,
    userController.getUserById,
);

// api/user/update/id
userRouter.put("/update/:id", userController.update);

// api/admin/update/id
userRouter.put(
    "/admin/update/:id",
    authMiddleware.isAdmin,
    userController.update,
);

// /api/user/getAllUsers
userRouter.get("/getAllUsers", authMiddleware.isAdmin, userController.getAlls);
// /api/user/create
userRouter.post(
    "/create",
    userMiddleware.checkRequire,
    userMiddleware.checkExist,
    userController.create,
);

module.exports = userRouter;
