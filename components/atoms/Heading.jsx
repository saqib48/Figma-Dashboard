import PropTypes from "prop-types";

const Heading = ({ level, children }) => {
  const HeadingTag = `h${level}`;

  const getHeadingStyles = (level) => {
    switch (level) {
      case "1":
        return "font-Kumbh Sans font-[30px] leading-relaxed font-medium text-black";
      case "2":
        return " text-[15px]  font-semibold text-[#5E6062] ";

      default:
        return "text-lg";
    }
  };

  const headingStyles = getHeadingStyles(level);

  return <HeadingTag className={headingStyles}>{children}</HeadingTag>;
};

Heading.propTypes = {
  level: PropTypes.oneOf(["1", "2", "3", "4", "5", "6", "7", "8", "9 ", "10 ", " 11", "12 ", "13", "14", "15 ", "16 ", " 17"]).isRequired,
};

export default Heading;