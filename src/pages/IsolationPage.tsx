import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Thermometer, Volume2, Shield, Leaf, CheckCircle2, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Footer from "@/components/Footer";

import heroImg from "@/assets/isolation-hero.jpg";
import thermiqueCoupe from "@/assets/isolation-thermique-coupe.jpg";
import acoustiquePlafond from "@/assets/isolation-acoustique-plafond.jpg";
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
      {/* SEO Meta via Helmet-like approach in the title */}
      <title>Travaux d'isolation thermique et phonique | Harmonie</title>
      <meta name="description" content="Spécialistes des travaux d'isolation thermique, isolation phonique et isolation acoustique. Diagnostic, matériaux performants et pose professionnelle pour votre confort." />

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
                Travaux d'isolation thermique
                <span className="block mt-2">
                  et <span className="text-accent">isolation phonique</span>
                </span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto font-light leading-relaxed">
                Experts en travaux d'isolation acoustique, isolation thermique et isolation phonique.
                Nous améliorons durablement le confort de votre habitat.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Isolation Thermique - Section détaillée */}
        <section className="py-20 bg-background">
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
                      desc: "Isolant thermique et acoustique d'origine volcanique. Incombustible, excellent pour les travaux d'isolation phonique combinée.",
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
                  alt="Matériaux isolants pour travaux d'isolation thermique et phonique"
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

        {/* Introduction */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div {...fadeIn}>
                <span className="text-accent font-medium text-sm tracking-[0.2em] uppercase mb-4 block">
                  Notre expertise
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                  Pourquoi réaliser des travaux d'isolation thermique et phonique ?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Les <strong>travaux d'isolation thermique</strong> permettent de réduire les déperditions de chaleur
                  de votre logement, diminuant ainsi vos factures énergétiques de <strong>25 à 60%</strong>. Une bonne
                  isolation thermique maintient une température agréable été comme hiver, tout en réduisant
                  votre empreinte carbone.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Les <strong>travaux d'isolation phonique</strong> (ou <strong>travaux d'isolation acoustique</strong>)
                  visent à réduire la transmission des bruits entre l'extérieur et l'intérieur de votre habitation,
                  ou entre les différentes pièces. Les nuisances sonores — bruits de voisinage, circulation routière,
                  bruits aériens — impactent directement votre qualité de vie et votre santé.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Chez <strong>Harmonie</strong>, nous combinons ces deux expertises pour vous offrir un
                  confort optimal, tant thermique qu'acoustique, grâce à des matériaux performants et une
                  pose irréprochable.
                </p>
              </motion.div>
              <motion.div {...fadeIn} className="relative">
                <img
                  src={confortImg}
                  alt="Intérieur confortable grâce aux travaux d'isolation thermique et phonique"
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
                Avantages des travaux d'isolation thermique et acoustique
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
                  icon: Volume2,
                  title: "Confort acoustique",
                  description: "Réduction significative des nuisances sonores par nos travaux d'isolation phonique professionnels.",
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

        {/* Isolation Phonique / Acoustique - Section détaillée */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6">
            <motion.div {...fadeIn} className="text-center mb-16">
              <span className="text-accent font-medium text-sm tracking-[0.2em] uppercase mb-4 block">
                Isolation phonique & acoustique
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                Travaux d'isolation phonique : protégez-vous du bruit
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                Les <strong>travaux d'isolation acoustique</strong> nécessitent une approche technique rigoureuse.
                Comprendre la nature des bruits est essentiel pour choisir la bonne solution d'
                <strong>isolation phonique</strong>.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <motion.div {...fadeIn} className="space-y-8">
                <img
                  src={acoustiquePlafond}
                  alt="Travaux d'isolation acoustique de plafond avec pose de panneaux phoniques"
                  className="rounded-lg shadow-card w-full"
                  loading="lazy"
                />
                <div className="bg-card rounded-lg p-6 shadow-card border border-border/50">
                  <h4 className="font-serif text-lg text-foreground mb-4">Les indices acoustiques clés</h4>
                  <div className="space-y-3">
                    {[
                      { label: "Rw (dB)", desc: "Indice d'affaiblissement acoustique pondéré — mesure la capacité d'une paroi à bloquer les bruits aériens." },
                      { label: "Ln,w (dB)", desc: "Niveau de bruit de choc normalisé pondéré — mesure la transmission des bruits d'impact (pas, chutes d'objets)." },
                      { label: "DnT,A (dB)", desc: "Isolement acoustique standardisé — mesure l'isolation phonique réelle entre deux pièces." },
                      { label: "αw", desc: "Coefficient d'absorption acoustique — de 0 (réfléchissant) à 1 (absorbant total)." },
                    ].map((item) => (
                      <div key={item.label} className="flex items-start gap-3">
                        <span className="font-mono text-accent text-sm font-bold min-w-[70px]">{item.label}</span>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div {...fadeIn}>
                <h3 className="font-serif text-2xl text-foreground mb-6">
                  Les types de bruits et solutions d'isolation acoustique
                </h3>

                <div className="space-y-6">
                  <div className="bg-card rounded-lg p-6 shadow-card border border-border/50">
                    <h4 className="font-serif text-lg text-foreground mb-3">🔊 Bruits aériens</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Voix, musique, télévision, circulation routière, avions. Ces bruits se propagent par l'air
                      et traversent les parois peu isolées.
                    </p>
                    <p className="text-sm text-foreground font-medium mb-2">Solutions d'isolation phonique :</p>
                    <ul className="space-y-1">
                      {[
                        "Doublage acoustique des murs (plaque de plâtre + laine minérale sur ossature métallique désolidarisée)",
                        "Contre-cloison avec système masse-ressort-masse",
                        "Remplacement des fenêtres par du double ou triple vitrage acoustique (Rw ≥ 35 dB)",
                        "Pose de portes acoustiques isophoniques",
                      ].map((s) => (
                        <li key={s} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-card rounded-lg p-6 shadow-card border border-border/50">
                    <h4 className="font-serif text-lg text-foreground mb-3">👣 Bruits d'impact (solidiens)</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Pas, chutes d'objets, déplacements de meubles. Ces bruits se transmettent par les structures
                      du bâtiment (planchers, murs porteurs).
                    </p>
                    <p className="text-sm text-foreground font-medium mb-2">Solutions d'isolation acoustique :</p>
                    <ul className="space-y-1">
                      {[
                        "Chape flottante sur sous-couche résiliente (réduction jusqu'à 20 dB)",
                        "Parquet flottant avec sous-couche désolidarisante acoustique",
                        "Faux plafond suspendu avec suspentes anti-vibratiles et laine minérale",
                        "Désolidarisation des cloisons avec bandes résilientes",
                      ].map((s) => (
                        <li key={s} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-card rounded-lg p-6 shadow-card border border-border/50">
                    <h4 className="font-serif text-lg text-foreground mb-3">🔧 Bruits d'équipements</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      VMC, chaudière, ascenseur, tuyauterie. Ces bruits se propagent par vibration dans la structure.
                    </p>
                    <p className="text-sm text-foreground font-medium mb-2">Solutions d'isolation phonique :</p>
                    <ul className="space-y-1">
                      {[
                        "Plots anti-vibratiles sous les équipements",
                        "Manchons acoustiques sur les canalisations",
                        "Coffrage acoustique des VMC et gaines techniques",
                        "Désolidarisation des fixations par silent-blocs",
                      ].map((s) => (
                        <li key={s} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Notre méthode d'isolation acoustique haute performance */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div {...fadeIn} className="text-center mb-12">
                <span className="text-accent font-medium text-sm tracking-[0.2em] uppercase mb-4 block">
                  Notre savoir-faire
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                  Notre méthode d'isolation acoustique haute performance
                </h2>
                <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
                  La performance d'une <strong>isolation phonique</strong> repose avant tout sur une mise en œuvre
                  rigoureuse et sur le principe de <strong>désolidarisation des parois</strong>. En supprimant les
                  liaisons rigides entre les structures, nous limitons efficacement la transmission des vibrations
                  et des bruits, garantissant un résultat acoustique optimal et durable.
                </p>
              </motion.div>

              <motion.div {...fadeIn} className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Désolidarisation par ossature",
                    description:
                      "La première étape consiste à créer une ossature métallique totalement désolidarisée de la paroi existante. Cette technique constitue la base de toute isolation acoustique performante.",
                    points: [
                      "Réduction de la transmission des vibrations entre les structures",
                      "Suppression des ponts phoniques, principale cause de perte d'efficacité",
                      "Création d'une base optimale pour recevoir le complexe acoustique multicouche",
                    ],
                  },
                  {
                    step: "2",
                    title: "Plaque Fermacell",
                    description:
                      "La plaque Fermacell est intégrée comme première couche de masse dans notre système. Ce matériau de haute densité apporte une contribution essentielle à la performance globale.",
                    points: [
                      "Matériau dense et rigide, supérieur aux plaques standard",
                      "Excellente performance mécanique et acoustique",
                      "Première masse lourde du système, bloquant les basses fréquences",
                      "Amélioration significative de l'affaiblissement acoustique (Rw)",
                    ],
                  },
                  {
                    step: "3",
                    title: "Plaque phonique",
                    description:
                      "Une plaque phonique spécialement conçue pour l'isolation acoustique vient renforcer le complexe. Elle complète le dispositif en ajoutant une couche d'atténuation supplémentaire.",
                    points: [
                      "Formulée spécifiquement pour l'isolation acoustique haute performance",
                      "Renforce la capacité d'absorption et d'atténuation sonore",
                      "Complète la masse et la performance globale du complexe",
                    ],
                  },
                  {
                    step: "4",
                    title: "Membrane acoustique Techsound",
                    description:
                      "La membrane Techsound est l'élément clé de notre système. Sa très haute densité en fait une masse lourde acoustique redoutablement efficace contre les bruits aériens.",
                    points: [
                      "Membrane à très haute densité massique",
                      "Fonction de masse lourde acoustique dans le complexe",
                      "Bloque efficacement la transmission des bruits aériens",
                      "Élément clé de la performance phonique globale du système",
                    ],
                  },
                  {
                    step: "5",
                    title: "Plaque BA13 de finition",
                    description:
                      "La plaque de plâtre BA13 vient finaliser le complexe acoustique. Elle assure une finition esthétique irréprochable tout en protégeant l'ensemble du système.",
                    points: [
                      "Assure la finition esthétique du mur ou du plafond",
                      "Protection durable du complexe acoustique sous-jacent",
                      "Rendu propre, lisse et prêt à peindre ou à enduire",
                    ],
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="bg-card rounded-lg p-6 md:p-8 shadow-card border border-border/50"
                  >
                    <div className="flex items-start gap-5">
                      <div className="flex-shrink-0 inline-flex items-center justify-center w-11 h-11 rounded-full bg-accent text-accent-foreground font-bold text-lg">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-serif text-xl text-foreground mb-2">
                          Étape {item.step} — {item.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {item.description}
                        </p>
                        <ul className="space-y-2">
                          {item.points.map((point) => (
                            <li
                              key={point}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Nos interventions */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6">
            <motion.div {...fadeIn} className="text-center mb-16">
              <span className="text-accent font-medium text-sm tracking-[0.2em] uppercase mb-4 block">
                Nos interventions
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                Travaux d'isolation thermique et phonique par zone
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "🏠",
                  title: "Isolation des murs",
                  items: [
                    "Isolation thermique par l'intérieur (ITI) : doublage collé ou sur ossature",
                    "Isolation thermique par l'extérieur (ITE) : bardage ventilé ou enduit sur isolant",
                    "Isolation phonique des murs mitoyens : système masse-ressort-masse",
                    "Correction acoustique des parois intérieures",
                  ],
                },
                {
                  icon: "🔝",
                  title: "Isolation des plafonds",
                  items: [
                    "Faux plafond acoustique suspendu sur suspentes anti-vibratiles",
                    "Isolation thermique des combles perdus par soufflage",
                    "Isolation thermique des rampants sous toiture",
                    "Traitement des bruits d'impact du plancher supérieur",
                  ],
                },
                {
                  icon: "🏗️",
                  title: "Isolation des sols",
                  items: [
                    "Chape flottante avec sous-couche acoustique",
                    "Isolation thermique du plancher bas sur cave ou vide sanitaire",
                    "Pose de parquet flottant avec sous-couche isolante phonique",
                    "Désolidarisation périphérique pour éviter les ponts phoniques",
                  ],
                },
                {
                  icon: "🪟",
                  title: "Fenêtres & ouvertures",
                  items: [
                    "Double vitrage acoustique asymétrique (ex: 10/16/4 mm)",
                    "Triple vitrage pour isolation thermique renforcée",
                    "Joints d'étanchéité acoustique sur cadres existants",
                    "Volets roulants isolants thermiquement",
                  ],
                },
                {
                  icon: "🚪",
                  title: "Portes & cloisons",
                  items: [
                    "Portes isophoniques (Rw ≥ 30 dB)",
                    "Cloisons acoustiques sur ossature désolidarisée",
                    "Cloisons amovibles phoniques pour bureaux",
                    "Sas acoustique pour entrées bruyantes",
                  ],
                },
                {
                  icon: "🔧",
                  title: "Gaines & équipements",
                  items: [
                    "Coffrage acoustique des VMC et conduits",
                    "Isolation phonique des tuyauteries",
                    "Traitement des ponts phoniques structurels",
                    "Isolation thermique des gaines techniques",
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

        {/* FAQ */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <motion.div {...fadeIn} className="text-center mb-12">
                <span className="text-accent font-medium text-sm tracking-[0.2em] uppercase mb-4 block">
                  Questions fréquentes
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                  Tout savoir sur les travaux d'isolation thermique et phonique
                </h2>
              </motion.div>

              <motion.div {...fadeIn}>
                <Accordion type="single" collapsible className="space-y-3">
                  {[
                    {
                      q: "Quelle est la différence entre isolation phonique et isolation acoustique ?",
                      a: "L'isolation phonique et l'isolation acoustique sont souvent utilisées de manière interchangeable, mais il existe une nuance technique. L'isolation phonique désigne spécifiquement les travaux visant à empêcher la transmission du son entre deux espaces (murs, plafonds, sols). L'isolation acoustique est un terme plus large qui englobe à la fois l'isolation phonique (bloquer le son) et la correction acoustique (améliorer la qualité sonore à l'intérieur d'un espace en réduisant la réverbération). Chez Harmonie, nos travaux d'isolation acoustique couvrent ces deux aspects.",
                    },
                    {
                      q: "Peut-on combiner isolation thermique et isolation phonique en un seul chantier ?",
                      a: "Absolument, et c'est même recommandé ! De nombreux matériaux comme la laine de roche ou la ouate de cellulose offrent à la fois d'excellentes performances en isolation thermique et en isolation phonique. Combiner les travaux d'isolation thermique et les travaux d'isolation phonique permet de réduire les coûts de main-d'œuvre, de limiter la gêne liée au chantier et d'optimiser les performances globales du bâtiment.",
                    },
                    {
                      q: "Quels sont les signes indiquant un besoin de travaux d'isolation thermique ?",
                      a: "Plusieurs signes doivent vous alerter : factures de chauffage élevées, sensation de parois froides, courants d'air, humidité et condensation sur les murs, variations de température importantes entre les pièces. Un diagnostic thermique (DPE) permet de quantifier les déperditions et de prioriser les travaux d'isolation thermique les plus rentables.",
                    },
                    {
                      q: "Combien de décibels peut-on gagner avec des travaux d'isolation phonique ?",
                      a: "En fonction de la configuration et des solutions mises en œuvre, les travaux d'isolation phonique permettent de gagner entre 10 et 20 dB d'affaiblissement supplémentaire. Or, une réduction de 10 dB correspond à une division par 2 du bruit perçu. Un doublage acoustique mural performant (ossature désolidarisée + laine minérale + BA13) apporte environ 15 à 18 dB de gain.",
                    },
                    {
                      q: "Quelles aides financières pour les travaux d'isolation thermique ?",
                      a: "Les travaux d'isolation thermique sont éligibles à plusieurs dispositifs : MaPrimeRénov' (jusqu'à 75€/m² pour l'ITI), les CEE (primes énergie), la TVA réduite à 5,5%, l'éco-prêt à taux zéro (jusqu'à 50 000€), et les aides locales (région, département, commune). L'entreprise doit être certifiée RGE pour débloquer ces aides — c'est notre cas chez Harmonie.",
                    },
                    {
                      q: "Quelle épaisseur d'isolant faut-il prévoir ?",
                      a: "L'épaisseur dépend du matériau utilisé et de la résistance thermique R visée. Pour les murs (R=5), comptez environ 14 à 16 cm de laine de roche ou 10 cm de polyuréthane. Pour les combles (R=7), prévoyez 28 à 30 cm de laine soufflée. Pour l'isolation phonique, l'épaisseur minimale de laine dans une contre-cloison est de 4 à 5 cm, mais nous recommandons 7 à 10 cm pour une isolation acoustique optimale.",
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

        {/* CTA */}
        <section className="py-20 gradient-anthracite">
          <div className="container mx-auto px-6 text-center">
            <motion.div {...fadeIn}>
              <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground mb-6">
                Besoin de travaux d'isolation thermique ou phonique ?
              </h2>
              <p className="text-primary-foreground/70 max-w-2xl mx-auto mb-8 text-lg">
                Nos experts réalisent un diagnostic gratuit et vous proposent les solutions
                d'<strong>isolation acoustique</strong> et <strong>isolation thermique</strong> les plus
                adaptées à votre habitat. Devis gratuit et sans engagement.
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
