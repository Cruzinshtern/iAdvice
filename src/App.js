import './App.css';
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import {useState} from "react";

function App() {
    const [toDo, setToDo] = useState('');

    return (
        <div className="App">
            <Header setToDo={setToDo}/>
            <Homepage toDo={toDo} setToDo={setToDo}/>
        </div>
    );
}

export default App;
