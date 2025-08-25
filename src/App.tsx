
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Catalog from "./pages/Catalog";
import About from "./pages/About";
import Delivery from "./pages/Delivery";
import Contacts from "./pages/Contacts";
import Cart from "./pages/Cart";
import WeddingBouquets from "./pages/WeddingBouquets";
import GiftCompositions from "./pages/GiftCompositions";
import ExpressOrders from "./pages/ExpressOrders";
import CustomOrder from "./pages/CustomOrder";
import Corporate from "./pages/Corporate";
import CareGuide from "./pages/CareGuide";
import Roses from "./pages/Roses";
import Tulips from "./pages/Tulips";
import Peonies from "./pages/Peonies";
import MixedBouquets from "./pages/MixedBouquets";
import SeasonalSpring from "./pages/SeasonalSpring";
import SeasonalSummer from "./pages/SeasonalSummer";
import OccasionsBirthday from "./pages/OccasionsBirthday";
import OccasionsWedding from "./pages/OccasionsWedding";
import BouquetDetail from "./pages/BouquetDetail";
import Roses from "./pages/Roses";
import Tulips from "./pages/Tulips";
import Peonies from "./pages/Peonies";
import MixedBouquets from "./pages/MixedBouquets";
import SeasonalSpring from "./pages/SeasonalSpring";
import SeasonalSummer from "./pages/SeasonalSummer";
import OccasionsBirthday from "./pages/OccasionsBirthday";
import OccasionsWedding from "./pages/OccasionsWedding";
import BouquetDetail from "./pages/BouquetDetail";
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
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/about" element={<About />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wedding-bouquets" element={<WeddingBouquets />} />
          <Route path="/gift-compositions" element={<GiftCompositions />} />
          <Route path="/express-orders" element={<ExpressOrders />} />
          <Route path="/custom-order" element={<CustomOrder />} />
          <Route path="/corporate" element={<Corporate />} />
          <Route path="/care-guide" element={<CareGuide />} />
          <Route path="/roses" element={<Roses />} />
          <Route path="/tulips" element={<Tulips />} />
          <Route path="/peonies" element={<Peonies />} />
          <Route path="/mixed-bouquets" element={<MixedBouquets />} />
          <Route path="/seasonal/spring" element={<SeasonalSpring />} />
          <Route path="/seasonal/summer" element={<SeasonalSummer />} />
          <Route path="/occasions/birthday" element={<OccasionsBirthday />} />
          <Route path="/occasions/wedding" element={<OccasionsWedding />} />
          <Route path="/bouquet/:id" element={<BouquetDetail />} />
          <Route path="/roses" element={<Roses />} />
          <Route path="/tulips" element={<Tulips />} />
          <Route path="/peonies" element={<Peonies />} />
          <Route path="/mixed-bouquets" element={<MixedBouquets />} />
          <Route path="/seasonal/spring" element={<SeasonalSpring />} />
          <Route path="/seasonal/summer" element={<SeasonalSummer />} />
          <Route path="/occasions/birthday" element={<OccasionsBirthday />} />
          <Route path="/occasions/wedding" element={<OccasionsWedding />} />
          <Route path="/bouquet/:id" element={<BouquetDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
