import React from "react";
// reactstrap components

import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function Tabs() {
  const [iconPills, setIconPills] = React.useState("1");
  const [pills, setPills] = React.useState("1");
  return (
    <>
      <div id="memo"></div>
      <div className="section section-tabs">
        <Container>
          <div className="text-warning">
            <h3 className="title">Memo</h3>
          </div>
          <Row>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <p className="category">For ME</p>
              <Card>
                <CardHeader>
                  <Nav className="justify-content-center" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={iconPills === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("1");
                        }}
                      >
                        <i className="now-ui-icons objects_umbrella-13"></i>
                        Profile
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("2");
                        }}
                      >
                        <i className="now-ui-icons shopping_cart-simple"></i>
                        Hobby
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "3" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("3");
                        }}
                      >
                        <i className="now-ui-icons shopping_shop"></i>
                        Messages
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "4" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("4");
                        }}
                      >
                        <i className="now-ui-icons ui-2_settings-90"></i>
                        To Do
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    // className="text-center"
                    activeTab={"iconPills" + iconPills}
                  >
                    <TabPane tabId="iconPills1">
                      <p>
                        가천대학교 컴퓨터공학과에 재학중인 18학번 지현종입니다.
                        <br />
                        <br />
                        &nbsp; - Github : https://github.com/JongAAAAAAAAA
                        <br />
                        &nbsp; - E-Mail : wlguswhd0809@naver.com
                      </p>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <p>
                        전 음악과 영화 감상을 좋아합니다. <br />
                        <br />
                        특히 음악은 등교할 때마다 꼭 듣습니다.
                        <br />
                        막히는 길에서 제 마음만큼은 뻥 뚫어주기 때문입니다.
                        <br />
                        하루의 시작을 상쾌하게 해주고, 또 졸음도 쫓아줍니다!
                        <br />
                        <br />
                        영화는 영화 제목이 눈에 띄면 관심을 갖고 시간을 내서
                        관람합니다.
                        <br />
                        그러나, 영화관은 CGV만 간답니다. 왜냐하면 코카콜라를
                        팔거든요!
                        <br />
                        하도 많이가서 VVIP 등급 이랍니다!
                      </p>
                    </TabPane>
                    <TabPane tabId="iconPills3">
                      <p>
                        안녕하세요! <br />
                        저는 컴퓨터공학과에 재학중인 지현종입니다. <br />
                        <br />
                        저는 다양한 경험을 통해 삶에서 느끼는 소소한 것들에도
                        감사하며,
                        <br />
                        항상 새로운 도전을 통해 성장하고 발전하는 것을 추구하고
                        있습니다.
                        <br />
                        <br />
                        다른 사람들과 함께 이야기하고 공유하는 것을 좋아하며,
                        <br />
                        인간관계를 소중히 여기고 대인관계를 발전시키는 것에
                        관심이 많습니다.
                      </p>
                    </TabPane>
                    <TabPane tabId="iconPills4">
                      <p>
                        1. 개인 페이지 마무리
                        <br />
                        2. Edge Device 생각하기
                        <br />
                        3. 받은 책 1회독 (중간고사 전 까지)
                        <br />
                        4. 메인 페이지 생각하기
                        <br />
                        5. 알고리즘 공부
                      </p>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <p className="category">For OTHERS</p>
              <Card>
                <CardHeader>
                  <Nav
                    className="nav-tabs-neutral justify-content-center"
                    data-background-color="blue"
                    role="tablist"
                    tabs
                  >
                    <NavItem>
                      <NavLink
                        className={pills === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("1");
                        }}
                      >
                        Home
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("2");
                        }}
                      >
                        To Be Happy
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "3" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("3");
                        }}
                      >
                        Messages
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "4" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("4");
                        }}
                      >
                        Quotes
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    // className="text-center"
                    activeTab={"pills" + pills}
                  >
                    <TabPane tabId="pills1">
                      <p>
                        안녕하세요!
                        <br /> 제 홈페이지를 들려주신 모든 분들이 행복하셨으면
                        좋겠습니다. <br />
                        <br />
                        날씨가 들쑥날쑥한 요즘, 날씨 잘 확인하시어 건강 잘
                        챙기시길 바랍니다. <br />
                        올해에는 건강과 행운이 함께하시길 바랍니다. <br />{" "}
                        <br />
                        새로운 계획과 목표를 세우고 이루어내는 즐거움을 느끼며
                        행복한 한 해가 되시길 기원합니다. <br />
                        <br />
                        새해에도 언제나 밝은 미소와 긍정적인 에너지로 빛나는
                        모습으로 많은 사람들에게 행복을 나눠주세요.
                      </p>
                    </TabPane>
                    <TabPane tabId="pills2">
                      <p>
                        감사의 마음 유지하기 :<br /> 일상적으로 감사할 수 있는
                        것들에 대해 생각하며, 이를 표현하는 것이 중요합니다.
                        자신의 가족, 친구, 건강, 일자리, 자연 등 생활에서 당연시
                        여기기 쉬운 것들에 감사하는 마음을 가지는 것이 좋습니다.
                        <br />
                        <br />
                        운동하기 :<br /> 운동은 스트레스를 해소하고, 더욱
                        건강하고 긍정적인 마음을 유지하는 데 도움을 줍니다.
                        일주일에 적어도 몇 번씩 조금씩이라도 운동을 하는 것이
                        좋습니다.
                        <br />
                        <br />
                        취미 생활하기 :<br /> 자신이 좋아하는 취미를 가지고
                        꾸준히 즐기는 것도 행복을 느끼는데 도움이 됩니다. 취미를
                        가진다는 것은 자신만의 시간을 가져 새로운 것을 배우며,
                        성취감과 만족감을 느낄 수 있다는 것입니다.
                      </p>
                    </TabPane>
                    <TabPane tabId="pills3">
                      <p>
                        이 편지는 영국에서 최초로 시작되어 일년에 한바퀴를
                        돌면서 받는 사람에게 행운을 주었고 지금은 당신에게로
                        옮겨진 이 편지는 4일 안에 당신 곁을 떠나야 합니다. 이
                        편지를 포함해서 7통을 행운이 필요한 사람에게 보내 주셔야
                        합니다. 복사를 해도 좋습니다. 혹 미신이라 하실지
                        모르지만 사실입니다.
                        <br />
                        영국에서 HGXWCH이라는 사람은 1930년에 이 편지를
                        받았습니다. 그는 비서에게 복사해서 보내라고 했습니다.
                        며칠 뒤에 복권이 당첨되어 20억을 받았습니다. 어떤 이는
                        이 편지를 받았으나 96시간 이내 자신의 손에서 떠나야
                        한다는 사실을 잊었습니다. 그는 곧 사직되었습니다.
                        나중에야 이 사실을 알고 7통의 편지를 보냈는데 다시 좋은
                        직장을 얻었습니다. 미국의 케네디 대통령은 이 편지를
                        받았지만 그냥 버렸습니다. 결국 9일 후 그는
                        암살당했습니다. 기억해 주세요. 이 편지를 보내면 7년의
                        행운이 있을 것이고 그렇지 않으면 3년의 불행이 있을
                        것입니다. 그리고 이 편지를 버리거나 낙서를 해서는 절대로
                        안됩니다. 7통입니다. 이 편지를 받은 사람은 행운이
                        깃들것입니다. 힘들겠지만 좋은게 좋다고 생각하세요. 7년의
                        행운을 빌면서...
                      </p>
                    </TabPane>
                    <TabPane tabId="pills4">
                      <p>
                        "당신이 할 수 있다고 믿든, 할 수 없다고 믿든, 믿는 대로
                        될 것이다."
                        <br /> - 헨리 포드
                        <br />
                        "너무나 바쁘게 살아가다 보면, 자신이 무엇을 원하는지
                        잊어버리기 쉽다."
                        <br /> - 웬디 와슨
                        <br />
                        "성공한 사람이 되기 위해서는 실패를 100번 이상 경험해야
                        한다."
                        <br /> - 알버트 아인슈타인
                        <br />
                        "한 걸음씩 나아가다 보면, 언젠가는 당신이 원하는 모든
                        것을 얻을 수 있다."
                        <br /> - 마이크 크레츠
                        <br />
                        "성공은 잘할 수 있는 것과 좋아하는 것을 찾는 것이다."
                        <br /> - 데일 카네기
                      </p>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Tabs;
