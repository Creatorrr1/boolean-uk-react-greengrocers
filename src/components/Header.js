import StoreList from './storeList'

function Header(props) {
  return (
    <header id="store">
      <h1>Greengrocers</h1>
      <StoreList store={props.store} addToCart={props.addToCart} />
    </header>
  )
}

export default Header
