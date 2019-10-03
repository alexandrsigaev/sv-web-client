import React from 'react';
import "./App.css"
import Header from "./modules/Header/Header";
import NavigateBar from "./modules/NavigateBar/NavigateBar";
import Profile from "./modules/Profile/Profile";
import Dialogs from "./modules/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div>
                {/*<div className={'app-wrapper-top-head'}>*/}
                {/*</div>*/}
                <div className='app-wrapper'>
                    <Header/>
                    <NavigateBar/>
                    <div className={'app-wrapper-content'}>
                        <Route path='/profile' component={Profile}/>
                        <Route path='/ms' component={Dialogs}/>
                        <Route path='/news' component={Profile}/>
                        <Route path='/music' component={Profile}/>
                        <Route path='/settings' component={Profile}/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
