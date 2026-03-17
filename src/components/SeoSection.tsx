import { Link } from "react-router-dom";

const SeoSection = () => {
  return (
    <section className="py-16 bg-secondary border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
            Entreprise de rénovation en Île-de-France
          </h2>
          <div className="text-muted-foreground leading-relaxed space-y-4 text-sm">
            <p>
              <strong>Harmonie</strong> est une entreprise spécialisée dans la <strong>rénovation en Île-de-France</strong>. 
              Nous accompagnons les particuliers et professionnels dans leurs projets de{" "}
              <Link to="/renovation-complete" className="text-accent hover:underline">rénovation d'appartement</Link>,{" "}
              rénovation de maison et <strong>travaux après sinistre</strong>.
            </p>
            <p>
              Nous intervenons rapidement à{" "}
              <Link to="/renovation-paris" className="text-accent hover:underline">Paris</Link>,{" "}
              <Link to="/renovation-aubervilliers" className="text-accent hover:underline">Aubervilliers</Link>,{" "}
              <Link to="/renovation-saint-denis" className="text-accent hover:underline">Saint-Denis</Link>,{" "}
              <Link to="/renovation-montreuil" className="text-accent hover:underline">Montreuil</Link>{" "}
              et dans toute la région pour des prestations complètes : peinture, plomberie, électricité et isolation.
            </p>
            <p>
              Nous proposons également des <strong>travaux d'isolation phonique</strong> pour améliorer le confort acoustique de votre logement et des solutions d'{" "}
              <Link to="/isolation-thermique-acoustique" className="text-accent hover:underline">isolation thermique</Link>{" "}
              pour réduire vos factures d'énergie. Nos équipes réalisent vos{" "}
              <Link to="/isolation-phonique" className="text-accent hover:underline">travaux d'isolation phonique</Link>{" "}
              avec des matériaux haute performance pour un résultat durable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeoSection;
