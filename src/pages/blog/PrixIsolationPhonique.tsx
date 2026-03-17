import { Link } from "react-router-dom";
import BlogArticle from "@/components/BlogArticle";

const PrixIsolationPhonique = () => (
  <BlogArticle
    title="Prix isolation phonique appartement : guide complet 2025"
    metaDescription="Découvrez le prix de l'isolation phonique d'un appartement : murs, plafonds, sols. Tarifs au m², facteurs de prix et aides financières."
  >
    <h2 className="font-serif text-2xl text-foreground">Combien coûte l'isolation phonique d'un appartement ?</h2>
    <p>
      L'<strong>isolation phonique d'un appartement</strong> est un investissement essentiel pour retrouver le calme chez soi. Les prix varient selon la surface, le type de bruit à traiter et la solution technique retenue.
    </p>

    <h3 className="font-serif text-xl text-foreground">Tarifs moyens au m²</h3>
    <ul className="space-y-2">
      <li className="flex items-start gap-2"><span className="text-accent">•</span> <strong>Isolation phonique des murs</strong> : 50 à 150 €/m²</li>
      <li className="flex items-start gap-2"><span className="text-accent">•</span> <strong>Isolation phonique du plafond</strong> : 60 à 180 €/m²</li>
      <li className="flex items-start gap-2"><span className="text-accent">•</span> <strong>Isolation phonique du sol</strong> : 40 à 120 €/m²</li>
      <li className="flex items-start gap-2"><span className="text-accent">•</span> <strong>Fenêtres acoustiques</strong> : 500 à 1 500 € par fenêtre</li>
    </ul>

    <p>
      Pour un appartement de 60 m² nécessitant une isolation phonique complète (murs + plafond), le budget moyen se situe entre <strong>8 000 et 20 000 €</strong>.
    </p>

    <h3 className="font-serif text-xl text-foreground">Facteurs influençant le prix</h3>
    <p>
      Le prix dépend de la surface à traiter, du niveau de performance acoustique souhaité, de l'état du bâtiment existant et de la complexité d'accès. Notre méthode haute performance en 6 couches offre des résultats exceptionnels.
    </p>

    <p>
      <Link to="/isolation-phonique" className="text-accent hover:underline font-medium">
        → Découvrir nos solutions d'isolation phonique
      </Link>
    </p>
    <p>
      <Link to="/isolation-thermique-acoustique" className="text-accent hover:underline font-medium">
        → Voir aussi : isolation thermique
      </Link>
    </p>
  </BlogArticle>
);

export default PrixIsolationPhonique;
