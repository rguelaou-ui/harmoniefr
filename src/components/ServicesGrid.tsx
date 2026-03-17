import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ChefHat, 
  Thermometer, 
  Volume2,
  Zap, 
  Hammer,
  Home
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Thermometer,
    title: "Isolation Thermique",
    description: "Réduction des déperditions de chaleur et économies d'énergie grâce à des matériaux performants et une pose professionnelle.",
    link: "/isolation-thermique-acoustique",
    cta: "Découvrir l'isolation thermique",
  },
  {
    icon: Volume2,
    title: "Isolation Phonique",
    description: "Protection efficace contre les nuisances sonores. Expertise en isolation acoustique des murs, plafonds et sols.",
    link: "/isolation-phonique",
    cta: "Découvrir l'isolation phonique",
  },
  {
    icon: Home,
    title: "Rénovation Complète",
    description: "Rénovation d'appartement et de maison clé en main. Un interlocuteur unique pour tous vos travaux.",
    link: "/renovation-complete",
    cta: "Découvrir la rénovation",
  },
  {
    icon: ChefHat,
    title: "Cuisines & Salles de Bain",
    description: "Conception et réalisation d'espaces fonctionnels et esthétiques, adaptés à votre mode de vie.",
    link: "/cuisines-salles-de-bain",
    cta: "Découvrir nos cuisines",
  },
  {
    icon: Zap,
    title: "Électricité & Plomberie",
    description: "Mise aux normes et installation de réseaux fiables, sécurisés et durables.",
    link: "/electricite-plomberie",
    cta: "Découvrir nos prestations",
  },
  {
    icon: Hammer,
    title: "Menuiserie & Finitions",
    description: "Travaux de finition soignés pour une qualité visible jusque dans les moindres détails.",
    link: "/menuiserie-finitions",
    cta: "Découvrir la menuiserie",
  },
];

const ServicesGrid = () => {
  return (
    <section id="services" className="py-24 bg-background">
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
            Nos Expertises
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Un savoir-faire complet
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Chaque projet bénéficie de l'expertise coordonnée de nos équipes qualifiées, 
            garantissant excellence et cohérence.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={service.link}
                className="group relative block h-full bg-card rounded-lg p-8 shadow-card hover:shadow-elevated transition-all duration-300 border border-border/50 cursor-pointer"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary group-hover:bg-accent/10 transition-colors duration-300">
                    <service.icon 
                      className="h-6 w-6 text-foreground group-hover:text-accent transition-colors duration-300" 
                      strokeWidth={1.5} 
                    />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-serif text-xl mb-3 text-foreground group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm mb-6">
                  {service.description}
                </p>

                <span className="inline-flex items-center text-sm text-accent font-medium">
                  {service.cta} →
                </span>

                {/* Decorative accent line */}
                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
