import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Home, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

interface CityPageProps {
  city: string;
  department?: string;
  description: string;
}

const CityPage = ({ city, department = "Île-de-France", description }: CityPageProps) => {
  return (
    <>
      <title>{`Rénovation ${city} | Entreprise BTP ${department} – Harmonie`}</title>
      <meta name="description" content={`Entreprise de rénovation à ${city}. Travaux de rénovation d'appartement, isolation phonique, isolation thermique, plomberie, électricité. Devis gratuit.`} />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative py-24 bg-primary">
          <div className="container mx-auto px-6 text-center">
            <motion.div {...fadeIn}>
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors mb-6"
              >
                <ArrowLeft className="h-4 w-4" />
                Retour à l'accueil
              </Link>
              <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-4">
                Rénovation à <span className="text-accent">{city}</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto font-light leading-relaxed">
                {description}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contenu principal */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div {...fadeIn}>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                  Votre entreprise de rénovation à {city}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Harmonie</strong> intervient à <strong>{city}</strong> et dans toute l'<strong>Île-de-France</strong> pour vos projets de <strong>rénovation d'appartement</strong>, rénovation de maison et <strong>travaux après sinistre</strong>. Nous sommes votre interlocuteur unique pour des prestations complètes et de qualité.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Notre équipe de professionnels qualifiés assure des travaux soignés, dans le respect des délais et du budget. De la conception à la livraison, nous vous accompagnons à chaque étape.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <motion.div {...fadeIn} className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                Nos services à {city}
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Rénovation complète",
                  items: ["Rénovation d'appartement", "Rénovation de maison", "Travaux après sinistre", "Rénovation clé en main"],
                  link: "/renovation-complete",
                },
                {
                  title: "Isolation thermique",
                  items: ["Isolation des murs par l'intérieur", "Isolation des combles", "Isolation des planchers", "Fenêtres et vitrages"],
                  link: "/isolation-thermique-acoustique",
                },
                {
                  title: "Isolation phonique",
                  items: ["Isolation phonique des murs", "Isolation des plafonds", "Isolation des sols", "Traitement acoustique"],
                  link: "/isolation-phonique",
                },
                {
                  title: "Cuisines & Salles de bain",
                  items: ["Aménagement de cuisine", "Rénovation salle de bain", "Plomberie complète", "Carrelage et revêtements"],
                  link: "/cuisines-salles-de-bain",
                },
                {
                  title: "Électricité & Plomberie",
                  items: ["Mise aux normes électrique", "Installation plomberie", "Tableau électrique", "Chauffage"],
                  link: "/electricite-plomberie",
                },
                {
                  title: "Menuiserie & Finitions",
                  items: ["Peinture intérieure", "Revêtements de sols", "Menuiserie sur mesure", "Finitions haut de gamme"],
                  link: "/menuiserie-finitions",
                },
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link to={service.link} className="group block bg-card rounded-lg p-6 shadow-card border border-border/50 hover:shadow-elevated transition-all duration-300 h-full">
                    <h3 className="font-serif text-lg text-foreground mb-4 group-hover:text-accent transition-colors">{service.title}</h3>
                    <ul className="space-y-2 mb-4">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-3.5 w-3.5 text-accent mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <span className="text-sm text-accent font-medium">En savoir plus →</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Zones */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-6">
            <motion.div {...fadeIn} className="text-center max-w-3xl mx-auto">
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
                Nous intervenons aussi à proximité de {city}
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Harmonie intervient dans toute l'Île-de-France pour vos projets de rénovation, isolation thermique et isolation phonique.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  { name: "Paris", slug: "paris" },
                  { name: "Aubervilliers", slug: "aubervilliers" },
                  { name: "Saint-Denis", slug: "saint-denis" },
                  { name: "Montreuil", slug: "montreuil" },
                  { name: "Bobigny", slug: "bobigny" },
                  { name: "Pantin", slug: "pantin" },
                  { name: "Drancy", slug: "drancy" },
                  { name: "Créteil", slug: "creteil" },
                  { name: "Vitry-sur-Seine", slug: "vitry-sur-seine" },
                  { name: "Ivry-sur-Seine", slug: "ivry-sur-seine" },
                  { name: "Nanterre", slug: "nanterre" },
                  { name: "Colombes", slug: "colombes" },
                  { name: "Asnières", slug: "asnieres" },
                  { name: "Clichy", slug: "clichy" },
                  { name: "Levallois", slug: "levallois" },
                ].map((c) => (
                  <Link
                    key={c.slug}
                    to={`/renovation-${c.slug}`}
                    className="text-xs px-3 py-1.5 rounded-full bg-card border border-border/50 text-muted-foreground hover:text-accent hover:border-accent/30 transition-colors"
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 gradient-anthracite">
          <div className="container mx-auto px-6 text-center">
            <motion.div {...fadeIn}>
              <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground mb-6">
                Besoin de travaux de rénovation à {city} ?
              </h2>
              <p className="text-primary-foreground/70 max-w-2xl mx-auto mb-8 text-lg">
                Devis gratuit et sans engagement. Nos experts interviennent rapidement à {city} et dans toute l'Île-de-France.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/#quote-form">
                  <Button variant="accent" size="lg" className="group">
                    Demander un devis gratuit
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/">
                  <Button variant="heroOutline" size="lg">
                    <Home className="mr-2 h-4 w-4" />
                    Retour à l'accueil
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default CityPage;
