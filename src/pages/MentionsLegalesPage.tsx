import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const MentionsLegalesPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <Link to="/" className="font-serif text-2xl text-foreground">
            Harmonie
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour à l'accueil
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-6 py-12 max-w-3xl">
        <h1 className="font-serif text-3xl md:text-4xl mb-2">Mentions légales</h1>
        <p className="text-muted-foreground text-sm mb-10">
          Conformément aux dispositions des articles 6-III et 19 de la loi n°2004-575 du 21 juin 2004 pour la Confiance dans l'économie numérique (LCEN).
        </p>

        <Separator className="mb-10" />

        {/* Éditeur du site */}
        <section className="mb-10">
          <h2 className="font-serif text-xl mb-4">Éditeur du site</h2>
          <dl className="space-y-2 text-sm leading-relaxed">
            <div className="flex gap-2">
              <dt className="text-muted-foreground min-w-[180px]">Dénomination sociale</dt>
              <dd>Harmonie</dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-muted-foreground min-w-[180px]">Forme juridique</dt>
              <dd>SAS (Société par Actions Simplifiée)</dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-muted-foreground min-w-[180px]">Activité</dt>
              <dd>Entreprise générale de bâtiment / Rénovation</dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-muted-foreground min-w-[180px]">Siège social</dt>
              <dd>7 Rue Chapon, 93300 Aubervilliers</dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-muted-foreground min-w-[180px]">Capital social</dt>
              <dd>8 000 €</dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-muted-foreground min-w-[180px]">Numéro SIRET</dt>
              <dd>817 944 309 00019</dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-muted-foreground min-w-[180px]">Téléphone</dt>
              <dd><a href="tel:+33695847700" className="underline hover:text-foreground">06 95 84 77 00</a></dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-muted-foreground min-w-[180px]">Email</dt>
              <dd><a href="mailto:harmonie93300@gmail.com" className="underline hover:text-foreground">harmonie93300@gmail.com</a></dd>
            </div>
          </dl>
        </section>

        <Separator className="mb-10" />

        {/* Propriété intellectuelle */}
        <section className="mb-10">
          <h2 className="font-serif text-xl mb-4">Propriété intellectuelle</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            L'ensemble du contenu de ce site internet (textes, images, éléments graphiques, logo, icônes, mise en page) est la propriété exclusive de la société Harmonie ou de ses partenaires et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle. Toute reproduction, représentation, modification, publication, adaptation, totale ou partielle, de l'un quelconque de ces éléments, quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation écrite préalable de la société Harmonie. Toute exploitation non autorisée du site ou de l'un quelconque des éléments qu'il contient sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de la propriété intellectuelle.
          </p>
        </section>

        <Separator className="mb-10" />

        {/* Responsabilité */}
        <section className="mb-10">
          <h2 className="font-serif text-xl mb-4">Responsabilité</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            La société Harmonie s'efforce d'assurer au mieux l'exactitude et la mise à jour des informations diffusées sur ce site, dont elle se réserve le droit de corriger le contenu à tout moment et sans préavis. Toutefois, Harmonie ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur ce site. En conséquence, l'utilisateur reconnaît utiliser ces informations sous sa responsabilité exclusive. La société Harmonie ne saurait être tenue responsable de tout dommage direct ou indirect résultant de l'utilisation de ce site ou des informations qu'il contient.
          </p>
        </section>

        <Separator className="mb-10" />

        {/* Données personnelles */}
        <section className="mb-10">
          <h2 className="font-serif text-xl mb-4">Protection des données personnelles</h2>
          <p className="text-sm leading-relaxed text-muted-foreground mb-4">
            Conformément au Règlement Général sur la Protection des Données (RGPD – Règlement UE 2016/679) et à la loi n°78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés, les informations personnelles collectées sur ce site (formulaire de contact, demande de devis) sont destinées exclusivement à la société Harmonie et ne sont en aucun cas cédées à des tiers.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground mb-4">
            Ces données sont collectées dans le seul but de répondre aux demandes des utilisateurs et d'assurer le suivi de la relation commerciale. Elles sont conservées pour une durée n'excédant pas celle nécessaire aux finalités pour lesquelles elles sont traitées.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Conformément à la réglementation en vigueur, vous disposez d'un droit d'accès, de rectification, de suppression, de limitation, d'opposition et de portabilité de vos données personnelles. Pour exercer ces droits, vous pouvez adresser votre demande par email à <a href="mailto:harmonie93300@gmail.com" className="underline hover:text-foreground">harmonie93300@gmail.com</a> ou par courrier à l'adresse du siège social de la société.
          </p>
        </section>

        <Separator className="mb-10" />

        {/* Cookies */}
        <section className="mb-10">
          <h2 className="font-serif text-xl mb-4">Cookies</h2>
          <p className="text-sm leading-relaxed text-muted-foreground mb-4">
            Ce site est susceptible d'utiliser des cookies afin d'améliorer l'expérience de navigation de l'utilisateur et de réaliser des statistiques de visites. Un cookie est un petit fichier texte déposé sur le disque dur de l'utilisateur par le serveur du site visité.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            L'utilisateur peut s'opposer à l'enregistrement de cookies en configurant son navigateur selon les modalités détaillées sur le site de la CNIL (www.cnil.fr). La désactivation des cookies peut toutefois limiter l'accès à certaines fonctionnalités du site.
          </p>
        </section>

        <Separator className="mb-10" />

        {/* Droit applicable */}
        <section className="mb-10">
          <h2 className="font-serif text-xl mb-4">Droit applicable</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Le présent site et ses mentions légales sont soumis au droit français. En cas de litige et à défaut de résolution amiable, les tribunaux français seront seuls compétents pour connaître de ce différend.
          </p>
        </section>
      </main>

      {/* Minimal footer */}
      <footer className="border-t border-border py-6">
        <div className="container mx-auto px-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Harmonie — Tous droits réservés
        </div>
      </footer>
    </div>
  );
};

export default MentionsLegalesPage;
