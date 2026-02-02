import { motion } from "framer-motion";
import { ClipboardList, HardHat, CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Étude & Devis Précis",
    description: "Nous analysons vos besoins et vos envies lors d'un rendez-vous personnalisé. Vous recevez un devis détaillé, transparent et sans engagement.",
  },
  {
    number: "02",
    icon: HardHat,
    title: "Pilotage de Chantier Unique",
    description: "Un chef de projet dédié coordonne l'ensemble des interventions. Vous bénéficiez d'un suivi régulier et d'un interlocuteur unique.",
  },
  {
    number: "03",
    icon: CheckCircle2,
    title: "Livraison & Garanties",
    description: "Réception de votre projet dans les délais convenus. Vos travaux sont couverts par nos garanties décennale et biennale.",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium text-sm tracking-[0.2em] uppercase mb-4 block">
            Notre Approche
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            La Méthode Harmonie
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Une méthodologie éprouvée pour des projets maîtrisés, 
            de la première rencontre à la remise des clés.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector Line (Desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[calc(50%+60px)] w-[calc(100%-60px)] h-px bg-gradient-to-r from-accent/40 to-transparent" />
              )}

              <div className="text-center">
                {/* Step Number */}
                <div className="relative inline-block mb-6">
                  <span className="font-serif text-6xl md:text-7xl text-accent/20">
                    {step.number}
                  </span>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-card shadow-card flex items-center justify-center border border-border/50">
                      <step.icon className="h-7 w-7 text-accent" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-serif text-xl md:text-2xl text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
