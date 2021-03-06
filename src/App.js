import React from "react";
import {Layout} from "antd";
import{BrowserRouter as Router, Switch, Route} from "react-router-dom";
import MenuTop from "./components/MenuTop";
import Footer from "./components/footer";

// Pages
import Home from "./pages/home";
import NewMovies from "./pages/new-movies";
import Popular from "./pages/popular";
import Movie from "./pages/movie";
import Search from "./pages/search";
import Error404 from "./pages/error404/error404";

export default function App() {

  const {Header, Content} = Layout;

  return (
    <Layout>
      <Router>
        <Header style={{zIndex: 1}}>
          <MenuTop />
        </Header>

        <Content>
          <Switch>

            <Route path="/movieapp/" exact={true}>
              <Home />
            </Route>

            <Route path="/movieapp/new-movies" exact={true}>
              <NewMovies />
            </Route>

            <Route path="/movieapp/popular-movies" exact={true}>
              <Popular />
            </Route>

            <Route path="/movieapp/search" exact={true}>
              <Search />
            </Route>

            <Route path="/movieapp/error404" exact={true}>
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
        <Footer/>
      </Router>
    </Layout>
  );
}
