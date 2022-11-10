const Router = require('express').Router;
const router = new Router();
const users = require('../controllers/user.controller');

router.get('/', users.findAll);

module.exports = router;
