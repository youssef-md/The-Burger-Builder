import React, { Component } from 'react';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { connect } from 'react-redux'
import './Counter.css'
import * as actionCreators from '../../store/actions/actions'

class Counter extends Component {
	state = {
			counter: 0
	}

	counterChangedHandler = ( action, value ) => {
			switch ( action ) {
					case 'inc':
							this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
							break;
					case 'dec':
							this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
							break;
					case 'add':
							this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
							break;
					case 'sub':
							this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
							break;
			}
	}

	render () {
			return (
					<div>
							<CounterOutput value={this.props.counter} />
							<CounterControl label="Increment" clicked={ this.props.onIncrementCounter } />
							<CounterControl label="Decrement" clicked={ this.props.onDecrementCounter }  />
							<CounterControl label="Add 10" clicked={ this.props.onAddCounter }  />
							<CounterControl label="Subtract 10" clicked={ this.props.onSubtract }  />
							<hr/>
							<button className="btn_store_result" 
											onClick={() => this.props.onStoreResult(this.props.counter)}>Store Result</button>

							<ul>
								{this.props.storedResults.map(storedResult => (
									<li className="Result" 
											key={ storedResult.id } 
											onClick={() => this.props.onDeleteResult(storedResult.id)}>
										{ storedResult.value }
									</li>
								))}
							</ul>
					</div>
			);
	}
}

const mapStateToProps = state => {
	return {
			counter: state.counterReducer.counter,
			storedResults: state.resultReducer.results      
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onIncrementCounter: () => dispatch( actionCreators.increment() ),
		onDecrementCounter: () => dispatch( actionCreators.decrement() ),
		onAddCounter: () => dispatch( actionCreators.add(10) ),
		onSubtract: () => dispatch( actionCreators.subtract(10) ),
		onStoreResult: (result) => dispatch( actionCreators.storeResult(result) ),
		onDeleteResult: (id) => dispatch( actionCreators.deleteResult(id) )
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);