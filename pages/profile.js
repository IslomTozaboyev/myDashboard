import { useSelector } from "react-redux";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faPlus, faUserEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../containers/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  AppData,
  Application,
  Check,
  Conversations,
  Information,
  Projects,
} from "../data/AppData";
import ProfileWrapper from "../Wrappers/ProfileWrapper";

const Profile = () => {
  const router = useRouter();

  const [checks, setChecks] = useState({
    check1: true,
    check2: true,
    check3: true,
  });

  useEffect(() => {
    let obj = {};
    Check.map((v) => (obj[v.name] = v.checked));

    setChecks(obj);
  }, []);

  const [applications, setApplications] = useState({});
  const state = useSelector((state) => state);
  console.log(state);
  useEffect(() => {
    let apps = {};
    Application.map((v) => (apps[v.name] = v.checkeds));

    setApplications(apps);
  }, []);

  return (
    <Layout>
      <ProfileWrapper>
        <div className="container-fluid position-relative">
          <div className="page-header">
            <span className="mask bg-gradient-primary opacity-6"></span>
          </div>
          <div className="card card-body blur shadow-blur mx-4 mt-n6 overflow-hidden">
            <div className="row gx-4">
              <div className="col-auto">
                <div className="avatar avatar-xl position-relative d-flex">
                  <img
                    src="https://demos.creative-tim.com/soft-ui-dashboard/assets/img/bruce-mars.jpg"
                    alt="profile_img"
                    className="border-radius"
                  />
                </div>
              </div>
              <div className="col-auto my-auto">
                <div className="h-100">
                  <h5 className="mb-1 User">Alec Thompson</h5>
                  <p className="mb-0 font-weight-bold text-sm user">
                    CEO / Co-Founder
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0 mx-auto mt-3">
                <div className="nav-wrapper position-relative end-0">
                  <ul
                    className="nav nav-pills nav-fill p-1 bg-transparent d-flex"
                    role="tablist"
                  >
                    {AppData.map((v, i) => (
                      <li className="nav-item" key={v.title}>
                        <a
                          className={`nav-link mb-0 px-0 py-1${router.pathname === v.active ? "active_link" : ""
                            }`}
                          data-bs-toggle="tab"
                          aria-selected="false"
                          role="tab"
                        >
                          {v.active}
                          <FontAwesomeIcon icon={v.icon} />
                          <span className="ms-2">{v.title}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid py-5 mt-4">
          <div className="row">
            <div className="col-12 col-xl-4 mb-3">
              <div className="card h-100 mb-5">
                <div className="card-header p-3">
                  <h6 className="mb-0 color">Platform Settings</h6>
                </div>
                <div className="card-body p-3">
                  <h6 className="text-uppercase text-body text-xs font-weight-bolder">
                    Account
                  </h6>
                  <ul className="d-flex list-group">
                    {Check.map((v, i) => (
                      <li key={i} className="list-group-item border-0 px-0 p-0">
                        <div className="form-check form-switch ps-0">
                          <input
                            className="form-check-input ms-auto"
                            type="checkbox"
                            checked={checks[v.name]}
                            onChange={(e) =>
                              setChecks({
                                ...checks,
                                [v.name]: e.target.checked,
                              })
                            }
                          />
                          <label
                            htmlFor="flexSwitchDefault"
                            className="form-check-label text-body ms-3 text-truncate w-80 mb-0"
                          >
                            {v.title}
                          </label>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <h6 className="text-uppercase text-body text-xs font-weight-bolder mt-4">
                    Application
                  </h6>
                  <ul className="d-flex list-group">
                    {Application.map((v, i) => (
                      <li key={i} className="list-group-item border-0 px-0">
                        <div className="form-check form-switch ps-0">
                          <input
                            className="form-check-input ms-auto"
                            type="checkbox"
                            checked={applications[v.name]}
                            onChange={(e) =>
                              setApplications({
                                ...applications,
                                [v.name]: e.target.checked,
                              })
                            }
                          />
                          <label className="form-check-label text-body ms-3 text-truncate w-80 mb-0">
                            {v.title}
                          </label>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-4 mb-3">
              <div className="card h-100 mb-5">
                <div className="card-header pb-0 p-3">
                  <div className="row">
                    <div className="col-md-8 d-flex align-items-center">
                      <h6 className="mb-0">Profile Information</h6>
                    </div>
                    <div className="col-md-4 text-end">
                      <FontAwesomeIcon icon={faUserEdit} />
                    </div>
                  </div>
                </div>
                <div className="card-body p-3">
                  <p className="text-sm">
                    Hi, I’m Alec Thompson, Decisions: If you can’t decide, the
                    answer is no. If two equally difficult paths, choose the one
                    more painful in the short term (pain avoidance is creating
                    an illusion of equality).
                  </p>
                  <hr className="horizontal gray-light my-4"></hr>
                  <ul className="list-group">
                    {Information.map((v, i) => (
                      <li
                        key={i}
                        className="list-group-item border-0 ps-0 text-sm"
                      >
                        <strong>{v.strong}</strong> {v.title}
                      </li>
                    ))}
                    <li className="list-group-item border-0 ps-0 text-sm">
                      <strong>Social: </strong>
                      <FontAwesomeIcon icon={faFacebook} className="ms-2" />
                      <FontAwesomeIcon icon={faTwitter} className="ms-2" />
                      <FontAwesomeIcon icon={faInstagram} className="ms-2" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-4 mb-3">
              <div className="card h-100 mb-5">
                <div className="card-header pb-0 p-3">
                  <h6 className="mb-0">Conversations</h6>
                </div>
                <div className="card-body p-3">
                  <ul className="list-group">
                    {Conversations.map((v, i) => (
                      <li
                        key={i}
                        className="list-group-item border-0 d-flex align-items-center px-0 mb-0"
                      >
                        <div className="me-3">
                          <img
                            src={v.img}
                            alt="kal"
                            className="border-radius-lg shadow avatar"
                          />
                        </div>
                        <div className="d-flex align-items-start flex-column justify-content-center">
                          <h6 className="mb-0 text-sm">{v.name}</h6>
                          <p className="mb-0 text-xs">{v.title}</p>
                        </div>
                        <a
                          className="btn btn-link pe-3 ps-0 mb-0 ms-auto text-uppercase"
                          href="#"
                        >
                          {v.reply}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 mt-4">
              <div className="card mb-4 d-flex">
                <div className="card-header pb-0 p-3">
                  <h6 className="color mb-1">Projects</h6>
                  <p className="text-sm mb-3">Architects design houses</p>
                </div>
                <div className="card-body p-3">
                  <div className="row">
                    {Projects.map((v, i) => (
                      <div
                        className="col-xl-3 col-md-6 mb-xl-0 mb-4 position-relative"
                        key={i}
                      >
                        <div className="card-blog card-plain">
                          <div className="position-relative">
                            <a className="d-block shadow-xl border-radius-xl">
                              <img
                                src={v.img}
                                className="img-fluid shadow border-radius-xl"
                              />
                            </a>
                          </div>
                          <div className="card-body px-1 pb-0">
                            <p>{v.prNumber}</p>
                            <a href="#" className="color">
                              <h5>{v.title}</h5>
                            </a>
                            <p className="mb-4 text-sm">{v.subTitle}</p>
                            <div className="d-flex align-items-center justify-content-between">
                              <button
                                type="button"
                                className="btn btn-outline-primary btn-sm mb-0 text-uppercase"
                              >
                                View Project
                              </button>
                              <div className="avatar-group mt-2">
                                {v.imgs.map((v, i) => (
                                  <a key={i} href="#" className="rounded-circle">
                                    <img
                                      src={v.img}
                                      className={`avatars avatars-xs ${v.className}`}
                                      alt="Image placeholder"
                                    />
                                  </a>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className="col-xl-3 col-md-6 ">
                      <div className="card h-100 card-plain border m-0">
                        <div className="card-body d-flex flex-column justify-content-center text-center">
                          <a href="#">
                            <FontAwesomeIcon
                              icon={faPlus}
                              className="text-secondary"
                            />
                            <h5 className=" text-secondary"> New project </h5>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ProfileWrapper>
    </Layout>
  );
};

export default Profile;
