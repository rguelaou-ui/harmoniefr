import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-2xl text-background mb-4">
              Harmonie
            </h3>
            <p className="text-background/70 max-w-md leading-relaxed mb-6">
              Entreprise générale de travaux spécialisée dans la rénovation intérieure 
              haut de gamme. Un interlocuteur unique pour tous vos projets.
            </p>
            <div className="flex items-center gap-6 text-sm text-background/60">
              <span>Garantie Décennale</span>
              <span className="w-1 h-1 rounded-full bg-accent" />
              <span>Certifié RGE</span>
              <span className="w-1 h-1 rounded-full bg-accent" />
              <span>Qualibat</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg text-background mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="tel:+33695847700" 
                  className="flex items-center gap-3 text-background/70 hover:text-accent transition-colors"
                >
                  <Phone className="h-4 w-4" strokeWidth={1.5} />
                  06 95 84 77 00
                </a>
              </li>
              <li>
                <a 
                  href="mailto:harmonie93300@gmail.com" 
                  className="flex items-center gap-3 text-background/70 hover:text-accent transition-colors"
                >
                  <Mail className="h-4 w-4" strokeWidth={1.5} />
                  harmonie93300@gmail.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-background/70">
                  <MapPin className="h-4 w-4 mt-1 flex-shrink-0" strokeWidth={1.5} />
                  <span>
                    7 Rue Chapon<br />
                    93300 Aubervilliers
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg text-background mb-6">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-background/70 hover:text-accent transition-colors">
                  Nos Services
                </a>
              </li>
              <li>
                <a href="#process" className="text-background/70 hover:text-accent transition-colors">
                  Notre Méthode
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-background/70 hover:text-accent transition-colors">
                  Réalisations
                </a>
              </li>
              <li>
                <a href="#quote-form" className="text-background/70 hover:text-accent transition-colors">
                  Demander un devis
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © {currentYear} Harmonie. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6 text-sm text-background/50">
            <a href="#" className="hover:text-background transition-colors">
              Mentions légales
            </a>
            <a href="#" className="hover:text-background transition-colors">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
