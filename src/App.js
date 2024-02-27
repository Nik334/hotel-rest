import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import NavbarIndex from "./components/common/NavbarIndex";
import OnlineOrder from "./pages/OnlineOrder";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/navbar"} element={<NavbarIndex/>}/>
                <Route path="/">
                    <Route index element={<Home/>}/>
                </Route>
                <Route path={"/online-order"} element={<OnlineOrder/>}/>
            </Routes>
        </BrowserRouter>
        // <div className="App">
        //   <header className="App-header">
        //     <img src={logo} className="App-logo" alt="logo" />
        //     <p>
        //       Edit <code>src/App.js</code> and save to reload.
        //     </p>
        //     <a
        //       className="App-link"
        //       href="https://reactjs.org"
        //       target="_blank"
        //       rel="noopener noreferrer"
        //     >
        //       Learn React
        //     </a>
        //   </header>
        // </div>
    );
}

export default App;
