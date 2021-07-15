import React from "react";
import {Layout} from "antd";
import{BrowserRouter as Router, Switch, Route} from "react-router-dom";
import MenuTop from "./components/MenuTop";

// Pages
import Home from "./pages/home";
import NewMovies from "./pages/new-movies";
import Popular from "./pages/popular";
import Movie from "./pages/movie";
import Search from "./pages/search";
import Error404 from "./pages/error404";

export default function App() {

  const {Header, Content} = Layout;

  return (
    <Layout>
      <Router>
        <Header>
          <MenuTop />
        </Header>

        <Content>
          <Switch>

            <Route path="/" exact={true}>
              <Home />
            </Route>

            <Route path="/new-movies" exact={true}>
              <NewMovies />
            </Route>

            
            <Route path="/popular-movies" exact={true}>
              <Popular />
            </Route>

            <Route path="/search" exact={true}>
              <Search />
            </Route>

            <Route path="/error404" exact={true}>
              <Error404 />
            </Route>

            <Route path="/movie/:id" exact={true}>
              <Movie />
            </Route>

            <Route path="*">
              <Error404 />
            </Route>
          </Switch>
        </Content>

      </Router>
    </Layout>
  );
}