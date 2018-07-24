import React, { Fragment } from 'react';
import styles from './Modal.css'
import Backdrop from '../Backdrop/Backdrop'

class Modal extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    //update only if the user clicked in the Order button
    return this.props.show !== nextProps.show  || this.props.children !== nextProps.children 
  }

  componentDidUpdate() {
    console.log('Modal updated')
  }

  render() {
    const inlineStyle = {
      transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
      opacity: this.props.show ? '1' : '0'
    }

    return (
      <Fragment>
        <Backdrop show = { this.props.show } click = {this.props.modalClose}/>
        <div 
          className = { styles.Modal }
          style = { inlineStyle }> 
              { this.props.children } 
        </div>
      </Fragment>
    )
  }
}


export default Modal