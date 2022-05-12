import { Component } from 'react'
import {
  Box,
  Drawer,
  List,
  Divider,
  ListItem,
  Avatar,
  ListItemText,
  ListItemAvatar,
  IconButton,
  Stack,
  Typography
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule'

const list = (cart, addToCart, removeFromCart, total) => (
  <Box sx={{ width: 500, height: '100%' }} role='presentation'>
    <Stack
      sx={{ height: '100%' }}
      direction='column'
      justifyContent='space-between'
      spacing={2}
    >
      <List>
        {cart.map(product => (
          <div key={product.name}>
            <ListItem
              secondaryAction={
                <Stack direction='row' spacing={2} alignItems='center'>
                  <IconButton
                    aria-label='decrement'
                    onClick={() => removeFromCart(product)}
                  >
                    <HorizontalRuleIcon />
                  </IconButton>
                  <Typography>{product.quantity}</Typography>
                  <IconButton
                    aria-label='increment'
                    onClick={() => addToCart(product)}
                  >
                    <AddIcon />
                  </IconButton>
                </Stack>
              }
            >
              <ListItemAvatar>
                <Avatar alt={product.name} src={product.img}></Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={product.name}
                secondary={new Intl.NumberFormat('es-MX', {
                  currency: 'MXN',
                  style: 'currency'
                }).format(parseFloat(product.price))}
              />
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
      <Stack
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        spacing={2}
        sx={{ p: '30px' }}
      >
        <Typography variant='h3'>Total</Typography>
        <Typography variant='h4'>
          {new Intl.NumberFormat('es-MX', {
            currency: 'MXN',
            style: 'currency'
          }).format(total)}
        </Typography>
      </Stack>
    </Stack>
  </Box>
)

class CartDetails extends Component {
  render() {
    const { cart, addToCart, removeFromCart, showCart, isCartVisible, total } =
      this.props
    return (
      <Drawer anchor='right' open={isCartVisible} onClose={showCart}>
        {list(cart, addToCart, removeFromCart, total)}
      </Drawer>
    )
  }
}

export default CartDetails
