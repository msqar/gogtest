import React from 'react';
import Header from './components/Header/Header';
import HomeView from './views/HomeView/HomeView';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header></Header>
                <HomeView></HomeView>
            </div>
        );
    }
}

export default App;
