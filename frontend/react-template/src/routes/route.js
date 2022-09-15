import Volunteer from "../pages/volunteer/volunteer";
import Donation from "../pages/donate/donation"
import Home from "../pages/home/home";
import LogIn from "../pages/Log-In/Log-In"


import BasicLayout from "../layouts/basiclayout";
import Layout from "../layouts/layout"


import { links } from '../utils/constants'

const routesClient = [

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
    {
        component: Volunteer,
        layout: Layout,
        path: links.VOLUNTEER,

    },
    {
        component: LogIn,
        layout: Layout,
        path: links.LOGIN,

    },
];
const routes = [...routesClient];

export default routes;

