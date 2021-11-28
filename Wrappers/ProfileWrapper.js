import styled from "styled-components";

const color = "rgb(52, 71, 103)";
const iconColor = "rgb(60, 80, 110)";

const ProfileWrapper = styled.div`
  .btn-link {
    text-decoration: none;
    color: #cb0c9f;
    font-weight: 700;
    box-shadow: none;
  }
  .avatar {
    height: 48px;
    width: 48px;
    border-radius: 0.75rem;
  }
  .color {
    color: ${color};
  }

  .text-body {
    color: ${color} !important;
  }

  .page-header {
    min-height: 300px !important;
    background-image: url(https://demos.creative-tim.com/soft-ui-dashboard/assets/img/curved-images/curved0.jpg);
    border-radius: 1rem;
    background-position-x: 50%;
    background-size: cover;
    position: relative;

    .mask {
      position: absolute;
      background-position: 50%;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-size: cover;
      border-radius: 1rem;
    }

    .bg-gradient-primary {
      background-image: linear-gradient(310deg, #7928ca, #ff0080);
    }

    .opacity-6 {
      opacity: 0.6 !important;
    }
  }

  .card {
    color: ${color};
    box-shadow: 0 20px 27px 0 rgb(0 0 0 / 5%);
    position: relative;
    margin-top: -50px;
    border: 0 solid rgba(0, 0, 0, 0.125);
    border-radius: 1rem;
    -webkit-backdrop-filter: saturate(200%) blur(30px);
    backdrop-filter: saturate(200%) blur(30px);
    background-color: hsla(0, 0%, 100%, 0.8) !important;

    .User {
      font-family: "Open Sans" sans-serif;
      color: #344767;
      font-size: 20px;
    }
    .user {
      font-family: "Open Sans" sans-serif;
      color: #67748e;
      font-size: 14px;
    }
    .avatar-xl {
      width: 74px !important;
      height: 74px !important;
    }
    .border-radius {
      border-radius: 10px;
    }
  }

  .nav-wrapper {
    .nav {
      .nav-item {
        color: ${iconColor};
        .nav-link {
          color: ${color};
          opacity: 0.9;
          font-family: "Open Sans", sans-serif;
          font-size: 16px;
        }
        &:active {
          background-color: white;
          border-radius: 0.5rem;
          z-index: 3;
        }
      }
    }
  }

  .card .card-header {
    background: none;
    border: none;
    .text-sm {
      font-size: 0.875rem !important;
      color: ${iconColor};
    }
  }
  .card .card-body {
    font-family: "Open Sans" sans-serif;
    padding: 1.5rem;

    .rounded-circle {
      position: ab;
    }

    .card.card-plain {
      background-color: transparent;
      box-shadow: none;
    }

    .btn-outline-primary {
      color: #cb0c9f !important;
      border-color: #cb0c9f !important;
      font-size: 12px;
      font-family: "Open Sans" sans-serif;
      font-weight: 400 !important;
      &:hover {
        background-color: white;
        color: #cb0c9f !important;
      }
      &:focus {
        box-shadow: #cb0c9f !important;
      }
    }

    .border-radius-xl {
      border-radius: 1rem;
    }

    .avatars {
      color: #fff;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease-in-out;
    }

    .avatar-group .avatars {
      z-index: 2;
      border: 2px solid #fff;
    }
    .avatar-group{
      position: relative;
      .avatar1{
        position: absolute;
        top: 0;
        left: -80px;
        &:hover{
          z-index: 1000;
        }
      }
      .avatar2{
        position: absolute;
        top: 0;
        left: -66px;
        &:hover{
          z-index: 1000;
        }
      }
      .avatar3{
        position: absolute;
        top: 0;
        left: -55px;
        &:hover{
          z-index: 1000;
        }
      }
      .avatar4{
        position: absolute;
        top: 0;
        left: -45px;
        &:hover{
          z-index: 1000;
        }
      }
      
    }

    .avatars-xs {
      width: 24px !important;
      height: 24px !important;
      font-size: 0.75rem;
      border-radius: 50%;
      position: absolute;
    }

    li,
    .form-check-label {
      color: ${color};
    }

    .text-sm {
      font-size: 0.875rem !important;
      line-height: 1.5;
      font-weight: 400;
    }

    hr.horizontal.gray-light {
      background-image: linear-gradient(
        90deg,
        transparent,
        rgba(0, 0, 0, 0.1),
        transparent
      );
    }
    hr.horizontal {
      background-color: transparent;
    }

    .form-check-input {
      box-shadow: none;
    }
    .form-check-input:checked {
      background-color: rgba(58, 65, 111, 0.95);
      border-color: rgba(58, 65, 111, 0.95);
      box-shadow: none;
    }

    .font-weight-bolder {
      font-weight: 700 !important;
      color: ${color} !important;
      font-size: 12px;
    }
  }
`;

export default ProfileWrapper;
