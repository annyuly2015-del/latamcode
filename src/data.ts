import { ServiceItem, TechnologyItem, WorkStepItem, DifferentialItem, FeaturedProject } from './types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'software-a-medida',
    title: 'Desarrollo de Software a Medida',
    shortDescription: 'Sistemas empresariales diseñados desde cero para automatizar tus operaciones y optimizar flujos de trabajo únicos.',
    fullDescription: 'Creamos soluciones robustas de software empresarial diseñadas para amoldarse exactamente a las reglas de negocio de tu organización. Desde sistemas de planificación interna hasta plataformas avanzadas de administración.',
    features: [
      'Sistemas ERP y CRM personalizados',
      'Motores de facturación y flujos adminsitrativos',
      'Optimización de procesos operativos críticos',
      'Paneles de control ejecutivos y analítica avanzada'
    ],
    iconName: 'Cpu'
  },
  {
    id: 'aplicaciones-web',
    title: 'Aplicaciones Web Corporativas',
    shortDescription: 'Plataformas SaaS y aplicaciones web progresivas de alta velocidad, seguras y escalables para millones de usuarios.',
    fullDescription: 'Desarrollamos arquitecturas web robustas orientadas a la experiencia del usuario final (UX/UI). Empleamos componentes de alto rendimiento para garantizar tiempos de carga milimétricos y robustez ante picos de demanda.',
    features: [
      'Plataformas SaaS multisubscripción',
      'Portales interactivos para proveedores y clientes',
      'Paneles de administración avanzados',
      'Páginas y sistemas web ultra-rápidos con Next.js/React'
    ],
    iconName: 'Globe'
  },
  {
    id: 'aplicaciones-moviles',
    title: 'Aplicaciones Móviles de Alta Gama',
    shortDescription: 'Experiencias móviles nativas e híbridas diseñadas con foco en la seguridad, offline-first y fluidez visual.',
    fullDescription: 'Desarrollamos aplicaciones para iOS y Android utilizando arquitecturas modernas que facilitan un rendimiento fluido y transiciones impecables. Preparamos apps listas para integrarse con hardware físico y bases de datos locales.',
    features: [
      'Aplicaciones nativas en Swift (Kotlin/iOS) y Android',
      'Desarrollo multiplataforma de alto rendimiento con Flutter',
      'Persistencia de datos y sincronización fuera de línea',
      'Integración con biometría, geolocalización y notificaciones push'
    ],
    iconName: 'Smartphone'
  },
  {
    id: 'automatizacion-ia',
    title: 'Automatización e Inteligencia Artificial',
    shortDescription: 'Implementación de modelos de procesamiento de datos y automatizaciones inteligentes para acelerar decisiones.',
    fullDescription: 'Ayudamos a las empresas a implementar soluciones de IA práctica y flujos automatizados de extremo a extremo que reducen costos operativos y mitigan el margen de error humano.',
    features: [
      'Procesamiento inteligente de documentos y facturas',
      'Integración inteligente con modelos GPT y Gemini',
      'Bots de automatización y servicios conversacionales empresariales',
      'Modelos predictivos aplicados a inventarios o finanzas'
    ],
    iconName: 'Sparkles'
  },
  {
    id: 'integraciones-empresariales',
    title: 'Integraciones de Sistemas Complejos (API)',
    shortDescription: 'Conexión segura de sus sistemas heredados (legacy) con ERPs globales, pasarelas de pago y servicios modernos.',
    fullDescription: 'Interconectamos ecosistemas tecnológicos heterogéneos. Aseguramos la transmisión rápida, encriptada y confiable de datos sensibles entre CRM, ERP, bases de datos o pasarelas financieras globales.',
    features: [
      'Integraciones directas con SAP, Salesforce y Oracle',
      'Pasarelas de pagos complejas (Stripe, Openpay, Culqi, PSE)',
      'Diseño y desarrollo de arquitecturas de API personalizadas',
      'Sistemas de sincronización e ingesta de datos en tiempo real'
    ],
    iconName: 'Layers'
  },
  {
    id: 'cloud-escalabilidad',
    title: 'Cloud e Infraestructura de Alta Disponibilidad',
    shortDescription: 'Migración y orquestación de infraestructuras en nubes globales preparadas para soportar alta transaccionalidad.',
    fullDescription: 'Diseñamos y optimizamos entornos de nube elásticos y tolerantes a fallos en AWS y Google Cloud. Implementamos estrategias modernas de DevOps y Kubernetes para mantener su servicio 99.9% disponible.',
    features: [
      'Orquestación de microservicios con Docker y Kubernetes',
      'Migraciones de bases de datos críticas con cero tiempo de inactividad',
      'Configuración de tuberías CI/CD (despliegue continuo)',
      'Estrategias avanzadas de ciberseguridad y encriptación de datos'
    ],
    iconName: 'CloudLightning'
  }
];

