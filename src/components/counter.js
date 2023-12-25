import React from "react";
import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
import * as actions from '../actions';

const Counter = ({counter, inc, dec, rnd, res}) => {
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={dec} className="btn btn-primary">DEC</button>
      <button onClick={inc} className="btn btn-dark">INC</button>
      <button onClick={rnd} className="btn btn-danger">RND</button>
      <button onClick={res} className="btn btn-info">RESTART</button>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    counter: state
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators(actions, dispatch);
// }
export default connect(mapStateToProps, actions)(Counter);