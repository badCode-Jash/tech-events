import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { DefaultLayout } from "../layouts";
import SuspenseWithDefaultLoader from "./SuspenseWithLoader";
import Navbar from "../components/ui/nav";

const AllEventsLazy = React.lazy(() => import('../pages/all-events/containers'))
const MyEventsLazy = React.lazy(() => import('../pages/my-events/containers'))

function Routing() {
  return (
    <Router>
          <Navbar></Navbar>
          <DefaultLayout>
          <Switch>
                <Route exact path="/">
                  <SuspenseWithDefaultLoader>
                    <AllEventsLazy />
                  </SuspenseWithDefaultLoader>
                </Route>
                <Route path="/myevents">
                  <SuspenseWithDefaultLoader>
                    <MyEventsLazy />
                  </SuspenseWithDefaultLoader>
                </Route>
          </Switch>
          </DefaultLayout>
    </Router>
  );
}

export default Routing;