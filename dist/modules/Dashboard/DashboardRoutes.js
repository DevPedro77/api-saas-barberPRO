"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ListController_1 = __importDefault(require("../Dashboard/useCases/ListDashboard/ListController"));
const router = (0, express_1.Router)();
router.get("/dashboard", ListController_1.default.handle);
exports.default = router;
//# sourceMappingURL=DashboardRoutes.js.map