import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { AddProduct } from "./components/AddProduct";
export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/addproducts" component={AddProduct} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
