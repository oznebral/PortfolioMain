import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
// import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <div className="project-links">
                <a
                  href="https://github.com/oznebral/ReactInvoiceGenerator"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="javacript;;" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>{" "}
              </div>
            </header>
            <div className="body">
              <h3>Invoice Generator</h3>
              <p>
                This project was created with CRA (Create React App) An Invoice
                builder project built with React. Add itemized items, configure
                quantity, prices and tax rates, discounts. Download the invoice
                as PDF to your device.
              </p>
            </div>
            <footer>
              {" "}
              <ul className="tech-list">
                {" "}
                <li>React</li> <li>React Bootstrap</li> <li>Html</li>{" "}
                <li>Css</li> <li>Js</li>{" "}
              </ul>{" "}
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <div className="project-links">
                <a
                  href="https://github.com/oznebral/PortfolioMain"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />{" "}
                </a>
                <a href="javacript;;" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Portfolio</h3>
              <p>
                This project was created with CRA (Create React App) This is my
                portfolio website to introduce myself, here I put my skills,
                projects, and contact details.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>TypeScript</li>
                <li>React</li>
                <li>LangChain</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <div className="project-links">
                <a
                  href="https://github.com/oznebral/Budgetly-App"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a
                  href="https://github.com/oznebral/Budgetly-App"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Budgetly App</h3>
              <p>
                A personal finance and budget management application built with
                React &amp; TypeScript. Features include a Dashboard overview,
                Transactions tracking, Budget planning, and Analytics with
                interactive charts powered by Recharts.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>TypeScript</li>
                <li>TailwindCSS</li>
                <li>Recharts</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
