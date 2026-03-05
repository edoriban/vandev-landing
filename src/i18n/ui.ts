export const languages = {
  es: "Español",
  en: "English",
} as const;

export type Lang = keyof typeof languages;

export const ui = {
  es: {
    // Nav
    "nav.home": "Inicio",
    "nav.services": "Servicios",
    "nav.projects": "Proyectos",
    "nav.why": "Por qué VanDev",
    "nav.contact": "Contacto",

    // Hero
    "hero.tag": "// DESARROLLO DE SOFTWARE A LA MEDIDA",
    "hero.line1": "VAN",
    "hero.line2": "DEV",
    "hero.line3": "STUDIO_",
    "hero.tagline":
      "Transformamos ideas en software de alto rendimiento. Desarrollo web, desktop, SaaS y soluciones industriales con IA.",
    "hero.cta": "VER SERVICIOS →",
    "hero.stats.products": "PRODUCTOS",
    "hero.stats.services": "SERVICIOS",
    "hero.stats.since": "DESDE",

    // Services
    "services.tag": "// SERVICES.INIT",
    "services.title.line1": "NUESTROS",
    "services.title.line2": "SERVICIOS_",
    "services.web.title": "Desarrollo Web",
    "services.web.description":
      "Aplicaciones web modernas con React, Next.js y Astro. Interfaces rápidas, accesibles y optimizadas para SEO.",
    "services.desktop.title": "Apps de Escritorio",
    "services.desktop.description":
      "Aplicaciones nativas con Tauri y Rust. Rendimiento nativo, tamaño mínimo, acceso completo al hardware.",
    "services.saas.title": "Plataformas SaaS",
    "services.saas.description":
      "Productos SaaS escalables de principio a fin. Arquitectura multi-tenant, APIs robustas y dashboards en tiempo real.",
    "services.ai.title": "IA Industrial",
    "services.ai.description":
      "Visión artificial con YOLO y detección de anomalías. Inspección automatizada y control de calidad en línea de producción.",
    "services.consulting.title": "Consultoría Tech",
    "services.consulting.description":
      "Auditorías de arquitectura, migración de sistemas legacy y optimización de rendimiento. Estrategia tecnológica para escalar.",

    // Projects
    "projects.tag": "// PROJECTS.SHOWCASE",
    "projects.title.line1": "NUESTROS",
    "projects.title.line2": "PROYECTOS_",
    "projects.counter": "productos van*",
    "projects.status": "PROYECTOS.CARGADOS",

    // Why VanDev
    "why.tag": "// WHY_VANDEV.INIT",
    "why.title.line1": "POR QUÉ",
    "why.title.line2": "VANDEV_",
    "why.tech.title": "Tecnología de Punta",
    "why.tech.description":
      "Rust, React, Python, IA — usamos las herramientas correctas para cada desafío. Sin compromisos en rendimiento ni calidad.",
    "why.custom.title": "Soluciones a la Medida",
    "why.custom.description":
      "Cada proyecto es único. Diseñamos arquitecturas específicas para tus necesidades, no soluciones genéricas.",
    "why.industrial.title": "Experiencia Industrial",
    "why.industrial.description":
      "Años trabajando en manufactura y líneas de producción. Entendemos los retos del mundo real en planta.",
    "why.delivery.title": "Entrega Continua",
    "why.delivery.description":
      "Desarrollo ágil con entregas incrementales. Ves progreso real desde la primera semana, no promesas.",

    // Contact
    "contact.tag": "// CONTACT.INIT",
    "contact.title.line1": "HABLEMOS",
    "contact.title.line2": "DE TU PROYECTO_",
    "contact.description.line1":
      "> ¿Listo para llevar tu idea al siguiente nivel?",
    "contact.description.line2":
      "> Cuéntanos sobre tu proyecto y te respondemos en menos de 24 horas.",
    "contact.description.line3": "> Construyamos algo increíble juntos.",
    "contact.cta": "ENVIAR MENSAJE →",
    "contact.status": "ESTADO: DISPONIBLE",
    "contact.response": "RESPUESTA: <24H",
    "contact.timezone": "ZONA HORARIA: CST",

    // Footer
    "footer.navigation": "NAVEGACIÓN",
    "footer.connect": "CONECTAR",
    "footer.legal": "LEGAL",
    "footer.privacy": "Privacidad",
    "footer.terms": "Términos",
    "footer.cookies": "Cookies",
    "footer.faq": "FAQ",
    "footer.bottom": "MX-NL // RUST · REACT · PYTHON // DESDE 2017",
    "footer.built": "HECHO CON ASTRO + TAILWIND",

    // Cookie consent
    "cookie.message":
      "Este sitio usa cookies esenciales para funcionar correctamente. No usamos cookies de rastreo ni analíticas.",
    "cookie.accept": "ACEPTAR",
    "cookie.reject": "RECHAZAR",

    // Legal page titles
    "legal.privacy.title": "Aviso de Privacidad",
    "legal.terms.title": "Términos y Condiciones",
    "legal.cookies.title": "Política de Cookies",
    "legal.faq.title": "Preguntas Frecuentes",
    "legal.back": "← Volver al inicio",
  },
  en: {
    // Nav
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.projects": "Projects",
    "nav.why": "Why VanDev",
    "nav.contact": "Contact",

    // Hero
    "hero.tag": "// CUSTOM SOFTWARE DEVELOPMENT",
    "hero.line1": "VAN",
    "hero.line2": "DEV",
    "hero.line3": "STUDIO_",
    "hero.tagline":
      "We turn ideas into high-performance software. Web, desktop, SaaS, and industrial AI solutions.",
    "hero.cta": "VIEW SERVICES →",
    "hero.stats.products": "PRODUCTS",
    "hero.stats.services": "SERVICES",
    "hero.stats.since": "SINCE",

    // Services
    "services.tag": "// SERVICES.INIT",
    "services.title.line1": "OUR",
    "services.title.line2": "SERVICES_",
    "services.web.title": "Web Development",
    "services.web.description":
      "Modern web apps with React, Next.js, and Astro. Fast, accessible, and SEO-optimized interfaces.",
    "services.desktop.title": "Desktop Apps",
    "services.desktop.description":
      "Native applications with Tauri and Rust. Native performance, minimal footprint, full hardware access.",
    "services.saas.title": "SaaS Platforms",
    "services.saas.description":
      "End-to-end scalable SaaS products. Multi-tenant architecture, robust APIs, and real-time dashboards.",
    "services.ai.title": "Industrial AI",
    "services.ai.description":
      "Computer vision with YOLO and anomaly detection. Automated inspection and quality control on the production line.",
    "services.consulting.title": "Tech Consulting",
    "services.consulting.description":
      "Architecture audits, legacy system migration, and performance optimization. Technology strategy to scale.",

    // Projects
    "projects.tag": "// PROJECTS.SHOWCASE",
    "projects.title.line1": "OUR",
    "projects.title.line2": "PROJECTS_",
    "projects.counter": "van* products",
    "projects.status": "PROJECTS.LOADED",

    // Why VanDev
    "why.tag": "// WHY_VANDEV.INIT",
    "why.title.line1": "WHY",
    "why.title.line2": "VANDEV_",
    "why.tech.title": "Cutting-Edge Tech",
    "why.tech.description":
      "Rust, React, Python, AI — we use the right tools for each challenge. No compromises on performance or quality.",
    "why.custom.title": "Custom Solutions",
    "why.custom.description":
      "Every project is unique. We design specific architectures for your needs, not generic solutions.",
    "why.industrial.title": "Industrial Experience",
    "why.industrial.description":
      "Years working in manufacturing and production lines. We understand real-world factory floor challenges.",
    "why.delivery.title": "Continuous Delivery",
    "why.delivery.description":
      "Agile development with incremental releases. You see real progress from week one, not promises.",

    // Contact
    "contact.tag": "// CONTACT.INIT",
    "contact.title.line1": "LET'S TALK",
    "contact.title.line2": "ABOUT YOUR PROJECT_",
    "contact.description.line1":
      "> Ready to take your idea to the next level?",
    "contact.description.line2":
      "> Tell us about your project and we'll respond within 24 hours.",
    "contact.description.line3": "> Let's build something amazing together.",
    "contact.cta": "SEND MESSAGE →",
    "contact.status": "STATUS: AVAILABLE",
    "contact.response": "RESPONSE: <24H",
    "contact.timezone": "TIMEZONE: CST",

    // Footer
    "footer.navigation": "NAVIGATION",
    "footer.connect": "CONNECT",
    "footer.legal": "LEGAL",
    "footer.privacy": "Privacy",
    "footer.terms": "Terms",
    "footer.cookies": "Cookies",
    "footer.faq": "FAQ",
    "footer.bottom": "MX-NL // RUST · REACT · PYTHON // SINCE 2017",
    "footer.built": "BUILT WITH ASTRO + TAILWIND",

    // Cookie consent
    "cookie.message":
      "This site uses essential cookies to function properly. We do not use tracking or analytics cookies.",
    "cookie.accept": "ACCEPT",
    "cookie.reject": "REJECT",

    // Legal page titles
    "legal.privacy.title": "Privacy Policy",
    "legal.terms.title": "Terms & Conditions",
    "legal.cookies.title": "Cookie Policy",
    "legal.faq.title": "FAQ",
    "legal.back": "← Back to home",
  },
} as const;
