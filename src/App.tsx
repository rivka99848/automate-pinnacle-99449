import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import Index from "./pages/Index";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Services from "./pages/Services";
import ServiceCRM from "./pages/ServiceCRM";
import ServiceBots from "./pages/ServiceBots";
import ServiceAutomation from "./pages/ServiceAutomation";
import ServiceForms from "./pages/ServiceForms";
import ServiceCustomProducts from "./pages/ServiceCustomProducts";
import ProductCRM from "./pages/ProductCRM";
import ProductTickets from "./pages/ProductTickets";
import Contact from "./pages/Contact";
import ThankYou from "./pages/ThankYou";
import SupportCreate from "./pages/SupportCreate";
import SupportMyTickets from "./pages/SupportMyTickets";
import SupportTicketDetail from "./pages/SupportTicketDetail";
import SupportThankYou from "./pages/SupportThankYou";
import NotFound from "./pages/NotFound";

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
          <Route path="/products" element={<Products />} />
          <Route path="/products/crm-system" element={<ProductCRM />} />
          <Route path="/products/:slug" element={<ProductDetails />} />
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/crm" element={<ServiceCRM />} />
          <Route path="/services/bots" element={<ServiceBots />} />
          <Route path="/services/automation" element={<ServiceAutomation />} />
          <Route path="/services/forms" element={<ServiceForms />} />
          <Route path="/services/custom-products" element={<ServiceCustomProducts />} />
          <Route path="/product-crm" element={<ProductCRM />} />
          <Route path="/products/ticket-system" element={<ProductTickets />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/support" element={<SupportCreate />} />
          <Route path="/support/my-tickets" element={<SupportMyTickets />} />
          <Route path="/support/ticket" element={<SupportTicketDetail />} />
          <Route path="/support/thank-you" element={<SupportThankYou />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
