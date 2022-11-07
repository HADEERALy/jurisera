import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
  HashRouter,
} from "react-router-dom";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import Home from "./screens/homePage/Home";
import Services from "./screens/servicesPage/Services";
import Team from "./screens/teamPage/Team";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./screens/client-profile/Profile";
import Law from "./screens/sub-services/Law";
import Contactus from "./screens/contact-us/Contactus";
import About from "./screens/about/About";
import Careers from "./screens/careers";
import CareerDetails from "./screens/career details";
import ArticleDetails from "./screens/article details";

const App = () => {
  return (
    <Router>
      <BrowserRouter basename="/jurisera">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/practices" component={Services} />
          <Route exact path="/our-team" component={Team} />
          <Route exact path="/our-team/profile/:id" component={Profile} />
          <Route exact path="/law/:id" component={Law} />
          <Route exact path="/contact-us" component={Contactus} />
          <Route exact path="/about-us" component={About} />

          <Route exact path="/about-us" component={About} />
          <Route exact path="/careers" component={Careers} />
          <Route exact path="/careers/:id" component={CareerDetails} />

          <Route exact path="/article/:id" component={ArticleDetails} />

        </Switch>
        <Footer />
      </BrowserRouter>
    </Router>
  );
};

export default App;
