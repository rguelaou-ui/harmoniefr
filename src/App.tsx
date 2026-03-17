import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import IsolationPage from "./pages/IsolationPage";
import IsolationPhoniquePage from "./pages/IsolationPhoniquePage";
import RenovationPage from "./pages/RenovationPage";
import CuisineSalleDeBainPage from "./pages/CuisineSalleDeBainPage";
import ElectricitePlomberiePage from "./pages/ElectricitePlomberiePage";
import MenuiserieFinitionsPage from "./pages/MenuiserieFinitionsPage";
import MentionsLegalesPage from "./pages/MentionsLegalesPage";
import PolitiqueConfidentialitePage from "./pages/PolitiqueConfidentialitePage";
import BlogIndex from "./pages/BlogIndex";
import PrixIsolationPhonique from "./pages/blog/PrixIsolationPhonique";
import CommentIsolerMurBruit from "./pages/blog/CommentIsolerMurBruit";
import PrixRenovationParis from "./pages/blog/PrixRenovationParis";
import CombienCouteRenovation from "./pages/blog/CombienCouteRenovation";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import { cityRoutes } from "./data/cities";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/isolation-thermique-acoustique" element={<IsolationPage />} />
          <Route path="/isolation-phonique" element={<IsolationPhoniquePage />} />
          <Route path="/renovation-complete" element={<RenovationPage />} />
          <Route path="/cuisines-salles-de-bain" element={<CuisineSalleDeBainPage />} />
          <Route path="/electricite-plomberie" element={<ElectricitePlomberiePage />} />
          <Route path="/menuiserie-finitions" element={<MenuiserieFinitionsPage />} />
          <Route path="/mentions-legales" element={<MentionsLegalesPage />} />
          <Route path="/politique-de-confidentialite" element={<PolitiqueConfidentialitePage />} />
          {/* Blog */}
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/prix-isolation-phonique-appartement" element={<PrixIsolationPhonique />} />
          <Route path="/blog/comment-isoler-mur-bruit" element={<CommentIsolerMurBruit />} />
          <Route path="/blog/prix-renovation-appartement-paris" element={<PrixRenovationParis />} />
          <Route path="/blog/combien-coute-renovation" element={<CombienCouteRenovation />} />
          {/* City pages */}
          {cityRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
