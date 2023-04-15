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

// core components

function BasicElements() {
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
            <h2 className="title">About Me</h2>
            <br/>
          </p>
          {/*사진이랑 info 나란히 정렬 하기..*/}
          <Row>
            <div style={{ display: "flex", flexDirection: "row", width: '100%'}}>
              <div style={{paddingRight: 100}}>
                <img
                alt="..."
                className="rounded-circle"
                height={400}
                src={require("../../assets/img/ming_profile.jpeg")}
                />
              </div>
              <br/>
              <div style={{textAlign: "left"}}>
                <p className="category">Name: 김민경</p>
                <p className="category">Major: 소프트웨어전공</p>
                <p className="category">2001.03.30</p>
              </div>
            </div>
          </Row>
          <br/><br/><br/>
          <Row>
            <Col md="10">
              {/* <Button color="info" type="button">
                Default
              </Button>
              <Button className="btn-round" color="info" type="button">
                Round
              </Button>
              <Button className="btn-round" color="info" type="button">
                <i className="now-ui-icons ui-2_favourite-28"></i>
                With Icon
              </Button>
              <Button className="btn-icon btn-round" color="info" type="button">
                <i className="now-ui-icons ui-2_favourite-28"></i>
              </Button> */}
              <Button
                className="btn-round"
                color="primary"
                outline
                type="button"
              >
                #Python
              </Button>
              <Button
                className="btn-round"
                color="primary"
                outline
                type="button"
              >
                #Machine_Learning
              </Button>
              <Button
                className="btn-round"
                color="primary"
                outline
                type="button"
              >
                #Deep_Learning
              </Button>
              <Button
                className="btn-round"
                color="primary"
                outline
                type="button"
              >
                #GPT
              </Button>
            </Col>
          </Row>

          {/* <p className="category">Pick your size</p>
          <Row>
            <Col md="10">
              <Button color="info" size="sm">
                Small
              </Button>
              <Button color="info">Regular</Button>
              <Button color="info" size="lg">
                Large
              </Button>
            </Col>
          </Row>
          <p className="category">Pick your color</p>
          <Row>
            <Col md="10">
              <Button color="default">Default</Button>
              <Button color="primary">Primary</Button>
              <Button color="info">Info</Button>
              <Button color="success">Success</Button>
              <Button color="warning">Warning</Button>
              <Button color="danger">Danger</Button>
              <Button className="btn-neutral" color="default">
                Neutral
              </Button>
            </Col>
          </Row>
          <h4>Links</h4>
          <Row>
            <Col md="8">
              <Button color="link">Default</Button>
              <Button className="btn-link" color="primary">
                Primary
              </Button>
              <Button className="btn-link" color="info">
                Info
              </Button>
              <Button className="btn-link" color="success">
                Success
              </Button>
              <Button className="btn-link" color="warning">
                Warning
              </Button>
              <Button className="btn-link" color="danger">
                Danger
              </Button>
            </Col>
          </Row> */}
          
          {/* <p>
            <h6>지현종 군 (? 세)</h6>
          </p>
          <p className="category">
            그는 훗날 가천대학교 컴퓨터공학과에 입학하게 됩니다...
          </p> */}
          <div id="sns" className="space-70"></div>

          {/* SNS */}
          {/* <div id="inputs">
          <p className="text-warning">
            <h3 className="title" >SNS</h3>
          </p>          
            <p className="category" style={{ display: 'flex', flexDirection: 'row'}}>
            <div>
              <NavLink href="https://www.instagram.com/jong_aaaaaaaaa/">
                <FontAwesomeIcon icon={faInstagram} />
                &nbsp;&nbsp;Instagram
              </NavLink>
            </div>            
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
            <div>
              <NavLink href="https://short.bondee.cc/4n4K5IfGP48">
                <FontAwesomeIcon icon={faB} />
                &nbsp;&nbsp;Bondee
              </NavLink>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div>
              <NavLink href="https://www.facebook.com/profile.php?id=100006458500191">
                <FontAwesomeIcon icon={faMeta} />
                &nbsp;&nbsp;Meta
              </NavLink>
            </div>
            </p>
          </div> */}
          <div className="space-70"></div>
          {/* <Row id="checkRadios">
            <Col className="mb-4" lg="3" sm="6">
              <p className="category">Checkboxes</p>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox"></Input>
                  <span className="form-check-sign"></span>
                  Unchecked
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input defaultChecked type="checkbox"></Input>
                  <span className="form-check-sign"></span>
                  Checked
                </Label>
              </FormGroup>
              <FormGroup check disabled>
                <Label check>
                  <Input disabled type="checkbox"></Input>
                  <span className="form-check-sign"></span>
                  Disabled Unchecked
                </Label>
              </FormGroup>
              <FormGroup check disabled>
                <Label check>
                  <Input defaultChecked disabled type="checkbox"></Input>
                  <span className="form-check-sign"></span>
                  Disabled Checked
                </Label>
              </FormGroup>
            </Col>
            <Col className="mb-4" lg="3" sm="6">
              <p className="category">Radios</p>
              <FormGroup check className="form-check-radio">
                <Label check>
                  <Input
                    defaultValue="option1"
                    id="exampleRadios1"
                    name="exampleRadios"
                    type="radio"
                  ></Input>
                  <span className="form-check-sign"></span>
                  Radio is off
                </Label>
              </FormGroup>
              <FormGroup check className="form-check-radio">
                <Label check>
                  <Input
                    defaultChecked
                    defaultValue="option2"
                    id="exampleRadios1"
                    name="exampleRadios"
                    type="radio"
                  ></Input>
                  <span className="form-check-sign"></span>
                  Radio is on
                </Label>
              </FormGroup>
              <FormGroup check className="form-check-radio" disabled>
                <Label check>
                  <Input
                    defaultValue="option3"
                    disabled
                    id="exampleRadios2"
                    name="exampleRadios1"
                    type="radio"
                  ></Input>
                  <span className="form-check-sign"></span>
                  Disabled radio is off
                </Label>
              </FormGroup>
              <FormGroup check className="form-check-radio" disabled>
                <Label check>
                  <Input
                    defaultChecked
                    defaultValue="option4"
                    disabled
                    id="exampleRadios2"
                    name="exampleRadios1"
                    type="radio"
                  ></Input>
                  <span className="form-check-sign"></span>
                  Disabled radio is on
                </Label>
              </FormGroup>
            </Col>
            <Col lg="3" sm="6">
              <p className="category">Toggle Buttons</p>
              <Switch offColor="" offText="" onColor="" onText=""></Switch>
              <br></br>
              <Switch defaultValue={false} offColor="" onColor=""></Switch>
            </Col>
            <Col lg="3" sm="6">
              <p className="category">Sliders</p>
              <div className="slider" id="sliderRegular"></div>
              <br></br>
              <div className="slider slider-primary" id="sliderDouble"></div>
            </Col>
          </Row> */}
        </Container>
      </div>
    </>
  );
}

export default BasicElements;
