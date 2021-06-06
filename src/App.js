import Layout from "./Layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "./pages/Search";
import Ekonomi from "./pages/Ekonomi";
import Hiburan from "./pages/Hiburan";
import Nasional from "./pages/Nasional";
import Internasional from "./pages/Internasional";
import GayaHidup from "./pages/GayaHidup";
import Olahraga from "./pages/Olahraga";
import Teknologi from "./pages/Teknologi";

const App = () => {
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
            </Switch>
          </Layout>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
