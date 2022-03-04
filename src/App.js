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
    setCart([...cart, {...book, quantity: 1}])
  }

  function removeBook(item) {
    setCart(cart.filter(book => book.id !== item.id))
  }

  function changeQuantity(book, quantity) {
    setCart(cart.map(item => item.id === book.id ? {...item, quantity: +quantity} : item))
  }

  function numberOfItems() {
    let counter = 0;
    cart.forEach(item => {
      counter += item.quantity
    })
    return counter;
  }

  return (
    <Router>
      <div className="App">
        <Nav numberOfItems={numberOfItems()} />
        <Route path="/" exact component={Home} />
        <Route path="/books" exact render={() => <Books books={books} />} />
        <Route path="/books/:id" exact render={() => <BooksInfo books={books} addToCart={addToCart} cart={cart}/>} />
        <Route path="/cart" exact render={() => <Cart removeBook={removeBook} books={books} cart={cart} changeQuantity={changeQuantity} /> }/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
