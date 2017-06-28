import * as React from 'react';

interface P {
    value: number;
    diff: string;
}

interface D {
    onIncrement,
    onDecrement,
    onSetDiff
}

//class 이용. 컴포넌트에서 라이프사이클 API 를 사용해야 하거나, state 를 사용하는 경우
class Counter extends React.Component<P & D> {
    constructor(props) {
        super(props);

        this.setDiff = this.setDiff.bind(this)
    }

    setDiff(e) {
        this.props.onSetDiff(parseInt(e.target.value));
    }

    render() {
        const {value, diff, onIncrement, onDecrement} = this.props;
        return (
            <div>
                카운터 컴포넌트
                {value}
                <button onClick={onIncrement}>더하기</button>
                <button onClick={onDecrement}>빼기</button>
                <input type="number" defaultValue={diff} onChange={this.setDiff}/>
            </div>
        )
    };
}

export default Counter;


// 함수형 컴포넌트
// 첫 마운팅 속도에 있어서는 7% ~ 11% 빠르다.
// const Counter = (props: P & D) => {
//     const {value, diff, onIncrement, onDecrement, onSetDiff} = props;
//
//     const setDiff = (e) => {
//         onSetDiff(parseInt(e.target.value));
//     };
//
//     return (
//         <div>
//
//             카운터 컴포넌트
//             {value}
//
//             <button onClick={onIncrement}>더하기</button>
//             <button onClick={onDecrement}>빼기</button>
//             <input type="number" defaultValue={diff} onChange={setDiff}/>
//         </div>
//     );
// };
// export default Counter;




