"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = __importDefault(require("./UserController"));
const router = (0, express_1.Router)();
router.post('/users', UserController_1.default.create);
exports.default = router;
//# sourceMappingURL=UserRoutes.js.map