const router=require('express').Router();
const controller=require('../controllers/categoru');
const upload=require('../middleware/load');
const passport=require('passport');

router.get('/',passport.authenticate('jwt',{session:false}),controller.getAll);
router.get('/:id',passport.authenticate('jwt',{session:false}),controller.getById);
router.delete('/:id',passport.authenticate('jwt',{session:false}),controller.remove);
router.post('/',passport.authenticate('jwt',{session:false}),upload.single('imageSrc'),controller.create);
router.patch('/:id',passport.authenticate('jwt',{session:false}),upload.single('image'),controller.update);


module.exports=router;