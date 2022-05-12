import { Component } from 'react'
import { Container } from '@mui/material'

class Layout extends Component {
  render() {
    return (
      <Container
        sx={{ backgroundColor: '#FFF', color: '#0A283E', pb: '100px' }}
      >
        {this.props.children}
      </Container>
    )
  }
}

export default Layout
