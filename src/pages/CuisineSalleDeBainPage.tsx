import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ChefHat,
  Bath,
  Wrench,
  Zap,
  LayoutGrid,
  Lightbulb,
  Droplets,
  Maximize,
  Paintbrush,
  ShowerHead,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

import cuisineHeroImg from "@/assets/cuisine-hero.jpg";
import salleDeBainImg from "@/assets/salle-de-bain-hero.jpg";
import cuisineAmenagementImg from "@/assets/cuisine-amenagement.jpg";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const cuisineServices = [
  {
    icon: LayoutGrid,
    title: "Conception et aménagement de cuisine",
    description:
      "Nous concevons votre cuisine sur mesure en tenant compte de vos habitudes, de l'espace disponible et de vos envies esthétiques. Chaque projet est pensé pour allier fonctionnalité et élégance.",
  },
  {
    icon: Wrench,
    title: "Pose de meubles et plans de travail",
    description:
      "Installation soignée de meubles haut de gamme et de plans de travail en granit, quartz ou bois massif. Un montage précis pour un rendu impeccable et durable.",
  },
  {
    icon: Droplets,
    title: "Travaux de plomberie et raccordements",
    description:
      "Raccordement eau chaude/froide, évacuations, installation d'évier et robinetterie. Notre équipe garantit des installations conformes et fiables dans les moindres détails.",
  },
  {
    icon: Zap,
    title: "Installation électrique et éclairage",
    description:
      "Mise aux normes du réseau électrique, installation de prises, éclairage encastré, spots LED et lumières d'ambiance pour sublimer votre espace cuisine.",
  },
  {
    icon: Paintbrush,
    title: "Carrelage, faïence et crédence",
    description:
      "Pose de carrelage mural et au sol, faïence décorative et crédence design. Nous sélectionnons avec vous les matériaux pour un résultat harmonieux et facile d'entretien.",
  },
  {
    icon: Maximize,
    title: "Optimisation de l'espace et rangements",
    description:
      "Solutions astucieuses de rangement, tiroirs coulissants, armoires sur mesure et aménagements malins pour exploiter chaque centimètre de votre cuisine.",
  },
  {
    icon: ChefHat,
    title: "Rénovation ou modernisation complète",
    description:
      "Transformation intégrale de votre cuisine : dépose, plomberie, électricité, pose de mobilier et finitions. Un projet clé en main, livré dans les délais.",
  },
];

const salleDeBainServices = [
  {
    icon: Bath,
    title: "Création ou rénovation complète",
    description:
      "De la conception à la livraison, nous prenons en charge l'intégralité de votre projet salle de bain. Un espace repensé pour votre confort et votre bien-être au quotidien.",
  },
  {
    icon: ShowerHead,
    title: "Douche à l'italienne / baignoire",
    description:
      "Installation de douches à l'italienne avec receveur extra-plat et paroi en verre, ou pose de baignoires îlots et encastrées. Un choix haut de gamme pour chaque style.",
  },
  {
    icon: Paintbrush,
    title: "Pose de carrelage et faïence",
    description:
      "Pose millimétrée de carrelage grand format, mosaïque ou faïence murale. Nous assurons l'étanchéité parfaite des zones humides et un rendu esthétique soigné.",
  },
  {
    icon: LayoutGrid,
    title: "Installation de meubles et vasques",
    description:
      "Meubles suspendus ou sur pieds, simple ou double vasque, miroirs éclairés. Nous installons du mobilier de qualité adapté à votre espace et à vos goûts.",
  },
  {
    icon: Droplets,
    title: "Travaux de plomberie et robinetterie",
    description:
      "Raccordements, canalisations, robinetterie thermostatique et colonne de douche. Des installations fiables, esthétiques et conformes aux normes en vigueur.",
  },
  {
    icon: Lightbulb,
    title: "Éclairage et installation électrique",
    description:
      "Éclairage IP44 adapté aux pièces d'eau, spots encastrés, bandeaux LED et prises sécurisées. Un éclairage étudié pour créer une atmosphère apaisante.",
  },
  {
    icon: Wrench,
    title: "Solutions modernes et design",
    description:
      "WC suspendus, robinetterie encastrée, niches murales, sèche-serviettes design. Nous intégrons les dernières tendances pour une salle de bain contemporaine et fonctionnelle.",
  },
  {
    icon: Maximize,
    title: "Optimisation des petits espaces",
    description:
      "Aménagement intelligent des petites salles de bain : mobilier compact, rangements verticaux, douche sur mesure. Chaque centimètre est optimisé sans sacrifier le style.",
  },
];

