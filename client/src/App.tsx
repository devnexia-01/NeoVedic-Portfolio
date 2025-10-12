import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import WebDevelopment from "@/pages/services/WebDevelopment";
import DevOps from "@/pages/services/DevOps";
import Cloud from "@/pages/services/Cloud";
import Marketing from "@/pages/services/Marketing";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services/web-development" component={WebDevelopment} />
      <Route path="/services/devops" component={DevOps} />
      <Route path="/services/cloud" component={Cloud} />
      <Route path="/services/marketing" component={Marketing} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
