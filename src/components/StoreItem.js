function StoreItem(props) {
  return (
    <li>
      <div className="store--item-icon">
        <img src={`/assets/icons/${props.storeItem.id}.svg`} />
      </div>
      <button onClick={() => props.addToCart(props.storeItem)}>
        Add to cart
      </button>
    </li>
  )
}

export default StoreItem
