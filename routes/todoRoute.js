"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
let todos = [];
router.get("/", (req, res) => {
    res.json({ todos: todos });
});
router.post("/", (req, res) => {
    const newtodo = {
        id: new Date().toISOString(),
        text: req.body.text,
    };
    todos.push(newtodo);
    res.status(200).json({ newtodo: newtodo, todos: todos });
});
router.post("/delete/:id", (req, res) => {
    const id = req.params.id;
    const todoIndex = todos.findIndex((todoItem) => {
        return todoItem.id === id;
    });
    if (todoIndex >= 0) {
        todos.splice(todoIndex, 1);
        res.status(404).json({ todos });
        return;
    }
    res.status(404).json({ msg: "id not found in todo" });
});
router.put("/update/:id", (req, res) => {
    const id = req.params.id;
    const todoIndex = todos.findIndex((todoItem) => {
        return todoItem.id === id;
    });
    if (todoIndex >= 0) {
        todos[todoIndex] = { id: id, text: req.body.text };
        res.status(404).json({ todos });
        return;
    }
    res.status(404).json({ msg: "id not found in todo" });
});
exports.default = router;
