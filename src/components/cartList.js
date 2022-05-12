import CartItem from './cartItem'
// import initialStoreItems from '..store-items'

function CartList(props) {
  // const [cart, setCart] = useState([])

  return (
    <div className="cart--item-list-container">
      <ul className="item-list cart--item-list">
        {props.cart.map((cartItem, index) => (
          <CartItem
            key={index}
            cartItem={cartItem}
            increaseQuantity={props.increaseQuantity}
            reduceQuantity={props.reduceQuantity}
          />
        ))}
      </ul>
    </div>
  )
}

export default CartList
