import './App.css';
import React from "react";
import Information from "./components/information";
import Navigation from "./components/navigation";
import MainSide from "./components/main-side";

function App() {
    return (
        <div className="App">
            <Navigation/>
            <MainSide/>
            <Information/>
        </div>
    );
}

export default App;
