import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DefaultLayout from '../layouts/DefaultLayout';
import About from '../pages/About';
import Event from '../pages/Event';
import Events from '../pages/Events';
import Home from '../pages/Home';
import NoMatch from '../pages/NoMatch';

const Routes = () => (
  <Router>
    <DefaultLayout>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/events">
          <Events />
        </Route>
        <Route exact path="/events/:slug">
          <Event />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </DefaultLayout>
  </Router>
);

export default Routes;
