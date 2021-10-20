import React, {useState}  from "react";
//import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";




function App() {
  const [categories] = useState([
    {
      name: "home"
    },
    {
      name: "projects"
    }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div className="App">
      <Header
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Header>

      <Footer></Footer>
    </div>
  );
}

export default App;