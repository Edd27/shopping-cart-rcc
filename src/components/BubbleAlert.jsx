import { Component } from 'react'
import { Badge } from '@mui/material'

class BubbleAlert extends Component {
  getNumber(n) {
    if (!n) {
      return ''
    }
    return n > 9 ? '9+' : n
  }
  render() {
    const { value } = this.props
    return (
      <Badge
        badgeContent={this.getNumber(value)}
        color='secondary'
        invisible={value === 0}
      >
        {this.props.children}
      </Badge>
    )
  }
}

export default BubbleAlert
