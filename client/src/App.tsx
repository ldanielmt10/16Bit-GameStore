import React, { FC } from "react";
import { Home, NotFound, Landing, CartSideBar, Detail } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyles/GlobalStyles";
import FormProduct from "./components/Forms/FormProduct"

const App: FC = () => {
  return (
    <>

    <GlobalStyle/>
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/game/:id" component={Detail} />
        <Route exact path='/form' component={FormProduct}/>
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>


    </>
  );
};

export default App;
