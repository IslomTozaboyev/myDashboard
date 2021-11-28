import Layout from "../containers/Layout";
import React from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Button } from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { boxes, table, timeline } from "../data/sidebar";

export default function Home() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Layout>
      <div className="rightSide">
        <div className="content mt-2">
          <div className="container">
            <div className="row">
              {boxes.map((v) => (
                <div
                  className="col-xxl-3 col-xl-4 col-lg-6 col-sm-6 mb-xl-0 mb-4 mt-2"
                  key={v.icon}
                >
                  <div className="dashboardBox">
                    <div className="dBox p-3">
                      <div className="row">
                        <div className="col-8">
                          <div className="numbers">
                            <div className="text-capitalize  subtitle">
                              {v.title}
                            </div>
                            <div className="d-flex align-items-center">
                              <h5 className="fw-bold mb-0 d-flex title">
                                {v.price}
                              </h5>
                              <p className="text-success fw-bold mb-0 ms-2">
                                {v.percent}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-4 text-end d-flex justify-content-center align-items-center">
                          <div className="icon">{v.icon}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-7 mb-lg-0 mb-4 mt-4">
                <div className="dashboardBox">
                  <div className="dBox p-3">
                    <div className="row">
                      <div className="col-xl-6 col-lg-12">
                        <div className="d-flex flex-column h-100">
                          <p className="fw-bold mb-1 pt-2 subtitle fs-6">
                            Built by developers
                          </p>
                          <h5 className="fw-bold title">Soft UI Dashboard</h5>
                          <p className="mb-5 text-secondary">
                            From colors, cards, typography to complex elements,
                            you will find the full documentation.
                          </p>
                          <a
                            href="#"
                            className="text-body fw-bold mb-0 icon-move-right mt-auto subtitle"
                          >
                            Read More
                            <ChevronRightIcon className="subtitle" />
                          </a>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-12 ms-auto text-center mt-5 mt-lg-0">
                        <div className="bg_gradient h-100">
                          <img
                            className="position-absolute h-100 w-50 d-none top-0 d-lg-block"
                            src="https://demos.creative-tim.com/soft-ui-dashboard/assets/img/shapes/waves-white.svg"
                            alt="rasm"
                          />
                          <div className="position-relative d-flex align-items-center justify-content-center h-100">
                            <img
                              className="w-100 position-relative  z-index-2 pt-4"
                              src="	https://demos.creative-tim.com/soft-ui-dashboard/assets/img/illustrations/rocket-white.png"
                              alt="rasm"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-5 mt-4">
                <div className="dashboardBox p-3 h-100">
                  <div className="overflow-hidden position-relative h-100 bg_rocket">
                    <span className="mask bg_gr_dark"></span>
                    <div className="position-relative z-index-1 d-flex flex-column h-100 p-3">
                      <h5 className="text-white fw-bold mb-4 pt-2">
                        Work with the rockets
                      </h5>
                      <p className="text-white">
                        Wealth creation is an evolutionarily recent positive-sum
                        game. It is all about who take the opportunity first.
                      </p>
                      <a
                        href="#"
                        className="text-white fw-bold mb-0 icon-move-right mt-auto subtitle"
                      >
                        Read More
                        <ChevronRightIcon className="subtitle" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row my-4">
            <div className="col-12 col-sm-12 col-xl-8 col-lg-12 col-md-12 m-0">
              <div className="dashboardBox">
                <div className="box_header pb-0">
                  <div className="row">
                    <div className="col-7 col-lg-6">
                      <div className="h6">Projects</div>
                      <span>
                        {" "}
                        <ChevronRightIcon className="subtitle" />
                        30 done this month
                      </span>
                    </div>
                    <div className="col-5 col-lg-6 my-auto text-end">
                      <di v>
                        <Button
                          aria-controls="simple-menu"
                          aria-haspopup="true"
                          onClick={handleClick}
                        >
                          <MoreVertIcon />
                        </Button>
                        <Menu
                          id="simple-menu"
                          anchorEl={anchorEl}
                          keepMounted
                          open={Boolean(anchorEl)}
                          onClose={handleClose}
                        >
                          <MenuItem onClick={handleClose}>Action</MenuItem>
                          <MenuItem onClick={handleClose}>
                            Another action
                          </MenuItem>
                          <MenuItem onClick={handleClose}>
                            Something else here
                          </MenuItem>
                        </Menu>
                      </di>
                    </div>
                  </div>
                </div>
                <div className="box_body px-0 pb-2">
                  <div className="table_responsive">
                    <table className="table align-items-center mb-0">
                      <thead>
                        <tr>
                          <th className="fw-bold text-secondary">Companies</th>
                          <th className="fw-bold text-secondary">Members</th>
                          <th className="fw-bold text-secondary">Budget</th>
                          <th className="fw-bold text-secondary">Completion</th>
                        </tr>
                      </thead>
                      <tbody>
                        {table.map((v) => (
                          <tr key={v.title}>
                            <td className="middle">
                              <div className="d-flex px-2 py-1">
                                <div>
                                  <img className="avatar" src={v.logo} alt="" />
                                </div>
                                <div className="d-flex flex-column justify-content-center">
                                  <h6 className="mb-0">{v.title}</h6>
                                </div>
                              </div>
                            </td>
                            <td className="middle">
                              <div className="avatar_group mt-2">
                                <a href="#">
                                  <img
                                    className="avatar_photo"
                                    src={v.img1}
                                    alt=""
                                  />
                                </a>
                                <a href="#">
                                  <img
                                    className="avatar_photo"
                                    src={v.img2}
                                    alt=""
                                  />
                                </a>
                                <a href="#">
                                  <img
                                    className="avatar_photo"
                                    src={v.img3}
                                    alt=""
                                  />
                                </a>
                                <a href="#">
                                  <img
                                    className="avatar_photo"
                                    src={v.img4}
                                    alt=""
                                  />
                                </a>
                              </div>
                            </td>
                            <td className="middle">
                              <div className="middle text-center">
                                <p className="fw-bold mb-0">{v.price}</p>
                              </div>
                            </td>
                            <td className="middle">
                              <div className="middle">
                                <div className="progress_margin w-75 mx-auto">
                                  <div className="progress_info">
                                    <div className="progress_percen">
                                      <p className="fw-bold mb-0 text-secondary">
                                        {v.percen}
                                      </p>
                                    </div>
                                  </div>
                                  <div className="progress">
                                    <div className="progress_bar bg_info w-60">
                                      {v.loading}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="dashboardBox h-100">
                <div className="box_header pb-0">
                  <h6>Orders overview</h6>
                  <p>
                    <ArrowUpwardIcon />
                    <span>24%</span> this month
                  </p>
                </div>
                <div className="box_body p-3">
                  <div className="timeline position-relative">
                    {timeline.map((v) => (
                      <div
                        className="timeline_block position-relative mb-3"
                        key={v.icon}
                      >
                        <span className="timeline_step">{v.icon}</span>
                        <div className="timeline_content">
                          <h6 className="text-dark fw-bold mb-0 fs-6">
                            {v.title}
                          </h6>
                          <div className="mb-0 text-secondary fw-bold">
                            <small className="small ">{v.subtitle}</small>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
