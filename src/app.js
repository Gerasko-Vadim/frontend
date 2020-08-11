import React from "react";
import NavBar from "./componens/home/navBar/navBar.js";
import Footer from "./componens/home/footer/footer.js";
import Home from "./componens/home/home.js";
import ResultSearch from "./componens/result-search/result-search.js";
import Destinations from "./componens/destinations/destinations.js";
import Activity from "./componens/activity/activity.js";
import NotFound from "./componens/notFound/notFound.js";
import Tour from "./componens/tour-page/tour.js";
import SignUp from "./componens/sign-up/sign-up.js";
import SignIn from "./componens/sign-in/sign-in.js"
import SignCompany from "./componens/sign-up/company-users-up/app"
import About from "./componens/about/about.js"
import UserPage from "./componens/user-page/user-page"
import {history} from "./history";
import TourRating from "./componens/tour-rating/tour-rating";


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Groups from "./componens/tour-page/groups-page/groups";

const App = () => {

  return (
    <Router history={history} >
      <div>
        <NavBar />

        <Switch>
          <Route path="/result_search" component={ResultSearch} />
          <Route exact path="/" component={Home} />
          <Route path="/destinations" component={Destinations} />
          <Route path="/activity" component={Activity} />
          <Route path="/tourspage"  component={Tour} />
          <Route path="/sign-up"  component={SignUp} />
          <Route path="/sign-in"  component={SignIn} />
          <Route path="/sign-up-company"  component={SignCompany} />
          <Route path="/about"  component={About} />
          <Route path="/user-page"  component={UserPage} />
          <Route path="/tour-rating"  component={TourRating} />
          <Route path="/tour-groups"  component={Groups} />
          <Route component={NotFound} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
};
export default App;
