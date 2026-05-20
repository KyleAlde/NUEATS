import "../styles/components/cart.css"
import CartItem from "./CartItem"

function Cart(props) {
    return (
        <div className="CartContainer">
            <div className="CartHeader">
                <button className="CloseButton" onClick={() => props.onClose(false)}>✕</button>
                <div className="Basket">
                    <h1 id="basket-title">Basket</h1>
                </div>
            </div>
            <hr />
            <div className="CartBody">
                {/* Placeholder cart items until we have backend integration */}
                <CartItem
                    name="Sisig and Rice"
                    price={999}
                    quantity={1}
                />
                <CartItem
                    name="Coca Cola"
                    price={999}
                    quantity={3}
                />
            </div>
            <hr />
            <div className="CartFooter">
                <div className="Price">
                    <p id="price-label">Price:</p>
                </div>
                <button className="CheckoutButton">Checkout</button>
            </div>
        </div>
    )
}

export default Cart;