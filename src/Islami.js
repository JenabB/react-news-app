import LayoutIslami from './LayoutIslami';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { IslamDigest, Khazanah, Syariah, Ramadan } from './pages';

const Islami = () => {
  return (
    <Router>
      <Switch>
        {/* <Route path="/search" component={Search} /> */}
        <Route>
          <LayoutIslami>
            <Switch>
              <Route path="/islami" component={IslamDigest} />
              <Route path="/khazanah" component={Khazanah} />
              <Route path="/syariah" component={Syariah} />
              <Route path="/ramadan" component={Ramadan} />
            </Switch>
          </LayoutIslami>
        </Route>
      </Switch>
    </Router>
  );
};

export default Islami;
