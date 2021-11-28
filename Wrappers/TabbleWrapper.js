import styled from "styled-components";
const TableWrapper = styled.div`
  .tableShadow {
    box-shadow: 0 20px 27px 0 rgb(0 0 0 / 5%);
    background-color: white;
  }
.table{
    .table_links{
        color: grey;
        font-size: 12px;
    }
    .text-xxs{
        font-size: .65rem;
        color: #AAB5C5;
    }
    .table_img{
        width: 40px;
        height: 40px;
        border-radius: 30%;
    }
    .bg_online{
        background-image: linear-gradient(310deg,#17ad37,#98ec2d);
        font-size: 13px;
    }
    .bg_ofline{
        background-color: #96A7C6;
        font-size: 13px;    
    }
  .bg_online , .bg_ofline {
    min-width: 54px;
  }
}   
.text-xs {
    line-height: 1.25;
    font-size: .75rem;
}
  .project_img {
    width: 30px;
    height: 30px;
  }
  .text-sm {
    font-size: .875rem;
    font-weight: 600;
  }
  .progres_line {
    background-color: #E9ECEF;
    min-width: 150px;
    max-width: 150px;
    height: 4px;
    border-radius: 10px;
    .progres_line_info {
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      height: 130%;
      border-radius: 10px;
    }
  }
`;
export default TableWrapper;