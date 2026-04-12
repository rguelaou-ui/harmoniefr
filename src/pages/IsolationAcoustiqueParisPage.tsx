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

const IsolationAcoustiqueParisPage = () => {
  return (
    <>
      <title>Isolation acoustique Paris | Expert traitement sonore – Harmonie BTP</title>
      <meta name="description" content="Spécialiste en isolation acoustique à Paris et Île-de-France. Traitement acoustique professionnel des murs, plafonds et sols. Devis gratuit en 24h, intervention rapide." />

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
                Isolation acoustique à <span className="text-accent">Paris</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto font-light leading-relaxed">
                Expert en traitement acoustique et isolation sonore à Paris. Solutions professionnelles pour appartements, bureaux et locaux commerciaux.
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

        {/* Contenu SEO */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6 max-w-4xl">
            <motion.div {...fadeIn}>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                Isolation acoustique Paris : retrouvez le silence dans votre logement
              </h2>
              <div className="text-muted-foreground leading-relaxed space-y-4">
                <p>
                  L'<strong>isolation acoustique</strong> est la science du traitement des sons dans un espace clos. Contrairement à l'<strong>isolation phonique</strong> qui vise à bloquer les bruits extérieurs, l'<strong>isolation acoustique</strong> englobe aussi le traitement de la réverbération et de l'écho à l'intérieur d'une pièce. <strong>Harmonie BTP</strong> maîtrise ces deux approches pour vous offrir un confort sonore optimal à <strong>Paris</strong>.
                </p>
                <p>
                  Notre <strong>entreprise d'isolation acoustique</strong> intervient dans toute la région parisienne pour traiter les problèmes de bruit dans les <strong>appartements</strong>, <strong>maisons</strong>, <strong>bureaux</strong>, <strong>cabinets médicaux</strong>, <strong>studios de musique</strong> et <strong>locaux commerciaux</strong>. Chaque projet fait l'objet d'un <strong>diagnostic acoustique</strong> complet pour identifier les sources de bruit et proposer les solutions les plus adaptées.
                </p>
                <p>
                  Nous utilisons des <strong>isolants phoniques</strong> de dernière génération : laines haute densité, membranes acoustiques à masse élevée, plaques Fermacell, systèmes masse-ressort-masse désolidarisés. Ces matériaux, combinés à notre expertise technique, permettent d'atteindre des performances d'<strong>isolation acoustique</strong> supérieures aux normes NRA en vigueur.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Différence phonique / acoustique */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <motion.div {...fadeIn} className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                Isolation phonique vs isolation acoustique : quelle différence ?
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-card rounded-lg p-8 shadow-card border border-border/50">
                <h3 className="font-serif text-xl text-foreground mb-4">🔇 Isolation phonique</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">L'isolation phonique vise à <strong>empêcher les bruits de traverser</strong> une paroi. Elle traite la transmission sonore entre deux espaces séparés.</p>
                <ul className="space-y-2">
                  {["Bruits de voisinage", "Bruits de circulation", "Bruits d'impact (pas, chocs)", "Bruits d'équipements"].map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card rounded-lg p-8 shadow-card border border-border/50">
                <h3 className="font-serif text-xl text-foreground mb-4">🎵 Isolation acoustique</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">L'isolation acoustique traite aussi la <strong>qualité sonore à l'intérieur</strong> d'un espace : réverbération, écho, confort d'écoute.</p>
                <ul className="space-y-2">
                  {["Correction acoustique de pièces", "Traitement de la réverbération", "Insonorisation de studios", "Confort sonore intérieur"].map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Avantages */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6 max-w-4xl">
            <motion.div {...fadeIn}>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8 text-center">
                Les avantages de l'isolation acoustique pour votre bien à Paris
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Confort de vie amélioré", desc: "Réduction significative du bruit ambiant pour un quotidien plus serein à Paris." },
                  { title: "Valorisation immobilière", desc: "Un appartement bien isolé acoustiquement se vend 5 à 15% plus cher sur le marché parisien." },
                  { title: "Santé et bien-être", desc: "Le bruit chronique provoque stress, troubles du sommeil et fatigue. L'isolation acoustique protège votre santé." },
                  { title: "Conformité réglementaire", desc: "Mise aux normes NRA pour les logements anciens et respect des exigences acoustiques actuelles." },
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

        {/* Zones */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <motion.div {...fadeIn} className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                Isolation acoustique Paris et Île-de-France – Nos zones d'intervention
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                <strong>Harmonie BTP</strong> intervient pour vos travaux d'<strong>isolation acoustique</strong> dans toute la région parisienne.
              </p>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                "Paris (75)", "Seine-Saint-Denis (93)", "Val-de-Marne (94)", "Hauts-de-Seine (92)",
                "Val-d'Oise (95)", "Essonne (91)", "Yvelines (78)", "Seine-et-Marne (77)",
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
                FAQ – Isolation acoustique Paris
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {[
                  { q: "Quelle différence entre isolation phonique et acoustique ?", a: "L'isolation phonique empêche le bruit de traverser une paroi (entre deux pièces ou avec l'extérieur). L'isolation acoustique traite aussi le son à l'intérieur de l'espace (réverbération, écho). Les deux sont complémentaires pour un confort sonore optimal." },
                  { q: "Quel est le prix d'une isolation acoustique à Paris ?", a: "Le coût d'une isolation acoustique se situe entre 170 et 220 €/m² pour un mur, et environ 220 €/m² pour un plafond. Ces tarifs incluent fourniture et pose de matériaux haute performance. Harmonie BTP propose des devis détaillés et gratuits sous 24h." },
                  { q: "Peut-on isoler acoustiquement un appartement haussmannien ?", a: "Absolument. Les immeubles haussmanniens nécessitent une approche spécifique : systèmes désolidarisés fins pour préserver le volume, traitement des planchers bois et des murs en pierre. Notre expertise nous permet d'atteindre d'excellentes performances même dans ces configurations." },
                  { q: "L'isolation acoustique réduit-elle aussi les bruits d'impact ?", a: "Oui, avec les techniques appropriées : chape flottante, faux plafond avec suspentes anti-vibratiles, sous-couche résiliente. Nous traitons les bruits aériens ET les bruits d'impact." },
                  { q: "Combien de temps pour isoler acoustiquement un appartement ?", a: "La durée dépend de la surface et de l'ampleur des travaux. Comptez 1 à 3 jours pour un mur, 3 à 5 jours pour un plafond, et 1 à 3 semaines pour un appartement complet." },
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
              Besoin d'une isolation acoustique à Paris ? Contactez-nous !
            </h2>
            <p className="text-accent-foreground/80 mb-8 max-w-2xl mx-auto">
              Intervention rapide en Île-de-France. Devis gratuit et détaillé sous 24h.
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

export default IsolationAcoustiqueParisPage;
