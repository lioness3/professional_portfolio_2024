import PropTypes from "prop-types";
import "./styles/header.css";
export default function Header({ content, color }) {
  return (
    <div className="header-card">
      {/* uses predefined character entities to look like "<Content/>" */}
      <p className="header-title">
        &lt;<span style={{ color }}>{content}</span> &frasl; &gt;
      </p>
    </div>
  );
}
// define content as a type string
Header.propTypes = {
  content: PropTypes.string,
  color: PropTypes.string,
};
