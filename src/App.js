import React, { Component } from 'react'
import { render } from 'react-dom'

import { createStore } from 'redux'
import { connect, Provider } from 'react-redux'

import Counter from './Counter'

// INITIAL STATE
const initialState = {
	count: 0
}

// ACTION TYPES (optional, prevents typos in reducer) 
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

// ACTION CREATOR
const increment = () => ({
	type: INCREMENT
})
const decrement = () => ({
	type: DECREMENT
})


// REDUCER
const reducer = (state = initialState, action) => {

	if(action.type === INCREMENT){
		return {
			count: state.count + 1
		}
	}
	if(action.type === DECREMENT){
		return {
			count: state.count - 1
		}
	}

	return state
}

// STORE
const store = createStore(reducer)


// These don't have to be called this but is standard
const mapStateToProps = (state) => { return state }
const mapDispatchToProps = {
	increment,
	decrement
}
// More verbose way to do above, not necessary anymore
// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		increment() { dispatch(incrementValue()) },
// 		decrement() { dispatch(decrementValue()) }
// 	}
// }


// CONTAINER WRAPPING UP STATE AND PROPS TO SEND TO COMPONENT
const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter) // mapState can be omitted if read-only


// APP
const App = () => {
  

  return (
	    <Provider store={store}>
			<CounterContainer />	    
		</Provider>
  );

};

render(<App />, document.getElementById("root"));