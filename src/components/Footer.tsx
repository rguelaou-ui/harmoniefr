import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import logoHarmonie from "@/assets/logo-harmonie.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={logoHarmonie} alt="Harmonie BTP - Entreprise de rénovation Île-de-France" className="h-10 w-10 rounded-full object-cover" />
              <h3 className="font-serif text-2xl text-background">Harmonie</h3>
            </div>
            <p className="text-background/70 max-w-md leading-relaxed mb-6">
              Entreprise générale de travaux spécialisée dans la rénovation intérieure 
              haut de gamme en Île-de-France. Un interlocuteur unique pour tous vos projets.
            </p>
            <div className="flex items-center gap-4 text-xs text-background/60 flex-wrap">
              <span>Garantie Décennale</span>
              <span className="w-1 h-1 rounded-full bg-accent" />
              <span>Certifié RGE</span>
              <span className="w-1 h-1 rounded-full bg-accent" />
              <span>Qualibat</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg text-background mb-6">Nos Services</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/isolation-thermique-acoustique" className="text-background/70 hover:text-accent transition-colors text-sm">
                  Isolation thermique
                </Link>
              </li>
              <li>
                <Link to="/isolation-phonique" className="text-background/70 hover:text-accent transition-colors text-sm">
                  Isolation phonique
                </Link>
              </li>
              <li>
                <Link to="/renovation-complete" className="text-background/70 hover:text-accent transition-colors text-sm">
                  Rénovation complète
                </Link>
              </li>
              <li>
                <Link to="/cuisines-salles-de-bain" className="text-background/70 hover:text-accent transition-colors text-sm">
                  Cuisines & Salles de bain
                </Link>
              </li>
              <li>
                <Link to="/electricite-plomberie" className="text-background/70 hover:text-accent transition-colors text-sm">
                  Électricité & Plomberie
                </Link>
              </li>
              <li>
                <Link to="/menuiserie-finitions" className="text-background/70 hover:text-accent transition-colors text-sm">
                  Menuiserie & Finitions
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-background/70 hover:text-accent transition-colors text-sm">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Zones d'intervention */}
          <div>
            <h4 className="font-serif text-lg text-background mb-6">Zones d'intervention</h4>
            <ul className="space-y-2">
              {[
                { name: "Paris", slug: "paris" },
                { name: "Aubervilliers", slug: "aubervilliers" },
                { name: "Saint-Denis", slug: "saint-denis" },
                { name: "Montreuil", slug: "montreuil" },
                { name: "Bobigny", slug: "bobigny" },
                { name: "Créteil", slug: "creteil" },
                { name: "Nanterre", slug: "nanterre" },
                { name: "Levallois", slug: "levallois" },
              ].map((city) => (
                <li key={city.slug}>
                  <Link
                    to={`/renovation-${city.slug}`}
                    className="text-background/70 hover:text-accent transition-colors text-sm"
                  >
                    Rénovation {city.name}
                  </Link>
                </li>
              ))}
            </ul>
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
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © {currentYear} Harmonie BTP. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6 text-sm text-background/50">
            <Link to="/mentions-legales" className="hover:text-background transition-colors">
              Mentions légales
            </Link>
            <Link to="/politique-de-confidentialite" className="hover:text-background transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
