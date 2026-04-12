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

const IsolationPhoniqueParisPage = () => {
  const scrollToQuote = () => {
    document.getElementById("quote-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <title>Isolation phonique Paris | Devis gratuit en 24h – Harmonie BTP</title>
      <meta name="description" content="Entreprise spécialisée en isolation phonique à Paris et Île-de-France. Murs, plafonds, sols : solutions acoustiques sur mesure. Devis gratuit en 24h. Intervention rapide." />

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
                Isolation phonique à <span className="text-accent">Paris</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto font-light leading-relaxed">
                Votre expert en isolation phonique et acoustique à Paris. Réduction du bruit garantie, devis gratuit en 24h.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="accent" size="lg" onClick={scrollToQuote} className="group">
                  Devis gratuit en 24h <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <a href="tel:+33695847700">
                  <Button variant="heroOutline" size="lg"><Phone className="mr-2 h-4 w-4" /> 06 95 84 77 00</Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contenu principal */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div {...fadeIn}>
                <span className="text-accent font-medium text-sm tracking-[0.2em] uppercase mb-4 block">Expert isolation phonique Paris</span>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                  Pourquoi choisir Harmonie BTP pour votre isolation phonique à Paris ?
                </h2>
                <div className="text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    À <strong>Paris</strong>, le bruit est omniprésent : circulation, voisins, travaux en cours… L'<strong>isolation phonique</strong> est devenue indispensable pour retrouver calme et sérénité dans votre logement. <strong>Harmonie BTP</strong>, entreprise spécialisée en <strong>isolation phonique à Paris</strong>, intervient dans tous les arrondissements pour vous offrir des solutions acoustiques sur mesure.
                  </p>
                  <p>
                    Notre équipe d'experts réalise vos <strong>travaux d'isolation phonique</strong> avec des matériaux de haute qualité : laine haute densité, plaques Fermacell, membranes acoustiques Techsound. Nous traitons les <strong>murs</strong>, <strong>plafonds</strong>, <strong>sols</strong> et <strong>portes</strong> pour une isolation acoustique complète.
                  </p>
                  <p>
                    Que vous soyez dans le <strong>1er arrondissement</strong> ou dans le <strong>20e</strong>, à <strong>Montmartre</strong>, au <strong>Marais</strong> ou à <strong>Belleville</strong>, notre entreprise d'isolation phonique intervient rapidement avec un <strong>devis gratuit en 24h</strong>.
                  </p>
                </div>
              </motion.div>
              <motion.div {...fadeIn}>
                <img src={confortImg} alt="Isolation phonique appartement Paris – Harmonie BTP" className="rounded-lg shadow-elevated w-full" loading="lazy" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services détaillés */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <motion.div {...fadeIn} className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                Nos prestations d'isolation phonique à Paris
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                De l'isolation des murs mitoyens à l'insonorisation complète de votre appartement, nous proposons des solutions adaptées à chaque situation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Isolation phonique des murs", items: ["Doublage acoustique masse-ressort-masse", "Contre-cloison désolidarisée", "Traitement des murs mitoyens", "Isolation des murs donnant sur rue"] },
                { title: "Isolation phonique des plafonds", items: ["Faux plafond acoustique suspendu", "Suspentes anti-vibratiles", "Traitement des bruits d'impact du voisin du dessus", "Membrane Techsound haute densité"] },
                { title: "Isolation phonique des sols", items: ["Chape flottante acoustique", "Sous-couche résiliente", "Parquet flottant désolidarisé", "Réduction des bruits d'impact"] },
                { title: "Isolation phonique des portes", items: ["Porte acoustique isophonique", "Capitonnage porte anti bruit", "Joint d'étanchéité acoustique", "Seuil acoustique automatique"] },
                { title: "Isolation phonique fenêtres", items: ["Double vitrage acoustique", "Triple vitrage haute performance", "Remplacement fenêtres anciennes", "Joints d'isolation renforcés"] },
                { title: "Diagnostic acoustique", items: ["Mesure des niveaux sonores", "Identification des ponts phoniques", "Préconisations sur mesure", "Rapport technique détaillé"] },
              ].map((service) => (
                <div key={service.title} className="bg-card rounded-lg p-6 shadow-card border border-border/50">
                  <h3 className="font-serif text-xl text-foreground mb-4">{service.title}</h3>
                  <ul className="space-y-2">
                    {service.items.map((item) => (
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

        {/* Pourquoi Paris a besoin d'isolation phonique */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6 max-w-4xl">
            <motion.div {...fadeIn}>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8 text-center">
                L'isolation phonique à Paris : un enjeu majeur
              </h2>
              <div className="text-muted-foreground leading-relaxed space-y-4">
                <p>
                  Paris est l'une des villes les plus bruyantes d'Europe. Entre la <strong>circulation automobile</strong>, les <strong>transports en commun</strong>, les <strong>bars et restaurants</strong> et la <strong>densité de population</strong>, les nuisances sonores affectent la qualité de vie de millions de Parisiens.
                </p>
                <p>
                  Les immeubles haussmanniens, qui représentent une grande partie du parc immobilier parisien, offrent souvent une <strong>isolation acoustique insuffisante</strong>. Les planchers en bois, les cloisons fines et l'absence de traitement phonique rendent les appartements très sensibles aux bruits de voisinage.
                </p>
                <p>
                  <strong>Harmonie BTP</strong> est votre <strong>entreprise d'isolation phonique à Paris</strong>. Nous intervenons dans tous les arrondissements : <strong>Paris 1er, 2e, 3e, 4e, 5e, 6e, 7e, 8e, 9e, 10e, 11e, 12e, 13e, 14e, 15e, 16e, 17e, 18e, 19e et 20e</strong>. Notre expertise couvre aussi l'ensemble de l'<strong>Île-de-France</strong> : Seine-Saint-Denis (93), Val-de-Marne (94), Hauts-de-Seine (92), Val-d'Oise (95), Essonne (91), Yvelines (78) et Seine-et-Marne (77).
                </p>
                <p>
                  Nos <strong>travaux d'isolation phonique</strong> respectent les normes acoustiques en vigueur (NRA) et garantissent une réduction significative du bruit. Nous utilisons exclusivement des <strong>isolants phoniques</strong> de haute performance pour des résultats durables.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Zones d'intervention */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <motion.div {...fadeIn} className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                Zones d'intervention – Isolation phonique Paris et Île-de-France
              </h2>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                "Paris (tous arrondissements)", "Aubervilliers (93)", "Saint-Denis (93)", "Montreuil (93)",
                "Bobigny (93)", "Pantin (93)", "Drancy (93)", "Aulnay-sous-Bois (93)",
                "Créteil (94)", "Vitry-sur-Seine (94)", "Nanterre (92)", "Boulogne-Billancourt (92)",
                "Levallois-Perret (92)", "Colombes (92)", "Argenteuil (95)", "Pontoise (95)",
              ].map((ville) => (
                <div key={ville} className="bg-card rounded-lg p-3 text-center text-sm text-muted-foreground border border-border/50">
                  {ville}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6 max-w-3xl">
            <motion.div {...fadeIn}>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8 text-center">
                Questions fréquentes – Isolation phonique Paris
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {[
                  { q: "Combien coûte une isolation phonique à Paris ?", a: "Le prix d'une isolation phonique à Paris se situe entre 170 et 220 €/m² pour un mur, et environ 220 €/m² pour un plafond acoustique. Ces tarifs incluent la fourniture et la pose de matériaux haute performance. Harmonie BTP propose un devis gratuit et détaillé sous 24h." },
                  { q: "Quelle est la meilleure isolation phonique pour un appartement parisien ?", a: "Pour un appartement parisien, nous recommandons un système masse-ressort-masse avec ossature désolidarisée, laine haute densité, plaque Fermacell et membrane Techsound. Ce système offre une réduction acoustique de 50 à 60 dB, idéal pour les immeubles haussmanniens." },
                  { q: "Combien de temps durent les travaux d'isolation phonique ?", a: "Les travaux d'isolation phonique durent généralement entre 3 et 10 jours selon l'ampleur du projet. L'isolation d'un mur prend 1 à 2 jours, un plafond 2 à 3 jours, et une isolation complète d'appartement 5 à 10 jours." },
                  { q: "L'isolation phonique nécessite-t-elle un permis à Paris ?", a: "Pour une isolation phonique intérieure, aucun permis n'est requis. Il s'agit de travaux d'aménagement intérieur. En revanche, si des modifications de façade sont nécessaires (fenêtres), une déclaration préalable peut être demandée." },
                  { q: "Intervenez-vous dans tout Paris et l'Île-de-France ?", a: "Oui, Harmonie BTP intervient dans les 20 arrondissements de Paris ainsi que dans toute l'Île-de-France : Seine-Saint-Denis (93), Val-de-Marne (94), Hauts-de-Seine (92), Val-d'Oise (95), Essonne (91), Yvelines (78) et Seine-et-Marne (77)." },
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

        {/* CTA final */}
        <section className="py-16 bg-accent">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-accent-foreground mb-4">
              Devis gratuit isolation phonique Paris – Réponse en 24h
            </h2>
            <p className="text-accent-foreground/80 mb-8 max-w-2xl mx-auto">
              Expert en isolation phonique à Paris et Île-de-France. Intervention rapide, résultats garantis.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/#quote-form">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Demander un devis gratuit <ArrowRight className="ml-2 h-4 w-4" />
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

export default IsolationPhoniqueParisPage;
