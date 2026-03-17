import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const articles = [
  {
    title: "Prix isolation phonique appartement : guide complet 2025",
    description: "Découvrez les tarifs au m² pour l'isolation phonique des murs, plafonds et sols de votre appartement.",
    link: "/blog/prix-isolation-phonique-appartement",
  },
  {
    title: "Comment isoler un mur du bruit : guide pratique",
    description: "Les meilleures techniques pour isoler un mur du bruit des voisins : doublage acoustique, ossature désolidarisée.",
    link: "/blog/comment-isoler-mur-bruit",
  },
  {
    title: "Prix rénovation appartement Paris : tarifs 2025",
    description: "Quel budget prévoir pour rénover un appartement à Paris ? Guide des prix au m² selon le type de travaux.",
    link: "/blog/prix-renovation-appartement-paris",
  },
  {
    title: "Combien coûte une rénovation en 2025 ?",
    description: "Tour d'horizon complet des prix de rénovation : appartement, maison, cuisine, salle de bain, isolation.",
    link: "/blog/combien-coute-renovation",
  },
];

const BlogIndex = () => {
  return (
    <>
      <title>Blog Rénovation & Isolation | Harmonie BTP</title>
      <meta name="description" content="Conseils, guides de prix et astuces pour vos travaux de rénovation et d'isolation phonique et thermique en Île-de-France." />

      <main className="min-h-screen bg-background">
        <section className="relative py-20 bg-primary">
          <div className="container mx-auto px-6 text-center">
            <motion.div {...fadeIn}>
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors mb-6"
              >
                <ArrowLeft className="h-4 w-4" />
                Retour à l'accueil
              </Link>
              <h1 className="font-serif text-3xl md:text-5xl text-primary-foreground">
                Blog <span className="text-accent">Harmonie</span>
              </h1>
              <p className="text-primary-foreground/80 max-w-2xl mx-auto mt-4 text-lg">
                Guides, conseils et tarifs pour vos projets de rénovation et d'isolation
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto space-y-6">
              {articles.map((article, index) => (
                <motion.div
                  key={article.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={article.link}
                    className="group block bg-card rounded-lg p-8 shadow-card border border-border/50 hover:shadow-elevated transition-all duration-300"
                  >
                    <h2 className="font-serif text-xl text-foreground group-hover:text-accent transition-colors mb-3">
                      {article.title}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {article.description}
                    </p>
                    <span className="inline-flex items-center text-sm text-accent font-medium">
                      Lire l'article <ArrowRight className="ml-1 h-3 w-3" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default BlogIndex;
