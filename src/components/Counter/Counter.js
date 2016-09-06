import React from 'react'
import classes from './Counter.scss'

export const Counter = (props) => (
  <div>
    <h2 className={classes.counterContainer}>
      Counter:
      {' '}
      <span className={classes['counter--green']}>
        {props.counter}
      </span>
    </h2>
    <button className='btn btn-default' onClick={props.increment}>
      Increment
    </button>
  </div>
)

Counter.propTypes = {
  counter     : React.PropTypes.number.isRequired,
  // doubleAsync : React.PropTypes.func.isRequired,
  increment   : React.PropTypes.func.isRequired,
  // decrement   : React.PropTypes.func.isRequired,
  // reset       : React.PropTypes.func.isRequired
}

export default Counter
