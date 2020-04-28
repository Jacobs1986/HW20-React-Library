import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Books from "./components/pages/BookList";

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Route exact path="/" component={Books} />
            </div>
        </Router>
    )
}

export default App;