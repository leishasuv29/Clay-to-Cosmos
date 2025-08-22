import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, role }) {
  const { user } = useSelector((s) => s.user);
  const user_role = user?.role || localStorage.getItem("role");

  if (!user?.token) {
    return <Navigate to="/user" replace />;
  }

  if (role && user_role !== role) {
    console.log("Mismatch role → user:", user_role, " expected:", role);
    return <Navigate to="/" replace />;
  }

  return children;
}
