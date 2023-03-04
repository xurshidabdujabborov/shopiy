import React from "react";
import Bottom from "./Components/Bottom/Bottom";
import Center from "./Components/Center/Center";
import Contact from "./Components/Contact/Contact";
import Navbar from "./Components/Navbar/Navbar";
import Product from "./Components/Product/Product";
import Storis from "./Components/Storis/Storis";
import Footer from "./pages/Footer/Footer";
import Header from "./pages/Header/Header";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Storis />
      <Center />
      <Product />
      <Bottom />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
