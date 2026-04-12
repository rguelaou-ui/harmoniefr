import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import acoustiquePlafond from "@/assets/isolation-acoustique-plafond.jpg";
import confortImg from "@/assets/isolation-confort.jpg";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const IsolationAntiBruitPage = () => {
  return (
    <>
      <title>Isolation anti bruit Paris & IDF | Solutions acoustiques – Harmonie BTP</title>
      <meta name="description" content="Solutions d'isolation anti bruit à Paris et Île-de-France. Réduction des nuisances sonores : murs, plafonds, sols, portes. Devis gratuit en 24h. Expert isolation phonique." />

      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${acoustiquePlafond})` }}>
            <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90" />
          </div>
          <div className="relative z-10 container mx-auto px-6 text-center">
            <motion.div {...fadeIn}>
              <Link to="/" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors mb-6">
                <ArrowLeft className="h-4 w-4" /> Retour à l'accueil
              </Link>
              <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-4">
                Isolation <span className="text-accent">anti bruit</span> à Paris et en Île-de-France
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto font-light leading-relaxed">
                Protégez-vous des nuisances sonores avec nos solutions d'isolation anti bruit sur mesure. Intervention rapide, devis gratuit.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/#quote-form">
                  <Button variant="accent" size="lg" className="group">
                    Devis gratuit en 24h <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <a href="tel:+33695847700">
                  <Button variant="heroOutline" size="lg"><Phone className="mr-2 h-4 w-4" /> 06 95 84 77 00</Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contenu */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div {...fadeIn}>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                  L'isolation anti bruit : la solution contre les nuisances sonores
                </h2>
                <div className="text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    Le bruit est la première source de plaintes en copropriété à <strong>Paris</strong> et en <strong>Île-de-France</strong>. Qu'il s'agisse de bruits de voisinage, de circulation ou d'équipements, l'<strong>isolation anti bruit</strong> est la solution durable pour retrouver la tranquillité dans votre logement.
                  </p>
                  <p>
                    <strong>Harmonie BTP</strong> propose des solutions d'<strong>isolation anti bruit</strong> adaptées à chaque situation. Nos techniques d'<strong>isolation phonique</strong> permettent de réduire les nuisances sonores de 30 à 60 dB, transformant un environnement bruyant en un espace calme et confortable.
                  </p>
                  <p>
                    Nos <strong>isolants phoniques</strong> haute performance (laine haute densité, membrane Techsound, plaque Fermacell) sont spécialement sélectionnés pour leur efficacité contre tous les types de bruits : aériens, d'impact et d'équipements.
                  </p>
                  <p>
                    En tant qu'<strong>entreprise d'isolation phonique</strong> expérimentée, nous intervenons rapidement à Paris (75), en Seine-Saint-Denis (93), Val-de-Marne (94), Hauts-de-Seine (92) et dans toute l'Île-de-France.
                  </p>
                </div>
              </motion.div>
              <motion.div {...fadeIn}>
                <img src={confortImg} alt="Isolation anti bruit appartement Paris – Harmonie BTP" className="rounded-lg shadow-elevated w-full" loading="lazy" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Types de solutions */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <motion.div {...fadeIn} className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                Nos solutions d'isolation anti bruit
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Anti bruit murs", items: ["Doublage acoustique désolidarisé", "Système masse-ressort-masse", "Contre-cloison anti bruit", "Traitement murs mitoyens"] },
                { title: "Anti bruit plafonds", items: ["Faux plafond anti-vibratile", "Suspentes acoustiques", "Membrane haute densité", "Isolation bruits d'impact"] },
                { title: "Anti bruit sols", items: ["Chape flottante acoustique", "Sous-couche résiliente", "Désolidarisation du revêtement", "Réduction bruits de pas"] },
                { title: "Anti bruit portes", items: ["Porte acoustique sur mesure", "Capitonnage porte anti bruit", "Joints d'étanchéité phonique", "Seuil acoustique automatique"] },
                { title: "Anti bruit fenêtres", items: ["Double vitrage acoustique", "Triple vitrage performant", "Calfeutrage renforcé", "Ventilation acoustique"] },
                { title: "Anti bruit équipements", items: ["Plots anti-vibratiles", "Coffrage acoustique VMC", "Manchons sur canalisations", "Désolidarisation machines"] },
              ].map(s => (
                <div key={s.title} className="bg-card rounded-lg p-6 shadow-card border border-border/50">
                  <h3 className="font-serif text-xl text-foreground mb-4">{s.title}</h3>
                  <ul className="space-y-2">
                    {s.items.map(item => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparatif isolants */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6 max-w-4xl">
            <motion.div {...fadeIn}>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8 text-center">
                Les meilleurs isolants phoniques anti bruit
              </h2>
              <div className="text-muted-foreground leading-relaxed space-y-4">
                <p>
                  Le choix des <strong>isolants phoniques</strong> est déterminant pour l'efficacité de votre <strong>isolation anti bruit</strong>. Voici les matériaux que nous utilisons chez <strong>Harmonie BTP</strong> :
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {[
                  { title: "Laine haute densité", desc: "Absorbe les fréquences moyennes et aiguës. Idéale en combinaison avec une ossature désolidarisée pour une isolation anti bruit performante." },
                  { title: "Membrane Techsound", desc: "Membrane acoustique à très haute densité massique. Bloque efficacement les bruits aériens grâce à son poids élevé au m²." },
                  { title: "Plaque Fermacell", desc: "Plaque dense et rigide, supérieure aux plaques de plâtre standard. Première masse du système masse-ressort-masse." },
                  { title: "Sous-couche résiliente", desc: "Posée sous les revêtements de sol, elle absorbe les bruits d'impact et désolidarise le plancher de la structure." },
                ].map(item => (
                  <div key={item.title} className="bg-card rounded-lg p-6 shadow-card border border-border/50">
                    <h3 className="font-serif text-lg text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 max-w-3xl">
            <motion.div {...fadeIn}>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8 text-center">
                FAQ – Isolation anti bruit
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {[
                  { q: "Quelle est la meilleure isolation anti bruit ?", a: "La meilleure isolation anti bruit combine plusieurs matériaux dans un système masse-ressort-masse : ossature désolidarisée, laine haute densité, plaque Fermacell et membrane Techsound. Cette combinaison offre une réduction de 50 à 60 dB." },
                  { q: "Combien coûte une isolation anti bruit ?", a: "Le prix d'une isolation anti bruit varie de 50 à 180 €/m² selon la technique et la zone à traiter. Harmonie BTP propose un devis gratuit et détaillé sous 24h." },
                  { q: "L'isolation anti bruit est-elle efficace contre les bruits de voisinage ?", a: "Oui, nos solutions d'isolation anti bruit sont spécifiquement conçues pour traiter les bruits de voisinage : voix, musique, télévision, bruits de pas. Nous garantissons une réduction significative des nuisances." },
                  { q: "Peut-on faire une isolation anti bruit en appartement ?", a: "Absolument. La majorité de nos chantiers se déroulent en appartement à Paris et en Île-de-France. Nos techniques sont adaptées aux contraintes des copropriétés." },
                  { q: "Quels sont les isolants phoniques les plus performants ?", a: "Les isolants phoniques les plus performants sont les membranes acoustiques haute densité (Techsound), les laines minérales haute densité et les plaques Fermacell. Combinés en système multicouche, ils offrent les meilleures performances anti bruit." },
                ].map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-lg border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-serif text-foreground">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-accent">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-accent-foreground mb-4">
              Besoin d'une isolation anti bruit ? Devis gratuit en 24h
            </h2>
            <p className="text-accent-foreground/80 mb-8 max-w-2xl mx-auto">
              Expert en isolation phonique à Paris et Île-de-France. Intervention rapide, résultats garantis.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/#quote-form">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Devis gratuit en 24h <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a href="tel:+33695847700">
                <Button size="lg" variant="outline" className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground/10">
                  <Phone className="mr-2 h-4 w-4" /> 06 95 84 77 00
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default IsolationAntiBruitPage;
