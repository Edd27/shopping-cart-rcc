import { Component } from 'react'
import {
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from '@mui/material'
import AddCartButton from './AddCartButton'

class Product extends Component {
  render() {
    const { product, addToCart } = this.props
    return (
      <Grid item xs={12} sm={6} md={4} sx={{ height: '100%' }}>
        <Card sx={{ borderRadius: '15px', overflow: 'hidden', height: '100%' }}>
          <CardMedia component='img' alt={product.name} image={product.img} />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              {product.name}
            </Typography>
            <Typography variant='h5' color='text.secondary'>
              {new Intl.NumberFormat('es-MX', {
                currency: 'MXN',
                style: 'currency'
              }).format(parseFloat(product.price))}
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: 'end' }}>
            <AddCartButton onClick={() => addToCart(product)} />
          </CardActions>
        </Card>
      </Grid>
    )
  }
}

export default Product
