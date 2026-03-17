import { Link } from "react-router-dom";
import BlogArticle from "@/components/BlogArticle";

const PrixRenovationParis = () => (
  <BlogArticle
    title="Prix rénovation appartement Paris : tarifs 2025"
    metaDescription="Quel est le prix d'une rénovation d'appartement à Paris en 2025 ? Découvrez les tarifs au m² selon le type de travaux et nos conseils pour votre budget."
  >
    <h2 className="font-serif text-2xl text-foreground">Combien coûte une rénovation d'appartement à Paris ?</h2>
    <p>
      Le <strong>prix d'une rénovation d'appartement à Paris</strong> dépend de l'ampleur des travaux, de la surface et du niveau de finition souhaité. Voici un guide des tarifs pour 2025.
    </p>

    <h3 className="font-serif text-xl text-foreground">Tarifs moyens au m²</h3>
    <ul className="space-y-2">
      <li className="flex items-start gap-2"><span className="text-accent">•</span> <strong>Rafraîchissement</strong> (peinture, sols) : 400 à 700 €/m²</li>
      <li className="flex items-start gap-2"><span className="text-accent">•</span> <strong>Rénovation partielle</strong> (cuisine ou salle de bain) : 800 à 1 200 €/m²</li>
      <li className="flex items-start gap-2"><span className="text-accent">•</span> <strong>Rénovation complète</strong> : 1 200 à 2 000 €/m²</li>
      <li className="flex items-start gap-2"><span className="text-accent">•</span> <strong>Rénovation haut de gamme</strong> : 2 000 à 3 500 €/m²</li>
    </ul>

    <p>
      Pour un appartement parisien de 70 m² en rénovation complète, le budget se situe entre <strong>84 000 et 140 000 €</strong>.
    </p>

    <h3 className="font-serif text-xl text-foreground">Ce qui influence le prix</h3>
    <p>
      L'état initial du logement, la complexité des travaux (murs porteurs, réseaux), le choix des matériaux et le niveau de finition sont les principaux facteurs. À Paris, les contraintes d'accès et de copropriété peuvent aussi impacter le budget.
    </p>

    <p>
      <Link to="/renovation-complete" className="text-accent hover:underline font-medium">
        → Découvrir nos prestations de rénovation complète
      </Link>
    </p>
    <p>
      <Link to="/renovation-paris" className="text-accent hover:underline font-medium">
        → Rénovation à Paris : nos services
      </Link>
    </p>
  </BlogArticle>
);

export default PrixRenovationParis;
