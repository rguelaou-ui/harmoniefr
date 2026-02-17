import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Zap,
  Droplets,
  Wind,
  Shield,
  CheckCircle2,
  Lightbulb,
  Plug,
  Gauge,
  Wrench,
  ThermometerSun,
  Leaf,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Footer from "@/components/Footer";

import heroImg from "@/assets/electricite-hero.jpg";
import plomberieImg from "@/assets/plomberie-installation.jpg";
import climatisationImg from "@/assets/climatisation-pac.jpg";
import tableauImg from "@/assets/tableau-electrique.jpg";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const electriciteServices = [
  {
    icon: Zap,
    title: "Création et rénovation d'installations électriques",
    description:
      "Conception complète de réseaux électriques neufs ou reprise totale d'installations vétustes. Nous dimensionnons chaque circuit selon la norme NF C 15-100 pour garantir sécurité et performance.",
  },
  {
    icon: Shield,
    title: "Mise aux normes et sécurisation des réseaux",
    description:
      "Diagnostic approfondi de votre installation existante, identification des non-conformités et mise en sécurité selon les exigences réglementaires en vigueur (norme NF C 15-100).",
  },
  {
    icon: Gauge,
    title: "Installation et remplacement de tableaux électriques",
    description:
      "Pose de tableaux électriques modulaires avec disjoncteurs différentiels, protection contre les surtensions et étiquetage complet de chaque circuit pour une gestion optimale.",
  },
  {
    icon: Lightbulb,
    title: "Éclairage intérieur et extérieur",
    description:
      "Conception de plans d'éclairage sur mesure : spots encastrés, luminaires architecturaux, éclairage indirect, LED basse consommation et mise en valeur de vos espaces extérieurs.",
  },
  {
    icon: Plug,
    title: "Prises, interrupteurs et circuits spécialisés",
    description:
      "Installation de prises de courant, interrupteurs design et circuits dédiés (four, plaque de cuisson, borne de recharge véhicule électrique) conformes aux normes de sécurité.",
  },
  {
    icon: Wrench,
    title: "Diagnostic et résolution de pannes",
    description:
      "Recherche méthodique de pannes électriques : courts-circuits, défauts d'isolement, disjonctions intempestives. Intervention rapide et résolution durable du problème identifié.",
  },
  {
    icon: Leaf,
    title: "Optimisation énergétique et équipements modernes",
    description:
      "Solutions connectées et économes : domotique, programmation horaire, détecteurs de présence, comptage intelligent et intégration de panneaux photovoltaïques.",
  },
];

const plomberieServices = [
  {
    title: "Création et rénovation de réseaux de plomberie",
    description:
      "Conception et installation de réseaux d'eau chaude et froide en cuivre, PER ou multicouche. Dimensionnement adapté à vos besoins pour un débit et une pression optimaux.",
  },
  {
    title: "Recherche et réparation de fuites",
    description:
      "Détection non destructive de fuites par caméra thermique et gaz traceur. Réparation rapide et durable pour éviter tout dégât des eaux et préserver votre patrimoine.",
  },
  {
    title: "Installation d'équipements sanitaires",
    description:
      "Pose professionnelle de lavabos, douches, baignoires, WC suspendus et accessoires. Raccordements étanches et finitions soignées pour un résultat irréprochable.",
  },
  {
    title: "Raccordements et évacuations",
    description:
      "Réalisation de réseaux d'évacuation EU/EV conformes aux DTU. Pentes réglementaires, ventilation primaire et raccordement au tout-à-l'égout ou à l'assainissement individuel.",
  },
  {
    title: "Remplacement de robinetterie et équipements",
    description:
      "Installation de robinetterie thermostatique, mitigeurs design et équipements de qualité. Choix de marques reconnues pour une durabilité et un confort d'utilisation garantis.",
  },
  {
    title: "Dépannage et maintenance",
    description:
      "Intervention rapide pour tout problème de plomberie : fuite, bouchon, panne de chauffe-eau, dysfonctionnement de robinetterie. Maintenance préventive pour éviter les urgences.",
  },
  {
    title: "Solutions durables et performantes",
    description:
      "Installation de chauffe-eau thermodynamiques, systèmes de récupération d'eau de pluie et robinetterie économe. Réduisez votre consommation d'eau et votre facture énergétique.",
  },
];

