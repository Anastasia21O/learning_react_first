import logo from './logo.svg';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import General from './pages/general/General'
import './App.css';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<General/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
