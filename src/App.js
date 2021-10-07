/* eslint-disable react/jsx-pascal-case */
import { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./views/Home";
import Content from "./views/Content";
import _404 from "./views/404";
import Header from "./components/base/Header";
import Footer from "./components/base/Footer";
import "./assets/css/main.css";

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/photos`)
      .then((res) => res.json())
      .then((json) => {
        setData(json.slice(0, 50));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
    return () => {};
  }, []);

  return (
    <>
      <Header />

      <div className="my-4">
        <Switch>
          <Route path="/" exact>
            <Home loading={loading} data={data} />
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