const climatisationServices = [
  {
    title: "Installation de systèmes de climatisation",
    description:
      "Pose de climatiseurs split, multi-split et gainables des meilleures marques (Daikin, Mitsubishi, Atlantic). Dimensionnement thermique précis pour un confort optimal dans chaque pièce.",
  },
  {
    title: "Installation de pompes à chaleur (PAC)",
    description:
      "Mise en place de pompes à chaleur air/air et air/eau. Solution performante avec un COP jusqu'à 4,5 : pour 1 kWh consommé, jusqu'à 4,5 kWh de chaleur produite.",
  },
  {
    title: "Solutions de chauffage et rafraîchissement",
    description:
      "Systèmes réversibles pour chauffer en hiver et rafraîchir en été. Une seule installation pour un confort thermique toute l'année avec une efficacité énergétique maximale.",
  },
  {
    title: "Conseils et choix des équipements adaptés",
    description:
      "Étude thermique personnalisée de votre logement. Nous recommandons la puissance et la technologie les mieux adaptées à votre surface, votre isolation et vos habitudes.",
  },
  {
    title: "Optimisation de la performance énergétique",
    description:
      "Régulation intelligente, programmation horaire et zonage thermique pour maximiser les économies d'énergie. Réduction de votre facture de chauffage jusqu'à 70%.",
  },
  {
    title: "Entretien et remplacement d'équipements",
    description:
      "Maintenance annuelle obligatoire des systèmes de climatisation et PAC. Nettoyage des filtres, vérification du fluide frigorigène et contrôle des performances.",
  },
];

