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

// Positionnement partagé : applicateur multi-fournisseur (Sika, Cemex) plutôt qu'exclusif Sika.
// Modifier ici pour changer la formulation dans toutes les fiches villes.
export const POSITIONNEMENT_TITRE = 'Applicateur Multi-Fournisseur';
export const POSITIONNEMENT_FOURNISSEUR = 'applicateur multi-fournisseur (Sika, Cemex)';
export const POSITIONNEMENT_FOURNISSEUR_MAJ = 'Applicateur multi-fournisseur (Sika, Cemex)';

export const villes: VilleData[] = [
  {
    slug: 'pamiers',
    nom: 'Pamiers',
    dept: '09',
    departementNom: 'Ariège',
    codePostal: '09100',

    metaTitle: `Chape Liquide Pamiers (09) — ${POSITIONNEMENT_TITRE} | Cyril Balussou`,
    metaDescription: `Chape liquide à Pamiers (Ariège, 09100). ${POSITIONNEMENT_FOURNISSEUR_MAJ}. Plancher chauffant, ravoirage, P4S. Devis gratuit sous 48h. 480+ chantiers depuis 2016.`,

    heroAccroche: `Chape liquide à Pamiers — ${POSITIONNEMENT_FOURNISSEUR} en Ariège`,
    heroIntro: `Pamiers est notre zone principale d'intervention en Ariège (09). EURL Balussou Cyril, basé à Mirepoix à 25 km, réalise vos chapes liquides sur mesure : construction neuve, rénovation, plancher chauffant. ${POSITIONNEMENT_FOURNISSEUR_MAJ} — agrément Sika n°3197-2025, devis sous 48h.`,
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

    // Test SEO copywriting isolé sur cette ville uniquement (03/08/2026) : GSC montrait
    // position 22 / 37 impressions / 0 clic — title/H1 remplacés par des preuves concrètes
    // (agrément, nombre de chantiers) plutôt que le label "applicateur multi-fournisseur",
    // repris tel quel via la constante sur les 17 autres villes. Ne pas généraliser ce
    // texte aux autres fiches avant d'avoir mesuré l'effet ici (revoir GSC mi-septembre 2026).
    metaTitle: `Chape Liquide à Foix (09) — Devis Gratuit sous 48h | CLO`,
    metaDescription: `Chape liquide à Foix (09000), à 20 min de Mirepoix. Devis sous 48h. Sika ou Cemex selon le chantier, pas un fournisseur imposé. 480+ chantiers en Ariège.`,

    heroAccroche: `Chape liquide à Foix — agrément Sika n°3197-2025, depuis Mirepoix`,
    heroIntro: `Foix, capitale de l'Ariège, est à vingt minutes de notre base de Mirepoix — assez proche pour ne rien perdre en réactivité. EURL Balussou Cyril y réalise des chapes liquides pour maisons individuelles, collectifs et locaux commerciaux, en choisissant entre les gammes Sika et Cemex selon ce que demande le chantier. 480 chantiers coulés en Ariège depuis 2016.`,
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

    metaTitle: `Chape Liquide Castelnaudary (11) — ${POSITIONNEMENT_TITRE} | Cyril Balussou`,
    metaDescription: `Chape liquide à Castelnaudary (Aude, 11400). ${POSITIONNEMENT_FOURNISSEUR_MAJ}. Construction neuve, plancher chauffant, ravoirage. Devis gratuit sous 48h.`,

    heroAccroche: `Chape liquide à Castelnaudary — ${POSITIONNEMENT_FOURNISSEUR} dans l'Aude`,
    heroIntro: `Castelnaudary (11400) et le Lauragais font partie de notre zone d'intervention dans l'Aude. EURL Balussou Cyril assure vos chapes liquides dans le neuf et la rénovation : maisons BBC, locaux commerciaux, planchers chauffants. ${POSITIONNEMENT_FOURNISSEUR_MAJ} — agrément Sika n°3197-2025, devis gratuit sous 48h.`,
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

    metaTitle: `Chape Liquide Carcassonne (11) — ${POSITIONNEMENT_TITRE} | Cyril Balussou`,
    metaDescription: `Chape liquide à Carcassonne (Aude, 11000). ${POSITIONNEMENT_FOURNISSEUR_MAJ}. Plancher chauffant, ravoirage, construction neuve. Devis gratuit sous 48h.`,

    heroAccroche: `Chape liquide à Carcassonne — ${POSITIONNEMENT_FOURNISSEUR} dans l'Aude`,
    heroIntro: `Carcassonne (11000) est l'un de nos secteurs d'intervention dans l'Aude. EURL Balussou Cyril réalise vos chapes liquides sur mesure : construction neuve BBC, rénovation, plancher chauffant. ${POSITIONNEMENT_FOURNISSEUR_MAJ} — agrément Sika n°3197-2025, 480+ chantiers depuis 2016, devis sous 48h.`,
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

  // ─── Ariège (09) ───────────────────────────────────────────────────────────

  {
    slug: 'saverdun',
    nom: 'Saverdun',
    dept: '09',
    departementNom: 'Ariège',
    codePostal: '09700',

    // Cible prioritaire SEO (04/08/2026) : GSC montrait position 13.47 / 91 impressions / 3 clics —
    // Google comprend déjà la pertinence de la page, il manquait du poids (mot-clé + preuve concrète
    // dans le H1/corps), pas un problème de clic comme sur Foix (quick win, 03/08). Décision indépendante
    // du test Foix, basée sur les données propres à cette page. Revoir GSC mi-septembre 2026 avec Foix.
    metaTitle: `Chape Liquide à Saverdun (09) — Devis Gratuit sous 48h | CLO`,
    metaDescription: `Chape liquide à Saverdun (09700), à 25 km de Mirepoix. Devis sous 48h. Sika ou Cemex selon le chantier, pas un fournisseur imposé. 480+ chantiers en Ariège.`,

    heroAccroche: `Chape liquide à Saverdun — planchers chauffants, depuis Mirepoix`,
    heroIntro: `Saverdun (09700) est à 25 km de Mirepoix, dans le bassin de Pamiers. EURL Balussou Cyril y coule des chapes liquides pour le neuf comme la rénovation — maisons individuelles, locaux professionnels, planchers chauffants. Dernier chantier livré sur la commune : un cabinet de kinésithérapie de 120 m², chape fluide sur plancher chauffant basse température, finition prête à recevoir un carrelage antidérapant aux normes ERP. Sika ou Cemex selon ce que demande le chantier, devis sous 48h.`,
    heroImage: '/uploads/preparation-tms-saverdun-kine.jpeg',
    heroImageAlt: 'Préparation chantier chape liquide Saverdun — cabinet kinésithérapie',

    realisation: {
      titre: 'Cabinet kinésithérapie Saverdun — 120 m²',
      description: 'Chape liquide fluide sur plancher chauffant basse température, cabinet de soins TMS à Saverdun (09700). Surface de 120 m² coulée en demi-journée. Finition lissée prête à recevoir carrelage antidérapant normé ERP.',
      image: '/uploads/chape-terminee-saverdun-kine.jpeg',
      imageAlt: 'Chape liquide terminée cabinet kinésithérapie Saverdun',
    },

    faqLocale: [
      {
        question: 'Vous intervenez à Saverdun, Mazères et dans le bassin de Pamiers ?',
        reponse: 'Oui. Saverdun (09700) est à 25 km de Mirepoix, sans surcoût de déplacement. Nous couvrons également Mazères, Pamiers, Varilhes et les communes du bassin ariégeois. Contactez-nous pour confirmer votre secteur.',
      },
      {
        question: 'Chape liquide sur plancher chauffant en rénovation à Saverdun : est-ce adapté ?',
        reponse: 'Absolument. La chape liquide est la solution idéale sur plancher chauffant en rénovation : son épaisseur minimale de 28 mm au-dessus des tubes préserve la hauteur sous plafond, et son contact parfait avec les serpentins améliore le rendement thermique. Nous avons réalisé ce type de chantier à Saverdun pour un cabinet médical.',
      },
      {
        question: 'Quel délai pour un devis chape liquide à Saverdun ?',
        reponse: 'Visite gratuite sous 48h ouvrées, devis écrit dans les 48h suivantes. Pour les chantiers urgents à Saverdun, contactez-nous directement par téléphone au 06 87 61 39 87.',
      },
    ],
  },

  {
    slug: 'lavelanet',
    nom: 'Lavelanet',
    dept: '09',
    departementNom: 'Ariège',
    codePostal: '09300',

    metaTitle: `Chape Liquide Lavelanet (09) — ${POSITIONNEMENT_TITRE} | Cyril Balussou`,
    metaDescription: `Chape liquide à Lavelanet (Ariège, 09300). ${POSITIONNEMENT_FOURNISSEUR_MAJ}. Pays d'Olmes, construction neuve, plancher chauffant. Devis gratuit sous 48h. Base à Mirepoix à 22 km.`,

    heroAccroche: `Chape liquide à Lavelanet — ${POSITIONNEMENT_FOURNISSEUR}, Pays d'Olmes`,
    heroIntro: `Lavelanet (09300) et le Pays d'Olmes sont à 22 km de notre base à Mirepoix — l'une de nos zones d'intervention principales en Ariège. EURL Balussou Cyril réalise vos chapes liquides sur mesure : maisons individuelles, planchers chauffants, rénovation. ${POSITIONNEMENT_FOURNISSEUR_MAJ} — agrément Sika n°3197-2025, devis sous 48h.`,
    heroImage: '/uploads/coulage-villeneuve-dolmes-salon.jpeg',
    heroImageAlt: 'Coulage chape liquide salon — secteur Pays d\'Olmes',

    realisation: {
      titre: 'Maison individuelle Villeneuve-d\'Olmes — 170 m²',
      description: 'Chape liquide sur isolant thermo-acoustique, maison neuve secteur Pays d\'Olmes (09300). Surface de 170 m² répartie sur rez-de-chaussée et étage, coulage continu en une journée. Finition lissée autonivelante, planéité garantie à 2 mm sous règle de 2 m.',
      image: '/uploads/coulage-villeneuve-dolmes-baie.jpeg',
      imageAlt: 'Coulage chape liquide baie vitrée — maison Pays d\'Olmes',
    },

    faqLocale: [
      {
        question: 'Vous couvrez Lavelanet, Villeneuve-d\'Olmes et les communes du Pays d\'Olmes ?',
        reponse: 'Oui. Lavelanet (09300) est à 22 km de Mirepoix, soit moins de 30 minutes. Nous intervenons sur tout le Pays d\'Olmes : Lavelanet, Villeneuve-d\'Olmes, Mirepoix, Chalabre, Léran. Déplacement sans surcoût dans cette zone.',
      },
      {
        question: 'Peut-on couler une chape liquide sur un sous-bassement ou plancher bois ?',
        reponse: 'Non directement. Un plancher bois nécessite une préparation spécifique (rigidification, film de désolidarisation renforcé) avant toute chape liquide. Nous évaluons la faisabilité lors de la visite gratuite. Dans la majorité des cas, la solution est réalisable avec les bonnes précautions.',
      },
      {
        question: 'Quel délai pour un devis à Lavelanet et dans le Pays d\'Olmes ?',
        reponse: 'Visite sur site sous 48h ouvrées, devis écrit remis dans les 48h suivant la visite. Intervention planifiée sous 2 à 4 semaines selon notre planning.',
      },
    ],
  },

  {
    slug: 'tarascon-sur-ariege',
    nom: 'Tarascon-sur-Ariège',
    dept: '09',
    departementNom: 'Ariège',
    codePostal: '09400',

    metaTitle: `Chape Liquide Tarascon-sur-Ariège (09) — ${POSITIONNEMENT_TITRE} | Cyril Balussou`,
    metaDescription: `Chape liquide à Tarascon-sur-Ariège (09400). ${POSITIONNEMENT_FOURNISSEUR_MAJ}. Plancher chauffant, chape ciment, ravoirage. Devis gratuit sous 48h. Intervention depuis Mirepoix.`,

    heroAccroche: `Chape liquide à Tarascon-sur-Ariège — ${POSITIONNEMENT_FOURNISSEUR}`,
    heroIntro: `Tarascon-sur-Ariège (09400) et la vallée de l'Ariège sont à 30 km de notre base à Mirepoix. EURL Balussou Cyril intervient sur vos chantiers chape liquide : maisons individuelles, planchers chauffants hydrauliques, locaux. ${POSITIONNEMENT_FOURNISSEUR_MAJ} — agrément Sika n°3197-2025, 480+ chantiers depuis 2016.`,
    heroImage: '/uploads/plancher-chauffant-montgaillard.jpeg',
    heroImageAlt: 'Plancher chauffant chape liquide — secteur Tarascon-sur-Ariège',

    realisation: {
      titre: 'Plancher chauffant secteur Tarascon — 160 m²',
      description: 'Chape liquide sur plancher chauffant hydraulique basse température, secteur de Tarascon-sur-Ariège (09400). Surface de 160 m², épaisseur 28 mm au-dessus des tubes, enrobage parfait des serpentins pour rendement thermique optimal.',
      image: '/uploads/IMG_2828.JPEG',
      imageAlt: 'Chape liquide coulée secteur Tarascon-sur-Ariège',
    },

    faqLocale: [
      {
        question: 'Vous couvrez Tarascon-sur-Ariège, Ax-les-Thermes et le secteur de Foix ?',
        reponse: 'Oui. Tarascon-sur-Ariège (09400) est à 30 km de Mirepoix. Nous couvrons la vallée de l\'Ariège : Tarascon, Mercus-Garrabet, Ussat, et le corridor vers Ax-les-Thermes. Déplacement sans surcoût dans ces zones.',
      },
      {
        question: 'Quelle épaisseur minimale pour une chape liquide sur plancher chauffant ?',
        reponse: '28 mm minimum au-dessus des tubes de chauffage — c\'est la norme DTU 26.2. Cette épaisseur garantit la résistance mécanique et l\'enrobage thermique. En pose flottante sur isolant sans plancher chauffant, le minimum est 45 mm.',
      },
      {
        question: 'Quel délai pour un devis à Tarascon-sur-Ariège ?',
        reponse: 'Visite gratuite sous 48h, devis écrit dans les 48h suivantes. Pour les chantiers avec contrainte de planning (livraison constructeur), contactez-nous dès la phase gros œuvre.',
      },
    ],
  },

  {
    slug: 'saint-girons',
    nom: 'Saint-Girons',
    dept: '09',
    departementNom: 'Ariège',
    codePostal: '09200',

    metaTitle: `Chape Liquide Saint-Girons (09) — ${POSITIONNEMENT_TITRE} | Cyril Balussou`,
    metaDescription: `Chape liquide à Saint-Girons (Ariège, 09200). ${POSITIONNEMENT_FOURNISSEUR_MAJ}. Couserans, construction neuve, plancher chauffant. Devis gratuit sous 48h.`,

    heroAccroche: `Chape liquide à Saint-Girons — ${POSITIONNEMENT_FOURNISSEUR} en Ariège`,
    heroIntro: `Saint-Girons (09200) et le Couserans sont à 55 km de notre base à Mirepoix. EURL Balussou Cyril intervient sur vos chantiers chape liquide dans le Couserans selon la surface et l'accessibilité. ${POSITIONNEMENT_FOURNISSEUR_MAJ} — agrément Sika n°3197-2025, devis gratuit, visite sur site sous 48h.`,
    heroImage: '/uploads/IMG_2311.JPEG',
    heroImageAlt: 'Chape liquide en cours de coulage — secteur Saint-Girons Ariège',

    realisation: {
      titre: 'Chantier secteur Couserans — maison individuelle',
      description: 'Chape liquide ciment sur pose flottante, secteur Saint-Girons / Couserans (09200). Maison individuelle neuve, surface répartie sur deux niveaux, coulage en une journée. Finition autonivelante, planéité garantie sans dressage manuel.',
      image: '/uploads/IMG_2312.JPEG',
      imageAlt: 'Résultat chape liquide coulée secteur Couserans Saint-Girons',
    },

    faqLocale: [
      {
        question: 'Vous intervenez à Saint-Girons et dans le Couserans ?',
        reponse: 'Oui, sous conditions. Saint-Girons (09200) est à 55 km de Mirepoix. Nous intervenons dans le Couserans pour les chantiers d\'une surface suffisante pour justifier le déplacement (généralement à partir de 80-100 m²). Contactez-nous pour évaluer votre projet.',
      },
      {
        question: 'Y a-t-il un supplément de déplacement pour Saint-Girons ?',
        reponse: 'Pour Saint-Girons et le Couserans, une étude au cas par cas est réalisée lors du devis. La distance (55 km) est intégrée dans le prix global selon la surface et le type de chantier. Contactez-nous directement pour une évaluation.',
      },
      {
        question: 'Quel délai pour un devis chape liquide à Saint-Girons ?',
        reponse: 'Visite gratuite sous 48h à 72h ouvrées selon notre planning, devis remis dans les 48h suivantes. Pour les chantiers urgents dans le Couserans, appelez-nous au 06 87 61 39 87.',
      },
    ],
  },

  {
    slug: 'ax-les-thermes',
    nom: 'Ax-les-Thermes',
    dept: '09',
    departementNom: 'Ariège',
    codePostal: '09110',

    metaTitle: `Chape Liquide Ax-les-Thermes (09) — ${POSITIONNEMENT_TITRE} | Cyril Balussou`,
    metaDescription: `Chape liquide à Ax-les-Thermes (Ariège, 09110). ${POSITIONNEMENT_FOURNISSEUR_MAJ}. Plancher chauffant, construction neuve, haute vallée de l'Ariège. Devis gratuit sous 48h.`,

    heroAccroche: `Chape liquide à Ax-les-Thermes — ${POSITIONNEMENT_FOURNISSEUR}`,
    heroIntro: `Ax-les-Thermes (09110) et la haute vallée de l'Ariège sont à 45 km de notre base à Mirepoix. EURL Balussou Cyril réalise vos chapes liquides : planchers chauffants, construction neuve, rénovation. Spécialiste chape sur plancher chauffant hydraulique. ${POSITIONNEMENT_FOURNISSEUR_MAJ} — agrément Sika n°3197-2025.`,
    heroImage: '/uploads/IMG_2775.JPEG',
    heroImageAlt: 'Chape liquide coulée — secteur Ax-les-Thermes Ariège',

    realisation: {
      titre: 'Résidence secteur Ax-les-Thermes — plancher chauffant',
      description: 'Chape liquide sur plancher chauffant hydraulique, résidence secteur Ax-les-Thermes (09110). Enrobage parfait des tubes, rendement thermique optimisé pour zone altitude. Épaisseur 28 mm au-dessus des serpentins, finition lissée autonivelante.',
      image: '/uploads/IMG_2776.JPEG',
      imageAlt: 'Chape liquide plancher chauffant secteur Ax-les-Thermes',
    },

    faqLocale: [
      {
        question: 'Vous couvrez Ax-les-Thermes, Tarascon et le secteur Luzenac ?',
        reponse: 'Oui. Ax-les-Thermes (09110) est à 45 km de Mirepoix, via Foix ou Tarascon. Nous couvrons la haute vallée de l\'Ariège : Ax-les-Thermes, Luzenac, Tarascon-sur-Ariège. Déplacement étudié au cas par cas selon la surface.',
      },
      {
        question: 'La chape liquide en altitude : y a-t-il des contraintes particulières ?',
        reponse: 'En altitude, les températures basses peuvent rallonger le temps de séchage. Nous adaptons la formulation si nécessaire, et programmons le chantier selon les conditions météo. Minimum conseillé : +5°C pendant le coulage et les 48h suivantes. Ces contraintes sont évaluées lors de la visite.',
      },
      {
        question: 'Quel délai pour un devis à Ax-les-Thermes ?',
        reponse: 'Visite gratuite sous 48h à 72h ouvrées, devis écrit dans les 48h suivantes. Intervention planifiée sous 3 à 5 semaines selon notre planning et les conditions saisonnières.',
      },
    ],
  },

  {
    slug: 'mirepoix',
    nom: 'Mirepoix',
    dept: '09',
    departementNom: 'Ariège',
    codePostal: '09500',

    metaTitle: `Chape Liquide Mirepoix (09) — Notre Base | ${POSITIONNEMENT_TITRE} | Cyril Balussou`,
    metaDescription: `Chape liquide à Mirepoix (Ariège, 09500). Base de l'EURL Balussou Cyril, ${POSITIONNEMENT_FOURNISSEUR}. Devis gratuit, intervention ultra-rapide. 480+ chantiers depuis 2016.`,

    heroAccroche: 'Chape liquide à Mirepoix — notre base, votre chantier',
    heroIntro: `Mirepoix (09500) est la base de l'EURL Balussou Cyril. Nous réalisons vos chapes liquides à Mirepoix et dans un rayon de 1h30 en Ariège, Aude et Haute-Garonne. Intervention ultra-rapide sur place, ${POSITIONNEMENT_FOURNISSEUR} — agrément Sika n°3197-2025, devis sous 48h.`,
    heroImage: '/uploads/ravoirage-mirepoix-gaines.jpeg',
    heroImageAlt: 'Ravoirage chape liquide avec passage de gaines — chantier Mirepoix',

    realisation: {
      titre: 'Ravoirage Mirepoix — remise à niveau avec gaines',
      description: 'Ravoirage liquide sur dalle existante à Mirepoix (09500). Nivellement de la dalle, enrobage des gaines électriques et canalisations existantes avant pose de l\'isolant et chape de finition. Remise à niveau parfaite en une journée.',
      image: '/uploads/IMG_3285.JPEG',
      imageAlt: 'Ravoirage chape liquide chantier Mirepoix Ariège',
    },

    faqLocale: [
      {
        question: 'Vous êtes bien basés à Mirepoix — intervention immédiate possible ?',
        reponse: 'Oui, EURL Balussou Cyril est basé à Mirepoix (09500). Pour un chantier à Mirepoix, nous pouvons souvent planifier la visite le jour même et prioriser l\'intervention. Appelez-nous directement au 06 87 61 39 87.',
      },
      {
        question: 'Quelle différence entre ravoirage et chape liquide à Mirepoix ?',
        reponse: 'Le ravoirage est une remise à niveau de la dalle existante (enrobage des gaines, rattrapage de niveaux) avant de poser l\'isolant et la chape de finition. La chape liquide est la dalle de finition finale qui reçoit le revêtement. Les deux peuvent être réalisés à Mirepoix — souvent en deux étapes sur le même chantier.',
      },
      {
        question: 'Quel est le délai minimum pour un chantier chape liquide à Mirepoix ?',
        reponse: 'Étant basés à Mirepoix, nous pouvons visiter le lendemain et remettre le devis sous 24h dans certains cas. L\'intervention est planifiée selon notre planning (généralement 1 à 3 semaines). Appelez-nous pour les chantiers urgents.',
      },
    ],
  },

  // ─── Aude (11) ─────────────────────────────────────────────────────────────

  {
    slug: 'limoux',
    nom: 'Limoux',
    dept: '11',
    departementNom: 'Aude',
    codePostal: '11300',

    metaTitle: `Chape Liquide Limoux (11) — ${POSITIONNEMENT_TITRE} | Cyril Balussou`,
    metaDescription: `Chape liquide à Limoux (Aude, 11300). ${POSITIONNEMENT_FOURNISSEUR_MAJ}. Construction neuve BBC, plancher chauffant, ravoirage. Devis gratuit sous 48h.`,

    heroAccroche: `Chape liquide à Limoux — ${POSITIONNEMENT_FOURNISSEUR} dans l'Aude`,
    heroIntro: `Limoux (11300) et le Razès sont à 45 km de notre base à Mirepoix. EURL Balussou Cyril réalise vos chapes liquides dans l'Aude : construction neuve BBC, rénovation, plancher chauffant. ${POSITIONNEMENT_FOURNISSEUR_MAJ} — agrément Sika n°3197-2025, devis gratuit sous 48h.`,
    heroImage: '/uploads/IMG_3286.JPEG',
    heroImageAlt: 'Chape liquide coulée — secteur Limoux Aude',

    realisation: {
      titre: 'Construction neuve secteur Razès — 190 m²',
      description: 'Chape liquide ciment sur isolation phonique, construction neuve secteur Limoux / Razès (11300). Surface de 190 m² répartie sur deux niveaux, coulage continu en une journée. Finition lissée autonivelante prête pour carrelage ou parquet.',
      image: '/uploads/IMG_3287.JPEG',
      imageAlt: 'Chape liquide neuf secteur Limoux Razès Aude',
    },

    faqLocale: [
      {
        question: 'Vous couvrez Limoux, Chalabre et le secteur Quillan ?',
        reponse: 'Oui. Limoux (11300) est à 45 km de Mirepoix. Nous couvrons le Razès et la liaison vers Quillan : Limoux, Chalabre, Couiza, Saint-Hilaire. Déplacement sans surcoût dans cette zone.',
      },
      {
        question: 'Chape liquide pour maison BBC à Limoux : compatible avec les exigences thermiques ?',
        reponse: 'Oui, la chape liquide est parfaitement adaptée aux constructions BBC et RE2020. Sa conductivité thermique élevée améliore le rendement du plancher chauffant, et son épaisseur réduite (vs chape traditionnelle) conserve la hauteur sous plafond. Nous travaillons régulièrement avec des constructeurs en label BBC dans l\'Aude.',
      },
      {
        question: 'Quel délai pour un devis chape liquide à Limoux ?',
        reponse: 'Visite sur site sous 48h ouvrées, devis écrit dans les 48h suivantes. Pour les chantiers de construction neuve avec contrainte de planning (livraison), contactez-nous dès la phase gros œuvre.',
      },
    ],
  },

  {
    slug: 'quillan',
    nom: 'Quillan',
    dept: '11',
    departementNom: 'Aude',
    codePostal: '11500',

    metaTitle: `Chape Liquide Quillan (11) — ${POSITIONNEMENT_TITRE} | Cyril Balussou`,
    metaDescription: `Chape liquide à Quillan (Aude, 11500). ${POSITIONNEMENT_FOURNISSEUR_MAJ}. Haute vallée de l'Aude, construction neuve, plancher chauffant. Devis gratuit sous 48h.`,

    heroAccroche: `Chape liquide à Quillan — ${POSITIONNEMENT_FOURNISSEUR}, haute vallée de l'Aude`,
    heroIntro: `Quillan (11500) et la haute vallée de l'Aude sont à 55 km de notre base à Mirepoix. EURL Balussou Cyril réalise vos chapes liquides sur mesure : maisons individuelles, planchers chauffants, rénovation. ${POSITIONNEMENT_FOURNISSEUR_MAJ} — agrément Sika n°3197-2025, devis gratuit sous 48h.`,
    heroImage: '/uploads/IMG_3288.JPEG',
    heroImageAlt: 'Chape liquide en cours — secteur Quillan haute vallée de l\'Aude',

    realisation: {
      titre: 'Maison individuelle secteur Quillan — 140 m²',
      description: 'Chape liquide sur pose flottante, maison individuelle secteur de Quillan (11500). Surface de 140 m², coulage en une demi-journée. Finition lissée autonivelante, planéité garantie à 2 mm sous règle de 2 m, prête à recevoir revêtement de sol.',
      image: '/uploads/IMG_3289.JPEG',
      imageAlt: 'Résultat chape liquide maison individuelle secteur Quillan Aude',
    },

    faqLocale: [
      {
        question: 'Vous intervenez à Quillan, Couiza et le secteur Limoux ?',
        reponse: 'Oui. Quillan (11500) est à 55 km de Mirepoix, via Chalabre ou Limoux. Nous couvrons la haute vallée de l\'Aude : Quillan, Couiza, Espéraza, Axat. Déplacement étudié selon surface et accessibilité chantier.',
      },
      {
        question: 'Y a-t-il un supplément de déplacement pour Quillan ?',
        reponse: 'Pour Quillan et la haute vallée de l\'Aude, le déplacement est intégré dans le devis selon la surface totale. À partir de 80 m², nous intervenons généralement sans surcoût significatif. Contactez-nous pour une évaluation gratuite.',
      },
      {
        question: 'Quel délai pour un chantier chape liquide à Quillan ?',
        reponse: 'Visite sous 48h à 72h ouvrées, devis remis dans les 48h suivant la visite. Intervention planifiée sous 3 à 5 semaines selon le planning.',
      },
    ],
  },

  {
    slug: 'lezignan-corbieres',
    nom: 'Lézignan-Corbières',
    dept: '11',
    departementNom: 'Aude',
    codePostal: '11200',

    metaTitle: `Chape Liquide Lézignan-Corbières (11) — ${POSITIONNEMENT_TITRE} | Cyril Balussou`,
    metaDescription: `Chape liquide à Lézignan-Corbières (Aude, 11200). ${POSITIONNEMENT_FOURNISSEUR_MAJ}. Construction neuve, locaux d'activité, plancher chauffant. Devis gratuit sous 48h.`,

    heroAccroche: `Chape liquide à Lézignan-Corbières — ${POSITIONNEMENT_FOURNISSEUR} dans l'Aude`,
    heroIntro: `Lézignan-Corbières (11200) et le Minervois sont à 75 km de notre base à Mirepoix. EURL Balussou Cyril intervient sur vos chantiers chape liquide dans la plaine audoise : construction neuve, locaux d'activité, planchers chauffants. ${POSITIONNEMENT_FOURNISSEUR_MAJ} — agrément Sika n°3197-2025, devis sous 48h.`,
    heroImage: '/uploads/IMG_3290.JPEG',
    heroImageAlt: 'Chape liquide coulée — secteur Lézignan-Corbières Aude',

    realisation: {
      titre: 'Locaux d\'activité secteur Lézignan-Corbières — 200 m²',
      description: 'Chape liquide haute résistance pour locaux d\'activité secteur Lézignan-Corbières (11200). Surface de 200 m², support béton, finition extra-plate. Résistance mécanique renforcée pour usage professionnel intensif.',
      image: '/uploads/IMG_3294.JPEG',
      imageAlt: 'Chape liquide locaux activité secteur Lézignan-Corbières Aude',
    },

    faqLocale: [
      {
        question: 'Vous couvrez Lézignan-Corbières, Narbonne et le secteur Carcassonne ?',
        reponse: 'Oui. Lézignan-Corbières (11200) est à 75 km de Mirepoix. Nous couvrons le Minervois et la plaine audoise : Lézignan, Olonzac, Homps, et la liaison vers Narbonne et Carcassonne. Contactez-nous pour confirmer votre secteur.',
      },
      {
        question: 'Chape pour local d\'activité à Lézignan : choisir chape ciment ou P4S ?',
        reponse: 'Pour un local d\'activité standard (artisan, entrepôt léger), la chape fluide ciment suffit. Pour un trafic intensif (chariots élévateurs, camions, locaux P4S classés UPEC), nous recommandons la Sika ViscoChape® P4S. Nous évaluons l\'usage lors de la visite et orientons vers la bonne solution.',
      },
      {
        question: 'Quel délai et conditions d\'intervention à Lézignan-Corbières ?',
        reponse: 'Visite gratuite sous 48h à 72h ouvrées, devis dans les 48h suivantes. Pour Lézignan et la plaine audoise, nous privilégions les chantiers de 100 m² minimum. Appelez-nous au 06 87 61 39 87 pour discuter de votre projet.',
      },
    ],
  },

  {
    slug: 'narbonne',
    nom: 'Narbonne',
    dept: '11',
    departementNom: 'Aude',
    codePostal: '11100',

    metaTitle: `Chape Liquide Narbonne (11) — ${POSITIONNEMENT_TITRE} | Cyril Balussou`,
    metaDescription: `Chape liquide à Narbonne (Aude, 11100). ${POSITIONNEMENT_FOURNISSEUR_MAJ}. Construction neuve, locaux commerciaux, plancher chauffant. Intervention sur chantiers significatifs. Devis gratuit.`,

    heroAccroche: `Chape liquide à Narbonne — ${POSITIONNEMENT_FOURNISSEUR} dans l'Aude`,
    heroIntro: `Narbonne (11100) est dans notre zone d'intervention dans l'Aude, à 1h de Mirepoix. EURL Balussou Cyril intervient sur les chantiers d'envergure à Narbonne et son agglomération : construction neuve, locaux commerciaux, planchers chauffants. ${POSITIONNEMENT_FOURNISSEUR_MAJ} — agrément Sika n°3197-2025, devis gratuit.`,
    heroImage: '/uploads/IMG_3495.JPEG',
    heroImageAlt: 'Chape liquide coulée secteur Narbonne — Aude',

    realisation: {
      titre: 'Construction neuve secteur narbonnais — 220 m²',
      description: 'Chape liquide ciment sur plancher chauffant hydraulique, secteur de Narbonne (11100). Maison individuelle neuve, surface de 220 m² répartie sur deux niveaux. Coulage en une journée, circulable dès le lendemain.',
      image: '/uploads/IMG_3496.JPEG',
      imageAlt: 'Résultat chape liquide construction neuve secteur Narbonne Aude',
    },

    faqLocale: [
      {
        question: 'Vous couvrez Narbonne malgré la distance de Mirepoix ?',
        reponse: 'Oui, sous conditions. Narbonne (11100) est à 1h de Mirepoix. Nous intervenons pour les chantiers d\'une surface significative (généralement à partir de 120-150 m²) afin que le déplacement soit rentable pour vous comme pour nous. Contactez-nous pour évaluer votre projet.',
      },
      {
        question: 'Quelle surface minimale pour un chantier à Narbonne ?',
        reponse: 'Pour Narbonne et l\'agglomération, nous privilégions les chantiers de 120 m² minimum. En dessous, le coût logistique du déplacement (centrale béton, pompe, équipe) pèse trop sur le tarif. Pour de petites surfaces, nous orientons vers un applicateur local si nécessaire.',
      },
      {
        question: 'Quel délai pour un devis chape liquide à Narbonne ?',
        reponse: 'Visite gratuite sous 72h ouvrées, devis remis dans les 48h suivant la visite. Pour les chantiers de construction neuve avec livraison planifiée, contactez-nous dès la phase gros œuvre.',
      },
    ],
  },

  // ─── Haute-Garonne (31) ────────────────────────────────────────────────────

  {
    slug: 'auterive',
    nom: 'Auterive',
    dept: '31',
    departementNom: 'Haute-Garonne',
    codePostal: '31190',

    metaTitle: `Chape Liquide Auterive (31) — ${POSITIONNEMENT_TITRE} | Cyril Balussou`,
    metaDescription: `Chape liquide à Auterive (Haute-Garonne, 31190). ${POSITIONNEMENT_FOURNISSEUR_MAJ}. Vallée de l'Ariège, construction neuve, plancher chauffant. Devis gratuit sous 48h.`,

    heroAccroche: `Chape liquide à Auterive — ${POSITIONNEMENT_FOURNISSEUR} en Haute-Garonne`,
    heroIntro: `Auterive (31190) et la vallée de l'Ariège côté Haute-Garonne sont à 55 km de notre base à Mirepoix. EURL Balussou Cyril couvre la couronne sud de Toulouse : maisons individuelles, planchers chauffants, construction neuve. ${POSITIONNEMENT_FOURNISSEUR_MAJ} — agrément Sika n°3197-2025, devis sous 48h.`,
    heroImage: '/uploads/IMG_3295.JPEG',
    heroImageAlt: 'Chape liquide en cours — secteur Auterive Haute-Garonne',

    realisation: {
      titre: 'Maison individuelle secteur Auterive — plancher chauffant 150 m²',
      description: 'Chape liquide sur plancher chauffant hydraulique, secteur Auterive / vallée de l\'Ariège (31190). Maison neuve BBC, surface de 150 m², épaisseur 28 mm au-dessus des tubes. Rendement thermique optimal, coulage en demi-journée.',
      image: '/uploads/coulage-ouvrier-villeneuve-dolmes.jpeg',
      imageAlt: 'Coulage chape liquide plancher chauffant secteur Auterive Haute-Garonne',
    },

    faqLocale: [
      {
        question: 'Vous couvrez le corridor Auterive/Pamiers/Saverdun (vallée de l\'Ariège) ?',
        reponse: 'Oui. Auterive (31190) est dans notre corridor naturel d\'intervention le long de la vallée de l\'Ariège. Nous couvrons ce corridor de Mirepoix à Auterive : Saverdun, Pamiers, Varilhes, Auterive. Déplacement sans surcoût dans cette zone.',
      },
      {
        question: 'Le prix d\'une chape liquide est-il le même en Haute-Garonne qu\'en Ariège ?',
        reponse: 'Oui, notre tarification est basée sur la surface et le type de chape, pas sur le département. Pour Auterive et la vallée de l\'Ariège (31), le déplacement reste dans notre zone habituelle — pas de majoration. Devis gratuit, visite sur site sous 48h.',
      },
      {
        question: 'Quel délai pour un devis à Auterive ?',
        reponse: 'Visite gratuite sous 48h, devis dans les 48h suivantes. Intervention planifiée sous 2 à 4 semaines. Pour les chantiers avec contrainte de livraison (constructeur), contactez-nous dès la phase gros œuvre.',
      },
    ],
  },

  {
    slug: 'muret',
    nom: 'Muret',
    dept: '31',
    departementNom: 'Haute-Garonne',
    codePostal: '31600',

    metaTitle: `Chape Liquide Muret (31) — ${POSITIONNEMENT_TITRE} | Cyril Balussou`,
    metaDescription: `Chape liquide à Muret (Haute-Garonne, 31600). ${POSITIONNEMENT_FOURNISSEUR_MAJ}. Couronne sud Toulouse, construction neuve, plancher chauffant. Devis gratuit sous 48h.`,

    heroAccroche: `Chape liquide à Muret — ${POSITIONNEMENT_FOURNISSEUR} en Haute-Garonne`,
    heroIntro: `Muret (31600) et la couronne sud-ouest de Toulouse sont à 70 km de notre base à Mirepoix. EURL Balussou Cyril intervient sur les chantiers de construction neuve et rénovation dans le secteur de Muret. ${POSITIONNEMENT_FOURNISSEUR_MAJ} — agrément Sika n°3197-2025, indépendant d'une seule centrale. Devis sous 48h.`,
    heroImage: '/uploads/IMG_2827.JPEG',
    heroImageAlt: 'Coulage chape liquide — secteur Muret Haute-Garonne',

    realisation: {
      titre: 'Construction neuve secteur Muret — 180 m²',
      description: 'Chape liquide ciment sur pose flottante, construction neuve secteur de Muret (31600). Surface de 180 m² répartie sur rez-de-chaussée, coulage en une journée. Finition autonivelante, circulable dès le lendemain.',
      image: '/uploads/preparation-film-villeneuve-dolmes.jpeg',
      imageAlt: 'Préparation film désolidarisation avant chape liquide — secteur Muret',
    },

    faqLocale: [
      {
        question: 'Vous couvrez Muret, Auterive et la couronne sud de Toulouse ?',
        reponse: 'Oui. Muret (31600) est à 70 km de Mirepoix. Nous couvrons la couronne sud de Toulouse : Muret, Auterive, Villefranche-de-Lauragais. La concurrence est dense sur Toulouse intra-muros — nous ciblons la couronne sud où notre positionnement multi-fournisseur fait la différence.',
      },
      {
        question: 'Pourquoi choisir CLO plutôt qu\'un applicateur toulousain pour un chantier à Muret ?',
        reponse: 'La majorité des applicateurs autour de Toulouse ne travaillent qu\'avec une seule centrale (souvent Lafarge). Nous travaillons avec plusieurs fournisseurs — Sika (LevelChape, ViscoChape — agrément n°3197-2025) et les gammes Cemex (Cemexa, Anhydritec) : traçabilité produit, PV de chantier, garantie procédé, et la flexibilité de choisir la formule adaptée à votre chantier plutôt que de se limiter à un seul catalogue. Pour les maîtres d\'ouvrage exigeants, c\'est un différenciant réel.',
      },
      {
        question: 'Quel délai pour un devis chape liquide à Muret ?',
        reponse: 'Visite gratuite sous 48h à 72h ouvrées, devis dans les 48h suivantes. Intervention planifiée sous 3 à 5 semaines. Pour les chantiers avec livraison constructeur planifiée, anticipez votre demande.',
      },
    ],
  },

  {
    slug: 'villefranche-de-lauragais',
    nom: 'Villefranche-de-Lauragais',
    dept: '31',
    departementNom: 'Haute-Garonne',
    codePostal: '31290',

    metaTitle: `Chape Liquide Villefranche-de-Lauragais (31) — ${POSITIONNEMENT_TITRE} | Cyril Balussou`,
    metaDescription: `Chape liquide à Villefranche-de-Lauragais (Haute-Garonne, 31290). ${POSITIONNEMENT_FOURNISSEUR_MAJ}. Lauragais, construction neuve BBC, plancher chauffant. Devis gratuit sous 48h.`,

    heroAccroche: `Chape liquide à Villefranche-de-Lauragais — ${POSITIONNEMENT_FOURNISSEUR}`,
    heroIntro: `Villefranche-de-Lauragais (31290) et le Lauragais côté Haute-Garonne sont à 45 km de notre base à Mirepoix, sur l'axe Toulouse–Carcassonne. EURL Balussou Cyril réalise vos chapes liquides dans le neuf et la rénovation. ${POSITIONNEMENT_FOURNISSEUR_MAJ} — agrément Sika n°3197-2025, devis sous 48h.`,
    heroImage: '/uploads/IMG_2829.JPEG',
    heroImageAlt: 'Chape liquide coulée — secteur Villefranche-de-Lauragais',

    realisation: {
      titre: 'Maison individuelle Lauragais 31 — 160 m²',
      description: 'Chape liquide sur isolation phonique, maison individuelle secteur Villefranche-de-Lauragais (31290). Surface de 160 m², finition lissée autonivelante, planéité garantie à 2 mm sous règle de 2 m. Prête à recevoir carrelage ou parquet collé.',
      image: '/uploads/IMG_2830.JPEG',
      imageAlt: 'Résultat chape liquide maison Lauragais Villefranche-de-Lauragais',
    },

    faqLocale: [
      {
        question: 'Vous intervenez sur l\'axe Villefranche/Castelnaudary/Pamiers (A61) ?',
        reponse: 'Oui. L\'axe A61 entre Toulouse et Carcassonne est notre couloir naturel. Villefranche-de-Lauragais (31290) est à 45 km de Mirepoix, Castelnaudary à 25 km, Pamiers à 30 km. Déplacement sans surcoût sur cet axe.',
      },
      {
        question: 'Chape liquide pour maison BBC en Lauragais : quelles garanties ?',
        reponse: 'Nos chapes liquides — Sika LevelChape comme les gammes Cemex (Cemexa) — sont compatibles BBC et RE2020. Que ce soit sous agrément Sika n°3197-2025 ou avec Cemex, chaque mise en œuvre est tracée : PV de chantier transmis, traçabilité du produit, garantie procédé. Pour les constructeurs exigeant un dossier technique, nous le fournissons quel que soit le fournisseur retenu.',
      },
      {
        question: 'Quel délai pour un devis à Villefranche-de-Lauragais ?',
        reponse: 'Visite gratuite sous 48h, devis dans les 48h suivantes. Intervention planifiée sous 2 à 4 semaines. Pour les chantiers avec livraison constructeur, contactez-nous dès la phase gros œuvre pour réserver votre créneau.',
      },
    ],
  },

  {
    slug: 'saint-gaudens',
    nom: 'Saint-Gaudens',
    dept: '31',
    departementNom: 'Haute-Garonne',
    codePostal: '31800',

    metaTitle: `Chape Liquide Saint-Gaudens (31) — ${POSITIONNEMENT_TITRE} | Cyril Balussou`,
    metaDescription: `Chape liquide à Saint-Gaudens (Haute-Garonne, 31800). ${POSITIONNEMENT_FOURNISSEUR_MAJ}. Comminges, construction neuve, chape haute résistance P4S. Devis gratuit.`,

    heroAccroche: `Chape liquide à Saint-Gaudens — ${POSITIONNEMENT_FOURNISSEUR} en Comminges`,
    heroIntro: `Saint-Gaudens (31800) et le Comminges sont à 1h10 de notre base à Mirepoix. EURL Balussou Cyril intervient sur les chantiers significatifs dans le Comminges : construction neuve, locaux commerciaux, chape haute résistance P4S. ${POSITIONNEMENT_FOURNISSEUR_MAJ} — agrément Sika n°3197-2025, devis gratuit.`,
    heroImage: '/uploads/Chape-P4S-commercial.jpg',
    heroImageAlt: 'Chape haute résistance P4S — secteur Saint-Gaudens Haute-Garonne',

    realisation: {
      titre: 'Local commercial secteur Comminges — chape P4S',
      description: 'Chape haute résistance Sika ViscoChape® P4S pour local commercial secteur Saint-Gaudens / Comminges (31800). Classement UPEC P4S, trafic intensif. Mise en œuvre sous avis technique DTA, PV de chantier transmis.',
      image: '/uploads/IMG_3932.JPEG',
      imageAlt: 'Chape P4S local commercial coulée secteur Saint-Gaudens Comminges',
    },

    faqLocale: [
      {
        question: 'Vous couvrez Saint-Gaudens et le Comminges ?',
        reponse: 'Oui, pour les chantiers d\'une surface suffisante. Saint-Gaudens (31800) est à 1h10 de Mirepoix. Nous intervenons dans le Comminges pour les chantiers à partir de 100-120 m² selon la nature des travaux. Contactez-nous pour évaluer votre projet.',
      },
      {
        question: 'Chape P4S ou chape ciment pour un local à Saint-Gaudens — comment choisir ?',
        reponse: 'La chape ciment standard convient aux locaux courants (bureaux, commerces légers). La Sika ViscoChape® P4S est obligatoire pour les locaux classés UPEC P4S : grandes surfaces, hypermarchés, entrepôts logistiques, halls de gare. Nous vérifions le classement requis lors de la visite et orientons vers la bonne solution.',
      },
      {
        question: 'Quel délai et quelle surface minimale pour Saint-Gaudens ?',
        reponse: 'Pour Saint-Gaudens et le Comminges, nous recommandons des chantiers de 100 m² minimum. Visite sous 72h ouvrées, devis dans les 48h suivantes. Appelez-nous au 06 87 61 39 87 pour discuter de votre projet avant toute demande formelle.',
      },
    ],
  },
];
