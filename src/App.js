/* eslint-disable react/jsx-pascal-case */
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./views/Home";
import Content from "./views/Content";
import _404 from "./views/404";
import Header from "./components/base/Header";
import Footer from "./components/base/Footer";
import "./assets/css/main.css";

function App() {
  return (
    <>
      <Header />

      <div className="my-4">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/404" exact component={_404} />

          <Route path="/slug">
            <Content />
          </Route>

          <Redirect to="/404" />
        </Switch>
      </div>

      <Footer />
    </>
  );
}

export default App;
