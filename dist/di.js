"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const winston = __importStar(require("winston"));
const winstonLogger_1 = require("./services/winstonLogger");
let LOGGING_FORMAT = "CLI";
let transport;
if (LOGGING_FORMAT == "CLI") {
    transport = new winston.transports.Console({
        format: winston.format.combine(winston.format.cli())
    });
}
else {
    transport = new winston.transports.Console();
}
const libLogger = winston.createLogger({
    transports: transport
});
exports.logger = new winstonLogger_1.WinstonLogger("SERVICE_NAME", libLogger);
