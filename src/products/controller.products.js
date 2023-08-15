const { Router } = require('express')
const router = Router()
// const productManager= require ('../Products/productManager')



router.get('/', (req, res) => {

    // const products= productManager.getproducts(productManager)
    // return res.json({ message: products })

    res.render('products.handlebars')
})

router.get('/products/:name', (req, res) => {
    const { name } = req.params
    const product = product.find(user => user.name === name)

    res.json({ message: product })
})

router.put('/products/:name', (req, res) => {
    const { name } = req.params
    const product = product.find(user => user.name === name)


    res.json({ message: product })
})

router.post('/products', (req, res) => {
    const { name, price } = req.body

    const userInfo = {
        name,
        price,
    }
    product.push(userInfo)

    res.json({ message: 'Producto creado' })
})

router.delete('/products/:name', (req, res) => {
    const { name } = req.params
    const productIndex = product.findIndex(user => user.name === name)

    users.splice(productIndex, 1)

    res.json({ message: products })
})





module.exports = router






// router.get ('/products', (req, res) => {
//     // const {id} =req.params
//     // const product = products.find (product.id === Number (id))
//     res.render ('products')

// })
// router.post ('/', (req,res) => {

//     console.log (req.body)


//     res.json({message: 'Prodcuto agregado'})
// })


// router.put ('/:pid', (req, res) => {
//     console.log (req.body)
//     res.json({message: 'update product'})

// })
// router.delete ('/:pid', (req, res) => {
//     res.json ({message: `delete product $ {req.params.pid} `})

// })







// const router = Router ()

// router.get ('/products', (req,res) =>{
//     res.render ('products.handlebars')
// })


// router.get ('/', (req,res)=>{
//     res.render('products')
// })
// router.post ('/', (req,res) => {

//     console.log (req.body)


//     res.json({message: 'Prodcuto agregado'})
// })



// module.exports = router