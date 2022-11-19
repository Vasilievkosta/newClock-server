const Router = require('express');
const router = new Router();

const masterRouter = require('./masterRouter');
const cityRouter = require('./cityRouter');

router.use('/master', masterRouter);
router.use('/city', cityRouter);

module.exports = router;