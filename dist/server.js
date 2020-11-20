"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 3000;
app.get('/', (_req, res) => {
    res.json({ API: 'Hello, World!' });
});
console.log('Hello, World!');
app.listen(port, () => {
    `Listening on port ${port}`;
});
//# sourceMappingURL=server.js.map