/* =============================================
   QUANTUM OS V5 — INTERACTIVE SCRIPTS
   ============================================= */

// ==========================================
// TRANSLATIONS (FR / EN / LN — Lingala)
// ==========================================

const translations = {
  fr: {
    'nav.modules': 'Modules',
    'nav.casusage': "Cas d'usage",
    'nav.news': 'Actualités',
    'nav.docs': 'Documentation',
    'nav.team': 'Équipe',
    'btn.download': 'Télécharger',
    'btn.gumroad': 'Télécharger sur Gumroad',
    'hero.badge': 'V5 — Production Ready',
    'hero.tagline': "L'Afrique innove sans permission",
    'hero.sub': "Système d'exploitation computationnel quantique — Made in RDC 🇨🇩",
    'hero.stat1': '19/19 Tasks Successful',
    'hero.stat2': 'Zero Errors',
    'hero.stat3': 'Production Ready',
    'hero.scroll': 'Défiler',
    'strip.latency': 'Ultra faible latence',
    'strip.security': 'Sécurité quantique',
    'strip.opensource': 'Open Source',
    'strip.multiplatform': 'Multi-plateforme',
    'strip.ai': 'IA intégrée',
    'modules.label': 'Architecture',
    'modules.title_pre': 'Modules',
    'modules.title_acc': 'Quantiques',
    'modules.desc': "Une architecture modulaire conçue pour la performance et la résilience dans les environnements computationnels les plus exigeants.",
    'mod1.desc': "Noyau computationnel quantique avec gestion d'états superposés et intrication des processus en temps réel.",
    'mod2.desc': "Interface neuronale adaptative permettant une interaction intuitive entre l'utilisateur et le système quantique.",
    'mod3.desc': 'Chiffrement post-quantique de niveau militaire protégeant toutes les communications et données sensibles.',
    'mod4.desc': "Moteur d'intelligence artificielle quantique capable de traiter des millions de paramètres simultanément.",
    'mod5.desc': 'Protocole réseau quantique offrant des communications instantanées et inviolables à l\'échelle mondiale.',
    'mod6.desc': 'Stockage quantique distribué avec redondance holographique et accès instantané aux données.',
    'tag.security': 'Sécurité',
    'tag.network': 'Réseau',
    'tag.storage': 'Stockage',
    'usage.label': 'Applications',
    'usage.title_pre': 'Cas',
    'usage.title_acc': "d'Usage",
    'usage.desc': "Quantum OS V5 transforme les industries critiques grâce à sa puissance computationnelle sans précédent.",
    'use1.title': 'Recherche Scientifique',
    'use1.desc': 'Simulation moléculaire, modélisation climatique et calculs de physique quantique en temps réel, réduisant les temps de traitement de 10 000x.',
    'use2.title': 'Finance Quantique',
    'use2.desc': 'Optimisation de portefeuilles, détection de fraude et modélisation des risques financiers avec une précision quantique inégalée.',
    'use3.title': 'Santé & Génomique',
    'use3.desc': "Analyse du génome humain, découverte de médicaments et diagnostic médical assisté par IA quantique en quelques secondes.",
    'use4.title': 'Infrastructure Critique',
    'use4.desc': 'Protection des réseaux électriques, systèmes de transport et infrastructures gouvernementales avec un chiffrement post-quantique.',
    'use5.title': 'Éducation & Recherche',
    'use5.desc': "Plateforme éducative quantique pour former la prochaine génération d'ingénieurs et scientifiques africains.",
    'use6.title': 'Défense & Souveraineté',
    'use6.desc': 'Solutions souveraines pour la sécurité nationale avec des communications inviolables et une cryptographie quantique.',
    'news.label': 'Actualités',
    'news.title_pre': 'Dernières',
    'news.title_acc': 'Nouvelles',
    'news.desc': 'Restez informé des avancées de Quantum OS V5 et des innovations de Stillmind Hub.',
    'news1.tag': 'Annonce Majeure',
    'news1.title': "Quantum OS V5 : Le système d'exploitation du futur est là",
    'news1.desc': "Après deux ans de développement intensif, Stillmind Hub annonce officiellement le lancement de Quantum OS V5, une révolution dans le domaine des systèmes d'exploitation computationnels quantiques made in Africa.",
    'news2.tag': 'Technologie',
    'news2.title': "Le Quantum Kernel atteint une performance record de 99.97% d'uptime",
    'news2.desc': "Nos équipes ont validé les benchmarks de performance du nouveau noyau quantique sur des environnements de production à grande échelle.",
    'news3.tag': 'Partenariat',
    'news3.title': 'Stillmind Hub signe un accord avec trois universités africaines',
    'news3.desc': "Dans le cadre de la mission éducative de Quantum OS, Stillmind Hub s'associe avec des institutions académiques de premier plan pour intégrer la technologie quantique dans les cursus.",
    'news.read': 'Lire la suite →',
    'nl.title': 'Newsletter Quantum OS',
    'nl.desc': 'Soyez le premier informé des mises à jour, nouvelles fonctionnalités et événements exclusifs.',
    'nl.subscribe': "S'abonner à la newsletter",
    'nl.success_title': 'Inscription confirmée !',
    'nl.success_desc': 'Bienvenue dans la communauté Quantum OS. Vous recevrez nos prochaines actualités directement dans votre boîte mail.',
    'form.name': 'Nom complet',
    'form.email': 'Adresse email',
    'form.interest': "Domaine d'intérêt",
    'form.select': 'Sélectionner...',
    'form.dev': 'Développement',
    'form.research': 'Recherche',
    'form.business': 'Entreprise',
    'form.education': 'Éducation',
    'form.security_opt': 'Cybersécurité',
    'form.privacy': 'Vos données sont protégées. Désinscription possible à tout moment.',
    'form.org': 'Nom / Organisation',
    'form.contact_email': 'Email de contact',
    'form.news_title': "Titre de l'actualité",
    'form.content': 'Contenu',
    'form.category': 'Catégorie',
    'form.choose_cat': 'Choisir une catégorie',
    'cat.announcement': 'Annonce',
    'cat.tech': 'Technologie',
    'cat.event': 'Événement',
    'cat.partnership': 'Partenariat',
    'cat.research': 'Recherche',
    'submit.title': 'Soumettre une actualité',
    'submit.desc': 'Vous avez une information à partager avec la communauté Quantum OS ?',
    'submit.btn': 'Soumettre pour révision',
    'submit.success_title': 'Merci pour votre contribution !',
    'submit.success_desc': "Votre actualité a été soumise pour révision. Notre équipe vous contactera sous 48h.",
    'docs.label': 'Ressources',
    'docs.desc': 'Tout ce dont vous avez besoin pour démarrer avec Quantum OS V5.',
    'docs.tab.arch': 'Architecture',
    'docs.tab.modules': 'Modules',
    'docs.tab.install': 'Installation',
    'docs.tab.usage': 'Utilisation',
    'docs.tab.config': 'Configuration',
    'arch.title': 'Hybrid Quantum-Classical Operating System',
    'arch.sub': 'Reinforcement Learning Scheduler · GRAPE Optimal Control · Surface Code QEC · Photonic Validation · GPU/CUDA · gRPC Cluster · Raft Consensus · DAG Pipelines · mTLS · OpenTelemetry',
    'table.module': 'Module',
    'table.file': 'Fichier',
    'table.desc': 'Description',
    'm.kernel': 'Noyau async avec pool de workers, auto-scaling, checkpointing',
    'm.scheduler': 'Policy Gradient (REINFORCE) avec entropy regularization',
    'm.resource': 'Gestion CPU/GPU/Mémoire/Qubits avec allocation dynamique',
    'm.telemetry': 'Métriques Prometheus, histogrammes, alerting',
    'm.transformer': 'Réseau neuronal PyTorch avec mixed-precision AMP',
    'm.photonic': 'Simulation photonique (HOM, unitarité, dark counts)',
    'm.qcontroller': 'GRAPE optimal control + Surface Code QEC',
    'm.gpu': 'Binding CUDA, allocation mémoire, multi-GPU',
    'm.cluster': 'Cluster distribué avec consensus Raft',
    'm.sandbox': 'Isolation process/cgroup/namespace',
    'm.security': 'mTLS, tokens JWT, audit trail',
    'm.pipeline': 'Exécution DAG parallèle avec retry',
    'm.bus': 'ZeroMQ PUB/SUB, REQ/REP, PUSH/PULL',
    'm.tracing': 'OpenTelemetry spans + AlertManager',
    'm.plugins': 'Système de plugins hot-reload',
    'install.local': 'Installation Locale',
    'install.local_desc': 'Prérequis : Python 3.10+, (optionnel) NVIDIA GPU + CUDA 11.8+',
    'install.docker': 'Docker',
    'install.recommended': 'Recommandé',
    'install.docker_desc': 'Production-ready avec monitoring intégré (Prometheus, Grafana, Jaeger).',
    'install.modes': 'Modes de démarrage',
    'install.monitoring': 'Monitoring',
    'install.monitoring_desc': 'Disponible avec Docker Compose :',
    'install.grafana_creds': 'admin / quantum-admin',
    'api.basic': 'Soumettre des tâches',
    'api.dag': 'Pipeline DAG',
    'api.env': "Variables d'Environnement",
    'env.var': 'Variable',
    'env.desc': 'Description',
    'env.mode': 'production / development / testing',
    'env.log': 'DEBUG / INFO / WARNING / ERROR',
    'env.workers': 'Nombre de workers',
    'env.gpu': 'Activer/désactiver GPU',
    'env.cluster': 'Activer mode cluster',
    'env.port': 'Port du cluster',
    'env.node': 'ID du noeud dans le cluster',
    'env.seeds': 'Seeds pour rejoindre le cluster',
    'config.intro': 'Fichier principal :',
    'team.label': 'Les Bâtisseurs',
    'team.title_pre': 'Notre',
    'team.title_acc': 'Équipe',
    'team.desc': "Des visionnaires africains qui réinventent l'informatique du futur depuis Kinshasa.",
    'team1.role': 'Fondateur & Architecte Principal',
    'team1.bio': "Visionnaire à l'origine du projet Quantum OS, architecte de la vision quantique pour l'Afrique.",
    'team2.name': 'Équipe Quantum',
    'team2.role': 'Ingénieurs & Chercheurs',
    'team2.bio': 'Une équipe d\'ingénieurs passionnés développant les modules quantiques de dernière génération.',
    'team3.role': 'Contributeurs Mondiaux',
    'team3.bio': "Des centaines de contributeurs à travers l'Afrique et le monde entier enrichissent le projet.",
    'cta.title': "Prêt à entrer dans l'ère quantique ?",
    'cta.desc': 'Rejoignez la révolution technologique africaine. Quantum OS V5 est disponible maintenant.',
    'footer.product': 'Produit',
    'footer.company': 'Entreprise',
    'footer.legal': 'Légal',
    'footer.about': 'À propos',
    'footer.careers': 'Carrières',
    'footer.licence': 'Licence',
    'footer.privacy': 'Confidentialité',
    'footer.terms': 'CGU',
  },

  en: {
    'nav.modules': 'Modules',
    'nav.casusage': 'Use Cases',
    'nav.news': 'News',
    'nav.docs': 'Docs',
    'nav.team': 'Team',
    'btn.download': 'Download',
    'btn.gumroad': 'Download on Gumroad',
    'hero.badge': 'V5 — Production Ready',
    'hero.tagline': 'Africa innovates without permission',
    'hero.sub': 'Quantum Computational Operating System — Made in DRC 🇨🇩',
    'hero.stat1': '19/19 Tasks Successful',
    'hero.stat2': 'Zero Errors',
    'hero.stat3': 'Production Ready',
    'hero.scroll': 'Scroll',
    'strip.latency': 'Ultra-low latency',
    'strip.security': 'Quantum security',
    'strip.opensource': 'Open Source',
    'strip.multiplatform': 'Multi-platform',
    'strip.ai': 'Built-in AI',
    'modules.label': 'Architecture',
    'modules.title_pre': 'Quantum',
    'modules.title_acc': 'Modules',
    'modules.desc': 'A modular architecture designed for performance and resilience in the most demanding computational environments.',
    'mod1.desc': 'Quantum computational kernel with superposition state management and real-time process entanglement.',
    'mod2.desc': 'Adaptive neural interface enabling intuitive interaction between the user and the quantum system.',
    'mod3.desc': 'Military-grade post-quantum encryption protecting all communications and sensitive data.',
    'mod4.desc': 'Quantum artificial intelligence engine capable of processing millions of parameters simultaneously.',
    'mod5.desc': 'Quantum network protocol offering instantaneous and tamper-proof communications worldwide.',
    'mod6.desc': 'Distributed quantum storage with holographic redundancy and instant data access.',
    'tag.security': 'Security',
    'tag.network': 'Network',
    'tag.storage': 'Storage',
    'usage.label': 'Applications',
    'usage.title_pre': 'Use',
    'usage.title_acc': 'Cases',
    'usage.desc': 'Quantum OS V5 transforms critical industries through its unprecedented computational power.',
    'use1.title': 'Scientific Research',
    'use1.desc': 'Molecular simulation, climate modeling and real-time quantum physics calculations, reducing processing times by 10,000x.',
    'use2.title': 'Quantum Finance',
    'use2.desc': 'Portfolio optimization, fraud detection and financial risk modeling with unmatched quantum precision.',
    'use3.title': 'Health & Genomics',
    'use3.desc': 'Human genome analysis, drug discovery and quantum AI-assisted medical diagnosis in seconds.',
    'use4.title': 'Critical Infrastructure',
    'use4.desc': 'Protection of power grids, transport systems and government infrastructure with post-quantum encryption.',
    'use5.title': 'Education & Research',
    'use5.desc': 'Quantum educational platform to train the next generation of African engineers and scientists.',
    'use6.title': 'Defense & Sovereignty',
    'use6.desc': 'Sovereign solutions for national security with tamper-proof communications and quantum cryptography.',
    'news.label': 'News',
    'news.title_pre': 'Latest',
    'news.title_acc': 'Updates',
    'news.desc': 'Stay informed about Quantum OS V5 advances and Stillmind Hub innovations.',
    'news1.tag': 'Major Announcement',
    'news1.title': 'Quantum OS V5: The operating system of the future is here',
    'news1.desc': 'After two years of intensive development, Stillmind Hub officially announces the launch of Quantum OS V5, a revolution in quantum computational operating systems made in Africa.',
    'news2.tag': 'Technology',
    'news2.title': 'Quantum Kernel achieves record performance of 99.97% uptime',
    'news2.desc': 'Our teams have validated the performance benchmarks of the new quantum kernel on large-scale production environments.',
    'news3.tag': 'Partnership',
    'news3.title': 'Stillmind Hub signs agreement with three African universities',
    'news3.desc': "As part of Quantum OS's educational mission, Stillmind Hub partners with leading academic institutions to integrate quantum technology into curricula.",
    'news.read': 'Read more →',
    'nl.title': 'Quantum OS Newsletter',
    'nl.desc': 'Be the first to know about updates, new features and exclusive events.',
    'nl.subscribe': 'Subscribe to newsletter',
    'nl.success_title': 'Subscription confirmed!',
    'nl.success_desc': 'Welcome to the Quantum OS community. You will receive our latest news directly in your inbox.',
    'form.name': 'Full name',
    'form.email': 'Email address',
    'form.interest': 'Area of interest',
    'form.select': 'Select...',
    'form.dev': 'Development',
    'form.research': 'Research',
    'form.business': 'Business',
    'form.education': 'Education',
    'form.security_opt': 'Cybersecurity',
    'form.privacy': 'Your data is protected. Unsubscribe at any time.',
    'form.org': 'Name / Organization',
    'form.contact_email': 'Contact email',
    'form.news_title': 'News title',
    'form.content': 'Content',
    'form.category': 'Category',
    'form.choose_cat': 'Choose a category',
    'cat.announcement': 'Announcement',
    'cat.tech': 'Technology',
    'cat.event': 'Event',
    'cat.partnership': 'Partnership',
    'cat.research': 'Research',
    'submit.title': 'Submit news',
    'submit.desc': 'Do you have information to share with the Quantum OS community?',
    'submit.btn': 'Submit for review',
    'submit.success_title': 'Thank you for your contribution!',
    'submit.success_desc': 'Your news has been submitted for review. Our team will contact you within 48h.',
    'docs.label': 'Resources',
    'docs.desc': 'Everything you need to get started with Quantum OS V5.',
    'docs.tab.arch': 'Architecture',
    'docs.tab.modules': 'Modules',
    'docs.tab.install': 'Installation',
    'docs.tab.usage': 'Usage',
    'docs.tab.config': 'Configuration',
    'arch.title': 'Hybrid Quantum-Classical Operating System',
    'arch.sub': 'Reinforcement Learning Scheduler · GRAPE Optimal Control · Surface Code QEC · Photonic Validation · GPU/CUDA · gRPC Cluster · Raft Consensus · DAG Pipelines · mTLS · OpenTelemetry',
    'table.module': 'Module',
    'table.file': 'File',
    'table.desc': 'Description',
    'm.kernel': 'Async kernel with worker pool, auto-scaling, checkpointing',
    'm.scheduler': 'Policy Gradient (REINFORCE) with entropy regularization',
    'm.resource': 'CPU/GPU/Memory/Qubits management with dynamic allocation',
    'm.telemetry': 'Prometheus metrics, histograms, alerting',
    'm.transformer': 'PyTorch neural network with mixed-precision AMP',
    'm.photonic': 'Photonic simulation (HOM, unitarity, dark counts)',
    'm.qcontroller': 'GRAPE optimal control + Surface Code QEC',
    'm.gpu': 'CUDA binding, memory allocation, multi-GPU',
    'm.cluster': 'Distributed cluster with Raft consensus',
    'm.sandbox': 'Process/cgroup/namespace isolation',
    'm.security': 'mTLS, JWT tokens, audit trail',
    'm.pipeline': 'Parallel DAG execution with retry',
    'm.bus': 'ZeroMQ PUB/SUB, REQ/REP, PUSH/PULL',
    'm.tracing': 'OpenTelemetry spans + AlertManager',
    'm.plugins': 'Hot-reload plugin system',
    'install.local': 'Local Installation',
    'install.local_desc': 'Requirements: Python 3.10+, (optional) NVIDIA GPU + CUDA 11.8+',
    'install.docker': 'Docker',
    'install.recommended': 'Recommended',
    'install.docker_desc': 'Production-ready with integrated monitoring (Prometheus, Grafana, Jaeger).',
    'install.modes': 'Startup Modes',
    'install.monitoring': 'Monitoring',
    'install.monitoring_desc': 'Available with Docker Compose:',
    'install.grafana_creds': 'admin / quantum-admin',
    'api.basic': 'Submit Tasks',
    'api.dag': 'DAG Pipeline',
    'api.env': 'Environment Variables',
    'env.var': 'Variable',
    'env.desc': 'Description',
    'env.mode': 'production / development / testing',
    'env.log': 'DEBUG / INFO / WARNING / ERROR',
    'env.workers': 'Number of workers',
    'env.gpu': 'Enable/disable GPU',
    'env.cluster': 'Enable cluster mode',
    'env.port': 'Cluster port',
    'env.node': 'Node ID in the cluster',
    'env.seeds': 'Seeds to join the cluster',
    'config.intro': 'Main config file:',
    'team.label': 'The Builders',
    'team.title_pre': 'Our',
    'team.title_acc': 'Team',
    'team.desc': 'African visionaries reinventing computing from Kinshasa.',
    'team1.role': 'Founder & Lead Architect',
    'team1.bio': 'Visionary behind the Quantum OS project, architect of the quantum vision for Africa.',
    'team2.name': 'Quantum Team',
    'team2.role': 'Engineers & Researchers',
    'team2.bio': 'A team of passionate engineers developing next-generation quantum modules.',
    'team3.role': 'Global Contributors',
    'team3.bio': 'Hundreds of contributors across Africa and the world enriching the project.',
    'cta.title': 'Ready to enter the quantum era?',
    'cta.desc': 'Join the African tech revolution. Quantum OS V5 is available now.',
    'footer.product': 'Product',
    'footer.company': 'Company',
    'footer.legal': 'Legal',
    'footer.about': 'About',
    'footer.careers': 'Careers',
    'footer.licence': 'License',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms',
  },

  ln: {
    'nav.modules': 'Biteni',
    'nav.casusage': 'Misal',
    'nav.news': 'Nsango',
    'nav.docs': 'Mayele',
    'nav.team': 'Ekipe',
    'btn.download': 'Kokitisa',
    'btn.gumroad': 'Kokitisa na Gumroad',
    'hero.badge': 'V5 — Elembi ya Kosala',
    'hero.tagline': 'Afrique esalaka kozanga nzela',
    'hero.sub': 'Système ya ordinateur ya quantum — Esalemaki na RDC 🇨🇩',
    'hero.stat1': '19/19 Misala Elongaki',
    'hero.stat2': 'Likosana Te',
    'hero.stat3': 'Elembi ya Kosala',
    'hero.scroll': 'Kokita',
    'strip.latency': 'Koleka ya nokinoki',
    'strip.security': 'Bolokoli ya quantum',
    'strip.opensource': 'Kaye ya bato nyonso',
    'strip.multiplatform': 'Basisiteme ebele',
    'strip.ai': 'Mayele ya motema',
    'modules.label': 'Mokano',
    'modules.title_pre': 'Biteni',
    'modules.title_acc': 'ya Quantum',
    'modules.desc': 'Mokano ya biteni esalemi mpo na bolamu ya mosala na basisiteme ya ordinateur ya sika.',
    'mod1.desc': 'Motema ya quantum na bosimbi ya bilelela ya superposition na kobendana ya misala na tango nyonso.',
    'mod2.desc': 'Interface ya neuronal esimba kobongwana mpe kosalana na nzela ya malamu na système ya quantum.',
    'mod3.desc': 'Chiffrement ya niveau ya militaire oyo ebateli communications nyonso mpe data ya sika.',
    'mod4.desc': 'Moteur ya intelligence artificielle ya quantum ekoki kosalela ba-paramètre ya ba-millions na tango moko.',
    'mod5.desc': 'Protocole ya réseau ya quantum epesi communications ya nokinoki mpe oyo ekoki kobukama te.',
    'mod6.desc': 'Biso ya quantum ebolisama na redundance ya holographique mpe boyeki ya data ya nokinoki.',
    'tag.security': 'Bolokoli',
    'tag.network': 'Réseau',
    'tag.storage': 'Kobomba',
    'usage.label': 'Misala',
    'usage.title_pre': 'Misala',
    'usage.title_acc': 'ya Sika',
    'usage.desc': 'Quantum OS V5 ebongoli bisekele ya ntina na nguya ya computationnel oyo ekaboli.',
    'use1.title': 'Boyekoli ya Siansi',
    'use1.desc': 'Simulation ya molécule, modélisation ya climat mpe calculs ya physique ya quantum na tango nyonso.',
    'use2.title': 'Finance ya Quantum',
    'use2.desc': 'Optimization ya portefeuilles, koboma ya fraud mpe modélisation ya ba-risques ya financier.',
    'use3.title': 'Santé & Génomique',
    'use3.desc': 'Analyse ya génome ya moto, kobima ya médicaments mpe diagnostic ya médical na AI ya quantum.',
    'use4.title': 'Infrastructure ya Ntina',
    'use4.desc': 'Bolokoli ya ba-réseau ya courant, ba-système ya transport mpe ba-infrastructure ya gouvernement.',
    'use5.title': 'Kelasi & Boyekoli',
    'use5.desc': "Plateforme ya kelasi ya quantum mpo na kolakisa libota ya sika ya ba-ingénieurs ya Afrika.",
    'use6.title': 'Bolokoli & Bozwi',
    'use6.desc': 'Bozwi ya kobatela ekolo na communications oyo ekoki kobukama te mpe cryptographie ya quantum.',
    'news.label': 'Nsango',
    'news.title_pre': 'Nsango',
    'news.title_acc': 'ya Sika',
    'news.desc': 'Zela nsango ya sika ya Quantum OS V5 mpe ba-innovation ya Stillmind Hub.',
    'news1.tag': 'Lokumu ya Monene',
    'news1.title': 'Quantum OS V5: Système ya ordinateur ya nsuka ewutaki',
    'news1.desc': 'Sima ya mbula mibale ya bolamu ya mosala, Stillmind Hub elakisaki Quantum OS V5 na nzela ya ofisiele.',
    'news2.tag': 'Teknolojia',
    'news2.title': 'Quantum Kernel ekweeli performance ya 99.97% ya uptime',
    'news2.desc': 'Ba-équipe na biso basolelaki ba-benchmarks ya performance ya noyau ya quantum ya sika.',
    'news3.tag': 'Boyokani',
    'news3.title': 'Stillmind Hub esalaki boyokani na ba-université misato ya Afrika',
    'news3.desc': "Na nzela ya mission ya kelasi ya Quantum OS, Stillmind Hub esangani na ba-institutions ya kelasi ya ntina.",
    'news.read': 'Tanga lisusu →',
    'nl.title': 'Newsletter ya Quantum OS',
    'nl.desc': 'Zwa nsango ya liboso ya ba-mise à jour, ba-fonctionnalité ya sika mpe ba-événement ya lokumu.',
    'nl.subscribe': 'Kotiama na newsletter',
    'nl.success_title': 'Kotiama ekokisamaki!',
    'nl.success_desc': 'Boyei na communauté ya Quantum OS. Okozwa ba-nsango na boîte ya mail na yo.',
    'form.name': 'Kombo ya mobimba',
    'form.email': 'Adresse ya email',
    'form.interest': 'Esika ya ntina',
    'form.select': 'Pona...',
    'form.dev': 'Développement',
    'form.research': 'Boyekoli',
    'form.business': 'Mosala ya mbongo',
    'form.education': 'Kelasi',
    'form.security_opt': 'Bolokoli ya ordinateur',
    'form.privacy': 'Ba-données na yo ebolokamaka. Okoki kokima tango nyonso.',
    'form.org': 'Kombo / Organisation',
    'form.contact_email': 'Email ya boyokani',
    'form.news_title': 'Toli ya nsango',
    'form.content': 'Elaka',
    'form.category': 'Catégorie',
    'form.choose_cat': 'Pona catégorie',
    'cat.announcement': 'Lokumu',
    'cat.tech': 'Teknolojia',
    'cat.event': 'Likita',
    'cat.partnership': 'Boyokani',
    'cat.research': 'Boyekoli',
    'submit.title': 'Tinda nsango',
    'submit.desc': 'Ozali na nsango ya kosakola na communauté ya Quantum OS?',
    'submit.btn': 'Tinda mpo na boyeki',
    'submit.success_title': 'Merci mpo na mosalisi na yo!',
    'submit.success_desc': 'Nsango na yo etindamaki mpo na boyeki. Ekipe na biso ekozwa boyokani na yo.',
    'docs.label': 'Bisaleli',
    'docs.desc': 'Makambo nyonso ozali na yango mpo na kobanda na Quantum OS V5.',
    'docs.tab.arch': 'Mokano',
    'docs.tab.modules': 'Biteni',
    'docs.tab.install': 'Kotia',
    'docs.tab.usage': 'Kosalela',
    'docs.tab.config': 'Configuration',
    'arch.title': 'Système ya Quantum-Classique ya Kobundisa',
    'arch.sub': 'RL Scheduler · GRAPE · Surface Code QEC · Photonic · GPU/CUDA · gRPC · Raft · DAG · mTLS · OpenTelemetry',
    'table.module': 'Eteni',
    'table.file': 'Fishi',
    'table.desc': 'Toli',
    'm.kernel': 'Motema ya async na ba-worker, auto-scaling, checkpointing',
    'm.scheduler': 'Policy Gradient (REINFORCE) na entropy regularization',
    'm.resource': 'Bosimbi ya CPU/GPU/Mémoire/Qubits na allocation dynamique',
    'm.telemetry': 'Ba-métriques ya Prometheus, histogrammes, alerting',
    'm.transformer': 'Réseau ya neuronal ya PyTorch na mixed-precision AMP',
    'm.photonic': 'Simulation ya photonique (HOM, unitarité, dark counts)',
    'm.qcontroller': 'GRAPE optimal control + Surface Code QEC',
    'm.gpu': 'Binding ya CUDA, allocation ya mémoire, multi-GPU',
    'm.cluster': 'Cluster ebolisama na consensus ya Raft',
    'm.sandbox': 'Isolation ya process/cgroup/namespace',
    'm.security': 'mTLS, ba-token JWT, audit trail',
    'm.pipeline': 'Exécution ya DAG na parallèle na retry',
    'm.bus': 'ZeroMQ PUB/SUB, REQ/REP, PUSH/PULL',
    'm.tracing': 'OpenTelemetry spans + AlertManager',
    'm.plugins': 'Système ya plugins ya hot-reload',
    'install.local': 'Kotia na Ordinateur',
    'install.local_desc': 'Esengami: Python 3.10+, (na bosenga) NVIDIA GPU + CUDA 11.8+',
    'install.docker': 'Docker',
    'install.recommended': 'Malamu',
    'install.docker_desc': 'Elembi ya kosala na monitoring (Prometheus, Grafana, Jaeger).',
    'install.modes': 'Nzela ya Kobanda',
    'install.monitoring': 'Monitoring',
    'install.monitoring_desc': 'Ezali na Docker Compose:',
    'install.grafana_creds': 'admin / quantum-admin',
    'api.basic': 'Kotinda Misala',
    'api.dag': 'Pipeline DAG',
    'api.env': 'Banzela ya Environnement',
    'env.var': 'Nzela',
    'env.desc': 'Toli',
    'env.mode': 'production / development / testing',
    'env.log': 'DEBUG / INFO / WARNING / ERROR',
    'env.workers': 'Motango ya ba-worker',
    'env.gpu': 'Kobongola/koleka GPU',
    'env.cluster': 'Kobongola mode cluster',
    'env.port': 'Port ya cluster',
    'env.node': 'ID ya nœud na cluster',
    'env.seeds': 'Seeds mpo na kokota na cluster',
    'config.intro': 'Fishi ya ntina:',
    'team.label': 'Ba-Bongisi',
    'team.title_pre': 'Ekipe',
    'team.title_acc': 'na Biso',
    'team.desc': 'Ba-visionnaire ya Afrika bazali kobongola informatique ya sika wuta Kinshasa.',
    'team1.role': 'Mobandi & Architecte ya Liboso',
    'team1.bio': "Visionnaire ya liboso ya projet Quantum OS, architecte ya ndoto ya quantum mpo na Afrika.",
    'team2.name': 'Ekipe ya Quantum',
    'team2.role': 'Ba-Ingénieurs & Ba-Chercheurs',
    'team2.bio': 'Ekipe ya ba-ingénieurs oyo basepeli kosala ba-modules ya quantum ya sika.',
    'team3.role': 'Ba-Contributeur ya Mokili',
    'team3.bio': 'Ba-contributeur ebele na Afrika mpe mokili mobimba bazali kobakisa projet.',
    'cta.title': 'Ozali liboso mpo na kokota na tango ya quantum?',
    'cta.desc': 'Kota na révolution ya teknolojia ya Afrika. Quantum OS V5 ezali sikoyo.',
    'footer.product': 'Produit',
    'footer.company': 'Société',
    'footer.legal': 'Bongisa',
    'footer.about': 'Biso nde nani',
    'footer.careers': 'Misala',
    'footer.licence': 'Lisansi',
    'footer.privacy': 'Bolokoli',
    'footer.terms': 'Mibeko',
  }
};

