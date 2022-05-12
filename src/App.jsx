import { Component } from 'react'
import Products from './components/Products'
import Layout from './components/Layout'
import Navbar from './components/Navbar'

class App extends Component {
  state = {
    products: [],
    cart: [],
    isCartVisible: false,
    total: 0
  }

  addToCart = product => {
    const { cart, total } = this.state
    if (cart.find(x => x.name === product.name)) {
      const newCart = cart.map(x =>
        x.name === product.name ? { ...x, quantity: x.quantity + 1 } : x
      )
      const newTotal = newCart.reduce(
        (acc, x) => acc + parseFloat(x.price) * x.quantity,
        0
      )
      return this.setState({
        cart: newCart,
        total: newTotal,
        isCartVisible: true
      })
    }
    const newTotal = total + parseFloat(product.price)
    return this.setState({
      cart: this.state.cart.concat({
        ...product,
        quantity: 1
      }),
      total: newTotal,
      isCartVisible: true
    })
  }

  removeFromCart = product => {
    const { cart } = this.state
    if (cart.find(x => x.name === product.name)) {
      const newCart = cart
        .map(x =>
          x.name === product.name ? { ...x, quantity: x.quantity - 1 } : x
        )
        .filter(x => x.quantity > 0)

      if (newCart.length === 0) {
        this.setState({ isCartVisible: false })
      }

      const newTotal = newCart.reduce(
        (acc, x) => acc + parseFloat(x.price) * x.quantity,
        0
      )
      return this.setState({
        cart: newCart,
        total: newTotal
      })
    }
  }

  showCart = () => {
    if (!this.state.cart.length) return
    this.setState({ isCartVisible: !this.state.isCartVisible })
  }

  componentDidMount() {
    fetch('https://627d3d1fbf2deb7174ea20c6.mockapi.io/api/v1/products')
      .then(res => res.json())
      .then(data => this.setState({ products: data }))
  }

  render() {
    const { isCartVisible, total } = this.state

    return (
      <>
        <Navbar
          cart={this.state.cart}
          isCartVisible={isCartVisible}
          showCart={this.showCart}
          addToCart={this.addToCart}
          removeFromCart={this.removeFromCart}
          total={total}
        />
        <Layout>
          <Products addToCart={this.addToCart} products={this.state.products} />
        </Layout>
      </>
    )
  }
}

export default App
