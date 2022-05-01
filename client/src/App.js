import React from 'react';
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
// import NavBar from "./components/NavBar/NavBar";
import {Route, BrowserRouter, Routes } from "react-router-dom";

// import './index.css';
import {Container} from "@material-ui/core";

const App = () => (
    <BrowserRouter>
        <Container maxWidth="lg">
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/auth" exact element={<Auth />} />
            </Routes>
        </Container>
    </BrowserRouter>
);

export default App;