import React from 'react';
import "./App.css"
import Header from "./modules/Header/Header";
import NavigateBar from "./modules/NavigateBar/NavigateBar";
import Profile from "./modules/Profile/Profile";

function App() {
    return (
        <div className='app-wrapper'>
            <Header/>
            <NavigateBar/>
            <Profile/>
        </div>
    );
}

export default App;
