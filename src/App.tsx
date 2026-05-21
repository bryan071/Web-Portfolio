import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { AnimatePresence, motion } from "framer-motion";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PhotoEditing from "./pages/PhotoEditing";
import FarmAid from "./pages/FarmAid";
import CompanyMapping from "./pages/CompanyMapping";

const queryClient = new QueryClient();

function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
        scale: 0.98,
        filter: "blur(10px)",
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      exit={{
        opacity: 0,
        y: -20,
        scale: 0.98,
        filter: "blur(10px)",
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Index />
            </PageTransition>
          }
        />

        <Route
          path="/photo-editing"
          element={
            <PageTransition>
              <PhotoEditing />
            </PageTransition>
          }
        />

        <Route
          path="/farm-aid"
          element={
            <PageTransition>
              <FarmAid />
            </PageTransition>
          }
        />

        <Route
          path="/company-mapping"
          element={
            <PageTransition>
              <CompanyMapping />
            </PageTransition>
          }
        />

        <Route
          path="*"
          element={
            <PageTransition>
              <NotFound />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <BrowserRouter basename="/Web-Portfolio">
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;