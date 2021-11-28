import styled from "styled-components";

const SignInWrapper = styled.div`
  position: relative;
  .bac {
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background-image: url("https://demos.creative-tim.com/soft-ui-dashboard/assets/img/curved-images/curved6.jpg");
    clip-path: polygon(67% 0, 100% 0, 100% 100%, 43% 100%);
    z-index: 9;
    background-position: right center;
  }
  @media screen and (max-width: 986px) {
    .bac {
      display: none !important;
    }
  }
  .container {
    z-index: 999;
    position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .clas {
      margin-top: 100px;
      height: 500px;
    }
  }
  h3 {
    color: rgba(0, 192, 233, 1);
  }
  li,
  p {
    color: grey;
  }
  .but1 {
    background: linear-gradient(135deg, #3a416f 0%, #141727 100%);
    color: white;
  }

  a {
    color: gray;
    &:hover {
      color: rgba(158, 158, 158, 1);
    }
  }
  .button-link {
    color: gray !important;
    margin-right: 30px;
  }
  .nav {
    background-color: #ffffff66;
    position: fixed;
    width: 80%;
    top: 10px;
    z-index: 1000;
  }
  .bsign,
  .bsign:hover,
  .bsign:focus {
    background-color: rgba(0, 192, 233, 1);
  }
  input {
    border: 1px solid gray;
    outline: none;
  }
`;

export default SignInWrapper;
//https://demos.creative-tim.com/soft-ui-dashboard/assets/img/curved-images/curved6.jpg
