import PropTypes from "prop-types";
const Span = ({ level, children }) => {
  const SpanTag = `h${level}`;
  const getSpanStyles = (level) => {
    switch (level) {
      case "success":
        return "font-Kumbh Sans font-[30px] leading-relaxed font-normal text-[#5E606280]";

      default:
        return "text-lg"
    }

  }
  const SpanStyle = getSpanStyles(level);
  return <SpanTag className={SpanStyle}>{children}</SpanTag>
};
Span.PropTypes = {
  level: PropTypes.oneOf(["success", "footer", "3", "4", "5", "6"])
};
export default Span
