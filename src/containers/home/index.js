import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { incrementAsync, decrementAsync } from '../../modules/counter/actionCreators';

const Home = props => (
  <div>
    <h1>Home</h1>
    <p>Count: {props.count}</p>

    <p>
      <button onClick={(props.incrementAsync)} disabled={props.isIncrementing}>Increment Async</button>
    </p>

    <p>
      <button onClick={props.decrementAsync} disabled={props.isDecrementing}>Decrement Async</button>
    </p>

    <button onClick={() => props.changePage()}>About Us</button>
  </div>
)

const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing
});

const mapDispatchToProps = dispatch => bindActionCreators({
  incrementAsync,
  decrementAsync,
  changePage: () => push('/about-us')
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
