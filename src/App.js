import './styles/reset.css'
import './styles/index.css'

import initialStoreItems from './store-items'

import Header from './components/Header'
import Main from './components/Main'
import { useState } from 'react'

/*
Here's what a store item should look like
{
  id: '001-beetroot',
  name: 'beetroot',
  price: 0.35
}

What should a cart item look like? 🤔
*/

console.log(initialStoreItems)

export default function App() {
  // Setup state here...
  const [store] = useState(initialStoreItems)
  const [cart, setCart] = useState([])

  const findItem = cartItem => cart.find(item => cartItem.id === item.id)

  const addToCart = storeItem => {
    // finds the item then alters its quantity but adds to cart if not found
    // to not change everything in the cart the other items needs to be filtered
    // then add the changed item and the filtered items
    // setCart([...cart, { storeItem, quantity: cart.length + 1 }])
    if (!findItem(storeItem.id)) {
      setCart([...cart, { storeItem, quantity: 1 }])
    }
    // console.log(storeItem)
  }

  const increaseQuantity = cartItem => {
    // const foundItem = cart.find(item => cartItem.id === item.id)
    const foundItem = findItem(cartItem.id)
    const notMatchingItems = cart.filter(item => cart.id !== item.id)
    const increasedItem = { ...foundItem, quantity: foundItem.id++ }
    setCart([...cart, { ...increasedItem, notMatchingItems }])
  }

  const reduceQuantity = cartItem => {
    // const foundItem = cart.find(item => cartItem.id === item.id)
    const foundItem = findItem(cartItem.id)
    const notMatchingItems = cart.filter(item => cart.id !== item.id)
    const decreasedItem = { ...foundItem, quantity: foundItem.id-- }
    setCart([...cart, { ...decreasedItem, notMatchingItems }])
  }

  console.log(cart)

  return (
    <>
      <Header
        store={store}
        addToCart={addToCart}
        increaseQuantity={increaseQuantity}
        reduceQuantity={reduceQuantity}
      />

      <Main cart={cart} />
      <div>
        Icons made by
        <a
          href="https://www.flaticon.com/authors/icongeek26"
          title="Icongeek26"
        >
          Icongeek26
        </a>
        from
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </>
  )
}
