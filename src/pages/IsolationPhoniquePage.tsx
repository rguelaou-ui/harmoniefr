import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Volume2, CheckCircle2, Home, Thermometer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Footer from "@/components/Footer";

import acoustiquePlafond from "@/assets/isolation-acoustique-plafond.jpg";
import confortImg from "@/assets/isolation-confort.jpg";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const IsolationPhoniquePage = () => {
  return (
    <>
      <title>Isolation phonique en Île-de-France – Harmonie BTP</title>
      <meta name="description" content="Spécialistes des travaux d'isolation phonique et acoustique en Île-de-France. Isolation des murs, plafonds, sols. Intervention rapide à Paris, Aubervilliers, Saint-Denis, Montreuil." />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${acoustiquePlafond})` }}
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
                Spécialiste en <span className="text-accent">isolation phonique</span>
                <span className="block mt-2">en Île-de-France</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto font-light leading-relaxed">
                Experts en travaux d'isolation phonique et acoustique. Nous réduisons efficacement les nuisances sonores pour votre confort au quotidien.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Introduction SEO */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div {...fadeIn}>
                <span className="text-accent font-medium text-sm tracking-[0.2em] uppercase mb-4 block">
                  Notre expertise
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                  Travaux d'isolation phonique en Île-de-France
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Vous recherchez une solution efficace pour réduire les nuisances sonores ? <strong>Harmonie</strong> est spécialisée dans les <strong>travaux d'isolation phonique</strong> en Île-de-France.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Nous intervenons pour l'<strong>isolation des murs</strong>, l'<strong>isolation des plafonds</strong>, l'<strong>isolation des sols</strong> et le <strong>traitement acoustique</strong> complet de votre habitat.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Nous accompagnons les particuliers et professionnels pour améliorer leur confort acoustique. Intervention rapide à <strong>Paris</strong>, <strong>Aubervilliers</strong>, <strong>Saint-Denis</strong>, <strong>Montreuil</strong> et dans toute l'Île-de-France.
                </p>
              </motion.div>
              <motion.div {...fadeIn} className="relative">
                <img
                  src={confortImg}
                  alt="Isolation phonique d'un appartement en Île-de-France par Harmonie BTP"
                  className="rounded-lg shadow-elevated w-full"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Types de bruits */}
        <section className="py-20 bg-background">
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
                Comprendre la nature des bruits est essentiel pour choisir la bonne solution d'<strong>isolation phonique</strong>.
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
                      { label: "Ln,w (dB)", desc: "Niveau de bruit de choc normalisé pondéré — mesure la transmission des bruits d'impact." },
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
                      Voix, musique, télévision, circulation routière, avions. Ces bruits se propagent par l'air et traversent les parois peu isolées.
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
                      Pas, chutes d'objets, déplacements de meubles. Ces bruits se transmettent par les structures du bâtiment.
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

        {/* Méthode acoustique haute performance */}
        <section className="py-20 bg-secondary">
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
                  rigoureuse et sur le principe de <strong>désolidarisation des parois</strong>.
                </p>
              </motion.div>

              <motion.div {...fadeIn} className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Désolidarisation par ossature",
                    description: "La première étape consiste à créer une ossature métallique totalement désolidarisée de la paroi existante.",
                    points: [
                      "Réduction de la transmission des vibrations entre les structures",
                      "Suppression des ponts phoniques",
                      "Création d'une base optimale pour le complexe acoustique multicouche",
                    ],
                  },
                  {
                    step: "2",
                    title: "Pose de laine haute densité 30 mm",
                    description: "Une laine haute densité de 30 mm est posée dans l'ossature désolidarisée pour une absorption acoustique remarquable.",
                    points: [
                      "Laine à haute densité spécialement conçue pour l'isolation phonique",
                      "Épaisseur optimisée de 30 mm pour un encombrement minimal",
                      "Absorption efficace des fréquences moyennes et aiguës",
                    ],
                  },
                  {
                    step: "3",
                    title: "Plaque Fermacell",
                    description: "La plaque Fermacell est intégrée comme première couche de masse dans notre système.",
                    points: [
                      "Matériau dense et rigide, supérieur aux plaques standard",
                      "Première masse lourde du système, bloquant les basses fréquences",
                      "Amélioration significative de l'affaiblissement acoustique (Rw)",
                    ],
                  },
                  {
                    step: "4",
                    title: "Plaque phonique",
                    description: "Une plaque phonique spécialement conçue pour l'isolation acoustique vient renforcer le complexe.",
                    points: [
                      "Formulée spécifiquement pour l'isolation acoustique haute performance",
                      "Renforce la capacité d'absorption et d'atténuation sonore",
                    ],
                  },
                  {
                    step: "5",
                    title: "Membrane acoustique Techsound",
                    description: "La membrane Techsound est l'élément clé de notre système, avec une très haute densité massique.",
                    points: [
                      "Membrane à très haute densité massique",
                      "Bloque efficacement la transmission des bruits aériens",
                      "Élément clé de la performance phonique globale du système",
                    ],
                  },
                  {
                    step: "6",
                    title: "Plaque BA13 de finition",
                    description: "La plaque de plâtre BA13 vient finaliser le complexe acoustique avec une finition esthétique.",
                    points: [
                      "Finition esthétique irréprochable",
                      "Protection durable du complexe acoustique sous-jacent",
                      "Rendu lisse et prêt à peindre",
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
                        <p className="text-muted-foreground leading-relaxed mb-4">{item.description}</p>
                        <ul className="space-y-2">
                          {item.points.map((point) => (
                            <li key={point} className="flex items-start gap-2 text-sm text-muted-foreground">
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

        {/* Interventions par zone */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <motion.div {...fadeIn} className="text-center mb-16">
              <span className="text-accent font-medium text-sm tracking-[0.2em] uppercase mb-4 block">
                Nos interventions
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                Travaux d'isolation phonique par zone
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "🏠",
                  title: "Isolation phonique des murs",
                  items: [
                    "Isolation phonique des murs mitoyens : système masse-ressort-masse",
                    "Correction acoustique des parois intérieures",
                    "Doublage acoustique sur ossature désolidarisée",
                  ],
                },
                {
                  icon: "🔝",
                  title: "Isolation phonique des plafonds",
                  items: [
                    "Faux plafond acoustique suspendu sur suspentes anti-vibratiles",
                    "Traitement des bruits d'impact du plancher supérieur",
                    "Pose de laine minérale haute densité en plafond",
                  ],
                },
                {
                  icon: "🏗️",
                  title: "Isolation phonique des sols",
                  items: [
                    "Chape flottante avec sous-couche acoustique",
                    "Pose de parquet flottant avec sous-couche isolante phonique",
                    "Désolidarisation périphérique contre les ponts phoniques",
                  ],
                },
                {
                  icon: "🚪",
                  title: "Portes & cloisons acoustiques",
                  items: [
                    "Portes isophoniques (Rw ≥ 30 dB)",
                    "Cloisons acoustiques sur ossature désolidarisée",
                    "Sas acoustique pour entrées bruyantes",
                  ],
                },
                {
                  icon: "🪟",
                  title: "Fenêtres acoustiques",
                  items: [
                    "Double vitrage acoustique asymétrique (ex: 10/16/4 mm)",
                    "Joints d'étanchéité acoustique sur cadres existants",
                    "Triple vitrage phonique pour zones exposées",
                  ],
                },
                {
                  icon: "🔧",
                  title: "Gaines & équipements",
                  items: [
                    "Coffrage acoustique des VMC et conduits",
                    "Isolation phonique des tuyauteries",
                    "Traitement des ponts phoniques structurels",
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

        {/* FAQ phonique */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <motion.div {...fadeIn} className="text-center mb-12">
                <span className="text-accent font-medium text-sm tracking-[0.2em] uppercase mb-4 block">
                  Questions fréquentes
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                  Tout savoir sur l'isolation phonique
                </h2>
              </motion.div>

              <motion.div {...fadeIn}>
                <Accordion type="single" collapsible className="space-y-3">
                  {[
                    {
                      q: "Quelle est la différence entre isolation phonique et isolation acoustique ?",
                      a: "L'isolation phonique désigne spécifiquement les travaux visant à empêcher la transmission du son entre deux espaces. L'isolation acoustique est un terme plus large qui englobe l'isolation phonique et la correction acoustique (améliorer la qualité sonore à l'intérieur d'un espace). Chez Harmonie, nos travaux d'isolation acoustique couvrent ces deux aspects.",
                    },
                    {
                      q: "Combien de décibels peut-on gagner avec des travaux d'isolation phonique ?",
                      a: "En fonction de la configuration, les travaux d'isolation phonique permettent de gagner entre 10 et 20 dB d'affaiblissement supplémentaire. Une réduction de 10 dB correspond à une division par 2 du bruit perçu. Un doublage acoustique mural performant apporte environ 15 à 18 dB de gain.",
                    },
                    {
                      q: "Quel est le prix de l'isolation phonique d'un appartement ?",
                      a: "Le prix dépend de la surface, du type de bruit à traiter et de la solution retenue. Comptez en moyenne 50 à 150€/m² pour une isolation phonique des murs, 60 à 180€/m² pour un plafond acoustique, et 40 à 120€/m² pour un sol. Harmonie réalise un devis gratuit et personnalisé.",
                    },
                    {
                      q: "Comment isoler un mur du bruit des voisins ?",
                      a: "La solution la plus efficace est le doublage acoustique avec ossature désolidarisée : une ossature métallique indépendante du mur existant, remplie de laine haute densité, puis des plaques de plâtre phoniques. Cette technique, que nous maîtrisons chez Harmonie, offre les meilleures performances contre les bruits aériens.",
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

        {/* Redirection isolation thermique */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6 text-center">
            <motion.div {...fadeIn} className="max-w-2xl mx-auto">
              <Thermometer className="h-10 w-10 text-accent mx-auto mb-4" strokeWidth={1.5} />
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
                Isolation thermique
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Découvrez également nos solutions d'<strong>isolation thermique</strong> pour améliorer votre confort énergétique et réduire vos factures de chauffage.
              </p>
              <Link to="/isolation-thermique-acoustique">
                <Button variant="accent" size="lg" className="group">
                  Découvrir l'isolation thermique
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
                Besoin de travaux d'isolation phonique ?
              </h2>
              <p className="text-primary-foreground/70 max-w-2xl mx-auto mb-8 text-lg">
                Nos experts réalisent un diagnostic acoustique gratuit et vous proposent les solutions d'<strong>isolation phonique</strong> les plus adaptées. Devis gratuit et sans engagement.
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

export default IsolationPhoniquePage;
