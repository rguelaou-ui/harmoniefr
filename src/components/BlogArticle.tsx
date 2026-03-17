import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

interface BlogArticleProps {
  title: string;
  metaDescription: string;
  children: React.ReactNode;
}

const BlogArticle = ({ title, metaDescription, children }: BlogArticleProps) => {
  return (
    <>
      <title>{title} – Harmonie BTP</title>
      <meta name="description" content={metaDescription} />

      <main className="min-h-screen bg-background">
        <section className="relative py-20 bg-primary">
          <div className="container mx-auto px-6 text-center">
            <motion.div {...fadeIn}>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors mb-6"
              >
                <ArrowLeft className="h-4 w-4" />
                Retour au blog
              </Link>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary-foreground leading-tight max-w-4xl mx-auto">
                {title}
              </h1>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <article className="max-w-3xl mx-auto prose-custom">
              <motion.div {...fadeIn} className="space-y-6 text-muted-foreground leading-relaxed">
                {children}
              </motion.div>
            </article>
          </div>
        </section>

        <section className="py-20 gradient-anthracite">
          <div className="container mx-auto px-6 text-center">
            <motion.div {...fadeIn}>
              <h2 className="font-serif text-3xl text-primary-foreground mb-6">
                Besoin d'un devis ?
              </h2>
              <p className="text-primary-foreground/70 max-w-2xl mx-auto mb-8">
                Contactez-nous pour un devis gratuit et sans engagement.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/#quote-form">
                  <Button variant="accent" size="lg" className="group">
                    Demander un devis gratuit
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/">
                  <Button variant="heroOutline" size="lg">
                    <Home className="mr-2 h-4 w-4" />
                    Accueil
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default BlogArticle;
