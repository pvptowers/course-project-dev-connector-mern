const express = require("express");
const router = express.Router();

// @router Get api/users
// @desc    Test route
// @access  Auth
router.get("/", (req, res) => res.send("Auth route"));

module.exports = router;