const ElectricitePlomberiePage = () => {
  return (
    <>
      <title>Électricité, Plomberie & Climatisation | Harmonie</title>
      <meta
        name="description"
        content="Travaux d'électricité, plomberie et installation de climatisation et pompes à chaleur. Harmonie, votre entreprise qualifiée pour des installations sûres et conformes aux normes."
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
                Électricité, Plomberie
                <span className="block mt-2">
                  & <span className="text-accent">Solutions Thermiques</span>
                </span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto font-light leading-relaxed">
                Des installations fiables, sécurisées et conformes aux normes les plus strictes.
                Harmonie garantit la rigueur technique et la qualité de chaque intervention.
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
                  Notre rigueur, votre sérénité
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                  La sécurité et la performance au cœur de chaque installation
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Chez <strong>Harmonie</strong>, les travaux d'électricité et de plomberie ne s'improvisent pas.
                  Chaque intervention est réalisée par des techniciens qualifiés, dans le strict respect des
                  normes en vigueur (NF C 15-100, DTU plomberie, réglementation fluides frigorigènes).
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  De la conception à la réception des travaux, nous assurons un suivi rigoureux :
                  diagnostic initial, dimensionnement précis, pose soignée, tests de conformité et
                  remise de certificats. Votre sécurité et votre confort sont notre priorité absolue.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Nous intervenons aussi bien en neuf qu'en rénovation, pour les particuliers et les
                  professionnels, avec une exigence constante de qualité et de durabilité.
                </p>
              </motion.div>
              <motion.div {...fadeIn} className="relative">
                <img
                  src={tableauImg}
                  alt="Tableau électrique moderne aux normes NF C 15-100"
                  className="rounded-lg shadow-elevated w-full"
                  loading="lazy"
                />
                <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground rounded-lg p-4 shadow-gold">
                  <p className="font-serif text-2xl font-bold">NF C 15-100</p>
                  <p className="text-sm">Conformité garantie</p>
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
                Pourquoi choisir Harmonie ?
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Normes & sécurité",
                  description:
                    "Toutes nos installations respectent les normes NF C 15-100 et DTU. Attestation de conformité délivrée.",
                },
                {
                  icon: Zap,
                  title: "Techniciens qualifiés",
                  description:
                    "Équipes formées et certifiées, habilitées pour les interventions électriques et les fluides frigorigènes.",
                },
                {
                  icon: Wrench,
                  title: "Garantie décennale",
                  description:
                    "Tous nos travaux sont couverts par notre assurance décennale pour votre tranquillité à long terme.",
                },
                {
                  icon: Leaf,
                  title: "Performance énergétique",
                  description:
                    "Solutions économes et modernes pour réduire votre consommation et votre impact environnemental.",
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

        {/* Section Électricité */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <motion.div {...fadeIn} className="text-center mb-16">
              <span className="text-accent font-medium text-sm tracking-[0.2em] uppercase mb-4 block">
                Électricité
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                Des installations électriques sûres et performantes
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                De la mise aux normes à la création complète de réseaux, nos électriciens qualifiés
                garantissent des installations fiables, conformes et durables.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {electriciteServices.map((service, index) => (
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

        {/* Section Plomberie */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <motion.div {...fadeIn}>
                <span className="text-accent font-medium text-sm tracking-[0.2em] uppercase mb-4 block">
                  Plomberie
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                  Des réseaux fiables et des équipements de qualité
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Nos plombiers expérimentés interviennent pour la création, la rénovation et le
                  dépannage de vos installations sanitaires. Chaque intervention est réalisée dans
                  les règles de l'art, avec des matériaux de premier choix et un souci constant de
                  durabilité.
                </p>

                <div className="space-y-4">
                  {plomberieServices.map((service, index) => (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, x: -20 }}
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

              <motion.div {...fadeIn} className="space-y-8 lg:sticky lg:top-8">
                <img
                  src={plomberieImg}
                  alt="Installation de plomberie professionnelle par Harmonie"
                  className="rounded-lg shadow-elevated w-full"
                  loading="lazy"
                />
                <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
                  <h4 className="font-serif text-lg text-foreground mb-3">🔧 Intervention rapide</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Fuite d'eau, canalisation bouchée, panne de chauffe-eau ? Nos équipes interviennent
                    rapidement pour sécuriser votre installation et effectuer les réparations nécessaires
                    dans les meilleurs délais.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section Climatisation & PAC */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <motion.div {...fadeIn} className="order-2 lg:order-1 space-y-8 lg:sticky lg:top-8">
                <img
                  src={climatisationImg}
                  alt="Installation de climatisation et pompe à chaleur"
                  className="rounded-lg shadow-elevated w-full"
                  loading="lazy"
                />
                <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
                  <h4 className="font-serif text-lg text-foreground mb-3">💡 Économies garanties</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Une pompe à chaleur bien dimensionnée peut réduire votre facture de chauffage
                    de <strong>60 à 70%</strong>. De plus, de nombreuses aides financières sont disponibles :
                    MaPrimeRénov', CEE, TVA réduite à 5,5% et éco-prêt à taux zéro.
                  </p>
                </div>
              </motion.div>

              <motion.div {...fadeIn} className="order-1 lg:order-2">
                <span className="text-accent font-medium text-sm tracking-[0.2em] uppercase mb-4 block">
                  Climatisation & Pompe à Chaleur
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                  Confort thermique toute l'année
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Nos techniciens certifiés RGE installent des systèmes de climatisation et des pompes
                  à chaleur performants pour vous assurer un confort optimal en toutes saisons, tout en
                  réduisant significativement votre consommation énergétique.
                </p>

                <div className="space-y-4">
                  {climatisationServices.map((service, index) => (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.08 }}
                      className="bg-card rounded-lg p-5 shadow-card border border-border/50"
                    >
                      <div className="flex items-start gap-3">
                        <ThermometerSun className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
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
                Vos questions sur l'électricité, la plomberie et la climatisation
              </h2>
            </motion.div>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-3">
                {[
                  {
                    q: "Comment savoir si mon installation électrique doit être mise aux normes ?",
                    a: "Plusieurs signes doivent vous alerter : disjonctions fréquentes, prises ou interrupteurs qui chauffent, absence de disjoncteur différentiel 30 mA, fils apparents ou installation de plus de 25 ans. Un diagnostic électrique réalisé par nos techniciens permet d'identifier précisément les non-conformités et de prioriser les travaux de mise en sécurité selon la norme NF C 15-100.",
                  },
                  {
                    q: "Quels sont les délais pour une rénovation complète de plomberie ?",
                    a: "Pour un appartement standard, la rénovation complète du réseau de plomberie (alimentation et évacuation) prend entre 3 et 7 jours ouvrés. Ce délai peut varier selon la complexité du réseau, l'accessibilité des canalisations et les finitions souhaitées. Harmonie établit un planning précis avant le démarrage du chantier.",
                  },
                  {
                    q: "Quelle est la différence entre une PAC air/air et air/eau ?",
                    a: "La pompe à chaleur air/air capte les calories de l'air extérieur pour chauffer (ou rafraîchir) l'air intérieur via des unités murales. La PAC air/eau capte également les calories de l'air mais les transfère à un circuit d'eau pour alimenter des radiateurs ou un plancher chauffant. La PAC air/eau est plus polyvalente (chauffage, eau chaude sanitaire) mais nécessite un réseau hydraulique existant.",
                  },
                  {
                    q: "Vos installations sont-elles éligibles aux aides de l'État ?",
                    a: "Oui, nos installations de pompes à chaleur et certains travaux d'amélioration énergétique sont éligibles à MaPrimeRénov', aux CEE (Certificats d'Économies d'Énergie), à la TVA réduite à 5,5 % et à l'éco-prêt à taux zéro. Harmonie est certifiée RGE, condition indispensable pour bénéficier de ces aides. Nous vous accompagnons dans vos démarches administratives.",
                  },
                  {
                    q: "À quelle fréquence faut-il entretenir une climatisation ou une PAC ?",
                    a: "L'entretien annuel est obligatoire pour les systèmes contenant plus de 2 kg de fluide frigorigène. Il comprend le nettoyage des filtres, la vérification du fluide frigorigène, le contrôle des performances et l'inspection générale de l'installation. Un entretien régulier garantit des performances optimales et prolonge la durée de vie de votre équipement.",
                  },
                  {
                    q: "Intervenez-vous en urgence pour les pannes ?",
                    a: "Oui, nous proposons un service de dépannage rapide pour les urgences électriques et de plomberie : fuite d'eau, coupure de courant, panne de chauffe-eau, disjonctions intempestives. Nos techniciens interviennent dans les meilleurs délais pour sécuriser votre installation et effectuer les réparations nécessaires.",
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
                Un projet d'électricité, de plomberie ou de climatisation ?
              </h2>
              <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg mb-8">
                Nos techniciens qualifiés étudient votre projet et vous proposent une solution
                sur mesure, conforme et performante. Demandez votre devis gratuit.
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

export default ElectricitePlomberiePage;
