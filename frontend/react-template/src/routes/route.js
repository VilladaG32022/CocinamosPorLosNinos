import Volunteer from "../pages/volunteer/volunteer";
import Donation from "../pages/donate/donation";
import Home from "../pages/home/home";
import BasicLayout from "../layouts/basiclayout";
import Layout from "../layouts/layout";
import LogIn from "../pages/Log-In/Log-In";
import NormalUser from "../pages/Users/NormalUser";
import UserLayout from "../layouts/userlayout";
const routesClient = [
  {
    component: Home,
    layout: BasicLayout,
    path: "/",
  },

  {
    component: Donation,
    layout: BasicLayout,
    path: "/donacion",
  },
  {
    component: Volunteer,
    layout: BasicLayout,
    path: "/voluntario",
  },
  {
    component: LogIn,
    layout: Layout,
    path: "/login",
  },
  {
    component: NormalUser,
    layout: UserLayout,
    path: "/usuario",
  },
];
const routes = [...routesClient];

export default routes;
