import { Link } from "react-router-dom";
import BlogArticle from "@/components/BlogArticle";

const CombienCouteRenovation = () => (
  <BlogArticle
    title="Combien coûte une rénovation en 2025 ?"
    metaDescription="Guide complet des prix de rénovation en 2025 : appartement, maison, cuisine, salle de bain. Tarifs au m² et conseils budget pour vos travaux."
  >
    <h2 className="font-serif text-2xl text-foreground">Le guide des prix de rénovation en 2025</h2>
    <p>
      Planifier le budget de ses travaux est essentiel. Voici un tour d'horizon des <strong>prix de rénovation</strong> selon le type de projet et le niveau de finition.
    </p>

    <h3 className="font-serif text-xl text-foreground">Rénovation d'appartement</h3>
    <ul className="space-y-2">
      <li className="flex items-start gap-2"><span className="text-accent">•</span> Rafraîchissement : 300 à 600 €/m²</li>
      <li className="flex items-start gap-2"><span className="text-accent">•</span> Rénovation intermédiaire : 700 à 1 200 €/m²</li>
      <li className="flex items-start gap-2"><span className="text-accent">•</span> Rénovation lourde : 1 200 à 2 500 €/m²</li>
    </ul>

    <h3 className="font-serif text-xl text-foreground">Rénovation de cuisine</h3>
    <p>
      Le prix d'une rénovation de cuisine varie de <strong>5 000 à 25 000 €</strong> selon la surface, les équipements et le niveau de finition.
    </p>

    <h3 className="font-serif text-xl text-foreground">Rénovation de salle de bain</h3>
    <p>
      Comptez entre <strong>4 000 et 15 000 €</strong> pour une salle de bain standard, et jusqu'à 25 000 € pour une salle de bain haut de gamme.
    </p>

    <h3 className="font-serif text-xl text-foreground">Isolation thermique et phonique</h3>
    <p>
      L'<Link to="/isolation-thermique-acoustique" className="text-accent hover:underline">isolation thermique</Link> coûte en moyenne 30 à 100 €/m², tandis que l'<Link to="/isolation-phonique" className="text-accent hover:underline">isolation phonique</Link> se situe entre 50 et 180 €/m² selon la technique utilisée.
    </p>

    <h3 className="font-serif text-xl text-foreground">Comment optimiser son budget ?</h3>
    <ul className="space-y-2">
      <li className="flex items-start gap-2"><span className="text-accent">•</span> Faire appel à une entreprise générale (un seul interlocuteur)</li>
      <li className="flex items-start gap-2"><span className="text-accent">•</span> Profiter des aides financières (MaPrimeRénov', CEE)</li>
      <li className="flex items-start gap-2"><span className="text-accent">•</span> Combiner les travaux (isolation + rénovation = économies)</li>
    </ul>

    <p>
      <Link to="/renovation-complete" className="text-accent hover:underline font-medium">
        → Découvrir nos prestations de rénovation
      </Link>
    </p>
  </BlogArticle>
);

export default CombienCouteRenovation;
