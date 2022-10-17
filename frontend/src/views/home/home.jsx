import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header/header";
import Layout from "./layout/layout";
import Sidebar from "./sidebar/sidebar";

const Home = () => {
  return (
    <div>
      {/* START PAGE CONTAINER */}
      <div className="page-container">
        <Sidebar />

        {/* PAGE CONTENT */}
        <div className="page-content">
          {/* START X-NAVIGATION VERTICAL */}
          <ul className="x-navigation x-navigation-horizontal x-navigation-panel">
            {/* TOGGLE NAVIGATION */}
            <li className="xn-icon-button">
              <a href="#" className="x-navigation-minimize">
                <span className="fa fa-dedent" />
              </a>
            </li>
            <Header />
          </ul>

          <Outlet></Outlet>

        </div>
       
      </div>
     
      <div
        className="message-box animated fadeIn"
        data-sound="alert"
        id="mb-signout"
      >
        <div className="mb-container">
          <div className="mb-middle">
            <div className="mb-title">
              <span className="fa fa-sign-out" /> Log <strong>Out</strong> ?
            </div>
            <div className="mb-content">
              <p>Are you sure you want to log out?</p>
              <p>
                Press No if youwant to continue work. Press Yes to logout
                current user.
              </p>
            </div>
            <div className="mb-footer">
              <div className="pull-right">
                <link rel="stylesheet" href="Login" />
                <a className="btn btn-success btn-lg">
                  Yes
                </a>
                <button className="btn btn-default btn-lg mb-control-close">
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END MESSAGE BOX*/}
    </div>
  );
};

export default Home;