const ServiceCard = ({
  service,
  index,
}: {
  service: (typeof cuisineServices)[0];
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.07 }}
    className="group bg-card rounded-lg p-7 shadow-card border border-border/50 hover:shadow-elevated transition-all duration-300"
  >
    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-5 group-hover:bg-accent/20 transition-colors">
      <service.icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
    </div>
    <h3 className="font-serif text-lg text-foreground mb-2">{service.title}</h3>
    <p className="text-muted-foreground text-sm leading-relaxed">
      {service.description}
    </p>
  </motion.div>
);

const CuisineSalleDeBainPage = () => {
  return (
    <>
      <title>Cuisine & Salle de bain sur-mesure | Harmonie Rénovation</title>
      <meta
        name="description"
        content="Harmonie conçoit et rénove vos cuisines et salles de bain sur mesure. Conception, travaux, finitions : un accompagnement de A à Z. Devis gratuit."
      />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${cuisineHeroImg})` }}
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
                Cuisine & Salle de bain
                <span className="block mt-2 text-accent">sur-mesure</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto font-light leading-relaxed">
                De la conception à la réalisation, Harmonie vous accompagne pour
                créer des espaces de vie uniques, fonctionnels et élégants.
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
                  Notre savoir-faire
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                  Un accompagnement complet, de A à Z
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  Chez <strong className="text-foreground">Harmonie</strong>,
                  chaque projet de cuisine ou de salle de bain est unique. Notre
                  équipe vous guide à chaque étape : conseil personnalisé,
                  conception sur mesure, coordination des travaux et finitions
                  impeccables.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Nous sélectionnons les meilleurs matériaux et mobilisons des
                  artisans qualifiés pour transformer vos espaces en véritables
                  pièces de vie — alliant esthétique, confort et durabilité.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── Section Cuisine ─── */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
              <motion.div {...fadeIn}>
                <span className="text-accent font-medium text-sm tracking-[0.2em] uppercase mb-4 block">
                  Espace Cuisine
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                  La cuisine de vos rêves, conçue pour vous
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  La cuisine est le cœur de votre maison. Qu'il s'agisse d'une
                  création complète ou d'une modernisation, nous concevons un
                  espace ergonomique, fonctionnel et esthétique, parfaitement
                  adapté à votre mode de vie.
                </p>
                <ul className="space-y-3">
                  {[
                    "Plans sur mesure et modélisation 3D",
                    "Matériaux haut de gamme sélectionnés",
                    "Coordination de tous les corps de métier",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div {...fadeIn}>
                <img
                  src={cuisineAmenagementImg}
                  alt="Aménagement cuisine sur mesure par Harmonie"
                  className="rounded-lg shadow-elevated w-full"
                  loading="lazy"
                />
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {cuisineServices.map((service, index) => (
                <ServiceCard
                  key={service.title}
                  service={service}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ─── Section Salle de bain ─── */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
              <motion.div {...fadeIn} className="order-2 lg:order-1">
                <img
                  src={salleDeBainImg}
                  alt="Rénovation salle de bain haut de gamme par Harmonie"
                  className="rounded-lg shadow-elevated w-full"
                  loading="lazy"
                />
              </motion.div>
              <motion.div {...fadeIn} className="order-1 lg:order-2">
                <span className="text-accent font-medium text-sm tracking-[0.2em] uppercase mb-4 block">
                  Espace Salle de bain
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                  Votre salle de bain, un espace bien-être
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  La salle de bain est un lieu de détente et de soin. Nous la
                  concevons comme un véritable espace de bien-être, avec des
                  matériaux nobles, une robinetterie raffinée et un agencement
                  pensé pour votre confort quotidien.
                </p>
                <ul className="space-y-3">
                  {[
                    "Étanchéité garantie, normes DTU respectées",
                    "Finitions haut de gamme et design contemporain",
                    "Solutions adaptées aux petits espaces",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {salleDeBainServices.map((service, index) => (
                <ServiceCard
                  key={service.title}
                  service={service}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-6 text-center">
            <motion.div {...fadeIn}>
              <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground mb-6">
                Envie d'une cuisine ou d'une salle de bain sur mesure ?
              </h2>
              <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto mb-8">
                Contactez Harmonie pour un diagnostic gratuit et un devis
                personnalisé. Notre équipe vous accompagne de la conception à la
                livraison.
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

export default CuisineSalleDeBainPage;
