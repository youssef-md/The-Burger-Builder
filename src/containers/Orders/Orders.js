import React from 'react';
import Order from '../../components/Order/Order'
import axios from '../../axios-orders'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import styles from './Orders.css'
import Spinner from '../../components/UI/Spinner/Spinner'

class Orders extends React.Component {

  state = {
    orders: [],
    loading: true,
  }

  componentDidMount() {
    axios.get('orders.json').then(response => {      
      
      const fetchedOrders = []
      for(let key in response.data) {
        fetchedOrders.push({
          ...response.data[key],
          id: key
        })
      }
      console.log(fetchedOrders)
      this.setState({ loading: false, orders: fetchedOrders })
    }).catch(err => {
      this.setState({ loading: false })
    })
  }

  render() {
    return(
      <div>
        {this.renderOrdersHandler()}
      </div>
    )
  }

  renderOrdersHandler = () => {
    if(!this.state.loading) {
      if(this.state.orders.length > 0) {
        return this.state.orders.map(order => (
          <Order key = { order.id } ingredients = { order.ingredients } price = { order.price }/>
        ))
      }else {
        return <h1 className = { styles.NoOrders }>There is no orders</h1>
      }
    } else {
      return <Spinner/>
    }
  }
}

export default withErrorHandler(Orders, axios)