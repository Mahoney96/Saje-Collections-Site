const products = require("../../dproducts.json")
let id = products[products.id];


module.exports = {

    getAllProducts = (req, res) => {


    },
    getProducts = (req, res) => {
        console.log(products)
        res.status(200).send(products)
    },

    getProduct = (req, res) => {
        console.log(products/id)
        res.status()
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


// Further EXAMPLE // 

const shoes = require("../shoes-db.json")  
let id = shoes[shoes.length-1].id+1;  //extra becuse of me labeling every id as "1", would hav emade it impossible to use id as the PRIMARY KEY in an actual database or to call correctly in Postman for this

module.exports = {
    getShoes: (req, res) => {
        console.log(shoes)
        res.status(200).send(shoes)
        
    },
    addShoe: (req, res) =>  {
        const{name, img, inventory, description, price} = req.body    // req.body: 
        const newShoe = {                                            // creating the new data for the object function ' addShoe '
            id, name, img, inventory, description, price
        }
        id++
        shoes.push(newShoe)
        res.status(200).send(shoes)
        },

    addShoeAgain: (req, res) => {
        const{name, img, inventory, description, price} = req.body
    },

    getOneShoe: (req, res) => {
        const
    },

    getSavedShoes: (req, res) => {},

};

//  (addShoe) Step-Breakdown:

// 1) Declare the new function and its params: addShoe: (req, res)
// 2) invoke function using arrow function:  =>  // Note: cannot be used as constructors.
// 3) Make object for variable func: write the function/functions were using to make the changes wanted:


// 1) How are we altering the Data
// 2) Where is the data we're handling (the data we're about to do something with)
// 3) What is the function(s) we're using to make those changes to the data

            // // Ex. - functionality that addShoe is adding with the post request:

                // {const{name, img, inventory, description, price} = req.body
                // const newShoe = {
                //     id, name, img, inventory, description, price
                // }
                // id++
                // shoes.push(newShoe)
                // res.status(200).send(shoes)
                // },

            // NOTE:    How the above object function is written in the controller file for this object function:
                        // app.post('/api/shoes', ctrl.addShoe) 

            //WHY:      Do I need reference in both controller file and index file?  
                                    // **YES** :  

            //IN SERVER/INDEX.js File:
                                //  app.get('api/shoes', ctrl/getShoes)
                                        // THE ABOVE IS REFERENCING:
                                        // 1) To the index URL 1st then comma, 
                                        // 2) The ctrl(controller) function in controller.js
                                        // 3) server/index.js acts as a reference to the actual function objects that are in the controller or controller(s) files. 



// FURTHER CRUD REQUEST EXAMPLES: 


let messages = [];
let id = 0;

module.exports = {
    create: (req, res) => {
        const { text, time } = req.body; 
        messages.push({ id, text, time});
        i++;
        res.status(200).send(messages);
    },

    read: (res, res) => {
        res.status(200).send(messages);

    },

    update: (req, res) => {
        const {text } = req.body;
        const updateID = req.params.id;
        const messageIndex = messages.findIndex(message => message.id == updateID);
        let message = messages[messageIndex];

        message[messagesIndex] = {
            id: message.id, text: text,
            time: message.time
        };
    },

    delete: (req, res) => {
        const deleteId = req.params.id;
        const messageIndex = messages.findIndex(messages.id == deleteId);
        messages.splice(messageIndex, 1);
        res.status(200).send(messages);
    }

}


