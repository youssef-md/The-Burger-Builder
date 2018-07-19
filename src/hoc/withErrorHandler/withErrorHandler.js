import React, { Fragment } from 'react'
import Modal from '../../components/UI/Modal/Modal'

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends React.Component { //returning a class
    
    state = {
      error: null
    }

    componentWillMount() {
      axios.interceptors.request.use(request => {
        this.setState({error: null})
        return request
      })

      axios.interceptors.response.use(response => response, error => {
        this.setState({error: true})
      })
    }
    
    render() {

      return (
        <Fragment>
          <Modal show = {this.state.error} modalClose = {this.dismissError}>
            Something didn't work
            {this.state.error ? this.state.error : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Fragment>
      )
    }

    dismissError = () => {
      this.setState({error: null})
    }
  }
}

export default withErrorHandler