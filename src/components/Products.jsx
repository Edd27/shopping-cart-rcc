import { Component } from 'react'
import { Grid } from '@mui/material'
import Product from './Product'

const styles = {
  products: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
}

class Products extends Component {
  render() {
    const { products, addToCart } = this.props
    return (
      <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='flex-start'
        spacing={5}
        sx={{ mt: '6rem' }}
      >
        {products.map(product => (
          <Product addToCart={addToCart} key={product.name} product={product} />
        ))}
      </Grid>
    )
  }
}

export default Products
