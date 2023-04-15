/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav>
          <ul>
            <li>Ming &nbsp;|</li>
            <li>
              <a href="https://github.com/minkyung73" target="_blank">
                GitHub
              </a>
            </li>
            <li>
              <a
                href="http://blog.creative-tim.com?ref=nukr-dark-footer"
                target="_blank"
              >
                About Us
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Created By Ming - Gachon University /
          Department of software engineering .
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
