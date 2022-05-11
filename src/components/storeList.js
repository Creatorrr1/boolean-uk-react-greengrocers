import StoreItem from './StoreItem'

function StoreList(props) {
  return (
    <ul className="item-list store--item-list">
      {props.store.map((storeItem, index) => (
        <StoreItem
          key={index}
          storeItem={storeItem}
          addToCart={props.addToCart}
        />
      ))}
    </ul>
  )
}

export default StoreList
