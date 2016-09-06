import React from 'react'
import Counter from '../Counter'

export const CounterFactory = (props) => (
  <div>
    <button className="btn btn-default" onClick={props.addCounter}>New Counter</button>
    {props.counters.map((counter, idx)=>{
        return (<Counter counter={counter.counter} increment={props.increment.bind(this, idx)} key={idx}></Counter>) 
    })}
    
  </div>
)

CounterFactory.propTypes = {
  counters    : React.PropTypes.array.isRequired,
  increment   : React.PropTypes.func.isRequired
}

export default CounterFactory
