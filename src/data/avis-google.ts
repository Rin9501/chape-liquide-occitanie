export interface AvisGoogle {
  nom: string;
  note: number;
  texte: string;
}

// Avis réels collectés sur la fiche Google Business Profile de Chape Liquide Occitanie.
// Le texte du 1er avis est tronqué côté Google ("Voir l'avis complet") — on reprend
// fidèlement la portion visible plutôt que d'inventer la suite ; le lien vers la fiche
// Google en bas du bloc permet de lire l'avis en entier.
export const avisGoogle: AvisGoogle[] = [
  {
    nom: 'Philippe Massat',
    note: 5,
    texte: 'Très satisfait du travail réalisé par mon carreleur. Travail soigné, finitions impeccables et chantier toujours propre…',
  },
  {
    nom: 'Maxime Pedoussaut',
    note: 5,
    texte: 'Super travail, je recommande.',
  },
  {
    nom: 'Maxime Alhinc',
    note: 5,
    texte: 'Super travail sérieux et pro, je recommande.',
  },
  {
    nom: 'Loïc Cazas',
    note: 5,
    texte: 'Société très pro et réactive. Travail de qualité et large choix de prestations. Je recommande à 100 %.',
  },
];

export const lienAvisGoogle = 'https://share.google/In62pPxyxtGlN47Tg';
