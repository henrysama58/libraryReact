import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from "./data";
import BooksInfo from "./pages/BooksInfo";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  const [cart, setCart] = useState([])

  function addToCart(book) {
    const dupeItem = cart.find(item => +item.id === +book.id)
    if(dupeItem) {
      setCart(cart.map(item => {
        if(item.id === dupeItem.id) {
          return {
            ...item,
            quantity: item.quantity + 1
          }
        } else {
          return item
        }
      }))
    } else {
      setCart([...cart, {...book, quantity: 1}])
    }
  }

  useEffect(() => console.log(cart), [cart])

  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/books" exact render={() => <Books books={books} />} />
        <Route path="/books/:id" exact render={() => <BooksInfo books={books} addToCart={addToCart}/>} />
        <Route path="/cart" exact render={() => <Cart books={books} />} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
