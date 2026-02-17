import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Home, 
  ChefHat, 
  Thermometer, 
  Zap, 
  Hammer 
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Rénovation Complète",
    description: "Transformation intégrale de vos espaces, du sol au plafond, avec une coordination parfaite de tous les corps de métier.",
    featured: true,
    link: "/renovation-complete",
  },
  {
    icon: ChefHat,
    title: "Cuisines & Salles de Bain",
    description: "Conception et réalisation d'espaces fonctionnels et esthétiques, adaptés à votre mode de vie.",
    link: "/cuisines-salles-de-bain",
  },
  {
    icon: Thermometer,
    title: "Isolation Thermique & Acoustique",
    description: "Amélioration du confort et de la performance énergétique de votre habitat.",
    link: "/isolation-thermique-acoustique",
  },
  {
    icon: Zap,
    title: "Électricité & Plomberie",
    description: "Mise aux normes et installation de réseaux fiables, sécurisés et durables.",
    link: "/electricite-plomberie",
  },
  {
    icon: Hammer,
    title: "Menuiserie & Finitions",
    description: "Travaux de finition soignés pour une qualité visible jusque dans les moindres détails.",
    link: "/menuiserie-finitions",
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
          {services.map((service, index) => {
            const CardWrapper = service.link ? Link : "div";
            const wrapperProps = service.link ? { to: service.link } : {};
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={service.featured ? "md:col-span-2 lg:col-span-1 lg:row-span-2" : ""}
              >
                <CardWrapper
                  {...(wrapperProps as any)}
                  className={`group relative block h-full bg-card rounded-lg p-8 shadow-card hover:shadow-elevated transition-all duration-300 border border-border/50 ${
                    service.link ? "cursor-pointer" : ""
                  }`}
                >
                  {/* Icon */}
                  <div className={`mb-6 ${service.featured ? "mb-8" : ""}`}>
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary group-hover:bg-accent/10 transition-colors duration-300">
                      <service.icon 
                        className="h-6 w-6 text-foreground group-hover:text-accent transition-colors duration-300" 
                        strokeWidth={1.5} 
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className={`font-serif text-xl mb-3 text-foreground group-hover:text-accent transition-colors duration-300 ${
                    service.featured ? "text-2xl mb-4" : ""
                  }`}>
                    {service.title}
                  </h3>
                  <p className={`text-muted-foreground leading-relaxed ${
                    service.featured ? "text-base" : "text-sm"
                  }`}>
                    {service.description}
                  </p>

                  {service.link && (
                    <span className="mt-4 inline-flex items-center text-sm text-accent font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      En savoir plus →
                    </span>
                  )}

                  {/* Decorative accent line */}
                  <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </CardWrapper>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
