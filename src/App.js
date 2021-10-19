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

function App() {
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
            <Route path="/service">
              <Services />
            </Route>
            <Route path="/service:single">
              <Services />
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/about">
              <AboutUs />
            </Route>
            <Route exact path="/doctor">
              <Doctors></Doctors>
            </Route>
            <Route exact path="/signup">
              <Registration></Registration>
            </Route>
            <Route exact path="/contact">
              <Contract></Contract>
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