let currentLang = 'fr';

function setLanguage(lang) {
  currentLang = lang;
  const t = translations[lang] || translations.fr;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.textContent = t[key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) {
      el.placeholder = t[key];
    }
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  document.documentElement.lang = lang === 'ln' ? 'ln' : lang;

  localStorage.setItem('qos-lang', lang);
}

// ==========================================
// NAVIGATION SCROLL EFFECT
// ==========================================

const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ==========================================
// MOBILE HAMBURGER MENU
// ==========================================

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const spans = hamburger.querySelectorAll('span');
  if (navLinks.classList.contains('open')) {
    spans[0].style.transform = 'translateY(7px) rotate(45deg)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
  } else {
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
  }
});

navLinks.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    const spans = hamburger.querySelectorAll('span');
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
  });
});

// ==========================================
// LANGUAGE SWITCHER
// ==========================================

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    setLanguage(btn.dataset.lang);
  });
});

const savedLang = localStorage.getItem('qos-lang');
if (savedLang && translations[savedLang]) {
  setLanguage(savedLang);
}

// ==========================================
// DOCS TABS
// ==========================================

document.querySelectorAll('.docs-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const targetId = 'tab-' + tab.dataset.tab;

    document.querySelectorAll('.docs-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.docs-panel').forEach(p => p.classList.remove('active'));

    tab.classList.add('active');
    const panel = document.getElementById(targetId);
    if (panel) panel.classList.add('active');
  });
});

