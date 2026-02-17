import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Home,
  Building2,
  ShieldAlert,
  PaintBucket,
  Bath,
  ChefHat,
  Hammer,
  Zap,
  Thermometer,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

import heroImg from "@/assets/renovation-hero.jpg";
import appartementImg from "@/assets/renovation-appartement.jpg";
import maisonImg from "@/assets/renovation-maison.jpg";
import salleDeBainImg from "@/assets/renovation-salle-de-bain.jpg";
import cuisineImg from "@/assets/renovation-cuisine.jpg";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const services = [
  {
    icon: Building2,
    title: "Rénovation d'appartement",
    description:
      "Optimisation de chaque mètre carré : redistribution des espaces, ouverture de cloisons, modernisation complète des finitions. Nous transformons votre appartement en un lieu de vie fonctionnel et contemporain, dans le respect des contraintes de copropriété.",
    image: appartementImg,
  },
  {
    icon: Home,
    title: "Rénovation de maison",
    description:
      "De la réfection de toiture à l'aménagement intérieur, en passant par la mise aux normes structurelles : nous prenons en charge l'intégralité des travaux de votre maison. Chaque intervention est coordonnée pour un résultat cohérent et durable.",
    image: maisonImg,
  },
  {
    icon: ShieldAlert,
    title: "Rénovation après sinistre",
    description:
      "Dégât des eaux, incendie ou catastrophe naturelle : nous intervenons rapidement pour remettre votre bien en état. Diagnostic, décontamination, reconstruction et finitions — nous vous accompagnons de la déclaration à la livraison.",
    image: null,
  },
  {
    icon: PaintBucket,
    title: "Rénovation intérieure",
    description:
      "Peinture, revêtements de sols (parquet, carrelage, résine), pose de cloisons, faux plafonds et travaux de finition. Nous sublîmons vos intérieurs avec des matériaux de qualité et une exécution soignée dans les moindres détails.",
    image: null,
  },
  {
    icon: Bath,
    title: "Rénovation de salle de bain",
    description:
      "Conception sur mesure de votre salle de bain : plomberie, étanchéité, carrelage, douche à l'italienne, mobilier vasque et robinetterie haut de gamme. Un espace bien-être pensé pour le confort au quotidien.",
    image: salleDeBainImg,
  },
  {
    icon: ChefHat,
    title: "Rénovation de cuisine",
    description:
      "Agencement ergonomique, installation de plans de travail, électroménager encastré, éclairage fonctionnel et finitions élégantes. Votre cuisine devient un véritable espace de vie, alliant praticité et esthétique.",
    image: cuisineImg,
  },
  {
    icon: Hammer,
    title: "Travaux de maçonnerie",
    description:
      "Ouverture de murs porteurs (avec études structure), création de cloisons, reprise de fondations, ravalement de façade et travaux de gros œuvre. Notre expertise maçonnerie garantit la solidité et la pérennité de chaque intervention.",
    image: null,
  },
  {
    icon: Zap,
    title: "Électricité & Plomberie",
    description:
      "Mise aux normes NF C 15-100, tableau électrique, réseaux encastrés, plomberie cuivre ou PER, installation sanitaire et chauffage. Des réseaux fiables, sécurisés et conformes aux réglementations en vigueur.",
    image: null,
  },
  {
    icon: Thermometer,
    title: "Isolation & Amélioration énergétique",
    description:
      "Isolation thermique et acoustique par l'intérieur ou l'extérieur, remplacement de menuiseries, ventilation VMC double flux. Améliorez le confort de votre habitat tout en réduisant vos factures énergétiques.",
    image: null,
    link: "/isolation-thermique-acoustique",
  },
];

const engagements = [
  "Un interlocuteur unique tout au long de votre projet",
  "Des devis détaillés, transparents et sans surprise",
  "Des artisans qualifiés et expérimentés",
  "Le respect des délais et du budget convenu",
  "Une garantie décennale sur tous nos travaux",
  "Un suivi de chantier rigoureux avec reporting régulier",
];

