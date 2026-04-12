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

const CapitonnagePorteAntiBruitPage = () => {
  return (
    <>
      <title>Capitonnage porte anti bruit Paris | Isolation phonique porte – Harmonie BTP</title>
      <meta name="description" content="Capitonnage de porte anti bruit à Paris et Île-de-France. Isolation phonique de porte d'entrée et intérieure. Réduction du bruit garantie. Devis gratuit en 24h." />

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
                Capitonnage <span className="text-accent">porte anti bruit</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto font-light leading-relaxed">
                Spécialiste du capitonnage de porte anti bruit à Paris et en Île-de-France. Isolation phonique de vos portes d'entrée et intérieures.
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

        {/* Contenu principal */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div {...fadeIn}>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                  Le capitonnage de porte anti bruit : une solution efficace et esthétique
                </h2>
                <div className="text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    Le <strong>capitonnage de porte anti bruit</strong> est une technique d'<strong>isolation phonique</strong> qui consiste à appliquer un revêtement acoustique sur vos portes pour réduire significativement la transmission du bruit. C'est une solution idéale pour les appartements parisiens où les portes d'entrée et palières laissent souvent passer les sons du couloir et des voisins.
                  </p>
                  <p>
                    <strong>Harmonie BTP</strong> réalise le <strong>capitonnage porte anti bruit</strong> pour les portes d'entrée, les portes palières et les portes intérieures. Notre technique combine mousse acoustique haute densité, membrane isolante et finition en simili cuir ou tissu pour un résultat à la fois performant et esthétique.
                  </p>
                  <p>
                    Le <strong>capitonnage anti bruit</strong> permet une réduction acoustique de 10 à 25 dB selon la configuration, sans avoir à remplacer votre porte existante. C'est une alternative économique à l'installation d'une porte acoustique neuve, particulièrement adaptée aux copropriétés parisiennes.
                  </p>
                  <p>
                    En complément du capitonnage, nous installons des <strong>joints d'étanchéité acoustique</strong> sur le pourtour de la porte et un <strong>seuil acoustique automatique</strong> pour éliminer les fuites sonores sous la porte.
                  </p>
                </div>
              </motion.div>
              <motion.div {...fadeIn}>
                <img src={confortImg} alt="Capitonnage porte anti bruit Paris – Harmonie BTP" className="rounded-lg shadow-elevated w-full" loading="lazy" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Techniques */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <motion.div {...fadeIn} className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                Nos techniques de capitonnage porte anti bruit
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                { title: "Capitonnage classique", items: ["Mousse acoustique haute densité", "Revêtement simili cuir premium", "Clous décoratifs ou coutures", "Réduction 10-15 dB"], desc: "Solution élégante et efficace pour les portes d'entrée d'appartement." },
                { title: "Capitonnage haute performance", items: ["Multicouche acoustique renforcé", "Membrane Techsound intégrée", "Finition personnalisable", "Réduction 15-25 dB"], desc: "Notre solution premium pour une isolation anti bruit maximale de vos portes." },
                { title: "Porte acoustique sur mesure", items: ["Porte isophonique complète", "Âme acoustique haute densité", "Joint périphérique intégré", "Réduction 30-45 dB"], desc: "Remplacement complet par une porte acoustique pour les cas les plus exigeants." },
                { title: "Kit complet anti bruit porte", items: ["Capitonnage + joints périphériques", "Seuil automatique acoustique", "Barre de seuil étanche", "Solution intégrale anti bruit"], desc: "Traitement complet de la porte pour éliminer toutes les fuites sonores." },
              ].map(s => (
                <div key={s.title} className="bg-card rounded-lg p-6 shadow-card border border-border/50">
                  <h3 className="font-serif text-xl text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
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

        {/* Pourquoi capitonner */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6 max-w-4xl">
            <motion.div {...fadeIn}>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8 text-center">
                Pourquoi opter pour un capitonnage de porte anti bruit ?
              </h2>
              <div className="text-muted-foreground leading-relaxed space-y-4">
                <p>
                  La porte d'entrée est souvent le <strong>point faible de l'isolation phonique</strong> d'un appartement. Même avec des murs bien isolés, une porte standard laisse passer une grande quantité de bruit. Le <strong>capitonnage porte anti bruit</strong> résout ce problème de manière rapide et économique.
                </p>
                <p>
                  À <strong>Paris</strong>, où les immeubles anciens (haussmanniens, années 60-70) sont majoritaires, les portes d'entrée offrent rarement une bonne <strong>isolation acoustique</strong>. Le bruit des parties communes — conversations dans l'escalier, claquements de portes, bruits de l'ascenseur — pénètre facilement dans l'appartement.
                </p>
                <p>
                  Le <strong>capitonnage anti bruit</strong> présente plusieurs avantages : installation rapide (1 à 2 heures), coût maîtrisé, aucune modification structurelle, amélioration immédiate du confort sonore. De plus, il offre une isolation thermique complémentaire et un aspect esthétique valorisant.
                </p>
                <p>
                  <strong>Harmonie BTP</strong> intervient dans tout <strong>Paris</strong> et en <strong>Île-de-France</strong> (93, 94, 92, 95, 91, 78, 77) pour vos travaux de <strong>capitonnage porte anti bruit</strong>. Devis gratuit sous 24h.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 max-w-3xl">
            <motion.div {...fadeIn}>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8 text-center">
                FAQ – Capitonnage porte anti bruit
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {[
                  { q: "Combien coûte un capitonnage de porte anti bruit ?", a: "Le prix d'un capitonnage porte anti bruit varie de 200 à 600 € par porte selon la technique et les matériaux choisis. Un capitonnage classique coûte environ 250-350 €, tandis qu'un capitonnage haute performance se situe entre 400 et 600 €." },
                  { q: "Le capitonnage anti bruit est-il vraiment efficace ?", a: "Oui, un capitonnage bien réalisé permet de réduire les bruits de 10 à 25 dB. Combiné avec des joints d'étanchéité et un seuil automatique, la réduction peut atteindre 25 dB, soit une division par 4 du niveau sonore perçu." },
                  { q: "Combien de temps dure l'installation d'un capitonnage ?", a: "L'installation d'un capitonnage porte anti bruit prend entre 1 et 2 heures. C'est une intervention rapide et propre, sans travaux importants." },
                  { q: "Peut-on capitonner une porte blindée ?", a: "Oui, nous réalisons le capitonnage de portes blindées, portes en bois, portes métalliques et portes coupe-feu. La technique est adaptée à chaque type de porte." },
                  { q: "Le capitonnage abîme-t-il la porte ?", a: "Non, le capitonnage est réversible et n'abîme pas la porte. Il est fixé par agrafage ou collage professionnel et peut être retiré si nécessaire sans laisser de trace." },
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
              Capitonnage porte anti bruit – Devis gratuit en 24h
            </h2>
            <p className="text-accent-foreground/80 mb-8 max-w-2xl mx-auto">
              Intervention rapide à Paris et en Île-de-France. Expert en isolation phonique.
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

export default CapitonnagePorteAntiBruitPage;
