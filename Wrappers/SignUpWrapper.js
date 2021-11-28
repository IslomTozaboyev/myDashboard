import styled from "styled-components";


const SignUpWrapper = styled.div`
    .big-container {
        height: 450px;
        padding: 0;
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
        background-size: cover;
        background-position: 50%;
        background-image: url('https://demos.creative-tim.com/soft-ui-dashboard/assets/img/curved-images/curved14.jpg');       
       /* position: relative; */
       /* .mask{
           position: absolute;
           top: 0;
           left: 0;
           width: 100%;
           height: 100%;
           opacity: 0;
           background-position: 50%;
       }
       .bg_gradient {
            background-image: linear-gradient( 310deg, #141727, #3a416f);
        } 
        .opacity{
            opacity: .6;
        } */
        .bbuy {
            background-image: linear-gradient( 310deg,#7928ca,#ff0080);
        }
        ul {
            li {
                margin-left: 25px;
            }
        }
       
    }
    .small-container {
        margin-top: -150px;
        input {
            border: 1px solid gray;
            outline: none;
        }
        .bsign {
            background-image: linear-gradient(310deg,#141727,#3a416f);
        }
    }
    a {
        color: white;
        &:hover {
            color: rgba(158,158,158,1);
        }
    }
    .button-link {
        color: gray !important;
        margin-right: 30px;
    }
`;

export default SignUpWrapper;