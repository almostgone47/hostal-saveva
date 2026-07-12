'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'es' | 'en';
type Theme = 'light' | 'dark';

interface AppContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  toggleTheme: () => void;
  t: (key: string, section?: string) => string;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

const dictionaries = {
  es: {
    nav: {
      home: 'Inicio',
      rooms: 'Habitaciones',
      apartments: 'Apartaestudios',
      stayStudy: 'Stay & Study',
      about: 'Nosotros',
      experiences: 'Experiencias',
      booking: 'Reservas',
      contact: 'Contacto',
      map: 'Mapa',
    },
    common: {
      bookNow: 'Reservar ahora',
      contactWhatsApp: 'Contacto por WhatsApp',
      holidayCO: 'Festivo Oficial CO',
      longWeekend: '¡Fin de semana puente! (Temporada alta)',
      address: 'Laureles Estadio, Medellín, Colombia',
      phone: '+57 333 2627268',
      email: 'fundacion.saveva@gmail.com',
      instagram: '@hostalsaveva',
      allRights: 'Todos los derechos reservados. SAVEVA Hostal.',
      designedFor: 'Naturaleza, Aventura y Comunidad.',
      exploreCTA: 'Explorar Medellín',
      viewAll: 'Ver Todos',
      whatsappFloatMsg: '¡Hola! Quiero información sobre SAVEVA Hostal 🐦',
    },
    home: {
      heroTitle: 'Conecta · Explora · Vive',
      heroSub: 'Naturaleza, aventura y comunidad en el corazón de Laureles, Medellín. Pensado para viajeros, estudiantes y nómadas digitales.',
      cta: 'Reserva tu Aventura',
      badge: 'Un Hostal con Alma',
      aboutTitle: 'Tu casa en Medellín',
      aboutDesc1: 'Somos un equipo que cree que viajar es mejor cuando se comparte. SAVEVA es un hostal en el corazón de Laureles Estadio, pensado para viajeros, estudiantes y nómadas que buscan algo más que una cama: buscan conexión.',
      aboutDesc2: 'Aquí las historias se cruzan en la sala común, los planes de la semana se arman entre desconocidos que terminan siendo amigos, y el barrio se vive de verdad — sus calles, su gente, su energía. No somos el hostal más lujoso, pero sí el lugar donde vas a encontrar con quién explorar Medellín.',
      roomsTitle: 'Nuestras opciones de alojamiento',
      roomsSub: 'Diseñadas para tu descanso y adaptadas a tu presupuesto. Elige la experiencia que mejor se adapte a ti.',
      roomsBtn: 'Ver habitaciones',
      apartmentsTitle: 'Apartaestudios independientes',
      apartmentsDesc: '¿Viajas en grupo o buscas más privacidad? Ofrecemos apartaestudios exclusivos con capacidad de hasta 25 personas y entrada completamente independiente.',
      apartmentsBtn: 'Saber más',
      stayStudyTitle: 'Stay & Study: Estadías Largas',
      stayStudyDesc: '¿Vienes a Medellín por estudio o trabajo remoto? Ofrecemos planes semanales y mensuales con excelente WiFi, escritorio para trabajar y el mejor ambiente de comunidad.',
      stayStudyBtn: 'Ver planes',
      communityTitle: 'Más que una cama, una comunidad',
      communityDesc: 'No solo vienes a dormir, vienes a sumarte a un estilo de vida. Organizamos eventos, caminatas, asados y salidas de exploración por el barrio y por Medellín.',
      communityBtn: 'Descubrir Aventuras',
      instagramTitle: 'Sigue nuestras aventuras',
      instagramSub: 'Únete a nuestra comunidad digital y entérate de los eventos diarios.',
      bookingBannerTitle: '¿Listo para tu próxima gran historia?',
      bookingBannerSub: 'Escríbenos directamente y gestiona tu reserva de manera ágil y personalizada.',
      bookingBannerBtn: 'Consultar disponibilidad',
    },
    habitaciones: {
      title: 'Habitaciones con Alma',
      sub: 'Ofrecemos opciones cómodas, limpias y pensadas para recargar energías después de explorar Medellín.',
      shared: 'Habitación Compartida',
      sharedDesc: 'Ideal para mochileros y viajeros solitarios que buscan hacer amigos. Cuenta con casilleros de seguridad individuales, iluminación de lectura y tomacorrientes en cada cama.',
      privateSharedBath: 'Habitación Privada (Baño Compartido)',
      privateSharedBathDesc: 'Disfruta de la máxima privacidad para descansar sin gastar de más. Cama doble ultra cómoda, ventilador de bajo ruido y excelente iluminación.',
      privatePrivateBath: 'Habitación Privada (Baño Privado)',
      privatePrivateBathDesc: 'El refugio perfecto para parejas o nómadas digitales que buscan confort e independencia absoluta con baño en suite y espacio de escritorio.',
      amenitiesTitle: 'Servicios para sentirte en casa',
      amenity1: 'WiFi de Alta Velocidad (Fibra óptica simétrica en todo el hostal)',
      amenity2: 'Cocina común totalmente dotada para preparar tus comidas',
      amenity3: 'Servicios de lavandería de bajo costo bajo solicitud',
      amenity4: 'Limpieza diaria de áreas comunes y sábanas limpias incluidas',
      amenity5: 'Café colombiano caliente de cortesía todas las mañanas',
      amenity6: 'Espacios comunes de coworking y relajación',
      priceFrom: 'Desde',
      perNight: '/ noche',
      btnWhatsApp: 'Preguntar por WhatsApp 🐦',
      btnBook: 'Reservar Disponibilidad',
    },
    apartaestudios: {
      title: 'Apartaestudios & Grupos',
      sub: 'El alojamiento ideal para delegaciones deportivas, grupos de estudio, colectivos o familias, para grupos desde 3 y hasta 8 personas.',
      desc1: 'En SAVEVA contamos con una solución exclusiva única en el área de Laureles Estadio: 3 apartaestudios independientes con cocina y baño privado, pensados para estadías por días.',
      desc2: 'Esto te permite disfrutar de la privacidad de tu propio espacio con cocina y baño privados, al mismo tiempo que puedes integrarte a las actividades comunitarias, la sala común y el jardín del hostal si lo deseas.',
      featuresTitle: 'Ventajas de nuestros Apartaestudios',
      feat1: '3 apartaestudios disponibles, para grupos de 3, 4 y hasta 8 personas.',
      feat2: 'Tarifas económicas por noche, ideales para estadías cortas.',
      feat3: 'Cocinas y baños privados completamente dotados en cada unidad.',
      feat4: 'Perfecto para delegaciones deportivas que compiten en el complejo del Estadio Atanasio Girardot (a pocos minutos caminando).',
      feat5: 'WiFi, zona de ropa y limpieza incluidos en cada apartaestudio.',
      cta: 'Cotizar estadía grupal por WhatsApp',
    },
    stay_study: {
      title: 'Stay & Study: Estadías Largas',
      sub: 'Tu santuario de trabajo y estudio en el mejor barrio de Medellín.',
      desc1: '¿Eres estudiante de intercambio o nómada digital con planes de quedarte de 2 semanas a varios meses? En SAVEVA entendemos que necesitas algo más que una tarifa por noche.',
      desc2: 'Te ofrecemos un entorno donde puedes concentrarte en tus metas gracias a un WiFi de alta velocidad que no falla y espacios de trabajo cómodos, sumado a la calidez de una familia que te espera al cerrar tu pantalla.',
      benefitTitle: 'Beneficios Especiales para Estadías Largas',
      benefit1: 'Tarifas preferenciales con descuentos por semana o mes.',
      benefit2: 'Espacios de co-working silenciosos con tomas de corriente dedicadas.',
      benefit3: 'Acceso total y gratuito a todos los eventos y asados de la comunidad.',
      benefit4: 'Lavandería preferencial y espacio exclusivo de alacena en la cocina común.',
      benefit5: 'Ubicación Premium: Laureles fue votado como uno de los barrios más cool del mundo, rodeado de cafés de autor y vida local.',
      ratesTitle: 'Nuestras tarifas especiales',
      rateWeekly: 'Planes Semanales',
      rateWeeklyDesc: 'Ideal para quienes vienen por cursos cortos o quieren explorar antes de asentarse.',
      rateMonthly: 'Planes Mensuales',
      rateMonthlyDesc: 'Nuestra opción más popular para nómadas digitales y estudiantes de intercambio de la UPB o la de Antioquia.',
      weeklyLabel: 'Semana',
      monthlyLabel: 'Mes',
      cta: 'Solicitar Plan de Estadía Larga',
    },
    nosotros: {
      title: 'Nuestra Historia',
      sub: 'Conoce al equipo que le da vida al colibrí de SAVEVA.',
      storyTitle: 'La esencia de SAVEVA',
      storyDesc1: 'Creemos que viajar no es solo acumular sellos en un pasaporte, sino acumular amigos e historias. SAVEVA nació en Laureles Estadio como un proyecto enfocado en brindar calidez y conectar culturas.',
      storyDesc2: 'Nuestra personalidad es aventurera, sociable y cercana. Si SAVEVA fuera una persona, sería ese amigo que te recibe con los brazos abiertos en la terminal de buses y en media hora ya te tiene armado el plan de fin de semana para ir a Guatapé.',
      missionTitle: 'Nuestra Misión',
      missionDesc: 'Crear un espacio en Laureles Estadio donde viajeros, estudiantes y nómadas encuentren no solo un lugar cómodo para quedarse, sino una comunidad con la cual compartir experiencias, explorar Medellín y vivir el viaje de forma más real y conectada.',
      visionTitle: 'Nuestra Visión',
      visionDesc: 'Ser el hostal referente en Laureles para quienes buscan conexión genuina durante su viaje, reconocido por crear comunidad entre viajeros de todo el mundo y por ser la puerta de entrada a la energía auténtica de Medellín.',
      valuesTitle: 'Nuestros Valores',
      val1: 'Comunidad - Nos apoyamos mutuamente como una gran familia.',
      val2: 'Aventura - Nos encanta explorar lo desconocido con entusiasmo.',
      val3: 'Autenticidad - Mostramos la verdadera cara y cultura de Medellín.',
      val4: 'Calidez - Tuteo sincero, sonrisas reales, atención como en casa.',
      val5: 'Sostenibilidad - Respetamos el entorno y apoyamos lo local.',
      val6: 'Confianza & Respeto - Espacios seguros y de mutuo aprendizaje.',
    },
    experiencias: {
      title: 'Aventura & Vida de Barrio',
      sub: 'Medellín no se visita: se vive. Descubre nuestros tres pilares de experiencia.',
      pilar1Title: 'Aventura y Exploración en Medellín',
      pilar1Desc: 'Desde volar en parapente sobre el valle de Aburrá en San Félix, hasta recorrer los senderos nublados del Parque Arví o hacer excursiones de un día a pueblos mágicos como Guatapé, Santa Fe de Antioquia y Jericó.',
      pilar2Title: 'El Laureles Auténtico',
      pilar2Desc: 'Vive en el barrio más verde de Medellín. Recorreremos juntos sus parques circulares, probaremos cafés especiales de pequeños productores colombianos, visitaremos mercados locales y cenaremos en restaurantes con excelente gastronomía.',
      pilar3Title: 'Eventos del Hostal',
      pilar3Desc: 'Creamos momentos de encuentro todos los días: noches de películas y asados en la terraza, partidos de tejo (deporte nacional de Colombia), clases de salsa los jueves y juegos de mesa que rompen el hielo entre todos.',
      pilar4Title: 'Bicicletas Eléctricas & El Tour de los 3 Climas',
      pilar4Desc: 'Vive una experiencia única de un día completo pasando por 3 climas distintos: arrancamos en el clima frío del bosque de niebla, seguimos por un clima mediterráneo entre limoneros y cipreses, y terminamos en el clima subtropical, ideal para bañarte en cascadas y saltar en los ríos de montaña. El plan incluye bicicletas eléctricas, transporte, alimentación y guía turístico, más un recorrido de ida y vuelta en un icónico escarabajo Volkswagen modelo 1961.',
      pilar4Price: 'Consulta el precio por WhatsApp',
      pilar4Voucher: 'Incluye una noche de hospedaje voucher en el hostal, antes o después del tour.',
      eventTitle: 'Próximos eventos semanales:',
      event1: 'Martes: Intercambio de Idiomas & Empanadas gratis.',
      event2: 'Jueves: Clases de Salsa & Salida grupal.',
      event3: 'Sábado: El Gran Asado SAVEVA (Bbq comunitario).',
    },
    reservas: {
      title: 'Tu próxima aventura empieza aquí',
      sub: 'Selecciona tus fechas en nuestro calendario. Identificamos los festivos colombianos para que programes mejor tu viaje.',
      formTitle: 'Detalles de la Reserva',
      labelName: 'Nombre Completo',
      labelCheckin: 'Fecha de Check-in',
      labelCheckout: 'Fecha de Check-out',
      labelGuests: 'Número de Huéspedes',
      labelType: 'Tipo de Alojamiento',
      labelComments: 'Comentarios o requerimientos especiales',
      placeholderComments: 'Ej. ¿Llegas tarde? ¿Eres vegetariano? ¿Vienes con un grupo grande?',
      typeShared: 'Cama en Habitación Compartida',
      typePrivateSharedBath: 'Habitación Privada (Baño Compartido)',
      typePrivatePrivateBath: 'Habitación Privada (Baño Privado)',
      typeApartment: 'Apartaestudio Independiente',
      typeGroup: 'Reserva para Grupo (Hasta 25 personas)',
      guests1: '1 Persona',
      guests2: '2 Personas',
      guests34: '3 a 4 Personas',
      guestsGroup: 'Grupo Grande (Más de 5)',
      btnSubmit: 'Enviar Solicitud por WhatsApp 🐦',
      errorCheckoutBefore: 'La fecha de check-out no puede ser anterior al check-in.',
      errorCheckinPast: 'No se pueden seleccionar fechas del pasado.',
      waTemplate: '¡Hola SAVEVA! 🐦 Quiero solicitar una reserva:\n\n👤 *Nombre:* {name}\n📅 *Check-in:* {checkin}\n📅 *Check-out:* {checkout}\n👥 *Huéspedes:* {guests}\n🏠 *Alojamiento:* {type}\n💬 *Notas:* {comments}',
    },
    mapa: {
      title: 'Explora Laureles desde SAVEVA',
      sub: 'Ubica el hostal, activa tu ubicación en tiempo real y descubre las rutas caminando hacia el metro, el estadio y el centro comercial.',
      filtersHint: 'Filtra lo que quieres ver en el mapa:',
    },
    contacto: {
      title: '¡Escríbenos, queremos conocerte!',
      sub: 'Resolveremos todas tus preguntas en minutos. Estamos ubicados en la mejor zona de Laureles Estadio.',
      formTitle: 'Envíanos un mensaje rápido',
      labelEmail: 'Tu Correo Electrónico',
      labelMessage: 'Mensaje',
      placeholderMessage: 'Cuéntanos qué necesitas...',
      btnEmail: 'Enviar por Email ✉️',
      btnWhatsApp: 'Enviar por WhatsApp 🐦',
      locationTitle: 'Cómo llegar',
      locationDesc: 'Estamos ubicados en Laureles Estadio, un sector seguro, plano y arborizado, a minutos caminando de la estación de Metro Estadio, de centros deportivos y de los mejores restaurantes.',
      contactInfo: 'Datos de Contacto',
    },
  },
  en: {
    nav: {
      home: 'Home',
      rooms: 'Rooms',
      apartments: 'Apartments',
      stayStudy: 'Stay & Study',
      about: 'About Us',
      experiences: 'Experiences',
      booking: 'Booking',
      contact: 'Contact',
      map: 'Map',
    },
    common: {
      bookNow: 'Book Now',
      contactWhatsApp: 'Contact via WhatsApp',
      holidayCO: 'Official CO Holiday',
      longWeekend: 'Long weekend! (High season)',
      address: 'Laureles Estadio, Medellin, Colombia',
      phone: '+57 333 2627268',
      email: 'fundacion.saveva@gmail.com',
      instagram: '@hostalsaveva',
      allRights: 'All rights reserved. SAVEVA Hostal.',
      designedFor: 'Nature, Adventure & Community.',
      exploreCTA: 'Explore Medellin',
      viewAll: 'View All',
      whatsappFloatMsg: 'Hello! I would like information about SAVEVA Hostel 🐦',
    },
    home: {
      heroTitle: 'Connect · Explore · Live',
      heroSub: 'Nature, adventure, and community in the heart of Laureles, Medellin. Tailored for backpackers, students, and digital nomads.',
      cta: 'Book Your Adventure',
      badge: 'A Hostel with a Soul',
      aboutTitle: 'Your home in Medellin',
      aboutDesc1: 'We are a team that believes traveling is better when shared. SAVEVA is a hostel in the heart of Laureles Estadio, designed for travelers, students, and digital nomads searching for more than just a bed: they search for connection.',
      aboutDesc2: 'Here, stories cross paths in the common room, weekly plans are put together among strangers who end up becoming friends, and the neighborhood is truly lived—its streets, its people, its energy. We are not the most luxurious hostel, but we are the place where you will find friends to explore Medellin.',
      roomsTitle: 'Our Accommodation Options',
      roomsSub: 'Designed for your rest and tailored to your budget. Choose the experience that fits you best.',
      roomsBtn: 'View Rooms',
      apartmentsTitle: 'Independent Apartments',
      apartmentsDesc: 'Traveling in a group or looking for more privacy? We offer exclusive studio apartments with up to 25 people capacity and a completely independent street entrance.',
      apartmentsBtn: 'Learn More',
      stayStudyTitle: 'Stay & Study: Long Term',
      stayStudyDesc: 'Coming to Medellin for exchange study or remote work? We offer weekly and monthly plans with excellent WiFi, workspaces, and the ultimate community atmosphere.',
      stayStudyBtn: 'View Plans',
      communityTitle: 'More than a bed, a community',
      communityDesc: 'You don\'t just come here to sleep, you come to join a lifestyle. We organize events, hikes, BBQs, and exploration trips around the neighborhood and Medellin.',
      communityBtn: 'Discover Adventures',
      instagramTitle: 'Follow our adventures',
      instagramSub: 'Join our digital community and stay updated with daily events.',
      bookingBannerTitle: 'Ready for your next big story?',
      bookingBannerSub: 'Write to us directly and manage your reservation in an agile and personalized way.',
      bookingBannerBtn: 'Check availability',
    },
    habitaciones: {
      title: 'Rooms with a Soul',
      sub: 'We offer comfortable, clean options designed to recharge your energy after exploring Medellin.',
      shared: 'Shared Dorm',
      sharedDesc: 'Perfect for backpackers and solo travelers looking to meet amazing people. Includes personal security lockers, individual reading lights, and outlets at every bed.',
      privateSharedBath: 'Private Room (Shared Bath)',
      privateSharedBathDesc: 'Enjoy maximum privacy to rest without overspending. Super comfortable double bed, quiet fan, and great lighting.',
      privatePrivateBath: 'Private Room (Private Bath)',
      privatePrivateBathDesc: 'The perfect sanctuary for couples or digital nomads seeking absolute comfort and independence with an en-suite bathroom and dedicated desk space.',
      amenitiesTitle: 'Amenities to make you feel at home',
      amenity1: 'High-Speed WiFi (Symmetrical fiber optics throughout the hostel)',
      amenity2: 'Fully equipped shared kitchen to cook your meals',
      amenity3: 'Low-cost laundry service available upon request',
      amenity4: 'Daily cleaning of common areas and fresh linens included',
      amenity5: 'Complimentary hot Colombian coffee every morning',
      amenity6: 'Common coworking and relaxation spaces',
      priceFrom: 'From',
      perNight: '/ night',
      btnWhatsApp: 'Ask on WhatsApp 🐦',
      btnBook: 'Check Availability',
    },
    apartaestudios: {
      title: 'Studio Apartments & Groups',
      sub: 'The ideal accommodation for sports teams, study groups, or families, for groups of 3 up to 8 people.',
      desc1: 'At SAVEVA we have a unique exclusive solution in the Laureles Estadio area: 3 independent studio apartments with private kitchen and bathroom, designed for short stays.',
      desc2: 'This allows you to enjoy the privacy of your own space with a private kitchen and bathroom, while having full access to the hostel\'s community activities, common room, and garden whenever you want.',
      featuresTitle: 'Apartment Highlights',
      feat1: '3 studio apartments available, for groups of 3, 4, and up to 8 people.',
      feat2: 'Affordable nightly rates, ideal for short stays.',
      feat3: 'Fully equipped private kitchens and bathrooms in each unit.',
      feat4: 'Perfect for sports delegations competing at the Estadio Atanasio Girardot sports complex (just a few minutes walk).',
      feat5: 'WiFi, laundry area, and cleaning included in every apartaestudio.',
      cta: 'Request group quote via WhatsApp',
    },
    stay_study: {
      title: 'Stay & Study: Long Term',
      sub: 'Your workspace and study sanctuary in the best neighborhood of Medellin.',
      desc1: 'Are you an exchange student or a digital nomad planning to stay from 2 weeks to several months? At SAVEVA, we understand you need more than just a nightly rate.',
      desc2: 'We offer an environment where you can focus on your goals thanks to lightning-fast, highly reliable WiFi and comfortable workspaces, combined with the warmth of a family waiting for you when you close your screen.',
      benefitTitle: 'Special Long Term Benefits',
      benefit1: 'Preferential rates with special weekly or monthly discounts.',
      benefit2: 'Quiet co-working spaces with dedicated power outlets.',
      benefit3: 'Full, free access to all hostel community events and BBQs.',
      benefit4: 'Priority laundry services and dedicated kitchen storage.',
      benefit5: 'Premium Location: Laureles was voted one of the world\'s coolest neighborhoods, surrounded by boutique cafes and local life.',
      ratesTitle: 'Our Special Long-Term Rates',
      rateWeekly: 'Weekly Plans',
      rateWeeklyDesc: 'Ideal for those coming for short courses or wanting to explore before settling down.',
      rateMonthly: 'Monthly Plans',
      rateMonthlyDesc: 'Our most popular option for digital nomads and exchange students from UPB or Universidad de Antioquia.',
      weeklyLabel: 'Week',
      monthlyLabel: 'Month',
      cta: 'Apply for Long-Term Stay',
    },
    nosotros: {
      title: 'Our Story',
      sub: 'Meet the team behind SAVEVA\'s hummingbird.',
      storyTitle: 'The Essence of SAVEVA',
      storyDesc1: 'We believe that traveling is not just about collecting stamps in a passport, but collecting friends and stories. SAVEVA was born in Laureles Estadio as a project focused on warmth and cultural connection.',
      storyDesc2: 'Our brand personality is adventurous, social, and warm. If SAVEVA were a person, they would be that friend who welcomes you with open arms at the bus terminal and has a full weekend trip to Guatape planned for you within thirty minutes.',
      missionTitle: 'Our Mission',
      missionDesc: 'To create a space in Laureles Estadio where travelers, students, and digital nomads find not just a comfortable place to stay, but a vibrant community with which to share experiences, explore Medellin, and live the trip in a real, connected way.',
      visionTitle: 'Our Vision',
      visionDesc: 'To be the benchmark hostel in Laureles for those seeking genuine connection, recognized for creating community among global travelers and being the gateway to Medellin\'s authentic energy.',
      valuesTitle: 'Our Values',
      val1: 'Community - We support each other like a big family.',
      val2: 'Adventure - We love exploring the unknown with enthusiasm.',
      val3: 'Authenticity - We show the true face and culture of Medellin.',
      val4: 'Warmth - Sincere greetings, real smiles, feel-at-home hospitality.',
      val5: 'Sustainability - We respect our surroundings and support local.',
      val6: 'Trust & Respect - Safe spaces for mutual learning and growth.',
    },
    experiencias: {
      title: 'Adventure & Neighborhood Life',
      sub: 'Medellin is not just visited: it is lived. Discover our three pillars of experience.',
      pilar1Title: 'Medellin Exploration & Adventure',
      pilar1Desc: 'From paragliding over the Aburra Valley in San Felix, to walking the cloud trails of Parque Arvi, or taking day trips to magical heritage towns like Guatape, Santa Fe de Antioquia, and Jerico.',
      pilar2Title: 'The Authentic Laureles',
      pilar2Desc: 'Live in Medellin\'s greenest neighborhood. We will walk its circular parks, taste specialty coffees from small Colombian growers, visit local markets, and dine in amazing neighborhood eateries.',
      pilar3Title: 'Hostel Social Events',
      pilar3Desc: 'We create moments of connection every single day: movie and BBQ nights on the terrace, playing Tejo (Colombia\'s explosive national game), salsa classes on Thursdays, and icebreaker board games.',
      pilar4Title: 'Electric Bike Rentals & The Tour of the 3 Climate Zones',
      pilar4Desc: 'Get a unique one-day experience passing through 3 different climate zones: starting in the cold climate of the misty forest, continuing through a Mediterranean climate among lime and cypress trees, and finishing in the subtropical, sunny climate perfect for waterfall bathing and jumping in mountain rivers. The trip includes e-bikes, transport, catering and a tour guide, plus a round trip in an iconic 1961 Volkswagen Beetle.',
      pilar4Price: 'Ask us for pricing on WhatsApp',
      pilar4Voucher: 'Includes a hostel stay voucher for the night before or after the tour.',
      eventTitle: 'Upcoming weekly events:',
      event1: 'Tuesday: Language Exchange & free Empanadas.',
      event2: 'Thursday: Salsa Classes & Group Night Out.',
      event3: 'Saturday: The Great SAVEVA BBQ (Community BBQ).',
    },
    reservas: {
      title: 'Your next adventure starts here',
      sub: 'Select your dates in our calendar. We highlight official Colombian holidays to help you plan your trip.',
      formTitle: 'Booking Details',
      labelName: 'Full Name',
      labelCheckin: 'Check-in Date',
      labelCheckout: 'Check-out Date',
      labelGuests: 'Number of Guests',
      labelType: 'Accommodation Type',
      labelComments: 'Comments or special requirements',
      placeholderComments: 'E.g., Late arrival? Vegetarian? Traveling with a big group?',
      typeShared: 'Bed in Shared Dorm',
      typePrivateSharedBath: 'Private Room (Shared Bath)',
      typePrivatePrivateBath: 'Private Room (Private Bath)',
      typeApartment: 'Independent Studio Apartment',
      typeGroup: 'Group Booking (Up to 25 people)',
      guests1: '1 Person',
      guests2: '2 People',
      guests34: '3 to 4 People',
      guestsGroup: 'Large Group (More than 5)',
      btnSubmit: 'Send Request via WhatsApp 🐦',
      errorCheckoutBefore: 'Check-out date cannot be before check-in.',
      errorCheckinPast: 'You cannot select dates in the past.',
      waTemplate: 'Hello SAVEVA! 🐦 I would like to request a booking:\n\n👤 *Name:* {name}\n📅 *Check-in:* {checkin}\n📅 *Check-out:* {checkout}\n👥 *Guests:* {guests}\n🏠 *Accommodation:* {type}\n💬 *Notes:* {comments}',
    },
    mapa: {
      title: 'Explore Laureles from SAVEVA',
      sub: 'Locate the hostel, enable your real-time location, and discover the walking routes to the metro, the stadium, and the mall.',
      filtersHint: 'Filter what you want to see on the map:',
    },
    contacto: {
      title: 'Get in Touch with Us!',
      sub: 'We respond in minutes. We are located in the safest and greenest spot in Laureles Estadio.',
      formTitle: 'Send Us a Quick Message',
      labelEmail: 'Your Email Address',
      labelMessage: 'Message',
      placeholderMessage: 'Tell us how we can help...',
      btnEmail: 'Send via Email ✉️',
      btnWhatsApp: 'Send via WhatsApp 🐦',
      locationTitle: 'How to get here',
      locationDesc: 'We are located in Laureles Estadio, a safe, flat, tree-lined sector, just a few minutes walk from the Estadio Metro station, sports complexes, and top-rated restaurants.',
      contactInfo: 'Contact Information',
    },
  },
};

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('es');
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Read from localStorage only after mount on the client
    const savedLang = localStorage.getItem('saveva_lang') as Language;
    const savedTheme = localStorage.getItem('saveva_theme') as Theme;

    if (savedTheme === 'light' || savedTheme === 'dark') {
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      document.documentElement.classList.toggle('dark', false);
    }

    Promise.resolve().then(() => {
      if (savedLang === 'es' || savedLang === 'en') {
        setLanguage(savedLang);
      }
      if (savedTheme === 'light' || savedTheme === 'dark') {
        setTheme(savedTheme);
      }
      setMounted(true);
    });
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.classList.toggle('dark', theme === 'dark');
    }
  }, [theme, mounted]);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('saveva_lang', lang);
  };

  const handleToggleTheme = () => {
    const nextTheme: Theme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    localStorage.setItem('saveva_theme', nextTheme);
    document.documentElement.classList.toggle('dark', nextTheme === 'dark');
  };

  const t = (key: string, section?: string): string => {
    const dict = dictionaries[language];
    if (section && (dict as any)[section] && (dict as any)[section][key]) {
      return (dict as any)[section][key];
    }
    // Fallback search
    for (const sec in dict) {
      if ((dict as any)[sec][key]) {
        return (dict as any)[sec][key];
      }
    }
    return key;
  };

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage: handleSetLanguage,
        theme,
        toggleTheme: handleToggleTheme,
        t,
      }}
    >
      <div className={mounted ? '' : 'invisible'}>
        {children}
      </div>
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
