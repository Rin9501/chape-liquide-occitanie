export interface VilleData {
  slug: string;
  nom: string;
  dept: '09' | '11' | '31';
  departementNom: string;
  codePostal: string;

  metaTitle: string;
  metaDescription: string;

  heroAccroche: string;
  heroIntro: string;
  heroImage: string;
  heroImageAlt: string;

  realisation: {
    titre: string;
    description: string;
    image: string;
    imageAlt: string;
  };

  faqLocale: Array<{ question: string; reponse: string }>;
}

export const villes: VilleData[] = [
  {
    slug: 'pamiers',
    nom: 'Pamiers',
    dept: '09',
    departementNom: 'Ariège',
    codePostal: '09100',

    metaTitle: 'Chape Liquide Pamiers (09) — Applicateur Agréé Sika | Cyril Balussou',
    metaDescription: 'Chape liquide à Pamiers (Ariège, 09100). Applicateur agréé Sika n°3197-2025. Plancher chauffant, ravoirage, P4S. Devis gratuit sous 48h. 480+ chantiers depuis 2016.',

    heroAccroche: 'Chape liquide à Pamiers — applicateur agréé Sika en Ariège',
    heroIntro: 'Pamiers est notre zone principale d\'intervention en Ariège (09). EURL Balussou Cyril, basé à Mirepoix à 25 km, réalise vos chapes liquides sur mesure : construction neuve, rénovation, plancher chauffant. Agrément Sika n°3197-2025, devis sous 48h.',
    heroImage: '/uploads/chape-suzuki-pamiers-vue-ensemble.jpeg',
    heroImageAlt: 'Chape liquide coulée à Pamiers — chantier Suzuki 320 m²',

    realisation: {
      titre: 'Chantier Suzuki Pamiers — 320 m²',
      description: 'Chape liquide fluide ciment sur rez-de-chaussée commercial à Pamiers (09100). Surface : 320 m² coulés en une journée sur plancher chauffant basse température. Finition lissée prête à recevoir carrelage grand format.',
      image: '/uploads/chape-suzuki-pamiers-hall.jpeg',
      imageAlt: 'Hall commercial Pamiers après coulage chape liquide 320 m²',
    },

    faqLocale: [
      {
        question: 'Vous intervenez bien à Pamiers et dans le bassin ariégeois ?',
        reponse: 'Oui. Pamiers (09100) est l\'une de nos zones d\'intervention principales. Notre base est à Mirepoix, à 25 km — soit moins de 30 minutes. Nous couvrons également les communes autour : Pamiers, Saverdun, Mazères, Varilhes, Les Pujols. Pas de surcoût de déplacement dans cette zone.',
      },
      {
        question: 'Quel délai pour un devis chape liquide à Pamiers ?',
        reponse: 'Nous nous déplaçons sur site à Pamiers sous 48h pour mesurer et évaluer le chantier. Le devis écrit vous est transmis dans les 48h suivant la visite. Pour les chantiers urgents (livraison imminente), contactez-nous directement par téléphone.',
      },
      {
        question: 'Quel prix pour une chape liquide à Pamiers ?',
        reponse: 'Le tarif dépend du type de chape (ciment, plancher chauffant, P4S), de la surface et de l\'état du support. Nous ne communiquons pas de prix forfaitaire sans visite — chaque chantier est différent. Le devis est gratuit et sans engagement.',
      },
    ],
  },

  {
    slug: 'foix',
    nom: 'Foix',
    dept: '09',
    departementNom: 'Ariège',
    codePostal: '09000',

    metaTitle: 'Chape Liquide Foix (09) — Applicateur Agréé Sika | Cyril Balussou',
    metaDescription: 'Chape liquide à Foix (Ariège, 09000). Applicateur agréé Sika n°3197-2025. Plancher chauffant, ravoirage, chape ciment. Devis gratuit sous 48h. Intervention depuis Mirepoix.',

    heroAccroche: 'Chape liquide à Foix — applicateur agréé Sika en Ariège',
    heroIntro: 'Foix, capitale de l\'Ariège, est à 20 minutes de notre base à Mirepoix. EURL Balussou Cyril intervient sur tous vos chantiers chape liquide dans le secteur de Foix : maisons individuelles, collectifs, locaux commerciaux. Agrément Sika n°3197-2025, 480+ chantiers depuis 2016.',
    heroImage: '/uploads/plancher-chauffant-montgaillard.jpeg',
    heroImageAlt: 'Plancher chauffant en cours de pose secteur Foix-Montgaillard',

    realisation: {
      titre: 'Chantier secteur Foix — plancher chauffant 160 m²',
      description: 'Chape liquide sur plancher chauffant basse température, secteur de Foix (09). Surface de 160 m² coulée en une demi-journée. Technologie fluide : diffusion thermique optimale, épaisseur réduite, sans joints de dilatation sur cette surface.',
      image: '/uploads/coulage-villeneuve-dolmes-salon.jpeg',
      imageAlt: 'Coulage chape liquide sur plancher chauffant secteur Ariège',
    },

    faqLocale: [
      {
        question: 'Vous couvrez Foix et les communes autour (Varilhes, Tarascon, Pamiers) ?',
        reponse: 'Oui. Foix (09000) est à 20 minutes de Mirepoix. Nous couvrons tout le bassin de Foix : Foix, Varilhes, Tarascon-sur-Ariège, Montgaillard, Mercus-Garrabet, La Bastide-de-Sérou. Déplacement sans surcoût dans cette zone.',
      },
      {
        question: 'Chape liquide pour plancher chauffant à Foix : est-ce adapté à la rénovation ?',
        reponse: 'Absolument. La chape fluide est particulièrement adaptée à la rénovation car son épaisseur minimale (28 mm sur plancher chauffant) préserve la hauteur sous plafond. Elle enrobe parfaitement les tubes de chauffage et améliore le rendement thermique. C\'est la solution que nous recommandons pour les rénovations à Foix et en Ariège.',
      },
      {
        question: 'Délai d\'intervention pour un chantier chape liquide à Foix ?',
        reponse: 'Visite sur site sous 48h, devis remis dans les 48h suivantes. Pour la planification du chantier, comptez 2 à 4 semaines selon la période. En juin 2026, notre carnet est plein jusqu\'en août — anticipez votre demande pour septembre.',
      },
    ],
  },

  {
    slug: 'castelnaudary',
    nom: 'Castelnaudary',
    dept: '11',
    departementNom: 'Aude',
    codePostal: '11400',

    metaTitle: 'Chape Liquide Castelnaudary (11) — Applicateur Agréé Sika | Cyril Balussou',
    metaDescription: 'Chape liquide à Castelnaudary (Aude, 11400). Applicateur agréé Sika n°3197-2025. Construction neuve, plancher chauffant, ravoirage. Devis gratuit sous 48h.',

    heroAccroche: 'Chape liquide à Castelnaudary — applicateur agréé Sika dans l\'Aude',
    heroIntro: 'Castelnaudary (11400) et le Lauragais font partie de notre zone d\'intervention dans l\'Aude. EURL Balussou Cyril assure vos chapes liquides dans le neuf et la rénovation : maisons BBC, locaux commerciaux, planchers chauffants. Agrément Sika n°3197-2025, devis gratuit sous 48h.',
    heroImage: '/uploads/Chape-P4S-commercial.jpg',
    heroImageAlt: 'Chape liquide haute résistance P4S sur local commercial — secteur Aude',

    realisation: {
      titre: 'Chantier locaux commerciaux Lauragais — 180 m²',
      description: 'Chape liquide haute résistance Sika ViscoChape® P4S pour locaux commerciaux dans le Lauragais (secteur Castelnaudary). Surface de 180 m², support en béton. Finition extra-plate, résistance mécanique renforcée pour trafic intensif.',
      image: '/uploads/IMG_3932.JPEG',
      imageAlt: 'Coulage chape liquide locaux commerciaux secteur Lauragais',
    },

    faqLocale: [
      {
        question: 'Vous intervenez à Castelnaudary et dans le Lauragais audois ?',
        reponse: 'Oui. Castelnaudary (11400) est dans notre zone d\'intervention dans l\'Aude. Nous couvrons Castelnaudary et les communes proches : Belpech, Alzonne, Villepinte, Mas-Saintes-Puelles. Comptez environ 1h depuis Mirepoix, sans surcoût dans cette zone.',
      },
      {
        question: 'Quelle différence entre chape liquide et ragréage à Castelnaudary ?',
        reponse: 'Le ragréage est une finition de quelques millimètres pour rattraper des imperfections. La chape liquide est une dalle de structure (28 à 60 mm) qui sert de support final au revêtement. Elle est autonivelante, sèche plus vite que le béton classique et convient aussi bien au neuf qu\'à la rénovation.',
      },
      {
        question: 'Quel délai pour un chantier chape liquide à Castelnaudary ?',
        reponse: 'Visite gratuite sous 48h, devis écrit dans les 48h suivantes. Intervention planifiée sous 2 à 4 semaines. Pour les chantiers de construction neuve avec contrainte de planning, contactez-nous dès la phase gros œuvre pour réserver votre créneau.',
      },
    ],
  },

  {
    slug: 'carcassonne',
    nom: 'Carcassonne',
    dept: '11',
    departementNom: 'Aude',
    codePostal: '11000',

    metaTitle: 'Chape Liquide Carcassonne (11) — Applicateur Agréé Sika | Cyril Balussou',
    metaDescription: 'Chape liquide à Carcassonne (Aude, 11000). Applicateur agréé Sika n°3197-2025. Plancher chauffant, ravoirage, construction neuve. Devis gratuit sous 48h.',

    heroAccroche: 'Chape liquide à Carcassonne — applicateur agréé Sika dans l\'Aude',
    heroIntro: 'Carcassonne (11000) est l\'un de nos secteurs d\'intervention dans l\'Aude. EURL Balussou Cyril réalise vos chapes liquides sur mesure : construction neuve BBC, rénovation, plancher chauffant. Agrément Sika n°3197-2025, 480+ chantiers depuis 2016, devis sous 48h.',
    heroImage: '/uploads/IMG_3934.JPEG',
    heroImageAlt: 'Chape liquide en cours de coulage secteur Carcassonne',

    realisation: {
      titre: 'Chantier secteur carcassonnais — 200 m²',
      description: 'Chape liquide fluide ciment pour maison individuelle dans le secteur de Carcassonne (Aude, 11). Surface de 200 m² répartie sur rez-de-chaussée et étage. Chantier livré en une journée, séchage sous circulation sous 24h.',
      image: '/uploads/IMG_3933.JPEG',
      imageAlt: 'Résultat chape liquide coulée secteur Carcassonne Aude',
    },

    faqLocale: [
      {
        question: 'Vous couvrez Carcassonne et l\'agglomération audoise (Limoux, Narbonne) ?',
        reponse: 'Oui. Carcassonne (11000) est dans notre zone dans l\'Aude. Nous intervenons sur l\'agglomération carcassonnaise et les communes proches : Trèbes, Conques-sur-Orbiel, Alzonne. Nous couvrons aussi Limoux et Narbonne dans certains cas — contactez-nous pour vérifier.',
      },
      {
        question: 'Chape liquide à Carcassonne : quel avantage sur la chape traditionnelle ?',
        reponse: 'La chape liquide est autonivelante (zéro dressage manuel), sèche en 24h sous circulation légère, et nécessite moins de main-d\'œuvre. Pour un chantier standard à Carcassonne, on gagne 1 à 2 jours de séchage vs une chape traditionnelle, et la planéité est garantie à 2 mm sous la règle de 2 mètres.',
      },
      {
        question: 'Quel prix pour une chape liquide à Carcassonne ?',
        reponse: 'Le prix dépend de la surface, du type de chape et du contexte chantier (accès, étage, présence de plancher chauffant). Nous ne communiquons pas de tarif sans visite préalable. Devis gratuit, visite sous 48h, sans engagement.',
      },
    ],
  },
];
