import React from 'react';
import "./App.css"
import Header from "./modules/Header/Header";
import NavigateBar from "./modules/NavigateBar/NavigateBar";
import Profile from "./modules/Profile/Profile";

function App() {
    return (
        <div>
            <div className={'top__head'}>
            </div>
            <div className='app-wrapper'>
                <Header/>
                <NavigateBar/>
                <Profile/>
            </div>
        </div>
    );
}

export default App;
