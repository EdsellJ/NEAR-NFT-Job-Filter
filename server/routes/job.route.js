const router = require("express").Router();
const job = require("../controllers/job.controller");

router.post("/", job.post);
router.post("/search", job.getAllJobs);
router.get("/skill", job.getAllSkills);
router.get("/type", job.getTypes);

module.exports = router;