// ==========================================
// FLOATING PARTICLES
// ==========================================

function createParticles() {
  const container = document.getElementById('particles');
  if (!container) return;

  for (let i = 0; i < 30; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    const size = Math.random() * 3 + 1;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDuration = (Math.random() * 15 + 10) + 's';
    particle.style.animationDelay = (Math.random() * 10) + 's';
    particle.style.opacity = Math.random() * 0.5 + 0.1;
    container.appendChild(particle);
  }
}

createParticles();

// ==========================================
// SCROLL REVEAL ANIMATIONS
// ==========================================

const observerOptions = {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const delay = el.dataset.delay || 0;
      setTimeout(() => {
        el.classList.add('visible');
      }, parseInt(delay));
      observer.unobserve(el);
    }
  });
}, observerOptions);

document.querySelectorAll('.module-card, .usage-card, .team-card, .news-card, .section-header').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// ==========================================
// NEWSLETTER FORM
// ==========================================

function handleNewsletter(e) {
  e.preventDefault();
  const form = document.getElementById('newsletterForm');
  const success = document.getElementById('newsletterSuccess');
  const btn = form.querySelector('button[type="submit"]');
  btn.disabled = true;
  setTimeout(() => {
    form.style.display = 'none';
    success.classList.add('visible');
  }, 1200);
}

// ==========================================
// SUBMIT NEWS FORM
// ==========================================

function handleSubmitNews(e) {
  e.preventDefault();
  const form = document.getElementById('submitNewsForm');
  const success = document.getElementById('submitSuccess');
  const btn = form.querySelector('button[type="submit"]');
  btn.disabled = true;
  setTimeout(() => {
    form.style.display = 'none';
    success.classList.add('visible');
  }, 1400);
}

// ==========================================
// SMOOTH ANCHOR SCROLLING
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ==========================================
// ACTIVE NAV LINK HIGHLIGHT
// ==========================================

const sections = document.querySelectorAll('section[id]');
const navLinksList = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 140) {
      current = section.getAttribute('id');
    }
  });
  navLinksList.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === '#' + current) {
      link.style.color = 'var(--accent)';
    }
  });
});
