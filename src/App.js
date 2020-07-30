import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";

import Header from "./components/blocks/Header/index";
import Characters from "./components/pages/Characters/index";
import CharacterDetails from "./components/pages/Characters/CharacterDetails/index";
import Episodes from "./components/pages/Episodes/index";
import EpisodeDetails from "./components/pages/Episodes/EpisodeDetails/index";
import Locations from "./components/pages/Locations/index";
import LocationDetails from "./components/pages/Locations/LocationDetails/index";
import { store } from "./store";
import {
  CHARACTER_DETAILS_PAGE,
  CHARACTERS_PAGE,
  EPISODE_DETAILS_PAGE,
  EPISODES_PAGE,
  LOCATION_DETAILS_PAGE,
  LOCATIONS_PAGE,
  MAIN_ROUTE,
} from "./constants/routes";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />

        <Switch>
          <Route exact path={MAIN_ROUTE}>
            <Redirect to={EPISODES_PAGE} />
          </Route>
          <Route path={CHARACTERS_PAGE} exact component={Characters} />
          <Route path={CHARACTER_DETAILS_PAGE} component={CharacterDetails} />
          <Route path={EPISODES_PAGE} exact component={Episodes} />
          <Route path={EPISODE_DETAILS_PAGE} component={EpisodeDetails} />
          <Route path={LOCATIONS_PAGE} exact component={Locations} />
          <Route path={LOCATION_DETAILS_PAGE} component={LocationDetails} />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
