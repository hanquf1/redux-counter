import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/app';
import './index.css';

import {store} from './store'

//store 와 reactApp 을 연결 하위 컴포넌트에 store 내려준다.
//하위 컴포넌트에 직접 store 내리지 않고 connect만으로 store에 연결이 가능하다.
import {Provider} from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root') as HTMLElement
);
