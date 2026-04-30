import { Link } from "react-router-dom";
import { PREVIEW_MODE } from "../config";

// Renders a normal Link in production. In PREVIEW_MODE, the same element
// is rendered as a non-clickable span — visual integrity is preserved
// but the visitor cannot navigate to other pages.
const NavItem = ({ to, className = "", children, onClick, ...props }) => {
  if (PREVIEW_MODE) {
    return (
      <span className={`${className} cursor-default`} {...props}>
        {children}
      </span>
    );
  }
  return (
    <Link to={to} className={className} onClick={onClick} {...props}>
      {children}
    </Link>
  );
};

export default NavItem;
