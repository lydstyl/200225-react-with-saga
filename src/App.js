import React from 'react';
import { connect } from 'react-redux';

import './App.css';

function App(props) {
  return (
    <div className='App'>
      <button onClick={props.callApi}>Call an api</button>
      <p>{props.txt}</p>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    txt: state.txt
  };
};

const mapDispatchToProps = dispatch => {
  return {
    callApi: () => dispatch({ type: 'CALL_API' })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
