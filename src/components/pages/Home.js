import "../../style sheets/home.css";

import { Link } from "react-router-dom";
// import { Helmet } from "react-helmet";
import LinkButton from "../LinkButton";
import Head from "../../components/Head";

var twitterHandle = "kennyparkpark";
var instagramHandle = "kennypark.png";

const Home = () => {
  return (
    <div className="centered-div">
      <div className="container">
        {/* Head and text */}
        <div id="header" className="horizontal-layout">
          {/* <img id="head" src={head} alt="HEAD" /> */}
          <Head />
          <div id="header-text">
            <h1>
              Hi! I'm <span className="text-red">Kenny Park</span>.
            </h1>
            <p className="p1">
              I’m a 20 year old game developer, programmer, artist, and all
              around cool guy - though that last point is up for debate.
            </p>
            <br />
            <p className="p1">
              This website is a collection of my games, art, and other creative
              projects.
            </p>
          </div>
        </div>

        {/* Button row */}
        <div id="button-row" className="vertical-layout">
          <LinkButton text="GAMES / APPLICATIONS" link="/games" />
          <LinkButton text="RENDERS / 3D WORK" link="/renders" />
          <LinkButton text="OTHER PROJECTS" link="/others" />
        </div>

        {/* Bottom links */}
        <div id="bottom-links">
          {/* Left side */}
          <label className="float-left">
            <Link to="/about">about/resume</Link>
            {" | "}
            <Link to="/timeline">timeline</Link>
            {" | "}
            <Link to="/site-info">site info</Link>
          </label>

          {/* Right side */}
          <div className="float-right">
            <a
              href={"https://twitter.com/" + twitterHandle}
              target="_blank"
              rel="noreferrer"
            >
              twitter
            </a>
            {" | "}
            <a
              href={"https://instagram.com/" + instagramHandle}
              target="_blank"
              rel="noreferrer"
            >
              instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
