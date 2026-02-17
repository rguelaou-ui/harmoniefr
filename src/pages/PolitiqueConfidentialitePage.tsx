import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const PolitiqueConfidentialitePage = () => {
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
        <h1 className="font-serif text-3xl md:text-4xl mb-2">Politique de confidentialité</h1>
        <p className="text-muted-foreground text-sm mb-10">
          Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
        </p>

        <Separator className="mb-10" />

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="font-serif text-xl mb-4">Introduction</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            La société Harmonie, SAS spécialisée en rénovation et travaux de bâtiment, accorde une importance particulière à la protection des données personnelles et au respect de la vie privée des utilisateurs de son site internet. La présente politique de confidentialité a pour objet d'informer les utilisateurs sur la manière dont leurs données personnelles sont collectées, traitées et protégées, conformément au Règlement Général sur la Protection des Données (RGPD – Règlement UE 2016/679) et à la loi n°78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés.
          </p>
        </section>

        <Separator className="mb-10" />

        {/* Données collectées */}
        <section className="mb-10">
          <h2 className="font-serif text-xl mb-4">Données collectées</h2>
          <p className="text-sm leading-relaxed text-muted-foreground mb-4">
            Dans le cadre de l'utilisation du site et des services proposés, la société Harmonie est susceptible de collecter les données personnelles suivantes :
          </p>
          <ul className="list-disc list-inside text-sm leading-relaxed text-muted-foreground space-y-1 ml-2">
            <li>Nom et prénom</li>
            <li>Numéro de téléphone</li>
            <li>Adresse email</li>
            <li>Informations transmises via les formulaires de contact ou de demande de devis</li>
            <li>Données de navigation (cookies, adresse IP, statistiques de visite)</li>
          </ul>
          <p className="text-sm leading-relaxed text-muted-foreground mt-4">
            Seules les données strictement nécessaires à la finalité du traitement sont collectées, dans le respect du principe de minimisation des données.
          </p>
        </section>

        <Separator className="mb-10" />

        {/* Finalité */}
        <section className="mb-10">
          <h2 className="font-serif text-xl mb-4">Finalité de la collecte</h2>
          <p className="text-sm leading-relaxed text-muted-foreground mb-4">
            Les données personnelles collectées sont utilisées aux fins suivantes :
          </p>
          <ul className="list-disc list-inside text-sm leading-relaxed text-muted-foreground space-y-1 ml-2">
            <li>Réponse aux demandes de contact ou de devis formulées par l'utilisateur</li>
            <li>Communication avec l'utilisateur dans le cadre du suivi de sa demande</li>
            <li>Amélioration des services proposés et de l'expérience de navigation sur le site</li>
            <li>Respect des obligations légales et réglementaires applicables</li>
          </ul>
          <p className="text-sm leading-relaxed text-muted-foreground mt-4">
            En aucun cas les données collectées ne sont utilisées à des fins de prospection commerciale non sollicitée.
          </p>
        </section>

        <Separator className="mb-10" />

        {/* Protection */}
        <section className="mb-10">
          <h2 className="font-serif text-xl mb-4">Protection des données</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            La société Harmonie met en œuvre toutes les mesures techniques et organisationnelles appropriées afin de garantir la sécurité et la confidentialité des données personnelles collectées, et notamment pour empêcher tout accès non autorisé, toute altération, divulgation ou destruction accidentelle. Les données personnelles ne sont en aucun cas cédées, vendues ou mises à disposition de tiers à des fins commerciales. Elles ne sont transmises à des tiers que dans les cas prévus par la loi ou avec le consentement préalable de l'utilisateur.
          </p>
        </section>

        <Separator className="mb-10" />

        {/* Durée de conservation */}
        <section className="mb-10">
          <h2 className="font-serif text-xl mb-4">Durée de conservation</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Les données personnelles sont conservées pour une durée limitée et proportionnée à la finalité pour laquelle elles ont été collectées. À titre indicatif, les données issues des formulaires de contact et de demande de devis sont conservées pendant une durée maximale de trois (3) ans à compter du dernier contact avec l'utilisateur. Au-delà de cette durée, les données sont supprimées ou anonymisées de manière irréversible.
          </p>
        </section>

        <Separator className="mb-10" />

        {/* Droits des utilisateurs */}
        <section className="mb-10">
          <h2 className="font-serif text-xl mb-4">Droits des utilisateurs</h2>
          <p className="text-sm leading-relaxed text-muted-foreground mb-4">
            Conformément à la réglementation en vigueur, tout utilisateur dispose des droits suivants concernant ses données personnelles :
          </p>
          <ul className="list-disc list-inside text-sm leading-relaxed text-muted-foreground space-y-1 ml-2">
            <li><strong className="text-foreground">Droit d'accès</strong> : obtenir la confirmation que des données le concernant sont traitées et en obtenir une copie</li>
            <li><strong className="text-foreground">Droit de rectification</strong> : demander la correction de données inexactes ou incomplètes</li>
            <li><strong className="text-foreground">Droit de suppression</strong> : demander l'effacement de ses données dans les conditions prévues par la loi</li>
            <li><strong className="text-foreground">Droit d'opposition</strong> : s'opposer au traitement de ses données pour des motifs légitimes</li>
            <li><strong className="text-foreground">Droit à la limitation</strong> : demander la limitation du traitement dans certains cas</li>
            <li><strong className="text-foreground">Droit à la portabilité</strong> : recevoir ses données dans un format structuré et couramment utilisé</li>
          </ul>
          <p className="text-sm leading-relaxed text-muted-foreground mt-4">
            Pour exercer l'un de ces droits, vous pouvez adresser votre demande :
          </p>
          <ul className="text-sm leading-relaxed text-muted-foreground mt-2 space-y-1 ml-2">
            <li>Par email : <a href="mailto:harmonie93300@gmail.com" className="underline hover:text-foreground">harmonie93300@gmail.com</a></li>
            <li>Par courrier : Harmonie — 7 Rue Chapon, 93300 Aubervilliers</li>
          </ul>
          <p className="text-sm leading-relaxed text-muted-foreground mt-4">
            En cas de difficulté en lien avec la gestion de vos données personnelles, vous pouvez introduire une réclamation auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL) — www.cnil.fr.
          </p>
        </section>

        <Separator className="mb-10" />

        {/* Cookies */}
        <section className="mb-10">
          <h2 className="font-serif text-xl mb-4">Cookies</h2>
          <p className="text-sm leading-relaxed text-muted-foreground mb-4">
            Le site est susceptible d'utiliser des cookies afin d'améliorer l'expérience de navigation et de réaliser des mesures d'audience. Un cookie est un petit fichier texte stocké sur le terminal de l'utilisateur lors de la consultation du site.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            L'utilisateur peut à tout moment accepter ou refuser l'utilisation des cookies en configurant les paramètres de son navigateur. La désactivation des cookies peut toutefois limiter l'accès à certaines fonctionnalités du site. Pour en savoir plus sur la gestion des cookies, l'utilisateur peut consulter le site de la CNIL : www.cnil.fr.
          </p>
        </section>

        <Separator className="mb-10" />

        {/* Modification */}
        <section className="mb-10">
          <h2 className="font-serif text-xl mb-4">Modification de la politique de confidentialité</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            La société Harmonie se réserve le droit de modifier la présente politique de confidentialité à tout moment afin de l'adapter aux évolutions législatives et réglementaires ou aux pratiques de l'entreprise. Toute modification sera publiée sur cette page avec une date de mise à jour. L'utilisateur est invité à consulter régulièrement cette page pour prendre connaissance des éventuelles modifications.
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

export default PolitiqueConfidentialitePage;
