import Donation from '../pages/donate/index';
import Home from '../pages/home/index';
import Volunteer from '../pages/volunteer/index';
import SuccessForm from '../pages/form/index';


import BasicLayout from '../layouts/basiclayout';
import Layout from '../layouts/layout';

import { links } from '../utils/constants';

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
    component: SuccessForm,
    layout: BasicLayout,
    path: links.SUCCESS,
  }

];
const routes = [...routesClient];

export default routes;
