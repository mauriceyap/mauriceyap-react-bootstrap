import React from 'react';
import {connect} from 'react-redux';
import { Grid, Row, Col, Button } from 'react-bootstrap';

import { selectBar, selectFoo } from "../reduxStore/selectors";
import { incrementCounter, decrementCounter } from "../foo/reducer";
import { getBarData } from '../bar/reducer';

// TODO: rename this file
function App({ foo: { counter }, bar: { data }, increment, decrement, getBarData }) {
  getBarData();
  return (
    <Grid>
      <Row>
        <Col xs={4}>
          <Button onClick={decrement}>-</Button>
        </Col>
        <Col xs={4}>
          {counter} {data}
        </Col>
        <Col xs={4}>
          <Button onClick={increment}>+</Button>
        </Col>
      </Row>
    </Grid>
  );
}

function mapStateToProps(state) {
  return {
    foo: selectFoo(state),
    bar: selectBar(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increment() {
      dispatch(incrementCounter())
    },
    decrement() {
      dispatch(decrementCounter())
    },
    getBarData() {
      dispatch(getBarData())
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
