import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const SeoSection = () => {
  return (
    <section className="py-16 bg-secondary border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-10">
          {/* Bloc 1 – Isolation phonique */}
          <div>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
              Travaux d'isolation phonique à Paris et en Île-de-France
            </h2>
            <div className="text-muted-foreground leading-relaxed space-y-4 text-sm">
              <p>
                <strong>Harmonie BTP</strong> est votre <strong>entreprise d'isolation phonique</strong> de référence à{" "}
                <Link to="/isolation-phonique-paris" className="text-accent hover:underline">Paris</Link> et en{" "}
                <strong>Île-de-France</strong>. Spécialiste des <strong>travaux d'isolation phonique</strong> et{" "}
                <Link to="/isolation-acoustique-paris" className="text-accent hover:underline">acoustique</Link>,
                nous intervenons pour l'isolation des murs, plafonds, sols et portes dans les appartements, maisons et locaux professionnels.
              </p>
              <p>
                Nos solutions d'<Link to="/isolation-anti-bruit" className="text-accent hover:underline">isolation anti bruit</Link>{" "}
                s'appuient sur des <strong>isolants phoniques</strong> haute performance : laine haute densité, membrane Techsound, plaque Fermacell.
                Nous proposons également le{" "}
                <Link to="/capitonnage-porte-anti-bruit" className="text-accent hover:underline">capitonnage de porte anti bruit</Link>{" "}
                pour une isolation complète de votre logement.
              </p>
              <p>
                Notre <Link to="/entreprise-isolation-phonique" className="text-accent hover:underline">entreprise spécialisée en isolation phonique</Link>{" "}
                intervient rapidement à{" "}
                <Link to="/renovation-aubervilliers" className="text-accent hover:underline">Aubervilliers</Link>,{" "}
                <Link to="/renovation-saint-denis" className="text-accent hover:underline">Saint-Denis</Link>,{" "}
                <Link to="/renovation-pantin" className="text-accent hover:underline">Pantin</Link>,{" "}
                <Link to="/renovation-bobigny" className="text-accent hover:underline">Bobigny</Link>,{" "}
                <Link to="/renovation-drancy" className="text-accent hover:underline">Drancy</Link>,{" "}
                <Link to="/renovation-montreuil" className="text-accent hover:underline">Montreuil</Link>{" "}
                et dans toutes les communes du 93, 94, 92, 95, 91, 78 et 77.
                <strong> Devis gratuit en 24h</strong>, intervention rapide.
              </p>
              <p>
                Découvrez nos solutions sur la page{" "}
                <Link to="/isolation-phonique" className="text-accent hover:underline">isolation phonique</Link>.
              </p>
            </div>
          </div>

          {/* Bloc 2 – Rénovation */}
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
                <Link to="/isolation-thermique-acoustique" className="text-accent hover:underline">isolation thermique</Link>.
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

          {/* FAQ optimisée SEO */}
          <div>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
              Questions fréquentes – Isolation phonique et rénovation
            </h2>
            <Accordion type="single" collapsible className="space-y-3">
              {[
                {
                  q: "Combien coûte une isolation phonique à Paris ?",
                  a: "Le prix d'une isolation phonique à Paris varie de 50 à 150 €/m² selon la technique : doublage acoustique mur (80-120 €/m²), faux plafond acoustique (70-130 €/m²), chape flottante (60-100 €/m²). Harmonie BTP propose un devis gratuit et détaillé sous 24h.",
                },
                {
                  q: "Quelle est la meilleure entreprise d'isolation phonique en Île-de-France ?",
                  a: "Harmonie BTP est une entreprise spécialisée en isolation phonique à Paris et en Île-de-France depuis plus de 10 ans. Nous utilisons des matériaux premium (Fermacell, Techsound, laine haute densité) et garantissons nos travaux avec la garantie décennale.",
                },
                {
                  q: "Comment isoler un mur contre le bruit des voisins ?",
                  a: "Pour isoler un mur contre le bruit, la technique la plus efficace est le système masse-ressort-masse : une ossature métallique désolidarisée, une laine haute densité, une plaque Fermacell, une membrane Techsound et une plaque BA13. Ce système offre une réduction de 50 à 60 dB.",
                },
                {
                  q: "Qu'est-ce que le capitonnage de porte anti bruit ?",
                  a: "Le capitonnage de porte anti bruit est une technique d'isolation phonique qui consiste à appliquer un revêtement acoustique (mousse + membrane + finition) sur vos portes. Il réduit le bruit de 10 à 25 dB sans remplacer la porte. Idéal pour les appartements parisiens.",
                },
                {
                  q: "Intervenez-vous dans toute l'Île-de-France pour l'isolation phonique ?",
                  a: "Oui, Harmonie BTP intervient dans tout Paris (75), la Seine-Saint-Denis (93), le Val-de-Marne (94), les Hauts-de-Seine (92), le Val-d'Oise (95), l'Essonne (91), les Yvelines (78) et la Seine-et-Marne (77). Devis gratuit en 24h.",
                },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`home-faq-${i}`} className="bg-card rounded-lg border border-border/50 px-6">
                  <AccordionTrigger className="text-left font-serif text-sm text-foreground">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-sm">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeoSection;
