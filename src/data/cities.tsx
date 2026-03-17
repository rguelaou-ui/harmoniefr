import CityPage from "@/components/CityPage";

const cities = [
  { slug: "paris", city: "Paris", desc: "Entreprise de rénovation à Paris. Harmonie réalise vos travaux de rénovation d'appartement, isolation phonique et thermique dans tous les arrondissements." },
  { slug: "aubervilliers", city: "Aubervilliers", desc: "Rénovation à Aubervilliers (93). Travaux de rénovation, isolation phonique et thermique. Intervention rapide, devis gratuit." },
  { slug: "saint-denis", city: "Saint-Denis", desc: "Rénovation à Saint-Denis (93). Spécialiste en rénovation d'appartement, isolation phonique et thermique en Seine-Saint-Denis." },
  { slug: "montreuil", city: "Montreuil", desc: "Rénovation à Montreuil (93). Entreprise BTP spécialisée en rénovation complète, isolation phonique et thermique." },
  { slug: "bobigny", city: "Bobigny", desc: "Rénovation à Bobigny (93). Travaux de rénovation, isolation thermique et phonique. Entreprise BTP Île-de-France." },
  { slug: "pantin", city: "Pantin", desc: "Rénovation à Pantin (93). Harmonie, votre entreprise de rénovation et isolation en Seine-Saint-Denis." },
  { slug: "drancy", city: "Drancy", desc: "Rénovation à Drancy (93). Entreprise BTP spécialisée en rénovation d'appartement et isolation phonique." },
  { slug: "creteil", city: "Créteil", desc: "Rénovation à Créteil (94). Travaux de rénovation, isolation thermique et phonique dans le Val-de-Marne." },
  { slug: "vitry-sur-seine", city: "Vitry-sur-Seine", desc: "Rénovation à Vitry-sur-Seine (94). Entreprise BTP pour rénovation complète et isolation en Val-de-Marne." },
  { slug: "ivry-sur-seine", city: "Ivry-sur-Seine", desc: "Rénovation à Ivry-sur-Seine (94). Spécialiste en rénovation d'appartement, isolation phonique et thermique." },
  { slug: "nanterre", city: "Nanterre", desc: "Rénovation à Nanterre (92). Travaux de rénovation et isolation dans les Hauts-de-Seine. Devis gratuit." },
  { slug: "colombes", city: "Colombes", desc: "Rénovation à Colombes (92). Entreprise BTP pour rénovation d'appartement et isolation thermique et phonique." },
  { slug: "asnieres", city: "Asnières-sur-Seine", desc: "Rénovation à Asnières-sur-Seine (92). Travaux de rénovation complète et isolation en Hauts-de-Seine." },
  { slug: "clichy", city: "Clichy", desc: "Rénovation à Clichy (92). Harmonie intervient pour vos travaux de rénovation et isolation phonique." },
  { slug: "levallois", city: "Levallois-Perret", desc: "Rénovation à Levallois-Perret (92). Entreprise BTP pour rénovation haut de gamme et isolation." },
];

export { cities };

export const cityRoutes = cities.map((c) => ({
  path: `/renovation-${c.slug}`,
  element: <CityPage city={c.city} description={c.desc} />,
}));
