import Agency from "../Pages/Agency/Agency";
import Login from "../Pages/Auth/Login/Login";
import Registration from "../Pages/Auth/Registration/Registration";
import ResetPass from "../Pages/Auth/ResetPass/ResetPass";
import Home from "../Pages/Home/Home";
import Profile from "../Pages/Profile/Profile";
const openRoute = [
  { path: "/login", component: Login },
  { path: "/registration", component: Registration },
  { path: "/recovery-pass", component: ResetPass },
];
const PrivetRoute = [
  { path: "/", component: Home },
  { path: "/agency", component: Agency },
  { path: "/profile", component: Profile },
];
export { openRoute, PrivetRoute };
