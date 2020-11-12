const products = require("../../dproducts.json")
let id = products[products.id];


module.exports = {
    getProducts = (req, res) => {
        console.log(products)
        res.status(200).send(products)
    },

    addProduct: (req, res) => {
        const {name, img, inventory, description, price} = req.body
        const newProduct = {
            id, name, img, inventory, description, price
        }
        id++
        products.push(newProduct)
        res.status(200).send(products)
    },

    editProduct: (req, res, next ) => {
        const { name, price, description } = req.body;
        const {id } = req.params;
        const products = req.app.get("products");

        const products = await.db.products.edit_product({
            name,
            price,
            description,
            product_id: id,
        });
        console.log(`You edited product ${id}, and made ${edit_product}`) 
            //logic behind console.log => Using ' next ' function to allow admin to see changes made to the product when rquesting change//
        next();
        
        res.status(200).send(products.next); // Show the admin changes in console(will need to render changes after onto DOM, eventually)
    },
    deleteProduct: async (req, res ) => {
        const { id } = req.params;
        const db = req.app.get("products");

        const products = await db.products.delete_product([id]);


        res.status(200).send(products);
    },
};