export const TECHNOLOGIES_DATA: TechnologyItem[] = [
  {
    name: 'React',
    category: 'frontend',
    description: 'Librería líder mundial para interfaces de usuario dinámicas.',
    iconName: 'React',
    useCase: 'Desarrollo de paneles interactivos de alta velocidad con renderizado de componentes modulares y estados optimizados.'
  },
  {
    name: 'TypeScript',
    category: 'frontend',
    description: 'Superset de JavaScript que añade tipado estático robusto.',
    iconName: 'TypeScript',
    useCase: 'Prevención de errores en compilación, facilitando el mantenimiento a largo plazo de bases de código empresariales complejas.'
  },
  {
    name: 'Node.js',
    category: 'backend',
    description: 'Entorno de ejecución de alto rendimiento para servidores JavaScript.',
    iconName: 'Node',
    useCase: 'Microservicios asíncronos y APIs de alta velocidad optimizadas para operaciones Concurrentes con entrada y salida constante.'
  },
  {
    name: 'Laravel',
    category: 'backend',
    description: 'Framework de PHP elegante enfocado en productividad empresarial.',
    iconName: 'Laravel',
    useCase: 'Backend robusto con encriptación avanzada, colas de trabajo, ORM integrado y arquitecturas estables listas para producción.'
  },
  {
    name: 'PHP',
    category: 'backend',
    description: 'El motor confiable que impulsa gran parte de los servicios web globales.',
    iconName: 'PHP',
    useCase: 'Sistemas heredados de facturación y backends empresariales estables con alta compatibilidad en entornos de nube.'
  },
  {
    name: 'Flutter',
    category: 'mobile',
    description: 'Framework multiplataforma creado por Google para apps fluidas.',
    iconName: 'Flutter',
    useCase: 'Lanzamientos ágiles y simultáneos para iOS y Android con un único código y fidelidad visual de pixel perfecto.'
  },
  {
    name: 'Swift',
    category: 'mobile',
    description: 'Lenguaje nativo de Apple enfocado en rendimiento y seguridad.',
    iconName: 'Swift',
    useCase: 'Aplicaciones iOS nativas de alto rendimiento que aprovechan hardware local, realidad aumentada y gráficos avanzados.'
  },
  {
    name: 'Android Native',
    category: 'mobile',
    description: 'Infraestructura nativa de Google utilizando Kotlin.',
    iconName: 'Android',
    useCase: 'Apps móviles para ecosistemas industriales, integración directa con terminales PDA empresariales y SDKs de recolección de datos.'
  }
];

