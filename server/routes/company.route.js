const router = require('express').Router();
const company = require('../controllers/company.controller');

router.get('/type', company.getCompanyTypes);
router.get('/size', company.getCompanySizes);

module.exports = router;
