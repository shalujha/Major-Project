import React, { useEffect, useState } from "react";
import "./NavigationBar.scss";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Button } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import LogoBlue from "../../Logo/LogoBlue.png";
import WhiteBlue from "../../Logo/Logo-with-white-text.png";
import logoWithout from "../../Logo/White.png";
import { NavLink } from "react-router-dom";
import WhiteLogo from "../../Logo/Logo-with-white-text.png";
import { openNavBar, closeNavBar } from "../../redux/actions/actions";
import { connect } from "react-redux";
import ResponsiveNavigationBar from "./ResponsiveNavigationBar";

const NavigationBar = ({ nav, openNavBar, closeNavBar }) => {
  const [showNav, setShowNav] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavigationBarToggle = () => {
    openNavBar();
  };

  const closeNavigationBar = () => {
    closeNavBar();
  };

  const { open } = nav;
  return (
    <AppBar
      position="static"
      className={`NavigationBar__NavBar ${showNav && "active"}`}
    >
      <ResponsiveNavigationBar
        classNameNav={
          open
            ? "ResponsiveNavgitionBar__Container active"
            : "ResponsiveNavgitionBar__Container"
        }
        active={open ? "active" : ""}
        closeNavBar={closeNavigationBar}
      />
      <Button className="NavigationBar__Icon" onClick={NavigationBarToggle}>
        <MenuIcon className="NavigationBar__IconMenu" />
      </Button>
      <Toolbar className="NavigationBar__AppBar">
        <NavLink to="/" className="NavigationBar__LogoWithout">
          <img
            src={logoWithout}
            alt="Logo-without-text"
            className="NavigationBar__LogoWithout"
          />
        </NavLink>

        {showNav ? (
          <NavLink to="/" className="NavigatioBar__LogoBlue">
            <img src={WhiteBlue} alt="LogoBlue" />
          </NavLink>
        ) : (
          <NavLink to="/" className="NavigatioBar__LogoBlue">
            <img
              src={LogoBlue}
              alt="LogoBlue"
              className="NavigatioBar__LogoBlue"
            />
          </NavLink>
        )}
        <NavLink to="/" className="NavigationBar__WhiteLogo">
          <img src={WhiteLogo} alt="WhiteLogo" />
        </NavLink>

        <div className="NavigationBar__Toolbar">
          <div className="Buttons">
            <NavLink to="/" style={{ textDecoration: "none" }}>
              <Button color="primary" className="Home__LinkButtons">
                Home
              </Button>
            </NavLink>

            <NavLink to="/" style={{ textDecoration: "none" }}>
              <Button color="primary" className="Home__LinkButtons">
                About
              </Button>
            </NavLink>

            <NavLink to="/" style={{ textDecoration: "none" }}>
              <Button color="primary" className="Home__LinkButtons">
                START
              </Button>
            </NavLink>

            <NavLink to="/Register" style={{ textDecoration: "none" }}>
              <Button className="NavigationBar__LoginButton">Sign up</Button>
            </NavLink>

            <NavLink to="/Login" style={{ textDecoration: "none" }}>
              <Button className="NavigationBar__LoginButton">Login</Button>
            </NavLink>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = (state) => {
  return {
    nav: state.nav,
  };
};
export default connect(mapStateToProps, { openNavBar, closeNavBar })(
  NavigationBar
);
