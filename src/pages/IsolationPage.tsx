import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Thermometer, Leaf, Shield, CheckCircle2, Home, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Footer from "@/components/Footer";

import heroImg from "@/assets/isolation-hero.jpg";
import thermiqueCoupe from "@/assets/isolation-thermique-coupe.jpg";
import confortImg from "@/assets/isolation-confort.jpg";
import materiauxImg from "@/assets/isolation-materiaux.jpg";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const IsolationPage = () => {
  return (
    <>
      <title>Isolation thermique en Île-de-France | Harmonie BTP</title>
      <meta name="description" content="Spécialistes des travaux d'isolation thermique en Île-de-France. Réduction des déperditions de chaleur, économies d'énergie. Matériaux performants et pose professionnelle." />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
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
                Spécialiste en <span className="text-accent">isolation thermique</span>
                <span className="block mt-2">en Île-de-France</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto font-light leading-relaxed">
                Experts en travaux d'isolation thermique. Réduisez vos déperditions de chaleur et vos factures d'énergie avec des matériaux performants.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div {...fadeIn}>
                <span className="text-accent font-medium text-sm tracking-[0.2em] uppercase mb-4 block">
                  Notre expertise
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                  Pourquoi réaliser des travaux d'isolation thermique ?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Les <strong>travaux d'isolation thermique</strong> permettent de réduire les déperditions de chaleur
                  de votre logement, diminuant ainsi vos factures énergétiques de <strong>25 à 60%</strong>. Une bonne
                  isolation thermique maintient une température agréable été comme hiver, tout en réduisant
                  votre empreinte carbone.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Chez <strong>Harmonie</strong>, nous sélectionnons les meilleurs matériaux isolants et assurons une pose irréprochable pour un confort thermique optimal et durable.
                </p>
              </motion.div>
              <motion.div {...fadeIn} className="relative">
                <img
                  src={confortImg}
                  alt="Intérieur confortable grâce aux travaux d'isolation thermique"
                  className="rounded-lg shadow-elevated w-full"
                  loading="lazy"
                />
                <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground rounded-lg p-4 shadow-gold">
                  <p className="font-serif text-2xl font-bold">-40%</p>
                  <p className="text-sm">de perte énergétique</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Avantages */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <motion.div {...fadeIn} className="text-center mb-16">
              <span className="text-accent font-medium text-sm tracking-[0.2em] uppercase mb-4 block">
                Les bénéfices
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                Avantages des travaux d'isolation thermique
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Thermometer,
                  title: "Confort thermique",
                  description: "Température stable en toutes saisons grâce à nos travaux d'isolation thermique performants.",
                },
                {
                  icon: Leaf,
                  title: "Économies d'énergie",
                  description: "Réduction de 25 à 60% de vos factures de chauffage après travaux d'isolation thermique.",
                },
                {
                  icon: Shield,
                  title: "Valorisation du bien",
                  description: "Augmentation de la valeur de votre patrimoine immobilier grâce à une isolation optimale.",
                },
                {
                  icon: Leaf,
                  title: "Impact écologique",
                  description: "Réduction de votre empreinte carbone et de votre consommation énergétique globale.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-lg p-8 shadow-card border border-border/50 text-center"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 mb-6">
                    <item.icon className="h-6 w-6 text-accent" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-xl mb-3 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Techniques et matériaux */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <motion.div {...fadeIn}>
                <span className="text-accent font-medium text-sm tracking-[0.2em] uppercase mb-4 block">
                  Isolation thermique
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                  Travaux d'isolation thermique : techniques et matériaux
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  L'<strong>isolation thermique</strong> consiste à créer une barrière entre l'intérieur de votre logement
                  et l'environnement extérieur pour limiter les échanges de chaleur. Le principe repose sur l'utilisation
                  de matériaux à faible conductivité thermique (coefficient lambda λ), mesurée en <strong>W/(m·K)</strong>.
                </p>

                <h3 className="font-serif text-xl text-foreground mb-4">Principaux matériaux pour l'isolation thermique</h3>

                <div className="space-y-4 mb-8">
                  {[
                    {
                      name: "Laine de verre",
                      lambda: "0,032 – 0,040 W/(m·K)",
                      desc: "Matériau isolant minéral le plus utilisé en France pour les travaux d'isolation thermique. Excellent rapport performance/prix, résistant au feu (classement A1).",
                    },
                    {
                      name: "Laine de roche",
                      lambda: "0,034 – 0,045 W/(m·K)",
                      desc: "Isolant thermique d'origine volcanique. Incombustible, excellent rapport qualité/prix.",
                    },
                    {
                      name: "Polystyrène expansé (PSE)",
                      lambda: "0,030 – 0,038 W/(m·K)",
                      desc: "Léger et économique, idéal pour l'isolation thermique par l'extérieur (ITE) et les sols.",
                    },
                    {
                      name: "Polyuréthane (PUR)",
                      lambda: "0,022 – 0,028 W/(m·K)",
                      desc: "Performance thermique exceptionnelle avec une faible épaisseur. Parfait pour les espaces réduits.",
                    },
                    {
                      name: "Ouate de cellulose",
                      lambda: "0,038 – 0,042 W/(m·K)",
                      desc: "Isolant biosourcé recyclé. Bonne performance en isolation thermique et excellente régulation hygrométrique.",
                    },
                  ].map((mat) => (
                    <div key={mat.name} className="border border-border/50 rounded-lg p-4 bg-card">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium text-foreground">{mat.name}</h4>
                          <p className="text-xs text-accent font-mono mt-1">λ = {mat.lambda}</p>
                          <p className="text-sm text-muted-foreground mt-1">{mat.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="font-serif text-xl text-foreground mb-4">La résistance thermique R</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  La performance d'une <strong>isolation thermique</strong> se mesure par la résistance thermique
                  <strong> R (m²·K/W)</strong>. Plus R est élevé, meilleure est l'isolation. La réglementation
                  thermique impose des valeurs minimales :
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "Murs : R ≥ 3,7 m²·K/W (recommandé R = 5 pour les travaux d'isolation thermique optimaux)",
                    "Toiture / combles : R ≥ 6 m²·K/W (zone de déperdition majeure, jusqu'à 30%)",
                    "Planchers bas : R ≥ 3 m²·K/W",
                    "Fenêtres : Uw ≤ 1,3 W/(m²·K) avec double ou triple vitrage",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-muted-foreground text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div {...fadeIn} className="space-y-8 lg:sticky lg:top-8">
                <img
                  src={thermiqueCoupe}
                  alt="Coupe technique des couches d'isolation thermique d'un mur"
                  className="rounded-lg shadow-card w-full"
                  loading="lazy"
                />
                <img
                  src={materiauxImg}
                  alt="Matériaux isolants pour travaux d'isolation thermique"
                  className="rounded-lg shadow-card w-full"
                  loading="lazy"
                />
                <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
                  <h4 className="font-serif text-lg text-foreground mb-3">💡 Le saviez-vous ?</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Les <strong>travaux d'isolation thermique</strong> sont éligibles à de nombreuses aides :
                    MaPrimeRénov', CEE (Certificats d'Économies d'Énergie), TVA réduite à 5,5%,
                    éco-prêt à taux zéro. Harmonie vous accompagne dans toutes vos démarches administratives.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Interventions thermiques */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <motion.div {...fadeIn} className="text-center mb-16">
              <span className="text-accent font-medium text-sm tracking-[0.2em] uppercase mb-4 block">
                Nos interventions
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                Travaux d'isolation thermique par zone
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "🏠",
                  title: "Isolation thermique des murs",
                  items: [
                    "Isolation thermique par l'intérieur (ITI) : doublage collé ou sur ossature",
                    "Isolation thermique par l'extérieur (ITE) : bardage ventilé ou enduit sur isolant",
                    "Traitement des ponts thermiques structurels",
                  ],
                },
                {
                  icon: "🔝",
                  title: "Isolation des combles et toiture",
                  items: [
                    "Isolation thermique des combles perdus par soufflage",
                    "Isolation thermique des rampants sous toiture",
                    "Pose de pare-vapeur et écran de sous-toiture",
                  ],
                },
                {
                  icon: "🏗️",
                  title: "Isolation des sols et planchers",
                  items: [
                    "Isolation thermique du plancher bas sur cave ou vide sanitaire",
                    "Pose de chape isolante sur dalle",
                    "Traitement des ponts thermiques de dalles",
                  ],
                },
                {
                  icon: "🪟",
                  title: "Fenêtres & vitrages",
                  items: [
                    "Triple vitrage pour isolation thermique renforcée",
                    "Double vitrage à isolation renforcée (VIR)",
                    "Volets roulants isolants thermiquement",
                  ],
                },
              ].map((zone, index) => (
                <motion.div
                  key={zone.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-lg p-6 shadow-card border border-border/50"
                >
                  <span className="text-3xl mb-4 block">{zone.icon}</span>
                  <h3 className="font-serif text-lg text-foreground mb-4">{zone.title}</h3>
                  <ul className="space-y-2">
                    {zone.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-3.5 w-3.5 text-accent mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ thermique */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <motion.div {...fadeIn} className="text-center mb-12">
                <span className="text-accent font-medium text-sm tracking-[0.2em] uppercase mb-4 block">
                  Questions fréquentes
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                  Tout savoir sur l'isolation thermique
                </h2>
              </motion.div>

              <motion.div {...fadeIn}>
                <Accordion type="single" collapsible className="space-y-3">
                  {[
                    {
                      q: "Quels sont les signes indiquant un besoin de travaux d'isolation thermique ?",
                      a: "Plusieurs signes doivent vous alerter : factures de chauffage élevées, sensation de parois froides, courants d'air, humidité et condensation sur les murs, variations de température importantes entre les pièces. Un diagnostic thermique (DPE) permet de quantifier les déperditions et de prioriser les travaux d'isolation thermique les plus rentables.",
                    },
                    {
                      q: "Quelles aides financières pour les travaux d'isolation thermique ?",
                      a: "Les travaux d'isolation thermique sont éligibles à plusieurs dispositifs : MaPrimeRénov' (jusqu'à 75€/m² pour l'ITI), les CEE (primes énergie), la TVA réduite à 5,5%, l'éco-prêt à taux zéro (jusqu'à 50 000€), et les aides locales. L'entreprise doit être certifiée RGE — c'est notre cas chez Harmonie.",
                    },
                    {
                      q: "Quelle épaisseur d'isolant faut-il prévoir ?",
                      a: "L'épaisseur dépend du matériau et de la résistance thermique R visée. Pour les murs (R=5), comptez 14 à 16 cm de laine de roche ou 10 cm de polyuréthane. Pour les combles (R=7), prévoyez 28 à 30 cm de laine soufflée.",
                    },
                    {
                      q: "Peut-on combiner isolation thermique et isolation phonique ?",
                      a: "Absolument ! De nombreux matériaux comme la laine de roche offrent d'excellentes performances en isolation thermique et phonique. Combiner les travaux permet de réduire les coûts. Consultez notre page dédiée à l'isolation phonique pour en savoir plus.",
                    },
                  ].map((faq, i) => (
                    <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-lg border border-border/50 px-6">
                      <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Redirection isolation phonique */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6 text-center">
            <motion.div {...fadeIn} className="max-w-2xl mx-auto">
              <Volume2 className="h-10 w-10 text-accent mx-auto mb-4" strokeWidth={1.5} />
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
                Isolation phonique
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Nous proposons également des solutions d'<strong>isolation phonique</strong> pour améliorer le confort acoustique de votre habitat. Consultez notre page dédiée pour en savoir plus.
              </p>
              <Link to="/isolation-phonique">
                <Button variant="accent" size="lg" className="group">
                  Voir l'isolation phonique
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 gradient-anthracite">
          <div className="container mx-auto px-6 text-center">
            <motion.div {...fadeIn}>
              <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground mb-6">
                Besoin de travaux d'isolation thermique ?
              </h2>
              <p className="text-primary-foreground/70 max-w-2xl mx-auto mb-8 text-lg">
                Nos experts réalisent un diagnostic gratuit et vous proposent les solutions
                d'<strong>isolation thermique</strong> les plus adaptées à votre habitat. Devis gratuit et sans engagement.
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

export default IsolationPage;
