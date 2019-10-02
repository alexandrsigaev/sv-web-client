import React from 'react';
import "./App.css"
import Header from "./modules/Header";
import NavigateBar from "./modules/NavigateBar";
import Profile from "./modules/Profile";

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
