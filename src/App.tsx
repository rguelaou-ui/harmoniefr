import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import IsolationPage from "./pages/IsolationPage";
import RenovationPage from "./pages/RenovationPage";
import CuisineSalleDeBainPage from "./pages/CuisineSalleDeBainPage";
import ElectricitePlomberiePage from "./pages/ElectricitePlomberiePage";
import MenuiserieFinitionsPage from "./pages/MenuiserieFinitionsPage";
import MentionsLegalesPage from "./pages/MentionsLegalesPage";
import PolitiqueConfidentialitePage from "./pages/PolitiqueConfidentialitePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/isolation-thermique-acoustique" element={<IsolationPage />} />
          <Route path="/renovation-complete" element={<RenovationPage />} />
          <Route path="/cuisines-salles-de-bain" element={<CuisineSalleDeBainPage />} />
          <Route path="/electricite-plomberie" element={<ElectricitePlomberiePage />} />
          <Route path="/menuiserie-finitions" element={<MenuiserieFinitionsPage />} />
          <Route path="/mentions-legales" element={<MentionsLegalesPage />} />
          <Route path="/politique-de-confidentialite" element={<PolitiqueConfidentialitePage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
