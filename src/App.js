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

  const addToCart = storeItem => {
    setCart([...cart, { storeItem, quantity: cart.length + 1 }])
    // console.log(storeItem)
  }

  console.log(cart)

  return (
    <>
      <Header store={store} addToCart={addToCart} />

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
