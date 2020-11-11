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

    editProduct: (req, res ) => {
        const { name, price, description } = req.body;
        const {id } = req.params;
        const products = req.app.get("products");

        const products = await.db.products.edit_product({
            name,
            price,
            description,
            product_id: id,
        });
        
        res.status(200).send(products);
    },
    deleteProduct: async (req, res ) => {
        const { id } = req.params;
        const db = req.app.get("products");

        const products = await db.products.delete_product([id]);


        res.status(200).send(products);
    },
};