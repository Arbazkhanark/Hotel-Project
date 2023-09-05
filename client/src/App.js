import "./App.css";
import Navbar from "./Common/Navbar/Navbar";
import Home from "./Components/pages/Home";
import About from "./Components/About/About";
import Gallery from "./Components/gallery/Gallery";
//import Destinations from "./Components/Destinations/Destinations"
//import DHome from "./Components/Destinations/Home"
import Destinations from "./Components/Destinations/Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SinglePage from "./SinglePage/SinglePage";

/*-------------blog------------ */
// import Blog from "./Components/Blog/Blog"
import Hotel from "./Components/Hotel/Blog";
import BlogSingle from "./Components/Blog/blog-single-page/BlogSingle";

import Testimonial from "./Components/Testimonial/Testimonial";
// import Contact from "./Components/Contact/Contact"
import Footer from "./Common/footer/Footer";
import BookNow from "./Components/BookNow/Contact";
import Login from "./Components/login/Login";
import Register from "./Components/login/Register";
import Dashboard from "./Components/Dashboard/Dashboard";

/*-------------blog------------ */

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/gallery" exact component={Gallery} />
          <Route path="/destinations" exact component={Destinations} />
          <Route path="/singlepage/:id" component={SinglePage} />

          {/* <Route path='/blog' exact component={Blog} /> */}
          <Route path="/hotel" exact component={Hotel} />
          <Route path="/blogsingle/:id" component={BlogSingle} />

          <Route path="/testimonial" component={Testimonial} />
          {/* <Route path='/contact' component={Contact} /> */}
          <Route path="/booknow" exact component={BookNow} />
          <Route path="/sign-in" component={Login} />
          <Route path="/Register" component={Register} />
          <Route path="/admin" component={Dashboard} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
