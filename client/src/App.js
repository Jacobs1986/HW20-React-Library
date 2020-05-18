import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import BookList from "./pages/booklist"
import Search from "./pages/search"
import Navbar from "./components/Navbar"

// Bootstrap
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={BookList} />
      <Route exact path="/search" component={Search} />
    </Router>
  );
}

export default App;
