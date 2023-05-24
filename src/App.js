import "./App.css";
import Header from "./Components/Header";
import React, { useContext, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import AlbumList from "./Components/AlbumList";
import About from "./Pages/About";
import Home from "./Pages/Home/Home";
import ContactUs from "./Pages/ContactUs";
import ProductDetail from "./Pages/ProductDetail";
import Login from "./Pages/Login";
import AuthContext from "./store/auth-context";
import Footer from "./Components/Footer";

const productsArr = [
  {
    id: "a1",
    title: "Round Neck T-Shirts",
    price: 1299,
    quantity: 1,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    id: "a2",
    title: "Printed T-Shirts",
    price: 1599,
    quantity: 1,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    id: "a3",
    title: "Solid Color T-Shirts",
    price: 999,
    quantity: 1,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    id: "a4",
    title: "Half Sleve T-shirts",
    price: 299,
    quantity: 1,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

function App() {
  const [cart, setCart] = useState(false);
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  const productList = productsArr.map((product) => {
    return (
      <AlbumList
        id={product.id}
        title={product.title}
        image={product.imageUrl}
        price={product.price}
        quantity={product.quantity}
      />
    );
  });

  const openCartHandler = () => {
    setCart(true);
  };

  const closeCartHandller = () => {
    setCart(false);
  };


  return (
    <CartProvider>
      <Header onShow={openCartHandler} />
      <main>
        <Switch>
          <Route path="/store" exact>
            {isLoggedIn && (
              <>
                {cart && <Cart onClose={closeCartHandller} />}
                <div className="title">
                  <h1>The Generics</h1>
                </div>
                <h1 className="category">Music</h1>
                <main>{productList}</main>
              </>
            )}
            {!isLoggedIn && <Redirect to="/login" />}
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/contact">
            <ContactUs  />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/store/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
      <Footer/>
    </CartProvider>
  );
}

export default App;
