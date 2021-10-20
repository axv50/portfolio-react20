import React from "react";
//import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Route path="/projects" component={Projects} />
        <Route path="/home" component={Home} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
