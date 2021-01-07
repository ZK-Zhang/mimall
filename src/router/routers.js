import Index from '../pages/index/Index'
import Product from '../pages/product/Product'
import Login from '../pages/login/Login'
import Cart from '../pages/cart/Cart'

export default [{
  path: '/',
  name: 'Index',
  component: Index
}, {
  path: '/product/:id',
  name: 'Product',
  component: Product
}, {
  path: '/login',
  name: 'Login',
  component: Login
}, {
  path: '/cart',
  name: 'Cart',
  component: Cart
}]