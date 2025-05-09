"use client"

import { createContext, useContext, useState, useEffect } from "react"

// Available languages
export const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "pt", name: "Português", flag: "🇵🇹" },
  { code: "ar", name: "العربية", flag: "🇸🇦", rtl: true },
]

// Create the context
const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
  // Get initial language from localStorage or default to English
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("language")
      return savedLanguage || "en"
    }
    return "en"
  })

  const [translations, setTranslations] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  // Load translations for the current language
  useEffect(() => {
    const loadTranslations = async () => {
      setIsLoading(true)
      try {
        // In a real implementation, you would fetch these from a server or import them
        // For this demo, we'll simulate loading translations
        let translationData = {}

        switch (currentLanguage) {
          case "fr":
            translationData = {
              common: {
                home: "Accueil",
                about: "À Propos",
                services: "Services",
                fleet: "Flotte",
                contact: "Contact",
                careers: "Carrières",
                resources: "Ressources",
                media: "Médias",
                learnMore: "En Savoir Plus",
                viewAll: "Voir Tout",
                downloadNow: "Télécharger",
                searchResources: "Rechercher des ressources...",
                filterByCategory: "Filtrer par catégorie",
                relatedResources: "Ressources Connexes",
                findSimilarOnline: "Trouver des Ressources Similaires en Ligne",
                requestResources: "Besoin de Ressources Spécifiques?",
                contactUs: "Contactez-Nous",
              },
              home: {
                hero: {
                  title: "Services de Support Maritime et Offshore de Premier Plan",
                  subtitle:
                    "Fournir des services maritimes de classe mondiale et un support offshore avec un engagement envers la sécurité, la fiabilité et l'excellence.",
                  cta1: "Nos Services",
                  cta2: "Contactez-Nous",
                },
                services: {
                  title: "Nos Services",
                  subtitle:
                    "Fournir des services complets de marine et de support offshore avec un engagement envers l'excellence.",
                  viewAll: "Voir Tous les Services",
                },
                about: {
                  title: "Fournisseur Leader de Services Maritimes au Nigeria",
                  subtitle:
                    "Hydroferric Nigeria Limited est une entreprise de services maritimes de premier plan avec plus de 15 ans d'expérience dans l'industrie.",
                  cta: "En Savoir Plus Sur Nous",
                },
              },
              services: {
                pageTitle: "Nos Services",
                pageSubtitle: "Services maritimes et offshore complets livrés avec excellence et fiabilité.",
                whatWeOffer: "Ce Que Nous Offrons",
                whatWeOfferSubtitle:
                  "Hydroferric fournit une large gamme de services maritimes et de support offshore adaptés aux besoins spécifiques de nos clients.",
                readyToWork: "Prêt à Travailler Avec Nous?",
                readyToWorkSubtitle:
                  "Contactez notre équipe aujourd'hui pour discuter de la façon dont Hydroferric peut soutenir vos opérations maritimes et offshore.",
                marineServices: {
                  title: "Services Maritimes",
                  description:
                    "Services maritimes complets comprenant l'affrètement de navires, la gestion d'équipage et les opérations maritimes.",
                  details: [
                    "Affrètement de navires pour les opérations offshore",
                    "Gestion et formation d'équipage",
                    "Logistique maritime et gestion de la chaîne d'approvisionnement",
                    "Maintenance et réparation de navires",
                    "Sécurité et conformité maritimes",
                  ],
                  fullDescription:
                    "Nos services maritimes complets sont conçus pour répondre aux besoins variés de l'industrie maritime. Avec une flotte moderne et un personnel hautement qualifié, nous offrons des solutions d'affrètement de navires flexibles pour diverses opérations offshore. Notre système de gestion d'équipage garantit que tous les navires sont dotés de professionnels compétents et certifiés. Nous gérons également tous les aspects de la logistique maritime, de la planification des itinéraires à la gestion de la chaîne d'approvisionnement. Nos services de maintenance préventive et corrective maintiennent votre flotte en parfait état de fonctionnement, tandis que nos protocoles de sécurité rigoureux garantissent la conformité avec toutes les réglementations maritimes internationales.",
                },
                offshoreSupport: {
                  title: "Support Offshore",
                  description:
                    "Support offshore spécialisé pour les opérations pétrolières et gazières, y compris l'approvisionnement des plateformes et la manipulation des ancres.",
                  details: [
                    "Opérations de navires ravitailleurs de plateformes",
                    "Manipulation d'ancres et remorquage",
                    "Transfert de personnel offshore",
                    "Services d'intervention d'urgence et de veille",
                    "Support à la construction offshore",
                  ],
                  fullDescription:
                    "Notre division de support offshore fournit des services essentiels aux installations pétrolières et gazières. Nos navires ravitailleurs de plateformes (PSV) sont équipés pour transporter des fournitures, des équipements et du personnel vers et depuis les installations offshore. Nos capacités de manipulation d'ancres et de remorquage permettent le positionnement précis des plateformes et autres structures. Nous offrons des transferts de personnel sûrs et efficaces vers les installations offshore, ainsi que des services d'intervention d'urgence disponibles 24/7. Notre équipe soutient également les projets de construction offshore avec des solutions logistiques et opérationnelles sur mesure.",
                },
                logistics: {
                  title: "Logistique",
                  description:
                    "Solutions logistiques intégrées pour le transport maritime, la manutention de cargaison et la gestion de la chaîne d'approvisionnement.",
                  details: [
                    "Transport maritime d'équipements et de fournitures",
                    "Manutention et gestion de cargaison",
                    "Optimisation de la chaîne d'approvisionnement",
                    "Entreposage et gestion des stocks",
                    "Dédouanement et documentation",
                  ],
                  fullDescription:
                    "Nos services logistiques intégrés couvrent tous les aspects du transport maritime et de la gestion de la chaîne d'approvisionnement. Nous coordonnons le transport efficace d'équipements et de fournitures vers des destinations côtières et offshore. Notre expertise en manutention de cargaison garantit que tous les matériaux sont manipulés en toute sécurité et efficacement. Nous optimisons les chaînes d'approvisionnement pour réduire les coûts et améliorer l'efficacité opérationnelle. Nos installations d'entreposage sécurisées et nos systèmes de gestion des stocks garantissent que les fournitures sont disponibles quand vous en avez besoin. Nous gérons également tous les aspects du dédouanement et de la documentation pour assurer des opérations transfrontalières sans heurts.",
                },
                vesselMaintenance: {
                  title: "Maintenance de Navires",
                  description:
                    "Services professionnels de maintenance et de réparation de navires pour assurer l'efficacité opérationnelle et la sécurité.",
                  details: [
                    "Maintenance programmée et inspections",
                    "Réparations d'urgence et dépannage",
                    "Gestion de mise en cale sèche",
                    "Mises à niveau et installations d'équipements",
                    "Conformité aux exigences de classification",
                  ],
                  fullDescription:
                    "Notre programme complet de maintenance de navires est conçu pour maximiser le temps de fonctionnement et prolonger la durée de vie de votre flotte. Nous effectuons des maintenances programmées régulières et des inspections approfondies pour identifier et résoudre les problèmes potentiels avant qu'ils ne deviennent critiques. Notre équipe de techniciens expérimentés est disponible 24/7 pour les réparations d'urgence et le dépannage. Nous gérons tous les aspects des opérations de mise en cale sèche, de la planification à l'exécution. Nos services incluent également des mises à niveau d'équipements et des installations pour améliorer les performances et la sécurité des navires. Tous nos services de maintenance sont conformes aux exigences des sociétés de classification et aux réglementations maritimes internationales.",
                },
                maritimeConsulting: {
                  title: "Conseil Maritime",
                  description:
                    "Services de conseil maritime expert pour optimiser les opérations, assurer la conformité et améliorer les performances.",
                  details: [
                    "Évaluations d'efficacité opérationnelle",
                    "Développement de systèmes de gestion de la sécurité",
                    "Audits de conformité réglementaire",
                    "Évaluation et gestion des risques",
                    "Stratégies d'amélioration des performances",
                  ],
                  fullDescription:
                    "Nos services de conseil maritime s'appuient sur des décennies d'expertise dans l'industrie pour aider votre organisation à optimiser ses opérations. Nos consultants effectuent des évaluations approfondies de l'efficacité opérationnelle pour identifier les domaines d'amélioration. Nous développons et mettons en œuvre des systèmes de gestion de la sécurité personnalisés conformes aux normes internationales. Nos audits de conformité réglementaire garantissent que vos opérations respectent toutes les lois et réglementations applicables. Notre approche complète de l'évaluation et de la gestion des risques aide à identifier, évaluer et atténuer les risques potentiels. Nous développons également des stratégies d'amélioration des performances sur mesure pour augmenter l'efficacité et la rentabilité.",
                },
                maritimeTraining: {
                  title: "Formation Maritime",
                  description:
                    "Programmes de formation complets pour le personnel maritime afin d'améliorer les compétences et d'assurer la conformité en matière de sécurité.",
                  details: [
                    "Formation à la sécurité et aux interventions d'urgence",
                    "Développement des compétences techniques",
                    "Formation au leadership et à la gestion",
                    "Formation à la conformité réglementaire",
                    "Programmes de formation personnalisés",
                  ],
                  fullDescription:
                    "Notre centre de formation maritime offre des programmes complets pour développer les compétences et les connaissances de votre personnel. Nos cours de sécurité et d'intervention d'urgence préparent les équipages à réagir efficacement dans des situations critiques. Nous proposons une formation technique approfondie sur les systèmes et équipements maritimes modernes. Nos programmes de leadership et de gestion développent les compétences nécessaires pour diriger efficacement les équipes maritimes. Nous dispensons également une formation à la conformité réglementaire pour garantir que votre personnel comprend et respecte toutes les lois et réglementations maritimes. Tous nos programmes peuvent être personnalisés pour répondre aux besoins spécifiques de votre organisation.",
                },
              },
              resources: {
                pageTitle: "Ressources",
                pageSubtitle:
                  "Téléchargez des brochures, des spécifications techniques et d'autres ressources sur nos services et notre flotte.",
                featuredResources: "Ressources en Vedette",
                allResources: "Toutes les Ressources",
                noResourcesFound: "Aucune ressource trouvant correspondant à vos critères.",
                clearFilters: "Effacer les Filtres",
                needSpecificResources: "Besoin de Ressources Spécifiques?",
                contactMessage:
                  "Si vous ne trouvez pas les ressources que vous cherchez, veuillez contacter notre équipe. Nous serons heureux de vous fournir les informations dont vous avez besoin.",
                additionalResources: "Ressources Supplémentaires",
                industryGuidelines: "Directives de l'Industrie",
                industryGuidelinesDesc:
                  "Accédez aux directives et normes de l'industrie pertinentes pour les opérations maritimes.",
                safetyResources: "Ressources de Sécurité",
                safetyResourcesDesc:
                  "Accédez aux ressources de sécurité et aux meilleures pratiques pour les opérations maritimes.",
                clientPortal: "Portail Client",
                clientPortalDesc:
                  "Les clients existants peuvent accéder à des ressources supplémentaires via notre portail client sécurisé.",
                visitWebsite: "Visiter le Site Web",
                clientLogin: "Connexion Client",
                categories: {
                  all: "Toutes les Ressources",
                  brochures: "Brochures",
                  technical: "Spécifications Techniques",
                  safety: "Documents de Sécurité",
                  presentations: "Présentations",
                  images: "Images & Médias",
                },
              },
              footer: {
                rights: "Tous droits réservés.",
                quickLinks: "Liens Rapides",
                services: "Nos Services",
                contactUs: "Contactez-Nous",
              },
            }
            break
          case "es":
            translationData = {
              common: {
                home: "Inicio",
                about: "Acerca de",
                services: "Servicios",
                fleet: "Flota",
                contact: "Contacto",
                careers: "Carreras",
                resources: "Recursos",
                media: "Medios",
                learnMore: "Saber Más",
                viewAll: "Ver Todo",
                downloadNow: "Descargar",
                searchResources: "Buscar recursos...",
                filterByCategory: "Filtrar por categoría",
                relatedResources: "Recursos Relacionados",
                findSimilarOnline: "Encontrar Recursos Similares en Línea",
                requestResources: "¿Necesita Recursos Específicos?",
                contactUs: "Contáctenos",
              },
              home: {
                hero: {
                  title: "Servicios de Soporte Marítimo y Offshore de Primera Clase",
                  subtitle:
                    "Proporcionando servicios marítimos de clase mundial y soporte offshore con un compromiso con la seguridad, la fiabilidad y la excelencia.",
                  cta1: "Nuestros Servicios",
                  cta2: "Contáctenos",
                },
                services: {
                  title: "Nuestros Servicios",
                  subtitle:
                    "Proporcionando servicios integrales marítimos y de soporte offshore con un compromiso con la excelencia.",
                  viewAll: "Ver Todos los Servicios",
                },
                about: {
                  title: "Proveedor Líder de Servicios Marítimos en Nigeria",
                  subtitle:
                    "Hydroferric Nigeria Limited es una empresa de servicios marítimos de primer nivel con más de 15 años de experiencia en la industria.",
                  cta: "Conozca Más Sobre Nosotros",
                },
              },
              services: {
                pageTitle: "Nuestros Servicios",
                pageSubtitle: "Servicios marítimos y offshore integrales entregados con excelencia y fiabilidad.",
                whatWeOffer: "Lo Que Ofrecemos",
                whatWeOfferSubtitle:
                  "Hydroferric proporciona una amplia gama de servicios marítimos y de soporte offshore adaptados para satisfacer las necesidades específicas de nuestros clientes.",
                readyToWork: "¿Listo para Trabajar con Nosotros?",
                readyToWorkSubtitle:
                  "Contacte a nuestro equipo hoy para discutir cómo Hydroferric puede apoyar sus operaciones marítimas y offshore.",
                marineServices: {
                  title: "Servicios Marítimos",
                  description:
                    "Servicios marítimos integrales que incluyen fletamento de buques, gestión de tripulación y operaciones marítimas.",
                  details: [
                    "Fletamento de buques para operaciones offshore",
                    "Gestión y formación de tripulación",
                    "Logística marítima y gestión de la cadena de suministro",
                    "Mantenimiento y reparación de buques",
                    "Seguridad y cumplimiento marítimo",
                  ],
                  fullDescription:
                    "Nuestros servicios marítimos integrales están diseñados para satisfacer las diversas necesidades de la industria marítima. Con una flota moderna y personal altamente calificado, ofrecemos soluciones flexibles de fletamento de buques para diversas operaciones offshore. Nuestro sistema de gestión de tripulación garantiza que todos los buques estén dotados de profesionales competentes y certificados. También gestionamos todos los aspectos de la logística marítima, desde la planificación de rutas hasta la gestión de la cadena de suministro. Nuestros servicios de mantenimiento preventivo y correctivo mantienen su flota en óptimas condiciones de funcionamiento, mientras que nuestros rigurosos protocolos de seguridad garantizan el cumplimiento de todas las regulaciones marítimas internacionales.",
                },
                offshoreSupport: {
                  title: "Soporte Offshore",
                  description:
                    "Soporte offshore especializado para operaciones de petróleo y gas, incluyendo suministro de plataformas y manejo de anclas.",
                  details: [
                    "Operaciones de buques de suministro de plataformas",
                    "Manejo de anclas y remolque",
                    "Transferencia de personal offshore",
                    "Servicios de respuesta de emergencia y de guardia",
                    "Soporte de construcción offshore",
                  ],
                  fullDescription:
                    "Nuestra división de soporte offshore proporciona servicios esenciales a instalaciones de petróleo y gas. Nuestros buques de suministro de plataformas (PSV) están equipados para transportar suministros, equipos y personal hacia y desde instalaciones offshore. Nuestras capacidades de manejo de anclas y remolque permiten el posicionamiento preciso de plataformas y otras estructuras. Ofrecemos transferencias seguras y eficientes de personal a instalaciones offshore, así como servicios de respuesta de emergencia disponibles 24/7. Nuestro equipo también apoya proyectos de construcción offshore con soluciones logísticas y operativas personalizadas.",
                },
                logistics: {
                  title: "Logística",
                  description:
                    "Soluciones logísticas integradas para transporte marítimo, manejo de carga y gestión de la cadena de suministro.",
                  details: [
                    "Transporte marítimo de equipos y suministros",
                    "Manejo y gestión de carga",
                    "Optimización de la cadena de suministro",
                    "Almacenamiento y gestión de inventario",
                    "Despacho de aduanas y documentación",
                  ],
                  fullDescription:
                    "Nuestros servicios logísticos integrados cubren todos los aspectos del transporte marítimo y la gestión de la cadena de suministro. Coordinamos el transporte eficiente de equipos y suministros a destinos costeros y offshore. Nuestra experiencia en manejo de carga garantiza que todos los materiales se manipulen de manera segura y eficiente. Optimizamos las cadenas de suministro para reducir costos y mejorar la eficiencia operativa. Nuestras instalaciones de almacenamiento seguras y sistemas de gestión de inventario garantizan que los suministros estén disponibles cuando los necesite. También gestionamos todos los aspectos del despacho de aduanas y documentación para garantizar operaciones transfronterizas sin problemas.",
                },
                vesselMaintenance: {
                  title: "Mantenimiento de Buques",
                  description:
                    "Servicios profesionales de mantenimiento y reparación de buques para garantizar la eficiencia operativa y la seguridad.",
                  details: [
                    "Mantenimiento programado e inspecciones",
                    "Reparaciones de emergencia y solución de problemas",
                    "Gestión de dique seco",
                    "Actualizaciones e instalaciones de equipos",
                    "Cumplimiento de requisitos de clasificación",
                  ],
                  fullDescription:
                    "Nuestro programa integral de mantenimiento de buques está diseñado para maximizar el tiempo de actividad y extender la vida útil de su flota. Realizamos mantenimiento programado regular e inspecciones exhaustivas para identificar y abordar problemas potenciales antes de que se vuelvan críticos. Nuestro equipo de técnicos experimentados está disponible 24/7 para reparaciones de emergencia y solución de problemas. Gestionamos todos los aspectos de las operaciones de dique seco, desde la planificación hasta la ejecución. Nuestros servicios también incluyen actualizaciones e instalaciones de equipos para mejorar el rendimiento y la seguridad de los buques. Todos nuestros servicios de mantenimiento cumplen con los requisitos de las sociedades de clasificación y las regulaciones marítimas internacionales.",
                },
                maritimeConsulting: {
                  title: "Consultoría Marítima",
                  description:
                    "Servicios expertos de consultoría marítima para optimizar operaciones, garantizar el cumplimiento y mejorar el rendimiento.",
                  details: [
                    "Evaluaciones de eficiencia operativa",
                    "Desarrollo de sistemas de gestión de seguridad",
                    "Auditorías de cumplimiento normativo",
                    "Evaluación y gestión de riesgos",
                    "Estrategias de mejora del rendimiento",
                  ],
                  fullDescription:
                    "Nuestros servicios de consultoría marítima se basan en décadas de experiencia en la industria para ayudar a su organización a optimizar sus operaciones. Nuestros consultores realizan evaluaciones exhaustivas de eficiencia operativa para identificar áreas de mejora. Desarrollamos e implementamos sistemas personalizados de gestión de seguridad que cumplen con los estándares internacionales. Nuestras auditorías de cumplimiento normativo garantizan que sus operaciones cumplan con todas las leyes y regulaciones aplicables. Nuestro enfoque integral de evaluación y gestión de riesgos ayuda a identificar, evaluar y mitigar riesgos potenciales. También desarrollamos estrategias personalizadas de mejora del rendimiento para aumentar la eficiencia y la rentabilidad.",
                },
                maritimeTraining: {
                  title: "Formación Marítima",
                  description:
                    "Programas integrales de formación para personal marítimo para mejorar habilidades y garantizar el cumplimiento de seguridad.",
                  details: [
                    "Formación en seguridad y respuesta a emergencias",
                    "Desarrollo de habilidades técnicas",
                    "Formación en liderazgo y gestión",
                    "Formación en cumplimiento normativo",
                    "Programas de formación personalizados",
                  ],
                  fullDescription:
                    "Nuestro centro de formación marítima ofrece programas integrales para desarrollar las habilidades y conocimientos de su personal. Nuestros cursos de seguridad y respuesta a emergencias preparan a las tripulaciones para responder eficazmente en situaciones críticas. Ofrecemos formación técnica exhaustiva en sistemas y equipos marítimos modernos. Nuestros programas de liderazgo y gestión desarrollan las habilidades necesarias para liderar eficazmente equipos marítimos. También proporcionamos formación en cumplimiento normativo para garantizar que su personal comprenda y cumpla con todas las leyes y regulaciones marítimas. Todos nuestros programas pueden personalizarse para satisfacer las necesidades específicas de su organización.",
                },
              },
              resources: {
                pageTitle: "Recursos",
                pageSubtitle:
                  "Descargue folletos, especificaciones técnicas y otros recursos sobre nuestros servicios y flota.",
                featuredResources: "Recursos Destacados",
                allResources: "Todos los Recursos",
                noResourcesFound: "No se encontraron recursos que coincidan con sus criterios.",
                clearFilters: "Limpiar Filtros",
                needSpecificResources: "¿Necesita Recursos Específicos?",
                contactMessage:
                  "Si no puede encontrar los recursos que está buscando, por favor contacte a nuestro equipo. Estaremos encantados de proporcionarle la información que necesita.",
                additionalResources: "Recursos Adicionales",
                industryGuidelines: "Directrices de la Industria",
                industryGuidelinesDesc:
                  "Acceda a directrices y estándares de la industria relevantes para operaciones marítimas.",
                safetyResources: "Recursos de Seguridad",
                safetyResourcesDesc: "Acceda a recursos de seguridad y mejores prácticas para operaciones marítimas.",
                clientPortal: "Portal de Clientes",
                clientPortalDesc:
                  "Los clientes existentes pueden acceder a recursos adicionales a través de nuestro portal seguro para clientes.",
                visitWebsite: "Visitar Sitio Web",
                clientLogin: "Inicio de Sesión de Cliente",
                categories: {
                  all: "Todos los Recursos",
                  brochures: "Folletos",
                  technical: "Especificaciones Técnicas",
                  safety: "Documentos de Seguridad",
                  presentations: "Presentaciones",
                  images: "Imágenes y Medios",
                },
              },
              footer: {
                rights: "Todos los derechos reservados.",
                quickLinks: "Enlaces Rápidos",
                services: "Nuestros Servicios",
                contactUs: "Contáctenos",
              },
            }
            break
          case "pt":
            translationData = {
              common: {
                home: "Início",
                about: "Sobre",
                services: "Serviços",
                fleet: "Frota",
                contact: "Contato",
                careers: "Carreiras",
                resources: "Recursos",
                media: "Mídia",
                learnMore: "Saiba Mais",
                viewAll: "Ver Tudo",
                downloadNow: "Baixar",
                searchResources: "Pesquisar recursos...",
                filterByCategory: "Filtrar por categoria",
                relatedResources: "Recursos Relacionados",
                findSimilarOnline: "Encontrar Recursos Similares Online",
                requestResources: "Precisa de Recursos Específicos?",
                contactUs: "Entre em Contato",
              },
              home: {
                hero: {
                  title: "Serviços de Suporte Marítimo e Offshore de Primeira Linha",
                  subtitle:
                    "Fornecendo serviços marítimos de classe mundial e suporte offshore com compromisso com segurança, confiabilidade e excelência.",
                  cta1: "Nossos Serviços",
                  cta2: "Entre em Contato",
                },
                services: {
                  title: "Nossos Serviços",
                  subtitle:
                    "Fornecendo serviços abrangentes de marinha e suporte offshore com compromisso com a excelência.",
                  viewAll: "Ver Todos os Serviços",
                },
                about: {
                  title: "Fornecedor Líder de Serviços Marítimos na Nigéria",
                  subtitle:
                    "Hydroferric Nigeria Limited é uma empresa de serviços marítimos de primeira linha com mais de 15 anos de experiência no setor.",
                  cta: "Saiba Mais Sobre Nós",
                },
              },
              services: {
                pageTitle: "Nossos Serviços",
                pageSubtitle: "Serviços marítimos e offshore abrangentes entregues com excelência e confiabilidade.",
                whatWeOffer: "O Que Oferecemos",
                whatWeOfferSubtitle:
                  "A Hydroferric fornece uma ampla gama de serviços marítimos e de suporte offshore adaptados para atender às necessidades específicas de nossos clientes.",
                readyToWork: "Pronto para Trabalhar Conosco?",
                readyToWorkSubtitle:
                  "Entre em contato com nossa equipe hoje para discutir como a Hydroferric pode apoiar suas operações marítimas e offshore.",
                marineServices: {
                  title: "Serviços Marítimos",
                  description:
                    "Serviços marítimos abrangentes incluindo fretamento de embarcações, gestão de tripulação e operações marítimas.",
                  details: [
                    "Fretamento de embarcações para operações offshore",
                    "Gestão e treinamento de tripulação",
                    "Logística marítima e gestão da cadeia de suprimentos",
                    "Manutenção e reparação de embarcações",
                    "Segurança e conformidade marítima",
                  ],
                  fullDescription:
                    "Nossos serviços marítimos abrangentes são projetados para atender às diversas necessidades da indústria marítima. Com uma frota moderna e pessoal altamente qualificado, oferecemos soluções flexíveis de fretamento de embarcações para várias operações offshore. Nosso sistema de gestão de tripulação garante que todas as embarcações sejam tripuladas por profissionais competentes e certificados. Também gerenciamos todos os aspectos da logística marítima, desde o planejamento de rotas até a gestão da cadeia de suprimentos. Nossos serviços de manutenção preventiva e corretiva mantêm sua frota em ótimas condições operacionais, enquanto nossos rigorosos protocolos de segurança garantem conformidade com todas as regulamentações marítimas internacionais.",
                },
                offshoreSupport: {
                  title: "Suporte Offshore",
                  description:
                    "Suporte offshore especializado para operações de petróleo e gás, incluindo abastecimento de plataformas e manuseio de âncoras.",
                  details: [
                    "Operações de embarcações de abastecimento de plataformas",
                    "Manuseio de âncoras e reboque",
                    "Transferência de pessoal offshore",
                    "Serviços de resposta a emergências e de prontidão",
                    "Suporte à construção offshore",
                  ],
                  fullDescription:
                    "Nossa divisão de suporte offshore fornece serviços essenciais para instalações de petróleo e gás. Nossas embarcações de abastecimento de plataformas (PSV) são equipadas para transportar suprimentos, equipamentos e pessoal de e para instalações offshore. Nossas capacidades de manuseio de âncoras e reboque permitem o posicionamento preciso de plataformas e outras estruturas. Oferecemos transferências seguras e eficientes de pessoal para instalações offshore, bem como serviços de resposta a emergências disponíveis 24/7. Nossa equipe também apoia projetos de construção offshore com soluções logísticas e operacionais personalizadas.",
                },
                logistics: {
                  title: "Logística",
                  description:
                    "Soluções logísticas integradas para transporte marítimo, manuseio de carga e gestão da cadeia de suprimentos.",
                  details: [
                    "Transporte marítimo de equipamentos e suprimentos",
                    "Manuseio e gestão de carga",
                    "Otimização da cadeia de suprimentos",
                    "Armazenamento e gestão de inventário",
                    "Desembaraço aduaneiro e documentação",
                  ],
                  fullDescription:
                    "Nossos serviços logísticos integrados cobrem todos os aspectos do transporte marítimo e gestão da cadeia de suprimentos. Coordenamos o transporte eficiente de equipamentos e suprimentos para destinos costeiros e offshore. Nossa expertise em manuseio de carga garante que todos os materiais sejam manuseados com segurança e eficiência. Otimizamos cadeias de suprimentos para reduzir custos e melhorar a eficiência operacional. Nossas instalações de armazenamento seguras e sistemas de gestão de inventário garantem que os suprimentos estejam disponíveis quando você precisar. Também gerenciamos todos os aspectos do desembaraço aduaneiro e documentação para garantir operações transfronteiriças sem problemas.",
                },
                vesselMaintenance: {
                  title: "Manutenção de Embarcações",
                  description:
                    "Serviços profissionais de manutenção e reparo de embarcações para garantir eficiência operacional e segurança.",
                  details: [
                    "Manutenção programada e inspeções",
                    "Reparos de emergência e solução de problemas",
                    "Gestão de docagem",
                    "Atualizações e instalações de equipamentos",
                    "Conformidade com requisitos de classificação",
                  ],
                  fullDescription:
                    "Nosso programa abrangente de manutenção de embarcações é projetado para maximizar o tempo de atividade e estender a vida útil de sua frota. Realizamos manutenção programada regular e inspeções completas para identificar e resolver problemas potenciais antes que se tornem críticos. Nossa equipe de técnicos experientes está disponível 24/7 para reparos de emergência e solução de problemas. Gerenciamos todos os aspectos das operações de docagem, desde o planejamento até a execução. Nossos serviços também incluem atualizações e instalações de equipamentos para melhorar o desempenho e a segurança das embarcações. Todos os nossos serviços de manutenção estão em conformidade com os requisitos das sociedades de classificação e regulamentações marítimas internacionais.",
                },
                maritimeConsulting: {
                  title: "Consultoria Marítima",
                  description:
                    "Serviços especializados de consultoria marítima para otimizar operações, garantir conformidade e melhorar desempenho.",
                  details: [
                    "Avaliações de eficiência operacional",
                    "Desenvolvimento de sistemas de gestão de segurança",
                    "Auditorias de conformidade regulatória",
                    "Avaliação e gestão de riscos",
                    "Estratégias de melhoria de desempenho",
                  ],
                  fullDescription:
                    "Nossos serviços de consultoria marítima se baseiam em décadas de expertise na indústria para ajudar sua organização a otimizar suas operações. Nossos consultores realizam avaliações abrangentes de eficiência operacional para identificar áreas de melhoria. Desenvolvemos e implementamos sistemas personalizados de gestão de segurança que atendem aos padrões internacionais. Nossas auditorias de conformidade regulatória garantem que suas operações cumpram todas as leis e regulamentações aplicáveis. Nossa abordagem abrangente de avaliação e gestão de riscos ajuda a identificar, avaliar e mitigar riscos potenciais. Também desenvolvemos estratégias personalizadas de melhoria de desempenho para aumentar a eficiência e a lucratividade.",
                },
                maritimeTraining: {
                  title: "Treinamento Marítimo",
                  description:
                    "Programas abrangentes de treinamento para pessoal marítimo para aprimorar habilidades e garantir conformidade com segurança.",
                  details: [
                    "Treinamento em segurança e resposta a emergências",
                    "Desenvolvimento de habilidades técnicas",
                    "Treinamento em liderança e gestão",
                    "Treinamento em conformidade regulatória",
                    "Programas de treinamento personalizados",
                  ],
                  fullDescription:
                    "Nosso centro de treinamento marítimo oferece programas abrangentes para desenvolver as habilidades e conhecimentos do seu pessoal. Nossos cursos de segurança e resposta a emergências preparam as tripulações para responder efetivamente em situações críticas. Oferecemos treinamento técnico aprofundado em sistemas e equipamentos marítimos modernos. Nossos programas de liderança e gestão desenvolvem as habilidades necessárias para liderar equipes marítimas efetivamente. Também fornecemos treinamento em conformidade regulatória para garantir que seu pessoal entenda e cumpra todas as leis e regulamentações marítimas. Todos os nossos programas podem ser personalizados para atender às necessidades específicas da sua organização.",
                },
              },
              resources: {
                pageTitle: "Recursos",
                pageSubtitle:
                  "Baixe brochuras, especificações técnicas e outros recursos sobre nossos serviços e frota.",
                featuredResources: "Recursos em Destaque",
                allResources: "Todos os Recursos",
                noResourcesFound: "Nenhum recurso encontrado correspondente aos seus critérios.",
                clearFilters: "Limpar Filtros",
                needSpecificResources: "Precisa de Recursos Específicos?",
                contactMessage:
                  "Se você não consegue encontrar os recursos que está procurando, entre em contato com nossa equipe. Teremos prazer em fornecer as informações que você precisa.",
                additionalResources: "Recursos Adicionais",
                industryGuidelines: "Diretrizes da Indústria",
                industryGuidelinesDesc: "Acesse diretrizes e padrões da indústria relevantes para operações marítimas.",
                safetyResources: "Recursos de Segurança",
                safetyResourcesDesc: "Acesse recursos de segurança e melhores práticas para operações marítimas.",
                clientPortal: "Portal do Cliente",
                clientPortalDesc:
                  "Clientes existentes podem acessar recursos adicionais através do nosso portal seguro para clientes.",
                visitWebsite: "Visitar Website",
                clientLogin: "Login do Cliente",
                categories: {
                  all: "Todos os Recursos",
                  brochures: "Brochuras",
                  technical: "Especificações Técnicas",
                  safety: "Documentos de Segurança",
                  presentations: "Apresentações",
                  images: "Imagens e Mídia",
                },
              },
              footer: {
                rights: "Todos os direitos reservados.",
                quickLinks: "Links Rápidos",
                services: "Nossos Serviços",
                contactUs: "Entre em Contato",
              },
            }
            break
          case "ar":
            translationData = {
              common: {
                home: "الرئيسية",
                about: "من نحن",
                services: "الخدمات",
                fleet: "الأسطول",
                contact: "اتصل بنا",
                careers: "وظائف",
                resources: "موارد",
                media: "وسائط",
                learnMore: "اعرف المزيد",
                viewAll: "عرض الكل",
                downloadNow: "تحميل",
                searchResources: "البحث عن موارد...",
                filterByCategory: "تصفية حسب الفئة",
                relatedResources: "موارد ذات صلة",
                findSimilarOnline: "البحث عن موارد مماثلة عبر الإنترنت",
                requestResources: "هل تحتاج إلى موارد محددة؟",
                contactUs: "اتصل بنا",
              },
              home: {
                hero: {
                  title: "خدمات الدعم البحري والبحري الرائدة",
                  subtitle: "تقديم خدمات بحرية عالمية المستوى ودعم بحري مع الالتزام بالسلامة والموثوقية والتميز.",
                  cta1: "خدماتنا",
                  cta2: "اتصل بنا",
                },
                services: {
                  title: "خدماتنا",
                  subtitle: "تقديم خدمات بحرية شاملة ودعم بحري مع الالتزام بالتميز.",
                  viewAll: "عرض جميع الخدمات",
                },
                about: {
                  title: "مزود خدمات بحرية رائد في نيجيريا",
                  subtitle:
                    "هيدروفيريك نيجيريا المحدودة هي شركة خدمات بحرية رائدة مع أكثر من 15 عامًا من الخبرة في الصناعة.",
                  cta: "تعرف على المزيد عنا",
                },
              },
              services: {
                pageTitle: "خدماتنا",
                pageSubtitle: "خدمات بحرية وبحرية شاملة تقدم بتميز وموثوقية.",
                whatWeOffer: "ما نقدمه",
                whatWeOfferSubtitle:
                  "توفر هيدروفيريك مجموعة واسعة من الخدمات البحرية ودعم البحرية المصممة لتلبية الاحتياجات المحددة لعملائنا.",
                readyToWork: "هل أنت مستعد للعمل معنا؟",
                readyToWorkSubtitle: "اتصل بفريقنا اليوم لمناقشة كيف يمكن لهيدروفيريك دعم عملياتك البحرية والبحرية.",
                marineServices: {
                  title: "الخدمات البحرية",
                  description: "خدمات بحرية شاملة تشمل استئجار السفن وإدارة الطاقم والعمليات البحرية.",
                  details: [
                    "استئجار السفن للعمليات البحرية",
                    "إدارة وتدريب الطاقم",
                    "الخدمات اللوجستية البحرية وإدارة سلسلة التوريد",
                    "صيانة وإصلاح السفن",
                    "السلامة والامتثال البحري",
                  ],
                  fullDescription:
                    "خدماتنا البحرية الشاملة مصممة لتلبية الاحتياجات المتنوعة للصناعة البحرية. مع أسطول حديث وموظفين مؤهلين تأهيلاً عالياً، نقدم حلول استئجار سفن مرنة لمختلف العمليات البحرية. يضمن نظام إدارة الطاقم لدينا أن جميع السفن مزودة بمهنيين أكفاء ومعتمدين. كما ندير جميع جوانب الخدمات اللوجستية البحرية، من تخطيط المسارات إلى إدارة سلسلة التوريد. تحافظ خدمات الصيانة الوقائية والتصحيحية لدينا على أسطولك في حالة تشغيل مثالية، بينما تضمن بروتوكولات السلامة الصارمة لدينا الامتثال لجميع اللوائح البحرية الدولية.",
                },
                offshoreSupport: {
                  title: "دعم البحرية",
                  description: "دعم بحري متخصص لعمليات النفط والغاز، بما في ذلك إمداد المنصات والتعامل مع المراسي.",
                  details: [
                    "عمليات سفن إمداد المنصات",
                    "التعامل مع المراسي والقطر",
                    "نقل الأفراد البحريين",
                    "خدمات الاستجابة للطوارئ والاستعداد",
                    "دعم البناء البحري",
                  ],
                  fullDescription:
                    "يوفر قسم الدعم البحري لدينا خدمات أساسية لمنشآت النفط والغاز. سفن إمداد المنصات (PSV) لدينا مجهزة لنقل الإمدادات والمعدات والأفراد من وإلى المنشآت البحرية. تتيح قدراتنا في التعامل مع المراسي والقطر التموضع الدقيق للمنصات والهياكل الأخرى. نقدم عمليات نقل آمنة وفعالة للأفراد إلى المنشآت البحرية، بالإضافة إلى خدمات الاستجابة للطوارئ المتاحة على مدار الساعة طوال أيام الأسبوع. كما يدعم فريقنا مشاريع البناء البحرية بحلول لوجستية وتشغيلية مخصصة.",
                },
                logistics: {
                  title: "الخدمات اللوجستية",
                  description: "حلول لوجستية متكاملة للنقل البحري ومناولة البضائع وإدارة سلسلة التوريد.",
                  details: [
                    "النقل البحري للمعدات والإمدادات",
                    "مناولة وإدارة البضائع",
                    "تحسين سلسلة التوريد",
                    "التخزين وإدارة المخزون",
                    "التخليص الجمركي والتوثيق",
                  ],
                  fullDescription:
                    "تغطي خدماتنا اللوجستية المتكاملة جميع جوانب النقل البحري وإدارة سلسلة التوريد. نحن ننسق النقل الفعال للمعدات والإمدادات إلى الوجهات الساحلية والبحرية. تضمن خبرتنا في مناولة البضائع التعامل مع جميع المواد بأمان وكفاءة. نحن نحسن سلاسل التوريد لتقليل التكاليف وتحسين الكفاءة التشغيلية. تضمن مرافق التخزين الآمنة وأنظمة إدارة المخزون لدينا توفر الإمدادات عند الحاجة إليها. كما ندير جميع جوانب التخليص الجمركي والتوثيق لضمان عمليات عبر الحدود سلسة.",
                },
                vesselMaintenance: {
                  title: "صيانة السفن",
                  description: "خدمات صيانة وإصلاح السفن المهنية لضمان الكفاءة التشغيلية والسلامة.",
                  details: [
                    "الصيانة المجدولة والفحوصات",
                    "إصلاحات الطوارئ واستكشاف الأخطاء وإصلاحها",
                    "إدارة الحوض الجاف",
                    "ترقيات وتركيبات المعدات",
                    "الامتثال لمتطلبات التصنيف",
                  ],
                  fullDescription:
                    "برنامج صيانة السفن الشامل لدينا مصمم لزيادة وقت التشغيل وإطالة عمر أسطولك. نقوم بإجراء صيانة منتظمة مجدولة وفحوصات شاملة لتحديد ومعالجة المشكلات المحتملة قبل أن تصبح حرجة. فريقنا من الفنيين ذوي الخبرة متاح على مدار الساعة لإصلاحات الطوارئ واستكشاف الأخطاء وإصلاحها. نحن ندير جميع جوانب عمليات الحوض الجاف، من التخطيط إلى التنفيذ. تشمل خدماتنا أيضًا ترقيات وتركيبات المعدات لتحسين أداء وسلامة السفن. جميع خدمات الصيانة لدينا تتوافق مع متطلبات هيئات التصنيف واللوائح البحرية الدولية.",
                },
                maritimeConsulting: {
                  title: "الاستشارات البحرية",
                  description: "خدمات استشارية بحرية خبيرة لتحسين العمليات وضمان الامتثال وتحسين الأداء.",
                  details: [
                    "تقييمات الكفاءة التشغيلية",
                    "تطوير أنظمة إدارة السلامة",
                    "تدقيقات الامتثال التنظيمي",
                    "تقييم وإدارة المخاطر",
                    "استراتيجيات تحسين الأداء",
                  ],
                  fullDescription:
                    "تعتمد خدماتنا الاستشارية البحرية على عقود من الخبرة في الصناعة لمساعدة مؤسستك على تحسين عملياتها. يقوم مستشارونا بإجراء تقييمات شاملة للكفاءة التشغيلية لتحديد مجالات التحسين. نحن نطور وننفذ أنظمة إدارة السلامة المخصصة التي تتوافق مع المعايير الدولية. تضمن عمليات تدقيق الامتثال التنظيمي لدينا أن عملياتك تمتثل لجميع القوانين واللوائح المعمول بها. يساعد نهجنا الشامل لتقييم وإدارة المخاطر في تحديد وتقييم وتخفيف المخاطر المحتملة. كما نطور استراتيجيات تحسين الأداء المخصصة لزيادة الكفاءة والربحية.",
                },
                maritimeTraining: {
                  title: "التدريب البحري",
                  description: "برامج تدريبية شاملة للعاملين في المجال البحري لتعزيز المهارات وضمان الامتثال للسلامة.",
                  details: [
                    "التدريب على السلامة والاستجابة للطوارئ",
                    "تطوير المهارات التقنية",
                    "تدريب القيادة والإدارة",
                    "التدريب على الامتثال التنظيمي",
                    "برامج تدريبية مخصصة",
                  ],
                  fullDescription:
                    "يقدم مركز التدريب البحري لدينا برامج شاملة لتطوير مهارات ومعرفة موظفيك. تعد دورات السلامة والاستجابة للطوارئ لدينا الطواقم للاستجابة بفعالية في المواقف الحرجة. نقدم تدريبًا تقنيًا شاملاً على أنظمة ومعدات بحرية حديثة. تطور برامج القيادة والإدارة لدينا المهارات اللازمة لقيادة الفرق البحرية بفعالية. كما نقدم تدريبًا على الامتثال التنظيمي لضمان فهم موظفيك والامتثال لجميع القوانين واللوائح البحرية. يمكن تخصيص جميع برامجنا لتلبية الاحتياجات المحددة لمؤسستك.",
                },
              },
              resources: {
                pageTitle: "الموارد",
                pageSubtitle: "قم بتنزيل الكتيبات والمواصفات الفنية وموارد أخرى حول خدماتنا وأسطولنا.",
                featuredResources: "موارد مميزة",
                allResources: "جميع الموارد",
                noResourcesFound: "لم يتم العثور على موارد تطابق معاييرك.",
                clearFilters: "مسح الفلاتر",
                needSpecificResources: "هل تحتاج إلى موارد محددة؟",
                contactMessage:
                  "إذا لم تتمكن من العثور على الموارد التي تبحث عنها، يرجى الاتصال بفريقنا. سنكون سعداء بتزويدك بالمعلومات التي تحتاجها.",
                additionalResources: "موارد إضافية",
                industryGuidelines: "إرشادات الصناعة",
                industryGuidelinesDesc: "الوصول إلى إرشادات ومعايير الصناعة ذات الصلة بالعمليات البحرية.",
                safetyResources: "موارد السلامة",
                safetyResourcesDesc: "الوصول إلى موارد السلامة وأفضل الممارسات للعمليات البحرية.",
                clientPortal: "بوابة العملاء",
                clientPortalDesc:
                  "يمكن للعملاء الحاليين الوصول إلى موارد إضافية من خلال بوابة العملاء الآمنة الخاصة بنا.",
                visitWebsite: "زيارة الموقع",
                clientLogin: "تسجيل دخول العميل",
                categories: {
                  all: "جميع الموارد",
                  brochures: "كتيبات",
                  technical: "المواصفات الفنية",
                  safety: "وثائق السلامة",
                  presentations: "عروض تقديمية",
                  images: "صور ووسائط",
                },
              },
              footer: {
                rights: "جميع الحقوق محفوظة.",
                quickLinks: "روابط سريعة",
                services: "خدماتنا",
                contactUs: "اتصل بنا",
              },
            }
            break
          default:
            // English (default)
            translationData = {
              common: {
                home: "Home",
                about: "About",
                services: "Services",
                fleet: "Fleet",
                contact: "Contact",
                careers: "Careers",
                resources: "Resources",
                media: "Media",
                learnMore: "Learn More",
                viewAll: "View All",
                downloadNow: "Download",
                searchResources: "Search resources...",
                filterByCategory: "Filter by category",
                relatedResources: "Related Resources",
                findSimilarOnline: "Find Similar Resources Online",
                requestResources: "Need Specific Resources?",
                contactUs: "Contact Us",
              },
              home: {
                hero: {
                  title: "Premier Marine & Offshore Support Services",
                  subtitle:
                    "Providing world-class marine services and offshore support with a commitment to safety, reliability, and excellence.",
                  cta1: "Our Services",
                  cta2: "Contact Us",
                },
                services: {
                  title: "Our Services",
                  subtitle:
                    "Providing comprehensive marine and offshore support services with a commitment to excellence.",
                  viewAll: "View All Services",
                },
                about: {
                  title: "Leading Marine Services Provider in Nigeria",
                  subtitle:
                    "Hydroferric Nigeria Limited is a premier marine services company with over 15 years of experience in the industry.",
                  cta: "Learn More About Us",
                },
              },
              services: {
                pageTitle: "Our Services",
                pageSubtitle: "Comprehensive marine and offshore services delivered with excellence and reliability.",
                whatWeOffer: "What We Offer",
                whatWeOfferSubtitle:
                  "Hydroferric provides a wide range of marine and offshore support services tailored to meet the specific needs of our clients.",
                readyToWork: "Ready to Work With Us?",
                readyToWorkSubtitle:
                  "Contact our team today to discuss how Hydroferric can support your marine and offshore operations.",
                marineServices: {
                  title: "Marine Services",
                  description:
                    "Comprehensive marine services including vessel chartering, crew management, and maritime operations.",
                  details: [
                    "Vessel chartering for offshore operations",
                    "Crew management and training",
                    "Maritime logistics and supply chain management",
                    "Vessel maintenance and repair",
                    "Maritime safety and compliance",
                  ],
                  fullDescription:
                    "Our comprehensive marine services are designed to meet the diverse needs of the maritime industry. With a modern fleet and highly qualified personnel, we offer flexible vessel chartering solutions for various offshore operations. Our crew management system ensures that all vessels are staffed with competent and certified professionals. We also manage all aspects of maritime logistics, from route planning to supply chain management. Our preventive and corrective maintenance services keep your fleet in optimal operating condition, while our rigorous safety protocols ensure compliance with all international maritime regulations.",
                },
                offshoreSupport: {
                  title: "Offshore Support",
                  description:
                    "Specialized offshore support for oil & gas operations, including platform supply and anchor handling.",
                  details: [
                    "Platform supply vessel operations",
                    "Anchor handling and towing",
                    "Offshore personnel transfer",
                    "Emergency response and standby services",
                    "Offshore construction support",
                  ],
                  fullDescription:
                    "Our offshore support division provides essential services to oil and gas facilities. Our Platform Supply Vessels (PSVs) are equipped to transport supplies, equipment, and personnel to and from offshore installations. Our anchor handling and towing capabilities allow for precise positioning of platforms and other structures. We offer safe and efficient personnel transfers to offshore installations, as well as emergency response services available 24/7. Our team also supports offshore construction projects with tailored logistical and operational solutions.",
                },
                logistics: {
                  title: "Logistics",
                  description:
                    "Integrated logistics solutions for marine transportation, cargo handling, and supply chain management.",
                  details: [
                    "Marine transportation of equipment and supplies",
                    "Cargo handling and management",
                    "Supply chain optimization",
                    "Warehousing and inventory management",
                    "Customs clearance and documentation",
                  ],
                  fullDescription:
                    "Our integrated logistics services cover all aspects of marine transportation and supply chain management. We coordinate the efficient transport of equipment and supplies to coastal and offshore destinations. Our expertise in cargo handling ensures that all materials are handled safely and efficiently. We optimize supply chains to reduce costs and improve operational efficiency. Our secure storage facilities and inventory management systems ensure that supplies are available when you need them. We also manage all aspects of customs clearance and documentation to ensure smooth cross-border operations.",
                },
                vesselMaintenance: {
                  title: "Vessel Maintenance",
                  description:
                    "Professional vessel maintenance and repair services to ensure operational efficiency and safety.",
                  details: [
                    "Scheduled maintenance and inspections",
                    "Emergency repairs and troubleshooting",
                    "Dry docking management",
                    "Equipment upgrades and installations",
                    "Compliance with classification requirements",
                  ],
                  fullDescription:
                    "Our comprehensive vessel maintenance program is designed to maximize uptime and extend the lifespan of your fleet. We perform regular scheduled maintenance and thorough inspections to identify and address potential issues before they become critical. Our team of experienced technicians is available 24/7 for emergency repairs and troubleshooting. We manage all aspects of dry docking operations, from planning to execution. Our services also include equipment upgrades and installations to improve vessel performance and safety. All our maintenance services comply with classification society requirements and international maritime regulations.",
                },
                maritimeConsulting: {
                  title: "Maritime Consulting",
                  description:
                    "Expert maritime consulting services to optimize operations, ensure compliance, and improve performance.",
                  details: [
                    "Operational efficiency assessments",
                    "Safety management system development",
                    "Regulatory compliance audits",
                    "Risk assessment and management",
                    "Performance improvement strategies",
                  ],
                  fullDescription:
                    "Our maritime consulting services draw on decades of industry expertise to help your organization optimize its operations. Our consultants perform comprehensive operational efficiency assessments to identify areas for improvement. We develop and implement customized safety management systems that comply with international standards. Our regulatory compliance audits ensure that your operations meet all applicable laws and regulations. Our comprehensive approach to risk assessment and management helps identify, evaluate, and mitigate potential risks. We also develop tailored performance improvement strategies to increase efficiency and profitability.",
                },
                maritimeTraining: {
                  title: "Maritime Training",
                  description:
                    "Comprehensive training programs for maritime personnel to enhance skills and ensure safety compliance.",
                  details: [
                    "Safety and emergency response training",
                    "Technical skills development",
                    "Leadership and management training",
                    "Regulatory compliance training",
                    "Customized training programs",
                  ],
                  fullDescription:
                    "Our maritime training center offers comprehensive programs to develop your personnel's skills and knowledge. Our safety and emergency response courses prepare crews to respond effectively in critical situations. We provide in-depth technical training on modern maritime systems and equipment. Our leadership and management programs develop the skills needed to effectively lead maritime teams. We also provide regulatory compliance training to ensure your personnel understand and adhere to all maritime laws and regulations. All our programs can be customized to meet your organization's specific needs.",
                },
              },
              resources: {
                pageTitle: "Resources",
                pageSubtitle:
                  "Download brochures, technical specifications, and other resources about our services and fleet.",
                featuredResources: "Featured Resources",
                allResources: "All Resources",
                noResourcesFound: "No resources found matching your criteria.",
                clearFilters: "Clear Filters",
                needSpecificResources: "Need Specific Resources?",
                contactMessage:
                  "If you can't find the resources you're looking for, please contact our team. We'll be happy to provide you with the information you need.",
                additionalResources: "Additional Resources",
                industryGuidelines: "Industry Guidelines",
                industryGuidelinesDesc: "Access industry guidelines and standards relevant to marine operations.",
                safetyResources: "Safety Resources",
                safetyResourcesDesc: "Access safety resources and best practices for maritime operations.",
                clientPortal: "Client Portal",
                clientPortalDesc: "Existing clients can access additional resources through our secure client portal.",
                visitWebsite: "Visit Website",
                clientLogin: "Client Login",
                categories: {
                  all: "All Resources",
                  brochures: "Brochures",
                  technical: "Technical Specifications",
                  safety: "Safety Documents",
                  presentations: "Presentations",
                  images: "Images & Media",
                },
              },
              footer: {
                rights: "All rights reserved.",
                quickLinks: "Quick Links",
                services: "Our Services",
                contactUs: "Contact Us",
              },
            }
        }

        setTranslations(translationData)
        setIsLoading(false)

        // Save to localStorage
        localStorage.setItem("language", currentLanguage)

        // Set document direction for RTL languages
        const isRTL = languages.find((lang) => lang.code === currentLanguage)?.rtl
        document.documentElement.dir = isRTL ? "rtl" : "ltr"
      } catch (error) {
        console.error("Failed to load translations:", error)
        setIsLoading(false)
      }
    }

    loadTranslations()
  }, [currentLanguage])

  // Function to change the language
  const changeLanguage = (langCode) => {
    setCurrentLanguage(langCode)
  }

  // Function to get a translation by key
  const t = (key) => {
    if (isLoading) return key // Return the key if translations are still loading

    // Split the key by dots to access nested properties
    const keys = key.split(".")
    let value = translations

    // Traverse the translations object
    for (const k of keys) {
      if (value && value[k]) {
        value = value[k]
      } else {
        // If the key doesn't exist, return the original key
        return key
      }
    }

    return value
  }

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        changeLanguage,
        t,
        isLoading,
        languages,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

// Custom hook to use the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
