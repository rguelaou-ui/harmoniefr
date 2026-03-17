import { Link } from "react-router-dom";
import BlogArticle from "@/components/BlogArticle";

const CommentIsolerMurBruit = () => (
  <BlogArticle
    title="Comment isoler un mur du bruit : guide pratique"
    metaDescription="Comment isoler un mur du bruit des voisins ? Découvrez les meilleures techniques d'isolation phonique des murs : doublage acoustique, ossature désolidarisée."
  >
    <h2 className="font-serif text-2xl text-foreground">Comment isoler un mur du bruit efficacement ?</h2>
    <p>
      Les bruits de voisinage sont la première cause de nuisance sonore en appartement. <strong>Isoler un mur du bruit</strong> nécessite une approche technique adaptée au type de bruit et à la configuration des lieux.
    </p>

    <h3 className="font-serif text-xl text-foreground">Technique n°1 : Le doublage acoustique sur ossature désolidarisée</h3>
    <p>
      C'est la solution la plus performante. Elle consiste à créer une contre-cloison indépendante du mur existant, avec une ossature métallique fixée au sol et au plafond (jamais au mur), remplie de laine haute densité, puis recouverte de plaques phoniques.
    </p>
    <p>
      Chez <strong>Harmonie</strong>, notre méthode en 6 couches (ossature désolidarisée, laine 30mm, Fermacell, plaque phonique, Techsound, BA13) permet d'atteindre des performances acoustiques exceptionnelles.
    </p>

    <h3 className="font-serif text-xl text-foreground">Technique n°2 : Le doublage collé</h3>
    <p>
      Plus simple mais moins performant, le doublage collé consiste à coller un complexe isolant directement sur le mur. Cette solution convient pour les bruits modérés mais ne supprime pas les ponts phoniques.
    </p>

    <h3 className="font-serif text-xl text-foreground">Les erreurs à éviter</h3>
    <ul className="space-y-2">
      <li className="flex items-start gap-2"><span className="text-accent">•</span> Ne jamais fixer l'ossature directement au mur bruyant</li>
      <li className="flex items-start gap-2"><span className="text-accent">•</span> Ne pas négliger les jonctions sol/mur/plafond</li>
      <li className="flex items-start gap-2"><span className="text-accent">•</span> Éviter les prises électriques dos à dos entre appartements</li>
    </ul>

    <p>
      <Link to="/isolation-phonique" className="text-accent hover:underline font-medium">
        → Découvrir toutes nos solutions d'isolation phonique
      </Link>
    </p>
  </BlogArticle>
);

export default CommentIsolerMurBruit;