const RenovationPage = () => {
  return (
    <>
      <title>Rénovation complète appartement & maison | Harmonie</title>
      <meta
        name="description"
        content="Harmonie, entreprise de rénovation complète : appartement, maison, cuisine, salle de bain, électricité, plomberie, isolation. Devis gratuit et accompagnement de A à Z."
      />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroImg})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90" />
          </div>
          <div className="relative z-10 container mx-auto px-6 text-center">
            <motion.div {...fadeIn}>
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors mb-6"
              >
                <ArrowLeft className="h-4 w-4" />
                Retour à l'accueil
              </Link>
              <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-4">
                Votre projet de rénovation,
                <span className="block mt-2">
                  de <span className="text-accent">A à Z</span>
                </span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto font-light leading-relaxed">
                Harmonie coordonne l'ensemble de vos travaux de rénovation avec
                un savoir-faire d'exception. Un seul interlocuteur, tous les
                corps de métier.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div {...fadeIn}>
                <span className="text-accent font-medium text-sm tracking-[0.2em] uppercase mb-4 block">
                  Notre engagement
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                  Un accompagnement global pour chaque projet
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  Chez <strong>Harmonie</strong>, nous croyons qu'une rénovation
                  réussie repose sur la coordination parfaite de tous les corps
                  de métier. Du premier diagnostic à la livraison finale, notre
                  équipe prend en charge l'intégralité de votre projet :
                  conception, planification, exécution et finitions.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Que vous souhaitiez transformer un appartement ancien,
                  moderniser une maison ou rénover une pièce spécifique, nous
                  vous garantissons un résultat à la hauteur de vos exigences —
                  dans les délais et le budget convenus.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6">
            <motion.div {...fadeIn} className="text-center mb-16">
              <span className="text-accent font-medium text-sm tracking-[0.2em] uppercase mb-4 block">
                Nos prestations
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                Tous les métiers de la rénovation
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Un savoir-faire complet pour des projets livrés clé en main,
                sans compromis sur la qualité.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group"
                >
                  <div className="bg-card rounded-lg overflow-hidden shadow-card border border-border/50 h-full flex flex-col hover:shadow-elevated transition-shadow duration-300">
                    {service.image && (
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                      </div>
                    )}
                    <div className="p-8 flex flex-col flex-1">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-5">
                        <service.icon
                          className="h-5 w-5 text-accent"
                          strokeWidth={1.5}
                        />
                      </div>
                      <h3 className="font-serif text-xl text-foreground mb-3">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                        {service.description}
                      </p>
                      {service.link && (
                        <Link
                          to={service.link}
                          className="mt-4 inline-flex items-center gap-1 text-sm text-accent font-medium hover:underline"
                        >
                          En savoir plus
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Engagements */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div {...fadeIn}>
                <span className="text-accent font-medium text-sm tracking-[0.2em] uppercase mb-4 block">
                  Pourquoi Harmonie
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                  Nos engagements qualité
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Chaque chantier est une promesse de qualité. Nous mettons
                  notre expertise et notre rigueur au service de votre
                  satisfaction, avec des engagements concrets et mesurables.
                </p>
                <ul className="space-y-4">
                  {engagements.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div {...fadeIn} className="relative">
                <img
                  src={appartementImg}
                  alt="Rénovation d'intérieur par Harmonie"
                  className="rounded-lg shadow-elevated w-full"
                  loading="lazy"
                />
                <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground rounded-lg p-5 shadow-gold">
                  <p className="font-serif text-3xl font-bold">10+</p>
                  <p className="text-sm">ans d'expérience</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-6 text-center">
            <motion.div {...fadeIn}>
              <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground mb-6">
                Prêt à lancer votre projet de rénovation ?
              </h2>
              <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto mb-8">
                Contactez-nous pour un diagnostic gratuit et un devis détaillé.
                Notre équipe vous accompagne à chaque étape.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-gold"
              >
                <Link to="/#devis">
                  Demander un devis gratuit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default RenovationPage;
