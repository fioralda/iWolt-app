import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Stores from './pages/Stores';
import PageNotFound from './pages/PageNotFound';

import useAuthStore from './stores/use-auth';

function App() {
  const { isAuthenticated } = useAuthStore();
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <LandingPage />
        </Route>
        <Route exact path='/login'>
          <LoginPage />
        </Route>
        <Route exact path='/signup'>
          <RegisterPage />
        </Route>
        {isAuthenticated && (
          <Route exact path='/stores'>
            <Stores />
          </Route>
        )}
        <Route path=''>
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
