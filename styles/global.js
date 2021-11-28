import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body{
        background-color: #F8F9FA;
        overflow-x: hidden;
    }

    ul{
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    a, a:hover{
        text-decoration: none;
        color: black;
        display: inline-block;
    }

    .myshadow{
        box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2);
    }

    .shadow{
        box-shadow: 0 .25rem .375rem -.0625rem hsla(0,0%,8%,.12),0 .125rem .25rem -.0625rem hsla(0,0%,8%,.07) !important;
    }

    .rounded{
        border-radius: 8px !important;
    }
    .sidebar_res{
        margin: 10px 50px;
    }
    .sidebar_res {
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
        }}}
    }
    .toolip{

    }

    #nprogress{
        height: 100vh !important;
        .spinner{
            top:0;
            right: 0;
            width: 100% !important;
            height: 100vh !important;
            display:flex;
            justify-content:center;
            align-items:center;
            background-color: #33333333;
            .spinner-icon{
            width: 60px !important;
            height: 60px !important;
            }
        }
    }
`;

export default GlobalStyles;
