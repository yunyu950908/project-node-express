const express = require("express");
const router = express.Router();
const Note = require("../model/note").Note;

/* GET /notes */
router.get("/notes", (req, res, next) => {
    console.log("notes")
});

/* POST /notes/add */
router.post("/notes/add", (req, res, next) => {
    console.log("add...")
});

/* POST /notes/edit */
router.post("/notes/edit", (req, res, next) => {
    console.log("edit...")
});

/* POST /notes/delete */
router.POST("/notes/delete", (req, res, next) => {
    console.log("delete")
});

module.exports = router;