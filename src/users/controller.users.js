const {Router} = require ('express')

const router = Router ()

router.get ('/', (req,res)=>{
    res.render('users')
})
router.post ('/', (req,res) => {

    console.log (req.body)


    res.json({message: 'Usuario creado'})
})  




module.exports = router