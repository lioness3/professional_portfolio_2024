import PropTypes from "prop-types";
import "./styles/creation.css";
import { AiFillGithub } from "react-icons/ai";
import { AiFillCloseCircle } from "react-icons/ai";
export default function Creation({
  title,
  description,
  language,
  wireframe,
  contributions,
  colors,
  afterthoughts,
  demo,
  gitLink,
  onClose,
}) {
  return (
    <div className="creation-section">
      <div className="prj-card">
        <p className="prj-header"> Title:</p>
        <p className="prj-title">{title}</p>
        <AiFillCloseCircle className="close-btn" onClick={onClose} />
      </div>

      <div className="inline-info prj-card">
        <p className="prj-header">Technology:</p>
        <div className="tech-container">
          {language.map((img, index) => (
            <img
              src={img}
              key={index}
              className="tech-used"
              alt={"technology used"}
            />
          ))}
        </div>
        <p className="prj-header"> Color Palette:</p>
        <div className="color-palette-cont">
          {colors.map((pcolor, index) => (
            <div
              className="color-block"
              style={{ backgroundColor: pcolor }}
              key={index}
            ></div>
          ))}
        </div>
      </div>
      <div className="prj-card">
        <p className="prj-header"> Description:</p>
        <p className="prj-content">{description}</p>
      </div>
      {/* <div className="prj-card">
        <p className="prj-header"> Demo:</p>
        <div className="video-container">
          <video className="creation-video" controls>
            <source src={demo} type="video/mp4" />
          </video>
        </div>
      </div> */}

      <div className="prj-card">
        <p className="prj-header">Contributions:</p>
        <p className="prj-content">{contributions}</p>
      </div>
      <div className="prj-card">
        <p className="prj-header"> Afterthoughts:</p>
        <p className="prj-content">{afterthoughts}</p>
      </div>
      {/* If there is a git repo, show the icon with a link to that source code */}

      {gitLink ? (
        <div className="git-link-container">
          View the source code:
          <a href={gitLink} target="_blank" rel="noopener noreferrer">
            <AiFillGithub size={24} color={"var(--button-color)"} />
          </a>
        </div>
      ) : null}
    </div>
  );
}
Creation.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  language: PropTypes.array,
  contributions: PropTypes.string,
  colors: PropTypes.array,
  afterthoughts: PropTypes.string,
  demo: PropTypes.string,
  wireframe: PropTypes.string,
  gitLink: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};
