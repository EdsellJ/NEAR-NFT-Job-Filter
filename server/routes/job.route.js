const router = require("express").Router();
const job = require("../controllers/job.controller");

router.get("/skill", job.getAllSkills);

module.exports = router;
