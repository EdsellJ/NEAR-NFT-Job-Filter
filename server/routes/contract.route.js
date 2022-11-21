const router = require("express").Router();
const contract = require("../controllers/contract.controller");

router.post("/getNFTs", contract.getNFTs);

module.exports = router;
