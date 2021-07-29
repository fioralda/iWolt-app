import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import StoresNav from './pages/StoresNav';
import StoresCard from './pages/StoresCard';
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
            <StoresNav />
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
