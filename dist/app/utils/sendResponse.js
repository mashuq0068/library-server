"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendResponse = (res, responseData) => {
    res.status(responseData.status).json(Object.assign(Object.assign({ success: responseData === null || responseData === void 0 ? void 0 : responseData.success, status: responseData === null || responseData === void 0 ? void 0 : responseData.status, message: responseData === null || responseData === void 0 ? void 0 : responseData.message }, (responseData.meta ? { meta: responseData.meta } : {})), (responseData.data ? { data: responseData.data } : {})));
};
exports.default = sendResponse;
