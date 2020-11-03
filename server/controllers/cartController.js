import axios from axios;



// UserCart Controllers // 
        // Logic/Functionality // 
            // • user has personally cart.
            //  • user is able to add products from the store to their cart.
            //  • user can delete items from their cart. 
            //  • user can move items to ' Checkout '. 
            // 
const addToCart = (id) => {
    axios.post(`/api/${id}`)
}

const updateUserCart = (id) => {
    axios.put(`/api/${id}`)
}

const deleteFromCart = (id) => {
    axios.delete(`/`)
}

const updateCart = (id) => {
    axios.get(`api/proudcts${id}`)
}