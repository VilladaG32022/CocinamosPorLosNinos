import pic01 from '../assets/Img/food_yellow.webp';
import pic02 from '../assets/Img/food_grey.webp';
import pic03 from '../assets/Img/food_white.webp';
import pic04 from '../assets/Img/food_green.webp';
import { MDBIcon } from 'mdb-react-ui-kit';

export const links = {
  HOME: '/',
  DONATE: '/donar',
  LOGIN: '/login',
  VOLUNTEER: '/voluntario',
  SUCCESS: '/successform',
};

export const redirects = {
  home: '/#',
  about: '/#about',
  donate: '/#donacion',
  volunteer: '/#voluntariado',
  news: '/#novedades',
};

export const btns = {
  donar: 'DONÁ!',
  unir: 'UNITE!',
  inscribir: 'INSCRIBITE',
};

export const HomeSec = {
  title: 'COCINAMOS',
  subtitle: 'POR LOS NIÑOS',
  text: 'Somos familias cordobesas unidas con el fin de ayudar a niños que no tienen la posibilidad de tener su plato de comida todos los dias.',
};

export const AboutSec = [
  {
    title: 'Somos CPLN',
    text: 'Nos esforzamos para poder cubrir la alimentación de niños a través de comedores, centros vecinales, organizaciones y fundaciones. Somos familias unidas con ganas de ayudar. Y nos dividimos en roles como: Voluntarios, Cocina, Gestión y Donantes',
    src: pic01,
  },

  {
    title: 'Que hacemos',
    text: 'Creamos menús para que las familias sean capaces de cocinar en sus casas. Determinamos células de trabajo que organizamos según la necesidad y disponibilidad de los integrantes. Receta, ingredientes y cocción es el proceso por donde pasa el menú para luego sistematizar el embalaje y envío al destino.',
    src: pic02,
  },

  {
    title: 'Servicios',
    text: 'Con las familias colaboramos y brindamos servicios para lograr los objetivos de la organización: Apoyo alimenticio a niños de diferentes zonas de Córdoba. Reparación y refuncionalización de los comedores. Logística de elementos para poder alimentar a los niños. Charlas informativas a familias y voluntarios.',
    src: pic03,
  },

  {
    title: 'Contacto',
    text: (
      <div>
        <p className="about__option">
          <MDBIcon icon="phone" className="me-3" href="tel:3516219319" />+ 351 621 9319
        </p>
        <p className="about__option">
          <MDBIcon fas icon="envelope" className="me-3" />
          cocinamosporlosniños@gmail.com
        </p>
        <p className="about__option">
          <MDBIcon fas icon="home" className="me-3" />
          Coronel Juan Beverina 2068
        </p>
        <p className="about__option">
          <MDBIcon fas icon="home" className="me-3" />
          Barrio Jardin Claret M24 L4
        </p>
      </div>
    ),
    src: pic04,
  },
];

export const VolunteerSec = {
  title: 'VOLUNTARIADO',
  text: 'Cocinamos por los niños porque sabemos que nos necesitan. Todos los integrantes de CPLN son conscientes del apoyo que brindan a los infantes a los que ayudan. Y partimos de lo básico que es que el alimento permite a los niños desarrollarse física y emocionalmente para poder tener una educación y vida sana.',
};

export const DonateSec = {
  title: 'DONACIONES',
  text: 'Sabemos desde el principio que comprometerse con el voluntariado no es fácil. Por eso siempre les decimos a las familias que con sólo un poquito, están aportando mucho. Sea cual sea tu donación, parezca pequeña o grande, nos brinda, primero, más niños con un plato de comida en su mesa y segundo un mensaje de que vamos por un buen camino. Las donaciones no asumen ningún tipo de compromiso futuro, aunque siempre estaremos esperando una próxima vez, para revalidar que estás de acuerdo con lo que hacemos y desde que donas, pasas a ser parte de CPLN.',
};

export const PricingSec = [
  {
    title: 'DONACIONES',
    text: (
      <p>
        Con tu aporte, por más pequeño que sea, estás poniendo un plato en la mesa de un niño. <br></br> <br></br>
        Mediante donaciones, tanto monetarias como alimenticias, nos podes dar una mano para cumplir nuestro objetivo de ayudar a los niños que nos necesitan. <br></br> <br></br>
        Para donar alimentos o mercaderia, contactate con nosotros o acercate a algunos de nuestros puntos.
      </p>
    ),
  },
];

export const PricingCardSec = {
  title: 'DONACIONES',
  text: 'Sabemos que es difícil comprometerse con el voluntariado porque existe mucho descreimiento y desconfianza. Por eso nos unimos familias que sólo quieren aportar un poquito que realmente es muchísimo . Tu donación por más chica que sea nos brindará primero apoyo de saber que estamos por un buen camino y luego seguramente un niño más podrá alimentarse. Las donaciones no son obligatorias ni asumen ningún compromiso futuro, seguro que siempre estaremos esperando una próxima vez, para revalidar de parte tuya que estás de acuerdo en este camino que emprendemos de ahora en más juntos.',
};
