


module.exports = {

    render() {
        return (
            <div>
                <h1> Guest-User Cart </h1>
                <ShoppingCart   cart= { this.state.cart } onItemRemove= { this.removeCartItem } onItemChangeQty={ this.changeCartItemQty } />
                <ShippingInfo  cart= {this.state.cart  } address={ this.state.userShippingaddress }/>
                <BuyNowButton   cart= {this.state.cart  } onBuyClck= {this.cartPurchased } />
            </div>
        );
    }

}
;