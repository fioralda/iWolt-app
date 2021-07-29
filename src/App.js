import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import StoresSection from './pages/StoresSection';
import PageNotFound from './pages/PageNotFound';
import NavBar from './components/NavBar';
import { chakra } from '@chakra-ui/react';
import useAuthStore from './stores/use-auth';
import Footer from './components/Footer';

function App() {
  const { isAuthenticated } = useAuthStore();
  return (
    <chakra.div>
      <Router>
        <NavBar />
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
              <StoresSection />
            </Route>
          )}
          <Route path=''>
            <PageNotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </chakra.div>
  );
}

export default App;
