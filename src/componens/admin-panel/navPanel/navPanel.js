import React, { useEffect, useState } from "react";
import "./navPanel.css";
import logo from "./img/123 1.png";
import map from "./img/map.png";
import settings from "./img/settings.png";
import logOut from "./img/log-out.png";
import site from "./img/Group 11.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { closePortal } from "../../../actions/admin-panel/detailsTour/detailstTourAdmin";
import { SignInOff } from "../../../actions/signIn";

const NavPanel = (props) => {
  const [url, setUrl] = useState();
  useEffect(() => {
    setUrl(window.location.pathname);
  });

  let data = {};
  if (props.dataCompany === undefined) {
    data = {};
  } else {
    data = props.dataCompany;
  }

  const clickLogout = () => {
    localStorage.clear();
    props.siginOff();
  };
  return (
    <div className="admin-navPanel">
      <div className="logo-navPanel">
        <img alt="img" src={logo} />
        <span className="logo-navPanel-text">{data.name}</span>
      </div>
      <div className="block-btn-navPanel">
        <Link to="/admin-panel">
          <button
            className={
              "navPanel-btn" +
              (url === "/admin-panel" ||
              "/admin-panel/add-tour" ||
              "/admin-panel/groups"
                ? " active-btn-navPanel"
                : " navPanel-btn")
            }
            onClick={() => props.closeUpdateTour()}
          >
            <img alt="img" src={map} />
            Manage Tours
          </button>
        </Link>
        <Link to="/admin-panel/settings">
          {" "}
          <button
            className={
              "navPanel-btn" +
              (url === "/admin-panel/settings" ? " active-btn-navPanel" : "")
            }
          >
            <img alt="img" src={settings} />
            Settings
          </button>
        </Link>
        <Link to="/">
          {" "}
          <button className="navPanel-btn">
            <img alt="img" src={site} />
            View site
          </button>
        </Link>
        <Link to="/">
          <button className="navPanel-btn" onClick={clickLogout}>
            <img alt="img" src={logOut} />
            Log out
          </button>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    dataCompany: state.dataCompany.state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeUpdateTour: () => dispatch(closePortal()),
    siginOff: () => dispatch(SignInOff()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavPanel);
