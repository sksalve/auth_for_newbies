const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "🔑 🔒"
  });
});



//post route /auth/signup
router.post("/signup", (req, res) => {

    console.log("BODY", req.body)
    res.json({
      message: " ✔️ "
    });
    

  });
  

module.exports = router;
