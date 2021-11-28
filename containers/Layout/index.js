import React from "react";
import Link from "next/link";
import { dashboardPages, AccoundPages } from "../../data/sidebar";
import LayoutWrapper from "./../../Wrappers/LayoutWrapper";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SettingsIcon from "@material-ui/icons/Settings";
import { useRouter } from "next/dist/client/router";
import { AccessAlarm } from "@material-ui/icons";
import PersonIcon from "@material-ui/icons/Person";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";

const Layout = ({ children }) => {
  const [state, setState] = React.useState({
    left: false,
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
    <LayoutWrapper>
      <List>
        <div className="sidebar_res">
          <div>
            <div className="d-flex align-items-center">
              <Link href="/">
                <a className="text-secondary">Pages</a>
              </Link>
              <p className="mb-0 ms-2">/ Dashboard</p>
            </div>
            <p className="fw-bold">Dashboard</p>
          </div>
          <ul className="my-4">
            {dashboardPages.map((v) => (
              <li
                className={`mb-3 ms-2 ${
                  router.pathname === v.href ? "active" : ""
                }`}
                key={v.href}
              >
                <Link href={v.href}>
                  <a className="item d-flex align-items-center">
                    <div className="icon rounded shadow">{v.icon}</div>
                    <p className="ms-3 mb-0"> {v.title}</p>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <ul className="my-4">
            <small className="text-secondary mb-5">ACCOUNT PAGES</small>
            {AccoundPages.map((v) => (
              <li
                className={`my-3 ms-2 ${
                  router.pathname === v.href ? "active" : ""
                }`}
                key={v.href}
              >
                <Link href={v.href}>
                  <a className="item d-flex align-items-center">
                    <div className="icon rounded shadow h-60 w-60">{v.icon}</div>
                    <p className="ms-3 mb-0"> {v.title}</p>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <Button
            variant="contained"
            className="rounded-pill bbuy me-3"
            color="secondary"
          >
            <small> Buy now</small>
          </Button>
          <div className="d-flex align-items-center input-group my-4">
            <span className="input-group-text">
              <AccessAlarm />
            </span>
            <input className="input" placeholder="Type here..."></input>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center mx-3">
              <PersonIcon />
              <p className="mb-0 fw-bold">Sign In</p>
            </div>
            <div>
              <NotificationsIcon className="me-2" />
              <SettingsIcon className="" />
            </div>
          </div>
        </div>
      </List>
    </LayoutWrapper>
  );

  const router = useRouter();
  return (
    <LayoutWrapper>
      <div className="sidebar show myshadow me-2 d-none d-lg-block">
        <Link href="/">
          <a className="d-flex align-items-center p-3 pb-0">
            <img
              className="photo"
              src="https://demos.creative-tim.com/soft-ui-dashboard/assets/img/logo-ct.png"
              alt=""
            />
            <p className="mb-0 ms-2 fw-bold">Soft Ui Dashboard</p>
          </a>
        </Link>
        <hr />
        <ul className="my-4">
          {dashboardPages.map((v) => (
            <li
              className={`mb-3 ms-2 ${
                router.pathname === v.href ? "active" : ""
              }`}
              key={v.href}
            >
              <Link href={v.href}>
                <a className="item d-flex align-items-center">
                  <div className="icon rounded shadow h-60 w-60">{v.icon}</div>
                  <p className="ms-3 mb-0"> {v.title}</p>
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <ul className="my-4">
          <small className="text-secondary mb-5">ACCOUNT PAGES</small>
          {AccoundPages.map((v) => (
            <li
              className={`my-3 ms-2 ${
                router.pathname === v.href ? "active" : ""
              }`}
              key={v.href}
            >
              <Link href={v.href}>
                <a className="item d-flex align-items-center">
                  <div className="icon rounded shadow h-60 w-60">{v.icon}</div>
                  <p className="ms-3 mb-0"> {v.title}</p>
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <div className="cardBox mt-5">
          <div className="full_back"></div>
          <div className="card_body">
            <div className="rounded bg-white w-25 my-3 text-dark text-center ms-3 icons">
              <PersonIcon />
            </div>
            <div className="docs_info ms-4">
              <h6 className="texts">Need help?</h6>
              <p className="fw-bold texts">Please check our docs</p>
              <a href="https://www.creative-tim.com/learning-lab/bootstrap/license/soft-ui-dashboard">
                <button
                  className="btn btn-light shadow w-100 my-2 rounded ms-2"
                  variant="contained"
                >
                  Documentation
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center my-3">
          <a href="https://www.creative-tim.com/product/soft-ui-dashboard-pro?ref=sidebarfree">
            <button className="btn btn-gradient text-white">
              Upgrade to pro
            </button>
          </a>
        </div>
      </div>
      <div className="rightside ">
        <header className="">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <div className="d-flex align-items-center">
                <Link href="/">
                  <a className="text-secondary">Pages</a>
                </Link>
                <p className="mb-0 ms-2">/ Dashboard</p>
              </div>
              <p className="fw-bold">Dashboard</p>
            </div>
            <div className="d-flex align-items-center">
              <div className="d-flex align-items-center input-group d-none d-md-flex">
                <span className="input-group-text">
                  <AccessAlarm />
                </span>
                <input className="input" placeholder="Type here..."></input>
              </div>
              <div className="d-flex align-items-center mx-3 d-none d-md-flex">
                <PersonIcon />
                <Link href="/signIn">
                  <a className="fw-bold">Sign.in</a>
                </Link>
              </div>
              <div className="d-block d-lg-none">
                {["left"].map((anchor) => (
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
              <NotificationsIcon className="me-2 d-none d-md-block" />
              <SettingsIcon className="d-none d-md-block" />
            </div>
          </div>
        </header>
        <div className="content">{children}</div>
        <footer className="footer">
          <div className="row justify-content-center align-items-center">
            <div className="col-12 col-md-12 col-lg-6">
              <div>
                <p className="mb-0 ms-5 text_footer">
                  © 2021, made with <FavoriteIcon /> by
                  <a href="#" className="fw-bold">
                    <small className="mx-2">Creative Tim</small>
                  </a>
                  for a better web.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-6">
              <div>
                <ul className="d-flex justify-content-center align-items-center my-4">
                  <li className="px-3 text_footer">
                    <a href="#">Creative Tim</a>
                  </li>
                  <li className="px-3 text_footer">
                    <a href="#">About Us</a>
                  </li>
                  <li className="px-3 text_footer">
                    <a href="#">Blog</a>
                  </li>
                  <li className="px-3 text_footer me-3">
                    <a href="#">Licens</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </LayoutWrapper>
  );
};

export default Layout;
