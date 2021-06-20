import Layout from './Layout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { IslamDigest, Khazanah, Syariah } from './pages';

const Islami = () => {
  return (
    <Router>
      <Switch>
        {/* <Route path="/search" component={Search} /> */}
        <Route>
          <Layout>
            <Switch>
              <Route exact path="/" component={IslamDigest} />
              <Route path="/khazanah" component={Khazanah} />
              <Route path="/syariah" component={Syariah} />
            </Switch>
          </Layout>
        </Route>
      </Switch>
    </Router>
  );
};

export default Islami;
