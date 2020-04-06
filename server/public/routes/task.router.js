const express = require('express');
const router = express.Router();
const pool = require('../module/pool')

router.get(("/", (req, res) => {

}));

router.post(("/", (req, res) => {
    const queryString = `INSERT INTO "tasks" ("name", "complete") VALUES ($1, false);`;

    pool.query(queryString, [req.body.name])
        .then((response) => {
            res.sendStatus(201);
        })
        .catch((err) => {
            res.sendStatus(500);
        })
}));

router.put(("/:id", (req, res) => {

}));

router.delete(("/:id", (req, res) => {

}));

module.exports = router;