import "@../../../app/globals.css"
import PropTypes from 'prop-types';

const AnchorTag = ({ href = '#', children, variant = '', onclick, onMouseEnter, onMouseLeave }) => {
  let anchorStyle = "";

  switch (variant) {

    case "nav":
      anchorStyle = 'font-Kumbh Sans font-[16px] font-normal leading-relaxed text-[#5E606280] '

      break;


    default:
      anchorStyle = "";
  }

  return (
    <a className={anchorStyle} onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter} onClick={onclick} href={href}>{children}</a>
  );
};

AnchorTag.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  variant: PropTypes.string
};

export default AnchorTag;