import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import portfolioKitchen from "@/assets/portfolio-kitchen.jpg";
import portfolioBathroom from "@/assets/portfolio-bathroom.jpg";
import portfolioLiving from "@/assets/portfolio-living.jpg";

const projects = [
  {
    image: portfolioKitchen,
    title: "Cuisine Contemporaine",
    location: "Paris 16ème",
    category: "Cuisine",
  },
  {
    image: portfolioBathroom,
    title: "Salle de Bain Marbre",
    location: "Neuilly-sur-Seine",
    category: "Salle de bain",
  },
  {
    image: portfolioLiving,
    title: "Salon Moderne",
    location: "Boulogne-Billancourt",
    category: "Rénovation complète",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6"
        >
          <div>
            <span className="text-accent font-medium text-sm tracking-[0.2em] uppercase mb-4 block">
              Portfolio
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">
              Nos Réalisations
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-lg">
            Découvrez une sélection de projets qui témoignent de notre exigence 
            et de notre attention aux détails.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-lg cursor-pointer"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={`${project.title} - Rénovation ${project.category} à ${project.location}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <span className="text-accent text-xs font-medium tracking-[0.15em] uppercase mb-2">
                  {project.category}
                </span>
                <h3 className="font-serif text-xl md:text-2xl text-primary-foreground mb-1 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-primary-foreground/70 text-sm">
                  {project.location}
                </p>

                {/* View Icon */}
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight className="h-5 w-5 text-primary-foreground" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg">
            Voir tous nos projets
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
