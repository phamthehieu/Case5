"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const authRouter_1 = require("./authRouter");
const userRouter_1 = require("./userRouter");
const auth_1 = require("../middleware/auth");
exports.router = (0, express_1.Router)();
exports.router.use('/auth', authRouter_1.authRouter);
exports.router.use(auth_1.auth);
exports.router.use('/users', userRouter_1.userRouter);
//# sourceMappingURL=router.js.map