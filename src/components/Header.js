import StoreList from './storeList'

function Header () {
    return (
        <header id="store">
        <h1>Greengrocers</h1>
        <StoreList/>
        {/* <ul className="item-list store--item-list"> */}
            {/* {initialStoreItems.map((storeItem, index) => (
                <StoreList
                key={index}
                storeItem={storeItem}/>
            ))} */}
          {/* Wrtite some code here... */}
        {/* </ul> */}
      </header>
    )
}

export default Header