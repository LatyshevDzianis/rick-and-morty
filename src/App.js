import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import Header from "./components/blocks/Header/index";
import MainPage from "./components/pages/MainPage";
import Characters from "./components/pages/Characters/index";
import CharacterDetails from "./components/pages/Characters/CharacterDetails/index";
import Episodes from "./components/pages/Episodes/index";
import EpisodeDetails from "./components/pages/Episodes/EpisodeDetails/index";
import Locations from "./components/pages/Locations/index";
import LocationDetails from "./components/pages/Locations/LocationDetails/index";
import { store } from "./store";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />

        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/characters" exact component={Characters} />
          <Route path="/characters/:id" component={CharacterDetails} />
          <Route path="/episodes" exact component={Episodes} />
          <Route path="/episodes/:id" component={EpisodeDetails} />
          <Route path="/locations" exact component={Locations} />
          <Route path="/locations/:id" component={LocationDetails} />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
