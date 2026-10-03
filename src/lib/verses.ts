// Texte du domaine public — Louis Segond (1910)
export type Verse = { text: string; ref: string };

export const VERSES: Verse[] = [
  { text: "L'Éternel est mon berger : je ne manquerai de rien.", ref: "Psaume 23.1" },
  { text: "Jette ton fardeau sur l'Éternel, et il te soutiendra.", ref: "Psaume 55.23" },
  { text: "Soyez forts et courageux, ne craignez point et ne soyez point effrayés, car l'Éternel, ton Dieu, marchera lui-même avec toi.", ref: "Deutéronome 31.6" },
  { text: "Je puis tout par celui qui me fortifie.", ref: "Philippiens 4.13" },
  { text: "Ne t'ai-je pas donné cet ordre : Fortifie-toi et prends courage ? Ne te laisse point effrayer, ne t'épouvante point, car l'Éternel, ton Dieu, est avec toi partout où tu iras.", ref: "Josué 1.9" },
  { text: "Car je connais les projets que j'ai formés sur vous, projets de paix et non de malheur, afin de vous donner un avenir et de l'espérance.", ref: "Jérémie 29.11" },
  { text: "L'Éternel est ma lumière et mon salut : de qui aurais-je crainte ?", ref: "Psaume 27.1" },
  { text: "Ne vous inquiétez de rien ; mais en toute chose faites connaître vos besoins à Dieu par des prières et des supplications, avec des actions de grâces.", ref: "Philippiens 4.6" },
  { text: "Confie-toi en l'Éternel de tout ton cœur, et ne t'appuie pas sur ta sagesse.", ref: "Proverbes 3.5" },
  { text: "Venez à moi, vous tous qui êtes fatigués et chargés, et je vous donnerai du repos.", ref: "Matthieu 11.28" },
  { text: "L'amour est patient, il est plein de bonté ; l'amour n'est point envieux.", ref: "1 Corinthiens 13.4" },
  { text: "Je puis tout, parce que Christ me fortifie.", ref: "Philippiens 4.13" },
  { text: "Que ta bonté, Éternel, soit sur nous, comme nous espérons en toi !", ref: "Psaume 33.22" },
  { text: "Il guérit ceux qui ont le cœur brisé, et il panse leurs blessures.", ref: "Psaume 147.3" },
  { text: "Mais ceux qui se confient en l'Éternel renouvellent leur force. Ils prennent le vol comme les aigles.", ref: "Ésaïe 40.31" },
  { text: "La paix que je vous laisse, c'est ma paix que je vous donne.", ref: "Jean 14.27" },
  { text: "C'est par la grâce que vous êtes sauvés, par le moyen de la foi.", ref: "Éphésiens 2.8" },
  { text: "Approchez-vous de Dieu, et il s'approchera de vous.", ref: "Jacques 4.8" },
  { text: "Que chacun de vous, au lieu de considérer ses propres intérêts, considère aussi ceux des autres.", ref: "Philippiens 2.4" },
  { text: "Celui qui habite sous l'abri du Très-Haut repose à l'ombre du Tout-Puissant.", ref: "Psaume 91.1" },
  { text: "Rendez grâces en toutes choses, car c'est à votre égard la volonté de Dieu en Jésus-Christ.", ref: "1 Thessaloniciens 5.18" },
  { text: "Demeurez en moi, et je demeurerai en vous.", ref: "Jean 15.4" },
  { text: "Cherchez premièrement le royaume et la justice de Dieu ; et toutes ces choses vous seront données par-dessus.", ref: "Matthieu 6.33" },
];

function dayOfYear(date: Date) {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - start.getTime();
  return Math.floor(diff / 86400000);
}

export function verseForDate(date: Date = new Date()): Verse {
  const idx = dayOfYear(date) % VERSES.length;
  return VERSES[idx];
}

export function randomVerse(excludeRef?: string): Verse {
  const pool = excludeRef ? VERSES.filter((v) => v.ref !== excludeRef) : VERSES;
  return pool[Math.floor(Math.random() * pool.length)];
}
