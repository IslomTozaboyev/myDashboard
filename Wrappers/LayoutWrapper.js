import styled from "styled-components";

const padding = "20px";
const LayoutWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  .icons {
    color: #344767;
  }
  .sidebar {
    position: sticky !important;
    top: 0;
    left: 0;
    width: 0;
    flex-shrink: 0;
    box-shadow: none !important;
    border-radius: 10px;
    padding: ${padding};
    overflow-y: auto !important;
    .logo {
      height: 30px !important;
    }
    &.show {
      width: 280px;
      padding: 30px;
    }
    .btn-gradient {
      background-image: linear-gradient(310deg, #7928ca, #ff0080);
      border: none;
      padding: 10px 60px;
      border-radius: 10px;
      text-align: center;
      font-size: 12px;
    }
    .cardBox {
      position: relative;
      bottom: 0;
      display: flex;
      flex-direction: column;
      min-width: 0;
      word-wrap: break-word;
      background-color: #fff;
      background-clip: border-box;
      border: 0 solid rgba(0, 0, 0, 0.125);
      border-radius: 1rem;
      .docs_info {
        .texts {
          z-index: 1000;
          font-weight: 700;
          color: black;
        }
      }

      .full_back {
        background-image: url("https://demos.creative-tim.com/soft-ui-dashboard/assets/img/curved-images/white-curved.jpeg");
        background-position: 50%;
        background-size: cover;
        margin-bottom: 30px;
        width: 100%;
        height: 100%;
        position: absolute;
        border-radius: 1rem;
        &::before {
          background-image: linear-gradient(
            310deg,
            #627594,
            #a8b8d8
          ) !important;
          opacity: 0.85 !important;
        }
      }
      .card_body {
        color: #fff;
        position: relative;
        z-index: 2;
        .icons {
          display: flex;
          align-items: center;
          justify-content: center;
          color: #344767 !important;
          width: 40px;
          height: 40px;
        }
      }
    }
    .photo {
      height: 30px;
    }
    ul {
      li {
        &.active {
          padding: 10px 20px;
          background-color: #fff;
          border-radius: 10px;
          box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.1);
          .icon {
            background-color: #cb0c9f;
            color: #fff !important;
          }
          a {
            color: #000;
            font-weight: 600;
          }
        }
        a {
          color: rgba(147, 154, 161);
          .w-60,
          .h-60 {
            width: 40px;
            height: 40px;
          }
          .icon {
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #fff;
            color: #344767;
          }
        }
      }
    }
  }
  .input-group {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    width: 100%;
    .input-group-text {
      display: flex;
      align-items: center;
      padding: 0.5rem 0.75rem;
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.4rem;
      color: #344767;
      text-align: center;
      white-space: nowrap;
      background-color: #fff;
      border: 1px solid #d2d6da;
      border-radius: 0.5rem;
    }
    .input {
      flex: 1 1 auto;
      width: 1%;
      min-width: 0;
      border-left: 0 !important;
      padding-left: 0;
      margin-left: -1px;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      padding: 0.5rem 0.75rem;
      border: 1px solid #d2d6da;
      outline-color: #d40d98;
      border-radius: 0.5rem;
    }
  }
  .rightside {
    flex: 1;
    header {
      padding: 5px 10px 5px;
      border-radius: 10px;
      position: sticky;
      top: 0;
      left: 0;
      backdrop-filter: blur(5px);
      z-index: 1000;
      overflow-x: hidden !important;
    }
    .content {
      .dashboardBox {
        position: relative;
        display: flex;
        flex-direction: column;
        min-width: 0;
        word-wrap: break-word;
        background-color: #fff;
        background-clip: border-box;
        border: 0 solid rgba(0, 0, 0, 0.125);
        border-radius: 1rem;
        box-shadow: 0 20px 27px 0 rgb(0 0 0 / 5%);
        .timeline {
          position: relative !important;
          &:before {
            content: "";
            position: absolute;
            top: 0;
            left: 1rem;
            height: 100%;
            border-right: 2px solid #dee2e6;
          }
          .timeline_block {
            &:after {
              content: "";
              display: table;
              clear: both;
            }
            .timeline_step {
              position: absolute;
              display: inline-flex;
              align-items: center;
              justify-content: center;
              left: 0;
              width: 26px;
              height: 26px;
              border-radius: 50%;
              background: #fff;
              text-align: center;
              transform: translateX(-50%);
              font-size: 1rem;
              font-weight: 600;
              z-index: 1;
              .icon_success,
              .icon_primary,
              .icon_danger,
              .icon_warning,
              .icon_pink,
              .icon_dark {
                margin-left: 30px;
                color: #fff;
                border-radius: 50%;
              }
              .icon_success {
                background-image: linear-gradient(310deg, #17ad37, #c1e823);
              }
              .icon_primary {
                background-image: linear-gradient(310deg, #2152ff, #21d4fd);
              }
              .icon_danger {
                background-image: linear-gradient(310deg, #d60808, #ff6690);
              }
              .icon_warning {
                background-image: linear-gradient(310deg, #f53939, #fbcf33);
              }
              .icon_pink {
                background-image: linear-gradient(310deg, #7928ca, #ff0080);
              }
              .icon_dark {
                background-image: linear-gradient(310deg, #141727, #3a416f);
              }
            }
          }
          .timeline_content {
            width: auto;
            margin-left: 45px;
            padding-top: 0.35rem;
            position: relative;
            top: -6px;
            &:after {
              content: "";
              display: table;
              clear: both;
            }
          }
        }
        .box_header {
          padding: 0.5rem 1rem;
          margin-bottom: 0;
          background-color: #fff;
          border-bottom: 0 solid rgba(0, 0, 0, 0.125);
          border-radius: 1rem 1rem 0 0;
        }
        .box_body {
          padding: 1.5rem;
          .table_responsive {
            overflow-x: auto;
          }
          .avatar {
            width: 36px !important;
            height: 36px !important;
            font-size: 0.875rem;
          }
          .table {
            overflow-x: hidden !important;
            .middle {
              vertical-align: middle !important;
              .progress_margin {
                margin-right: auto !important;
                margin-left: auto !important;
              }
              .progress {
                height: 3px !important;
                width: 120px !important;
                margin: 0 !important;
                overflow: visible !important;
                height: 3px !important;
                font-size: 0.75rem !important;
                background-color: #e9ecef !important;
                border-radius: 0.5rem !important;
                .bg_info {
                  background-image: linear-gradient(
                    310deg,
                    #2152ff,
                    #21d4fd
                  ) !important;
                }
                .progress_bar {
                  height: 6px;
                  border-radius: 0.25rem;
                  margin-top: -2px;
                }
                .progress,
                .progress_bar {
                  display: flex;
                  overflow: hidden;
                }
              }
            }
            .avatar_group {
              .avatar_photo {
                width: 36px !important;
                height: 36px !important;
                border-radius: 50%;
              }
            }
          }
        }
        .bg_rocket {
          background-image: url("https://demos.creative-tim.com/soft-ui-dashboard/assets/img/ivancik.jpg");
          background-size: cover;
          border-radius: 8px;
          .mask {
            position: absolute;
            background-position: 50%;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0.8;
          }
          .bg_gr_dark {
            background-image: linear-gradient(310deg, #141727, #3a416f);
          }
        }
        .dBox {
          .icon {
            padding: 24px;
            border-radius: 8px;
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-image: linear-gradient(310deg, #7928ca, #ff0080);
            color: #fff !important;
          }
          .bg_gradient {
            background-image: linear-gradient(310deg, #7928ca, #ff0080);
            border-radius: 8px;
          }
        }
      }
    }
    .content {
      margin-top: 10px;
      padding: ${padding};
    }
  }
  .footer {
    overflow-x: hidden !important;
    .text_footer {
      color: #344767;
    }
    ul {
      li {
        a {
          color: #344767 !important;
        }
      }
    }
  }
`;
export default LayoutWrapper;
