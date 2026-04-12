import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2, Phone, Shield, Clock, Award, Users } from "lucide-react";
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

const EntrepriseIsolationPhoniquePage = () => {
  return (
    <>
      <title>Entreprise isolation phonique Paris & IDF | Harmonie BTP – Devis gratuit</title>
      <meta name="description" content="Harmonie BTP, entreprise spécialisée en isolation phonique à Paris et en Île-de-France. Entrepreneur expert en isolation acoustique. Devis gratuit, intervention rapide." />

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
                Votre <span className="text-accent">entreprise d'isolation phonique</span>
                <span className="block mt-2">à Paris et en Île-de-France</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto font-light leading-relaxed">
                Entrepreneur spécialisé en isolation phonique et acoustique. Plus de 10 ans d'expertise au service de votre confort sonore.
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

        {/* Présentation entreprise */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div {...fadeIn}>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                  Harmonie BTP : votre entreprise pour l'isolation phonique en Île-de-France
                </h2>
                <div className="text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    Vous cherchez une <strong>entreprise d'isolation phonique</strong> fiable et compétente ? <strong>Harmonie BTP</strong> est un <strong>entrepreneur spécialisé en isolation</strong> phonique et acoustique, implanté en <strong>Île-de-France</strong> depuis plus de 10 ans.
                  </p>
                  <p>
                    Notre <strong>entreprise pour isolation phonique</strong> intervient auprès des particuliers et des professionnels pour tous types de projets : isolation des murs, plafonds, sols, portes et fenêtres. Nous sommes reconnus comme l'une des meilleures <strong>entreprises d'isolation phonique</strong> de la région parisienne.
                  </p>
                  <p>
                    En tant qu'<strong>entrepreneur spécialisé en isolation</strong>, nous maîtrisons toutes les techniques : système masse-ressort-masse, doublage acoustique désolidarisé, chape flottante, faux plafond anti-vibratile. Notre expertise nous permet de traiter les cas les plus complexes.
                  </p>
                  <p>
                    Faire appel à notre <strong>entreprise d'isolation phonique</strong>, c'est l'assurance d'un travail soigné, de matériaux premium et d'un résultat garanti. Nous utilisons exclusivement des <strong>isolants phoniques</strong> de haute performance.
                  </p>
                </div>
              </motion.div>
              <motion.div {...fadeIn}>
                <img src={confortImg} alt="Entreprise isolation phonique Harmonie BTP – Chantier en Île-de-France" className="rounded-lg shadow-elevated w-full" loading="lazy" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Atouts */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <motion.div {...fadeIn} className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                Pourquoi choisir notre entreprise d'isolation phonique ?
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                { icon: Shield, title: "Expertise certifiée", desc: "Entrepreneur spécialisé avec plus de 10 ans d'expérience en isolation phonique et acoustique." },
                { icon: Clock, title: "Intervention rapide", desc: "Devis gratuit sous 24h. Début des travaux sous 2 semaines maximum en Île-de-France." },
                { icon: Award, title: "Matériaux premium", desc: "Isolants phoniques haute performance : Fermacell, Techsound, laines haute densité." },
                { icon: Users, title: "Accompagnement complet", desc: "De l'étude acoustique à la réception des travaux, un interlocuteur unique pour votre projet." },
              ].map(item => (
                <div key={item.title} className="bg-card rounded-lg p-6 shadow-card border border-border/50 text-center">
                  <item.icon className="h-10 w-10 text-accent mx-auto mb-4" />
                  <h3 className="font-serif text-lg text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6 max-w-4xl">
            <motion.div {...fadeIn}>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8 text-center">
                Les services de notre entreprise d'isolation phonique
              </h2>
              <div className="space-y-6">
                {[
                  { title: "Isolation phonique résidentielle", desc: "Appartements, maisons, lofts. Traitement complet des bruits aériens et d'impact pour un confort acoustique optimal dans votre logement à Paris et en Île-de-France." },
                  { title: "Isolation acoustique professionnelle", desc: "Bureaux, open spaces, cabinets médicaux, salles de réunion. Solutions acoustiques adaptées aux exigences professionnelles." },
                  { title: "Isolation phonique après sinistre", desc: "Remise en état et amélioration acoustique après dégât des eaux, incendie ou autre sinistre. Prise en charge avec votre assurance." },
                  { title: "Rénovation avec isolation phonique intégrée", desc: "Intégration de l'isolation phonique dans votre projet de rénovation complète pour un résultat optimal sans surcoût important." },
                ].map(item => (
                  <div key={item.title} className="bg-card rounded-lg p-6 shadow-card border border-border/50">
                    <h3 className="font-serif text-xl text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Zones d'intervention */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <motion.div {...fadeIn} className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                Notre entreprise d'isolation phonique intervient dans toute l'Île-de-France
              </h2>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                "Paris (75)", "Seine-Saint-Denis (93)", "Val-de-Marne (94)", "Hauts-de-Seine (92)",
                "Val-d'Oise (95)", "Essonne (91)", "Yvelines (78)", "Seine-et-Marne (77)",
                "Aubervilliers", "Saint-Denis", "Montreuil", "Créteil",
                "Nanterre", "Bobigny", "Pantin", "Levallois-Perret",
              ].map(zone => (
                <div key={zone} className="bg-card rounded-lg p-3 text-center text-sm text-muted-foreground border border-border/50">{zone}</div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6 max-w-3xl">
            <motion.div {...fadeIn}>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8 text-center">
                Questions fréquentes – Entreprise isolation phonique
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {[
                  { q: "Comment choisir une entreprise d'isolation phonique ?", a: "Privilégiez une entreprise spécialisée avec une expertise démontrée en isolation phonique, des références vérifiables et des matériaux de qualité. Harmonie BTP cumule plus de 10 ans d'expérience et utilise exclusivement des isolants haute performance." },
                  { q: "Harmonie BTP est-elle une entreprise spécialisée en isolation phonique ?", a: "Oui, l'isolation phonique et acoustique est notre cœur de métier. Nous sommes un entrepreneur spécialisé en isolation, intervenant quotidiennement sur des chantiers d'insonorisation à Paris et en Île-de-France." },
                  { q: "Proposez-vous un devis gratuit pour l'isolation phonique ?", a: "Absolument. Nous proposons un devis gratuit et détaillé sous 24h pour tout projet d'isolation phonique. Notre équipe se déplace gratuitement pour évaluer votre situation et vous proposer la meilleure solution." },
                  { q: "Quelle garantie offrez-vous sur vos travaux d'isolation phonique ?", a: "Tous nos travaux d'isolation phonique sont couverts par une garantie décennale. Nous garantissons les performances acoustiques annoncées et assurons un suivi après travaux." },
                  { q: "Intervenez-vous aussi pour les professionnels ?", a: "Oui, notre entreprise d'isolation phonique intervient pour les particuliers comme pour les professionnels : bureaux, commerces, cabinets médicaux, restaurants, hôtels." },
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
              Contactez notre entreprise d'isolation phonique
            </h2>
            <p className="text-accent-foreground/80 mb-8 max-w-2xl mx-auto">
              Entrepreneur spécialisé en isolation phonique. Devis gratuit en 24h, intervention rapide en Île-de-France.
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

export default EntrepriseIsolationPhoniquePage;
