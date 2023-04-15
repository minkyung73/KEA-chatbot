/*eslint-disable*/
import React from "react";

import ScrollIntoView from "react-scroll-into-view";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlane,
  faCircleInfo,
  faDiagramProject,
  faThumbsUp,
  faBook,
} from "@fortawesome/free-solid-svg-icons";

// reactstrap components
import { Container, Button } from "reactstrap";
// core components

const btnStyle = {
  padding: ".375rem .75rem",
  border: "1px",
  fontSize: "1rem",
};

function IndexHeader() {
  // const InfoRef = useRef();

  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header " filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" + require("../../assets/img/bg-image4.jpeg") + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <img
              alt="..."
              className="n-logo"
              src={require("../../assets/img/eagle3.png")}
              style={{ paddingLeft: 300 }}
            ></img>
            <h1
              className="title"
              style={{ textAlign: "left", fontSize: "3.14rem" }}
            >
              <span className="text-warning">독수리오남매</span>
              <span> 다섯째,</span>
              <br />
              <span>저는 </span>
              <span className="text-warning">김민경</span>
              <span>입니다.</span>
            </h1>
            {/* <h3 className="title"><span>저는 </span><span className="text-warning">지현종</span><span>입니다.</span></h3> */}
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div>
              {/* 여기에 넣어야함 그 순간이동버튼 */}
              <div style={{ display: "flex", flexDirection: "row" }}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <ScrollIntoView selector="#info" style={btnStyle}>
                  <Button className="btn-round" color="warning" type="button">
                    <FontAwesomeIcon icon={faCircleInfo} />
                    <span>&nbsp;&nbsp;To Info</span>
                  </Button>
                </ScrollIntoView>
                <ScrollIntoView selector="#sns" style={btnStyle}>
                  <Button className="btn-round" color="warning" type="button">
                    <FontAwesomeIcon icon={faThumbsUp} />
                    <span>&nbsp;&nbsp;To SNS</span>
                  </Button>
                </ScrollIntoView>
                <ScrollIntoView selector="#projects" style={btnStyle}>
                  <Button className="btn-round" color="warning" type="button">
                    <FontAwesomeIcon icon={faDiagramProject} />
                    <span>&nbsp;&nbsp;To Projects</span>
                  </Button>
                </ScrollIntoView>
                <ScrollIntoView selector="#travel" style={btnStyle}>
                  <Button className="btn-round" color="warning" type="button">
                    <FontAwesomeIcon icon={faPlane} />
                    <span>&nbsp;&nbsp;To Travel</span>
                  </Button>
                </ScrollIntoView>
                <ScrollIntoView selector="#memo" style={btnStyle}>
                  <Button className="btn-round" color="warning" type="button">
                    <FontAwesomeIcon icon={faBook} />
                    <span>&nbsp;&nbsp;To Memo</span>
                  </Button>
                </ScrollIntoView>
              </div>
            </div>
          </div>

          <h6 className="category category-absolute">
            Created by ming - Gachon University / Department of software engineering
            {/* <a href="http://invisionapp.com/?ref=creativetim" target="_blank">
              <img
                alt="..."
                className="invision-logo"
                src={require("../../assets/img/invision-white-slim.png")}
              ></img>
            </a>
            Coded by{" "}
            <a
              href="https://www.creative-tim.com?ref=nukr-index-header"
              target="_blank"
            >
              <img
                alt="..."
                className="creative-tim-logo"
                src={require("../../assets/img/creative-tim-white-slim2.png")}
              ></img>
            </a> */}
          </h6>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
