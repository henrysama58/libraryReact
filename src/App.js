import Nav from "./components/Nav";
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from "./data";
import BooksInfo from "./pages/BooksInfo";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/books" exact render={() => <Books books={books} />} />
        <Route path="/books/:id" exact render={() => <BooksInfo books={books} />} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
