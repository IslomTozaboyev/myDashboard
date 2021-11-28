import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@material-ui/core";
import Link from "next/link";
import React from "react";

const Page404 = () => {
  return (
    <>
      <Button variant="contained" color="primary" className="m-5 ">
        <Link href="/">
          <a className="text-white">
            <FontAwesomeIcon className="me-2" icon={faHome} />
            Home
          </a>
        </Link>
      </Button>
      <div className="d-flex justify-content-center align-items-center my-5">
        <img
          src="http://lamcdn.net/lookatme.ru/post_image-image/sIaRmaFSMfrw8QJIBAa8mA-small.png"
          alt=""
        />
      </div>
    </>
  );
};

export default Page404;
