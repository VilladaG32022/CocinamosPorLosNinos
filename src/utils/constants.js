import pic01 from '../assets/Img/food_yellow.png';
import pic02 from '../assets/Img/food_grey.png';
import pic03 from '../assets/Img/food_white.png';
import pic04 from '../assets/Img/food_green.png';

export const links = {
  HOME: '/',
  DONATE: '/donar',
  LOGIN: '/login',
  VOLUNTEER: '/voluntario',
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
  text: 'Somos familias que nos unimos para ayudar a niños con dificultades para alimentarse. Formamos células de trabajo para poder dividir todas las tareas que realizamos y cumplir el objetivo principal: ayudar a familias que no pueden alimentar a a sus hijos',
};

export const AboutSec = [
  {
    title: 'Somos CPLN',
    text: 'Nos organizamos para poder cubrir la cuota básica de alimentación de muchos niños en diferentes zonas a través de comedores, centros vecinales, organizaciones y fundaciones. Nos unimos familias con ganas de ayudarnos a ayudar. Nuestro organigrama y roles está dividido en: Familias de voluntariado, Voluntarios de cocina, Voluntarios de gestión y donantes',
    src: pic01,
  },

  {
    title: 'Que hacemos',
    text: 'Desarrollamos Menús que podemos cocinar en diferentes casas de las familias participantes. Se determina una célula de trabajo la que se organiza según necesidad y disponibilidad de los integrantes. Cada menú tiene un desarrollo de receta, ingredientes y cocción para luego sistematizar el embalaje y envío al destino. Cada uno de los menús tiene aportes de carnes y vegetales para cubrir una dieta lo mas completa posible en cada entrega',
    src: pic02,
  },

  {
    title: 'Servicios',
    text: 'Toda nuestra comunidad de familias colabora y brinda sus servicios para que se logren los objetivos de la organización entre los que contamos: Apoyo alimentario a niños de diferentes zonas de Córdoba. Ayuda en reparación o refuncionalización de comedores. Entrega de elementos para poder alimentar a los niños. Generación de charlas informativas a familias e integrantes del equipo. Charlas informativas a organizadores comunitarios de comedores, clubres capillas, etc ',
    src: pic03,
  },

  {
    title: 'Contacto',
    text: 'Tu interés nos hace más fuertes y nos ayudará a que muchos chicos crezcan y se desarrollen. Esperamos tu consulta.',
    src: pic04,
  },
];

export const VolunteerSec = {
  title: 'VOLUNTARIADO',
  text: 'Ayudamos porque sabemos el porqué ayudamos y a quienes ayudamos. Cada integrante de este grupo de familias es consciente y sabe cuando se está ayudando a las infancias de una zona o con alguna problemática en particular. Partimos de lo básico, el alimento que le permitirá a esos niños adquirir y retener conocimientos y poder desarrollarse físicamente.',
};

export const DonateSec = {
  title: 'DONACIONES',
  text: 'Sabemos que es difícil comprometerse con el voluntariado porque existe mucho descreimiento y desconfianza. Por eso nos unimos familias que sólo quieren aportar un poquito que realmente es muchísimo . Tu donación por más chica que sea nos brindará primero apoyo de saber que estamos por un buen camino y luego seguramente un niño más podrá alimentarse. Las donaciones no son obligatorias ni asumen ningún compromiso futuro, seguro que siempre estaremos esperando una próxima vez, para revalidar de parte tuya que estás de acuerdo en este camino que emprendemos de ahora en más juntos.',
};

export const PricingSec = [
  {
    title: 'DONACIONES',
    text: (
      <p className="donate__card__text">
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
