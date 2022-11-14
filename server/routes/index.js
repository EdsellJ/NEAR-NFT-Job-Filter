const Router = require("express").Router;
const router = new Router();

const Company = require("./company.route");
const Job = require("./job.route");

router.use("/company", Company);
router.use("/job", Job);

module.exports = router;
