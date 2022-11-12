const Router = require('express').Router;
const router = new Router();

const Company = require('./company.route');

router.use('/company', Company);

module.exports = router;
