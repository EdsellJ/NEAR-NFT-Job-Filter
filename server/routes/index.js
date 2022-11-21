const Router = require("express").Router;
const router = new Router();

const Company = require("./company.route");
const Job = require("./job.route");
const Contract = require("./contract.route");

router.use("/company", Company);
router.use("/job", Job);
router.use("/contract", Contract);

module.exports = router;
