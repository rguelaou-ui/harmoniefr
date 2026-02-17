import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  DoorOpen,
  Paintbrush,
  Layers,
  Ruler,
  Sparkles,
  Shield,
  Eye,
  Palette,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Footer from "@/components/Footer";

import heroImg from "@/assets/menuiserie-hero.jpg";
import peintureImg from "@/assets/peinture-decoration.jpg";
import revetementImg from "@/assets/revetements-sols.jpg";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const menuiserieServices = [
  {
    icon: DoorOpen,
    title: "Pose de portes et blocs-portes",
    description:
      "Installation de portes intérieures, blocs-portes et huisseries avec ajustement millimétrique. Choix parmi une large gamme de matériaux et de finitions pour s'intégrer parfaitement à votre intérieur.",
  },
  {
    icon: Layers,
    title: "Placards et rangements sur-mesure",
    description:
      "Conception et réalisation de placards intégrés, dressings et solutions de rangement entièrement personnalisés. Optimisation de chaque centimètre pour un espace fonctionnel et élégant.",
  },
  {
    icon: Ruler,
    title: "Aménagements intérieurs personnalisés",
    description:
      "Création de bibliothèques, niches, verrières intérieures et éléments sur-mesure. Chaque réalisation est pensée pour sublimer votre espace tout en répondant à vos usages quotidiens.",
  },
  {
    icon: Sparkles,
    title: "Pose de plinthes et éléments décoratifs",
    description:
      "Installation soignée de plinthes, moulures, corniches et éléments de finition. Un travail de précision qui apporte le détail final à votre rénovation et valorise l'ensemble de vos espaces.",
  },
  {
    icon: Eye,
    title: "Habillages et ajustements de finition",
    description:
      "Habillage de gaines, coffres et éléments techniques pour une intégration invisible et esthétique. Chaque détail est traité pour un résultat propre et harmonieux.",
  },
  {
    icon: Palette,
    title: "Solutions esthétiques et fonctionnelles",
    description:
      "Conseil en choix de matériaux, essences de bois et finitions pour un rendu cohérent avec votre projet global. Allier l'esthétique à la durabilité, c'est notre signature.",
  },
];

const peintureServices = [
  {
    title: "Travaux de peinture intérieure",
    description:
      "Application de peintures haut de gamme (mat, satiné, laqué) avec des produits de qualité professionnelle. Un rendu impeccable pour des murs, plafonds et boiseries parfaitement uniformes.",
  },
  {
    title: "Peinture décorative et finitions soignées",
    description:
      "Techniques décoratives avancées : effets béton ciré, patine, stuc vénitien et finitions texturées. Pour des intérieurs uniques qui reflètent votre personnalité et votre style.",
  },
  {
    title: "Préparation des supports",
    description:
      "Enduit, ponçage, rebouchage de fissures et traitement des supports avant application. Une préparation minutieuse est la clé d'un rendu durable et sans défaut.",
  },
  {
    title: "Harmonisation des couleurs et ambiances",
    description:
      "Conseil colorimétrique personnalisé pour créer une atmosphère cohérente dans chaque pièce. Nous vous guidons dans le choix des teintes, des contrastes et des associations de couleurs.",
  },
  {
    title: "Rénovation et rafraîchissement des espaces",
    description:
      "Remise en état rapide et soignée de vos pièces : un simple rafraîchissement peut transformer radicalement l'ambiance de votre intérieur à moindre coût.",
  },
  {
    title: "Résultats propres, modernes et durables",
    description:
      "Utilisation de peintures éco-responsables à faible émission de COV. Un travail propre, protégé et livré dans les délais pour un résultat qui dure dans le temps.",
  },
];

const revetementServices = [
  {
    title: "Pose de parquet et sols stratifiés",
    description:
      "Installation de parquets massifs, contrecollés et stratifiés avec des finitions impeccables. Pose collée, flottante ou clouée selon le support et le rendu souhaité.",
  },
  {
    title: "Carrelage et revêtements modernes",
    description:
      "Pose de carrelage grand format, grès cérame, mosaïque et revêtements techniques. Découpes précises, joints réguliers et finitions irréprochables pour un sol parfait.",
  },
  {
    title: "Revêtements muraux",
    description:
      "Pose de papiers peints design, revêtements vinyles, lambris décoratifs et parements. Des solutions créatives pour habiller vos murs avec style et personnalité.",
  },
  {
    title: "Habillage et rénovation des plafonds",
    description:
      "Plafonds suspendus, faux-plafonds, habillages en lames ou en staff. Intégration d'éclairages encastrés et de solutions acoustiques pour un résultat soigné.",
  },
  {
    title: "Solutions esthétiques et durables",
    description:
      "Sélection de matériaux de qualité supérieure, résistants à l'usure et faciles d'entretien. Un investissement dans la durabilité sans compromis sur l'esthétique.",
  },
  {
    title: "Finitions propres et alignements précis",
    description:
      "Calepinage rigoureux, joints de dilatation respectés, raccords soignés entre les différents revêtements. L'attention portée aux détails fait toute la différence.",
  },
];

