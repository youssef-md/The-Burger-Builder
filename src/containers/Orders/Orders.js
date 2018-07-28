import React from 'react';
import Order from '../../components/Order/Order'
import axios from '../../axios-orders'

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
        <Order/>
        <Order/>
      </div>
    )
  }
}

export default Orders