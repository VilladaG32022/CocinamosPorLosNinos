import Donation from "../pages/donate/index";
import Home from "../pages/home/index";


import BasicLayout from "../layouts/basiclayout";
import Layout from "../layouts/layout";

import { links } from "../utils/constants";

const routesClient = [
  {
    component: Home,
    layout: BasicLayout,
    path: "/",
  },
  {
    component: Home,
    layout: BasicLayout,
    path: links.HOME,
  },
  {
    component: Donation,
    layout: Layout,
    path: links.DONATE,
  },
];
const routes = [...routesClient];

export default routes;