const MenuiserieFinitionsPage = () => {
  return (
    <>
      <title>Menuiserie & Finitions | Harmonie</title>
      <meta
        name="description"
        content="Menuiserie intérieure, peinture décorative, revêtements de sols et murs. Harmonie, le souci du détail pour des finitions haut de gamme dans votre rénovation."
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
                Menuiserie & Finitions
                <span className="block mt-2">
                  – <span className="text-accent">Le souci du détail</span>
                </span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto font-light leading-relaxed">
                La qualité d'une rénovation se révèle dans ses finitions. Harmonie apporte précision,
                esthétique et exigence à chaque détail de votre projet.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div {...fadeIn}>
                <span className="text-accent font-medium text-sm tracking-[0.2em] uppercase mb-4 block">
                  L'art de la finition
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                  La précision et la qualité, jusque dans les moindres détails
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Chez <strong>Harmonie</strong>, nous savons qu'une rénovation réussie se juge à la qualité
                  de ses finitions. C'est pourquoi nous apportons un soin extrême à chaque étape : de la
                  menuiserie intérieure aux revêtements, en passant par la peinture et les éléments décoratifs.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Nos artisans expérimentés travaillent avec des matériaux de premier choix, sélectionnés pour
                  leur durabilité et leur rendu esthétique. Chaque coupe, chaque raccord, chaque couche de
                  peinture est réalisée avec une exigence de perfection.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Le résultat : des espaces transformés, harmonieux et durables, où chaque détail contribue
                  à l'élégance de l'ensemble. C'est cette attention qui fait la signature Harmonie.
                </p>
              </motion.div>
              <motion.div {...fadeIn} className="relative">
                <img
                  src={revetementImg}
                  alt="Parquet en pose chevrons, finitions haut de gamme"
                  className="rounded-lg shadow-elevated w-full"
                  loading="lazy"
                />
                <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground rounded-lg p-4 shadow-gold">
                  <p className="font-serif text-2xl font-bold">100%</p>
                  <p className="text-sm">Finition soignée</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Engagements */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6">
            <motion.div {...fadeIn} className="text-center mb-16">
              <span className="text-accent font-medium text-sm tracking-[0.2em] uppercase mb-4 block">
                Nos engagements
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                L'exigence au service de votre projet
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Ruler,
                  title: "Précision millimétrique",
                  description:
                    "Chaque découpe, chaque ajustement est réalisé avec une précision absolue pour un rendu impeccable et durable.",
                },
                {
                  icon: Sparkles,
                  title: "Matériaux premium",
                  description:
                    "Sélection rigoureuse de matériaux haut de gamme : bois massif, peintures éco-responsables, revêtements de qualité supérieure.",
                },
                {
                  icon: Shield,
                  title: "Garantie décennale",
                  description:
                    "Tous nos travaux de menuiserie et de finitions sont couverts par notre assurance décennale pour votre tranquillité.",
                },
                {
                  icon: Eye,
                  title: "Souci du détail",
                  description:
                    "Raccords invisibles, alignements parfaits, finitions propres : nous ne laissons rien au hasard pour un résultat irréprochable.",
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

        {/* Section Menuiserie */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <motion.div {...fadeIn} className="text-center mb-16">
              <span className="text-accent font-medium text-sm tracking-[0.2em] uppercase mb-4 block">
                Menuiserie intérieure
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                L'art du bois et de l'aménagement sur-mesure
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                Portes, placards, rangements et habillages : nos menuisiers créent des éléments
                parfaitement intégrés à votre intérieur, alliant esthétique et fonctionnalité.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuiserieServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="bg-card rounded-lg p-8 shadow-card border border-border/50 group hover:shadow-elevated transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-5 group-hover:bg-accent/20 transition-colors">
                    <service.icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-lg mb-3 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Peinture & Décoration */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <motion.div {...fadeIn}>
                <span className="text-accent font-medium text-sm tracking-[0.2em] uppercase mb-4 block">
                  Peinture & Décoration
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                  Des finitions qui subliment vos espaces
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  La peinture est bien plus qu'un simple revêtement : c'est l'élément qui donne
                  vie et caractère à votre intérieur. Nos peintres qualifiés maîtrisent toutes les
                  techniques, du rafraîchissement classique aux finitions décoratives les plus élaborées.
                </p>

                <div className="space-y-4">
                  {peintureServices.map((service, index) => (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.08 }}
                      className="bg-card rounded-lg p-5 shadow-card border border-border/50"
                    >
                      <div className="flex items-start gap-3">
                        <Paintbrush className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium text-foreground mb-1">{service.title}</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div {...fadeIn} className="space-y-8 lg:sticky lg:top-8">
                <img
                  src={peintureImg}
                  alt="Travaux de peinture intérieure haut de gamme"
                  className="rounded-lg shadow-elevated w-full"
                  loading="lazy"
                />
                <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
                  <h4 className="font-serif text-lg text-foreground mb-3">🎨 Conseil colorimétrique</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Nos experts en décoration vous accompagnent dans le choix des teintes et des ambiances.
                    Nous créons des harmonies de couleurs qui mettent en valeur votre architecture intérieure
                    et reflètent votre personnalité.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section Revêtements */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <motion.div {...fadeIn} className="order-2 lg:order-1 space-y-8 lg:sticky lg:top-8">
                <img
                  src={revetementImg}
                  alt="Pose de parquet et revêtements de sol modernes"
                  className="rounded-lg shadow-elevated w-full"
                  loading="lazy"
                />
                <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
                  <h4 className="font-serif text-lg text-foreground mb-3">✨ Finitions sans compromis</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Du calepinage initial aux derniers joints de finition, chaque étape est exécutée
                    avec une rigueur absolue. Le résultat : des sols et des murs parfaitement alignés,
                    durables et esthétiques.
                  </p>
                </div>
              </motion.div>

              <motion.div {...fadeIn} className="order-1 lg:order-2">
                <span className="text-accent font-medium text-sm tracking-[0.2em] uppercase mb-4 block">
                  Revêtements – Sols, Murs & Plafonds
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                  Des surfaces impeccables, du sol au plafond
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Parquet, carrelage, papier peint, faux-plafonds : nos poseurs expérimentés
                  maîtrisent tous les types de revêtements pour un résultat qui allie esthétique,
                  durabilité et précision d'exécution.
                </p>

                <div className="space-y-4">
                  {revetementServices.map((service, index) => (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.08 }}
                      className="bg-card rounded-lg p-5 shadow-card border border-border/50"
                    >
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium text-foreground mb-1">{service.title}</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6">
            <motion.div {...fadeIn} className="text-center mb-16">
              <span className="text-accent font-medium text-sm tracking-[0.2em] uppercase mb-4 block">
                Questions fréquentes
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                Vos questions sur la menuiserie et les finitions
              </h2>
            </motion.div>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-3">
                {[
                  {
                    q: "Quels types de portes intérieures proposez-vous ?",
                    a: "Nous installons tous types de portes intérieures : portes pleines (bois massif, MDF), portes vitrées, portes coulissantes à galandage, portes battantes et portes sur pivot. Chaque modèle est disponible dans une large gamme de finitions (laqué, bois naturel, stratifié) pour s'intégrer parfaitement à votre décoration.",
                  },
                  {
                    q: "Combien de temps faut-il pour réaliser des travaux de peinture ?",
                    a: "Pour un appartement de 60 m², comptez en moyenne 5 à 8 jours ouvrés pour une peinture complète (murs et plafonds), incluant la préparation des supports (enduit, ponçage, sous-couche). Un simple rafraîchissement peut être réalisé en 3 à 5 jours. Le délai dépend de l'état des murs et du nombre de couches nécessaires.",
                  },
                  {
                    q: "Quelle est la différence entre parquet massif et contrecollé ?",
                    a: "Le parquet massif est constitué d'une seule essence de bois sur toute son épaisseur (12 à 23 mm). Il est très durable et peut être poncé plusieurs fois. Le parquet contrecollé est composé d'une couche noble en bois (2,5 à 6 mm) collée sur un support en contreplaqué. Il offre un rendu identique au massif, une meilleure stabilité dimensionnelle et un coût plus accessible.",
                  },
                  {
                    q: "Proposez-vous des rangements et placards sur mesure ?",
                    a: "Oui, c'est l'une de nos spécialités. Nous concevons et réalisons des placards intégrés, dressings, bibliothèques et rangements entièrement sur mesure. Chaque projet est adapté à vos dimensions exactes, vos besoins de rangement et votre style décoratif. Les matériaux et finitions sont personnalisables.",
                  },
                  {
                    q: "Quels types de peintures utilisez-vous ?",
                    a: "Nous utilisons exclusivement des peintures professionnelles de grandes marques, à faible émission de COV (composés organiques volatils) pour la santé et l'environnement. Nous proposons des finitions mat, satiné et laqué, ainsi que des peintures décoratives (effet béton, stuc vénitien, patine). Chaque produit est choisi pour sa durabilité et son rendu.",
                  },
                  {
                    q: "Peut-on poser du parquet dans une salle de bain ou une cuisine ?",
                    a: "Oui, à condition de choisir les bons matériaux. Nous recommandons le parquet massif en bois exotique (teck, iroko) naturellement résistant à l'humidité, ou un parquet contrecollé avec traitement hydrofuge. Une pose collée avec joints étanches est indispensable. Alternativement, nous proposons des revêtements effet bois (grès cérame imitation parquet) offrant un rendu similaire avec une résistance totale à l'eau.",
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
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-6 text-center">
            <motion.div {...fadeIn}>
              <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground mb-6">
                Un projet de menuiserie ou de finitions ?
              </h2>
              <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg mb-8">
                Nos artisans qualifiés étudient votre projet et vous proposent des solutions
                sur-mesure, alliant esthétique et durabilité. Demandez votre devis gratuit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="accent" size="lg" asChild>
                  <Link to="/#devis">
                    Demander un devis
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <Link to="/">Retour à l'accueil</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default MenuiserieFinitionsPage;
