"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globalErrorHandler = (err, req, res, next) => {
    let message = (err === null || err === void 0 ? void 0 : err.message) || "something went wrong";
    res.status((err === null || err === void 0 ? void 0 : err.status) || 500).json({
        success: false,
        status: (err === null || err === void 0 ? void 0 : err.status) || 500,
        message,
    });
};
exports.default = globalErrorHandler;
