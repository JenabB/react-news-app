import Layout from "./Layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Search, Ekonomi, Hiburan, Nasional, Internasional, GayaHidup, Olahraga, Teknologi, IslamDigest} from "./pages";

const News = () => {
  return (
    <Router>
      <Switch>
        <Route path="/search" component={Search} />
        <Route>
          <Layout>
            <Switch>
              <Route exact path="/" component={Nasional} />
              <Route path="/internasional" component={Internasional} />
              <Route path="/ekonomi" component={Ekonomi} />
              <Route path="/olahraga" component={Olahraga} />
              <Route path="/teknologi" component={Teknologi} />
              <Route path="/hiburan" component={Hiburan} />
              <Route path="/gaya-hidup" component={GayaHidup} />
              <Route path="/intisari-islam" component={IslamDigest} />
            </Switch>
          </Layout>
        </Route>
      </Switch>
    </Router>
  );
};

export default News;
