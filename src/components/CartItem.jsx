import "../styles/components/cart.css"

function CartItem(props) {
    return (
        <div className="CartItem">
            <div className="QuantityDiv Itemdiv">
                <button className="QuantityButton">
                    -
                </button>
                <p className="Quantity">{props.quantity}</p>
                <button className="QuantityButton">
                    +
                </button>
            </div>
            <div className="ItemNameDiv Itemdiv">
                <p className="ItemName">{props.name}</p>
            </div>
            <div className="ItemPriceDiv Itemdiv">
                <p className="ItemPrice">₱{props.price.toFixed(2)}</p>
            </div>
        </div>
    )
}

export default CartItem;