const router = require("express").Router();
const company = require("../controllers/company.controller");

router.post("/", company.register);
router.get("/", company.getAllCompanies);
router.get("/industry", company.getIndustries);
router.get("/size", company.getCompanySizes);

module.exports = router;
