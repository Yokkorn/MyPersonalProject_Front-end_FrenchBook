import { Link } from "react-router-dom";

export default function MenuItem({ children, active, to }) {
  return (
    <Link to={to} className={`pt-2 ${active ? "opacity-100" : "opacity-40"}`}>
      {children}
    </Link>
  );
}
