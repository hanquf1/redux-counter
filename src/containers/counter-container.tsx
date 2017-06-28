import Counter from '../components/counter';
import {increment, decrement, setDiff} from '../modules/counter'
import {connect} from 'react-redux';

const mapStateToProps = state => {
    const {value, diff} = state.counter;
    return {value, diff};
};
const mapDispatchToProps = dispatch => ({
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
    onSetDiff: (value) => dispatch(setDiff(value))
});

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);
export default CounterContainer;




//
//
//
// import Counter from '../components/counter';
// import {increment, decrement, setDiff} from '../modules/counter'
// import {connect} from 'react-redux';
// import * as React from 'react';
//
//
//
// const component = (props) => {
//     const {value, diff, onIncrement, onDecrement, onSetDiff} = props;
//
//     return (
//         <div>
//             카운터 컨테이너컴포넌트
//             <Counter value={value}
//                      diff={diff}
//                      onIncrement={onIncrement}
//                      onDecrement={onDecrement}
//                      onSetDiff={onSetDiff}/>
//         </div>
//     );
// };
//
// const mapStateToProps = state => {
//     const {value, diff} = state.counter;
//     return {value, diff};
// };
// const mapDispatchToProps = dispatch => ({
//     onIncrement: () => dispatch(increment()),
//     onDecrement: () => dispatch(decrement()),
//     onSetDiff: (value) => dispatch(setDiff(value))
// });
//
// const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(component);
// export default CounterContainer;
//
//
