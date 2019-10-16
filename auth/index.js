const express = require("express");
const router = express.Router();
const Joi = require("joi");
const db = require("../db/connection");

const users = db.get("users");

// users.index("username");
users.createIndex("username", {
    unique: true
});

const schema = Joi.object().keys({
    username: Joi.string()
        .regex(/(^[a-zA-Z0-9_]*$)/)
        .min(3)
        .max(30)
        .required(),
    password: Joi.string()
        .min(6)
        .required()
});

router.get("/", (req, res) => {
    res.json({
        message: "🔑 🔒"
    });
});

//post route /auth/signup
router.post("/signup", (req, res, next) => {
    console.log("BODY", req.body);
    const result = Joi.validate(req.body, schema);
    if (result.error === null) {
        users.findOne({
            username: req.body.username
        }).then(user => {
            res.json({
                user
            });
        });
    } else {
        next(result.error);
    }

    res.json(result);
});

module.exports = router;