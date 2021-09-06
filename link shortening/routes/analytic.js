const router=require('express').Router();
const controller=require('../controllers/analitic');

router.get('/overview',controller.overview);
router.get('/analitic',controller.analitic);


module.exports=router;