export const PROCESS_DATA: WorkStepItem[] = [
  {
    stepNumber: 1,
    title: 'Descubrimiento y Planificación',
    duration: 'Semana 1 - 2',
    shortDescription: 'Inmersión profunda en tu modelo de negocio para delimitar la arquitectura ideal y requerimientos funcionales.',
    tasks: [
      'Talleres técnicos de mapeo de procesos internos',
      'Definición de requerimientos detallados e historias de usuario',
      'Diseño de flujos de interacción (wireframes) y arquitectura web inicial',
      'Planificación del presupuesto y cronograma detallado por hitos'
    ]
  },
  {
    stepNumber: 2,
    title: 'Arquitectura de Sistemas',
    duration: 'Semana 3',
    shortDescription: 'Modelado estructural de bases de datos, protocolos de seguridad y definición del ecosistema tecnológico.',
    tasks: [
      'Modelado entidad-relación para bases de datos transaccionales',
      'Definición de las políticas de encriptación de datos sensibles',
      'Esquemas de microservicios y documentación técnica de APIs',
      'Provisión del entorno cloud en staging (Docker/Kubernetes)'
    ]
  },
  {
    stepNumber: 3,
    title: 'Desarrollo Ágil y Sprints',
    duration: 'Ciclos de 2 semanas',
    shortDescription: 'Codificación modular y limpia bajo metodología Scrum, entregando valor incremental visible constantemente.',
    tasks: [
      'Sprints de desarrollo quincenales con entregables funcionales',
      'Pruebas unitarias integradas directamente en el flujo de desarrollo',
      'Despliegues automáticos a sandbox de pruebas cada semana',
      'Reuniones de revisión técnica para ajustes ágiles de requerimientos'
    ]
  },
  {
    stepNumber: 4,
    title: 'Pruebas Rigurosas (QA)',
    duration: 'Semana Final de Ciclo',
    shortDescription: 'Auditoría integral de estabilidad, pruebas de estrés y escaneo automatizado contra fallas de seguridad.',
    tasks: [
      'Pruebas exhaustivas de rendimiento con simulación de cargas pesadas',
      'Análisis estático de código para garantizar buenas prácticas corporativas',
      'QA funcional en múltiples resoluciones navegadores y sistemas móviles',
      'Auditoría OWASP para blindar la plataforma contra inyecciones y fugas'
    ]
  },
  {
    stepNumber: 5,
    title: 'Implementación y Soporte',
    duration: 'Continuo',
    shortDescription: 'Puesta en producción segura con despliegue progresivo, manuales técnicos y soporte bajo acuerdo de nivel de servicio (SLA).',
    tasks: [
      'Despliegue interactivo con estrategia Blue-Green (cero tiempo caído)',
      'Talleres de capacitación interactivos para el equipo del cliente',
      'Monitoreo activo de errores 24/7 y respaldos automáticos en la nube',
      'Soporte post-lanzamiento garantizado bajo SLA personalizado'
    ]
  }
];

export const DIFFERENTIALS_DATA: DifferentialItem[] = [
  {
    title: 'Desarrollo 100% a Medida',
    description: 'No utilizamos plantillas prefabricadas, creadores visuales lentos ni soluciones genéricas. Cada línea de código está optimizada para acelerar las metas específicas de tu negocio.',
    metric: '100%',
    metricLabel: 'Código Proprietario',
    iconName: 'Code'
  },
  {
    title: 'Tecnologías del Estado del Arte',
    description: 'Construimos sobre frameworks ágiles con soporte multi-anual, garantizando la longevidad del software, el máximo rendimiento de carga y la extrema seguridad cibernética.',
    metric: '95+',
    metricLabel: 'Lighthouse Score Promedio',
    iconName: 'Zap'
  },
  {
    title: 'Equipo Altamente Especializado',
    description: 'Nuestros desarrolladores y arquitectos cuentan con años de experiencia en proyectos complejos, implementando patrones de código limpios, robustos y mantenibles.',
    metric: '+8 Años',
    metricLabel: 'Experiencia Promedio Senior',
    iconName: 'Users'
  },
  {
    title: 'Arquitectura Escalable por Diseño',
    description: 'Preparamos tu sistema para que crezca de manera elástica según tu demanda, minimizando costos de servidor y evitando colapsos inesperados en temporada alta.',
    metric: '4x',
    metricLabel: 'Reducción Costos Cloud',
    iconName: 'Layers2'
  },
  {
    title: 'Acompañamiento Estratégico',
    description: 'Somos tu partner tecnológico de confianza. No solo entregamos código, te asesoramos en decisiones arquitectónicas y damos soporte bajo rigurosos acuerdos SLA.',
    metric: '99.9%',
    metricLabel: 'Disponibilidad SLA',
    iconName: 'ShieldCheck'
  }
];

export const OUTSTANDING_CASE: FeaturedProject = {
  id: 'nexus-axion',
  title: 'Nexus Axion',
  subtitle: 'Plataforma Fintech & Ahorro Colaborativo',
  description: 'Un ecosistema financiero digital diseñado para simplificar de forma segura la gestión de fondos colectivos, automatizar flujos transaccionales y facilitar el acceso a educación financiera dinámica para miles de usuarios activos en Colombia y Perú.',
  results: [
    'Procesamiento seguro de más de $3.2M USD en transacciones mensuales',
    'Sincronización automatizada con pasarelas bancarias y pasarelas de pago locales en tiempo record (<85ms)',
    'Tiempos de carga reducidos en un 64% gracias a un motor híbrido optimizado de caché',
    'Tasa de satisfacción del usuario empresarial del 98.4%'
  ],
  technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
  scope: 'Desarrollo de Software Integral (Web + Backend + DevOps)',
  timeline: '5 Meses de Descubrimiento e Implementación'
};
