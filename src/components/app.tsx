import * as React from 'react';
import CounterContainer from '../containers/counter-container'

class App extends React.Component<{}, {}> {
    render() {
        return (
            <div className="App">
                app이다.
                <CounterContainer/>
            </div>
        );
    }
}

export default App;

