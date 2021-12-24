"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var index_1 = __importDefault(require("./routes/index"));
var app = (0, express_1.default)();
var port = 3000;
app.get('/', function (req, res) {
    res.status(200).send('Please visit api/images and type your image URL with the width and Length for image');
});
app.listen(port, function () {
    console.log("server started at http://localhost:".concat(port, "/api"));
});
app.use('/api', index_1.default);
exports.default = app;
