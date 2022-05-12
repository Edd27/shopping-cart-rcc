import { Component } from 'react'
import IconButton from '@mui/material/IconButton'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'

class AddCartButton extends Component {
  render() {
    return (
      <IconButton
        color='primary'
        aria-label='add to shopping cart'
        size='large'
        onClick={this.props.onClick}
      >
        <AddShoppingCartIcon fontSize='inherit' />
      </IconButton>
    )
  }
}

export default AddCartButton
