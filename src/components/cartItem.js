function CartItem(props) {
  // const [cartItem, setCartItem] = useState([])
  return (
    <li>
      <img
        className="cart--item-icon"
        src={`assets/icons/${props.cartItem.storeItem.id}.svg`}
        alt={props.cartItem.storeItem.name}
      />
      <p>{props.cartItem.storeItem.name}</p>
      <button
        className="quantity-btn remove-btn center"
        onClick={() => props.reduceQuantity(props.cartItem)}
      >
        -
      </button>
      <span className="quantity-text center">{props.cartItem.quantity}</span>
      <button
        className="quantity-btn add-btn center"
        onClick={() => props.increaseQuantity(props.cartItem)}
      >
        +
      </button>
    </li>
  )
}

export default CartItem
