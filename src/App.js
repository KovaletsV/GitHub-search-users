import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import SearchUser from './components/SearchUser';
import UserPage from './components/UserPage';

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Header />
                <Route exact path="/">
                    <SearchUser />
                </Route>
                <Route path="/user/:username">
                    <UserPage />
                </Route>
            </div>
        </BrowserRouter>
    );
}

export default App;
