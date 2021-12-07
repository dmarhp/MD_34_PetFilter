import React from 'react';
import './App.scss';
import {AddAnimal} from "./components/AddAnimal/AddAnimal";
import {AnimalGallery} from "./components/AnimalGallery/AnimalGallery";
import {Header} from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import {AddLang} from "./components/AddLang/AddLang";

function App() {
    return (
        <div className="App">
            <Header/>

            <Routes>
                <Route path={"/"} element={<AnimalGallery/>}/>
                <Route path={"/addNew"} element={<AddAnimal/>}/>
                <Route path={"/addLang"} element={<AddLang/>}/>
            </Routes>
        </div>
    );
}

export default App;
