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

export default function App() {
  const [store] = useState(initialStoreItems)
  const [cart, setCart] = useState([])

  const findItemInCart = storeItem =>
    cart.find(cartItem => cartItem.storeItem === storeItem)

  const addToCart = storeItem => {
    const itemInCart = findItemInCart(storeItem)
    if (itemInCart === undefined) {
      setCart([...cart, { storeItem, quantity: 1 }])
    } else {
      itemInCart.quantity = itemInCart.quantity + 1
      setCart([...cart])
    }
  }

  const increaseQuantity = cartItem => {
    cartItem.quantity = cartItem.quantity + 1
    setCart([...cart])
  }

  const reduceQuantity = cartItem => {
    cartItem.quantity = cartItem.quantity - 1
    if (cartItem.quantity > 0) {
      setCart([...cart])
    } else {
      const newCart = cart.filter(item => item.storeItem !== cartItem.storeItem)
      setCart(newCart)
    }
  }

  function calculateTotal() {
    let total = 0

    for (let i = 0; i < cart.length; i++) {
      let cartItem = cart[i]
      let price = cartItem.storeItem.price * cartItem.quantity
      total = total + price
    }

    return total.toFixed(2)
  }

  // console.log(cart)

  return (
    <>
      <Header
        store={store}
        addToCart={addToCart}
        increaseQuantity={increaseQuantity}
        reduceQuantity={reduceQuantity}
      />

      <Main
        cart={cart}
        increaseQuantity={increaseQuantity}
        reduceQuantity={reduceQuantity}
        calculateTotal={calculateTotal}
      />
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
