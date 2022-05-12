import { Component } from 'react'
import { Typography } from '@mui/material'

class Logo extends Component {
  render() {
    return (
      <Typography
        variant='h5'
        component='a'
        href='/'
        sx={{
          flexGrow: 1,
          fontWeight: 700,
          textDecoration: 'none',
          color: 'inherit'
        }}
      >
        Carrito de compras
      </Typography>
    )
  }
}

export default Logo
