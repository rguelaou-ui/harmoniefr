import { Link } from "react-router-dom";

const SeoSection = () => {
  return (
    <section className="py-16 bg-secondary border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-10">
          {/* Bloc 1 */}
          <div>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
              Travaux d'isolation phonique en Seine-Saint-Denis (93) et Île-de-France
            </h2>
            <div className="text-muted-foreground leading-relaxed space-y-4 text-sm">
              <p>
                <strong>Harmonie BTP</strong> est votre spécialiste des <strong>travaux d'isolation phonique</strong> en{" "}
                <strong>Seine-Saint-Denis (93)</strong> et dans toute l'<strong>Île-de-France</strong>.
                Nous réalisons l'isolation acoustique des murs, plafonds et sols pour les appartements, maisons et locaux professionnels.
                Nos équipes interviennent rapidement à{" "}
                <Link to="/renovation-aubervilliers" className="text-accent hover:underline">Aubervilliers</Link>,{" "}
                <Link to="/renovation-saint-denis" className="text-accent hover:underline">Saint-Denis</Link>,{" "}
                <Link to="/renovation-pantin" className="text-accent hover:underline">Pantin</Link>,{" "}
                <Link to="/renovation-bobigny" className="text-accent hover:underline">Bobigny</Link>,{" "}
                <Link to="/renovation-drancy" className="text-accent hover:underline">Drancy</Link>,{" "}
                <Link to="/renovation-montreuil" className="text-accent hover:underline">Montreuil</Link>{" "}
                et dans toutes les communes du 93.
              </p>
              <p>
                Découvrez nos solutions sur la page{" "}
                <Link to="/isolation-phonique" className="text-accent hover:underline">isolation phonique</Link>.
              </p>
            </div>
          </div>

          {/* Bloc 2 */}
          <div>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
              Rénovation Île-de-France : appartement, maison et travaux après sinistre
            </h2>
            <div className="text-muted-foreground leading-relaxed space-y-4 text-sm">
              <p>
                <strong>Harmonie BTP</strong> accompagne les particuliers et professionnels dans leurs projets de{" "}
                <Link to="/renovation-complete" className="text-accent hover:underline">rénovation d'appartement</Link>,{" "}
                rénovation de maison et <strong>travaux après sinistre</strong> en Île-de-France.
                Nos prestations couvrent la peinture, la plomberie, l'électricité, la menuiserie et l'
                <Link to="/isolation" className="text-accent hover:underline">isolation thermique</Link>.
              </p>
              <p>
                Nous intervenons à{" "}
                <Link to="/renovation-paris" className="text-accent hover:underline">Paris</Link>,{" "}
                <Link to="/renovation-creteil" className="text-accent hover:underline">Créteil</Link>,{" "}
                <Link to="/renovation-nanterre" className="text-accent hover:underline">Nanterre</Link>,{" "}
                <Link to="/renovation-colombes" className="text-accent hover:underline">Colombes</Link>,{" "}
                <Link to="/renovation-levallois" className="text-accent hover:underline">Levallois-Perret</Link>{" "}
                et dans toute la région Île-de-France.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeoSection;
