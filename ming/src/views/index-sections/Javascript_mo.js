import React from "react";

// react plugin used to create switch buttons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faMeta } from "@fortawesome/free-brands-svg-icons";
import { faB } from "@fortawesome/free-solid-svg-icons";

import Switch from "react-bootstrap-switch";
// plugin that creates slider
import Slider from "nouislider";

// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  // InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  NavLink,
} from "reactstrap";
import Javascript from "./Javascript";

// core components

function Javascript_mo() {
  const [leftFocus, setLeftFocus] = React.useState(false);
  const [rightFocus, setRightFocus] = React.useState(false);
  // const InfoRef = useRef();
  // const infoClick = () =>
  //   InfoRef.current.scrollIntoView({
  //     behavior: 'smooth',
  //     block: 'start',
  //   });
  // React.useEffect(() => {
  //   if (
  //     !document
  //       .getElementById("sliderRegular")
  //       .classList.contains("noUi-target")
  //   ) {
  //     Slider.create(document.getElementById("sliderRegular"), {
  //       start: [50],
  //       connect: [true, false],
  //       step: 0.5,
  //       range: { min: 0, max: 100 },
  //     });
  //   }
  //   if (n
  //     !document.getElementById("sliderDouble").classList.contains("noUi-target")
  //   ) {
  //     Slider.create(document.getElementById("sliderDouble"), {
  //       start: [20, 80],
  //       connect: [false, true, false],
  //       step: 1,
  //       range: { min: 0, max: 100 },
  //     });
  //   }
  // });
  return (
    <>
      <div className="section section-basic" id="basic-elements">
        <Container>
          {/* <div ref={InfoRef}></div> */}
          <p id="info" className="text-warning">
            <br></br>
            <h2 className="title">Project</h2>
            <br/>
          </p>
          {/*사진이랑 info 나란히 정렬 하기..*/}
          <Row>
            <div style={{ display: "table", flexDirection: "row", width: '100%'}}>
              <div style={{paddingRight: 100, display: "table-cell"}}>
                <img
                    alt="..."
                    // className="rounded-circle"
                    height={400}
                    src={require("../../assets/img/ming_project1.png")}
                    />
                </div>
                <br/>
                <div style={{textAlign: "left"}}>
                    <h3 className="project">졸업작품</h3>
                    <h4 className="project_name">U-Friends</h4>
                    <p className="category">유프렌즈는 심리상담 챗봇으로, 사용자의 감정을 분석하여 심리상담을 진행합니다.</p>
              </div>
            </div>
          </Row>
          <br/><br/><br/><br/><br/><br/><br/><br/>
          <Row>
            <div style={{ display: "table", flexDirection: "row", width: '100%'}}>
              <div style={{textAlign: "right", paddingLeft: 20}}>
                <h3 className="project">그래픽스</h3>
                <h4 className="project_name">Cubi Game</h4>
                <p className="category">큐비게임은 세 단계에 걸쳐 좀비를 물리치고 미션을 완수하는 게임입니다.</p>
              </div>
              <br/>
              <div style={{paddingLeft: 30, display: "table-cell"}}>
                <img
                alt="..."
                // className="rounded-circle"
                height={400}
                src={require("../../assets/img/ming_project2.png")}
                />
              </div>
            </div>
          </Row>
          <br/><br/><br/><br/><br/><br/><br/><br/>
          <Row>
            <div style={{ display: "table", flexDirection: "row", width: '100%'}}>
              <div style={{paddingRight: 100, display: "table-cell"}}>
                <img
                alt="..."
                // className="rounded-circle"
                height={400}
                src={require("../../assets/img/ming_project3.png")}
                />
              </div>
              <br/>
              <div style={{textAlign: "left"}}>
                <h3 className="project">모바일 프로그래밍</h3>
                <h4 className="project_name">Perfect Day</h4>
                <p className="category">퍼펙트 데이는 완벽한 하루를 보내기 위한 루틴 관리 앱입니다.</p>
              </div>
            </div>
          </Row>

          
          <br/><br/><br/>
          
          
          <div className="space-70"></div>
          
        </Container>
      </div>
    </>
  );
}

export default Javascript_mo;
