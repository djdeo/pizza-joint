import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Base from "./components/Base";
import Toppings from "./components/Toppings";
import Header from "./components/Header";
import Order from "./components/Order";
import Home from "./components/Home";

function App() {

  const [pizza, setPizza] = useState({base:'', toppings:[]})

  const addBase =(base) => {
    setPizza({...pizza, base})
  }

  const addTopping = (topping) => {
    let newToppings;

    if(!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping]
    } else {
      newToppings = pizza.toppings.filter(top => top !== topping)
    }
    setPizza({...pizza, toppings:newToppings})
  }

  return (
    <>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/base">
            <Base addBase={addBase} pizza={pizza}/>
          </Route>
          <Route path="/toppings">
            <Toppings addTopping={addTopping} pizza={pizza}/>
          </Route>
          <Route path="/order">
            <Order pizza={pizza} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
