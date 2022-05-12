import { Component } from 'react'
import BubbleAlert from './BubbleAlert'
import CartDetails from './CartDetails'
import { IconButton, Tooltip } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

class Cart extends Component {
  render() {
    const { cart, isCartVisible, showCart, addToCart, removeFromCart, total } =
      this.props
    const quantity = cart.reduce((acc, x) => acc + x.quantity, 0)
    return (
      <div>
        <Tooltip title='Carrito de compras'>
          <IconButton size='large' color='inherit' onClick={showCart}>
            <BubbleAlert value={quantity}>
              <ShoppingCartIcon />
            </BubbleAlert>
          </IconButton>
        </Tooltip>
        <CartDetails
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          showCart={showCart}
          isCartVisible={isCartVisible}
          total={total}
        />
      </div>
    )
  }
}

export default Cart
