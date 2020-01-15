import React, { Component } from 'react'
import { render } from 'react-dom'

// COMPONENT
class Counter extends Component {

	render(){

		console.log(this.props)

		const {count, increment, decrement} = this.props

		return(
			<div>
				<p className="count">{count}</p>
				<button onClick={increment}>Increment</button>
				<button onClick={decrement}>Decrement</button>
			</div>
		)
	}
}

export default Counter