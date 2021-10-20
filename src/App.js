import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Components/Header/Header';
import Home from './Components/HomePage/Home/Home';
import Login from './Components/Login/Login'
import Registration from './Components/Registration/Registration';
import NotFound from './Components/NotFound/NotFound'
import AuthProvider from './AuthContext/AuthProvider';
import Services from './Components/Services/Services';
import Footer from './Components/Footer/Footer';
import Contract from './Components/Contract/Contract';
import AboutUs from './Components/AboutUs/AboutUs';
import Doctors from './Components/HomePage/Doctors/Doctors';
import Galarry from './Components/HomePage/Galarry/Galarry';
import Profile from './Components/Profile/Profile';
import PrivateRoute from './Components/Login/PrivateRoute'
import ServiceDetail from './Components/Services/ServiceDetail';
import useService from './Hooks/useService';
import News from './Components/HomePage/News/News';

function App() {
  const { services} = useService();
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/service">
              <Services quant={9} />
            </Route>
            <Route path="/service/:id">
              <ServiceDetail services={services} />
            </Route>
            <PrivateRoute path="/profile">
              <Profile />
            </PrivateRoute>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/about">
              <AboutUs />
            </Route>
            <Route exact path="/galary">
              <Galarry />
            </Route>
            <Route exact path="/doctor">
              <Doctors quantity={8}></Doctors>
            </Route>
            <Route exact path="/signup">
              <Registration></Registration>
            </Route>
            <Route exact path="/contact">
              <Contract></Contract>
            </Route>
            <Route exact path="/news">
              <News quantity={30}></News>
            </Route>

            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
