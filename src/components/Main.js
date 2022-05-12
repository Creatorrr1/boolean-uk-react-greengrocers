import CartList from './cartList'

function Main(props) {
  return (
    <main id="cart">
      <h2>Your Cart</h2>
      <CartList
        cart={props.cart}
        increaseQuantity={props.increaseQuantity}
        reduceQuantity={props.reduceQuantity}
      />
      <div className="total-section">
        <div>
          <h3>Total</h3>
        </div>
        <div>
          <span className="total-number">£{props.calculateTotal()}</span>
        </div>
      </div>
    </main>
  )
}

export default Main
