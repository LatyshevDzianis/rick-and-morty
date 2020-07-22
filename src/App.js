import React from "react";
import "./App.css";
import Header from "./components/blocks/Header";
import { Provider } from "react-redux";
import { store } from "./store";
import Characters from "./components/pages/Characters";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CharacterDetails from "./components/pages/CharacterDetails";
import MainPage from "./components/pages/MainPage";
import Episodes from "./components/pages/Episodes";
import Locations from "./components/pages/Locations";
import EpisodeDetails from "./components/pages/EpisodeDetails";
import LocationDetails from "./components/pages/LocationDetails";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div>
          <Header />
        </div>

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
