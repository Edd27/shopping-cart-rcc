import { Component } from 'react'
import { AppBar, Toolbar } from '@mui/material'
import Logo from './Logo'
import Cart from './Cart'

class Navbar extends Component {
  render() {
    const { cart, isCartVisible, showCart, addToCart, removeFromCart, total } =
      this.props
    return (
      <AppBar position='fixed'>
        <Toolbar>
          <Logo />
          <Cart
            cart={cart}
            isCartVisible={isCartVisible}
            showCart={showCart}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            total={total}
          />
        </Toolbar>
      </AppBar>
    )
  }
}

export default Navbar
