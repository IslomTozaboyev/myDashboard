import Button from "@material-ui/core/Button";
import { faBars, faBaseballBall } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import {
  faGithub,
  faInstagram,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import SignInWrapper from "../Wrappers/SignInWrapper";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Switch from "@material-ui/core/Switch";

const SignIn = () => {
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = () => (
    <List>
      <div className=" d-flex justify-content-between align-items-center p-2 rounded-pill shadow nav">
        <ul className="d-flex py-2 px-5 ">
          <li className="mx-2">Dashboard</li>
          <li className="mx-2">Profile</li>
          <li className="mx-2">Sign Up</li>
          <li className="mx-2">Sign In</li>
        </ul>
      </div>
    </List>
  );

  return (
    <SignInWrapper>
      <div className="bac"></div>
      <div className="container p-2">
        <div className="d-none d-lg-flex d-flex justify-content-between align-items-center p-2 rounded-pill shadow nav">
          <p className="fw-bold p-0 m-0">
            <Link href="/">
              <a>Soft UI Dashboard</a>
            </Link>
          </p>
          <ul className="d-flex py-2 px-5">
            <li className="mx-2">
              <Link href="/">
                <a>Dashboard</a>
              </Link>
            </li>
            <li className="mx-2">
              <Link href="profile">
                <a>Profile</a>
              </Link>
            </li>
            <li className="mx-2">
              {" "}
              <Link href="signUp">
                <a>Sign Up</a>
              </Link>
            </li>
            <li className="mx-2">
              {" "}
              <Link href="signIn">
                <a>Sign In</a>
              </Link>
            </li>
          </ul>
          <Button variant="contained" className="rounded-pill px-5 but1">
            FREE DOWNLOAD
          </Button>
        </div>
        <div className="d-block d-lg-none">
          {["top"].map((anchor) => (
            <React.Fragment key={anchor}>
              <Button onClick={toggleDrawer(anchor, true)}>
                <FontAwesomeIcon className="text-dark " icon={faBars} />
              </Button>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </div>

        <div className="clas">
          <div className="px-1">
            <h3>Welcome back</h3>
            <p>Enter your email and password to sign in</p>
          </div>
          <div className="container small-container ">
            <div className="row text-dark ">
              <div className="col-md-7 col-lg-5 col-xl-4 mt-3 p-0">
                <div className="rounded ">
                  <div className="d-flex flex-column">
                    <label className="fw-bolder ms-1">
                      <small>Email</small>
                    </label>
                    <input
                      type="email"
                      placeholder="E-mail"
                      className="mt-1 p-2 rounded border"
                    />
                  </div>
                  <div className="d-flex flex-column mt-3">
                    <label className="fw-bolder ms-1">
                      <small>Password</small>
                    </label>
                    <input
                      type="password"
                      placeholder="Password"
                      className="mt-1 p-2 rounded border"
                    />
                  </div>

                  <div className="d-flex align-items-center my-3 mx-0">
                    <Switch
                      color="primary"
                      inputProps={{ "aria-label": "primary checkbox" }}
                    />
                    <p className="mb-0 ms-2 fw-bold text-dark">Remember me </p>
                  </div>
                  <div className="text-center">
                    <Button className="mt-1 rounded text-white text-center bsign w-100">
                      SIGN IN
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-5">
          <ul className="d-flex justify-content-center mt-5">
            <li>
              <Link href="/">
                <a className="button-link">Company</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="button-link">About Us</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="button-link">Team</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="button-link">Products</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="button-link">Blog</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="button-link">Pricing</a>
              </Link>
            </li>
          </ul>
          <ul className="d-flex justify-content-center mt-5">
            <li>
              <Link href="/">
                <a className="button-link">
                  <FontAwesomeIcon icon={faBaseballBall}></FontAwesomeIcon>{" "}
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="button-link">
                  <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>{" "}
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="button-link">
                  <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>{" "}
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="button-link">
                  <FontAwesomeIcon icon={faPinterest}></FontAwesomeIcon>{" "}
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="button-link">
                  <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>{" "}
                </a>
              </Link>
            </li>
          </ul>
          <p className="text-secondary text-center mt-4">
            Copyright © 2021 Soft by Creative Tim.
          </p>
        </div>
      </div>
    </SignInWrapper>
  );
};

export default SignIn;
