import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.tsx"
import "bootstrap/dist/css/bootstrap.min.css"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "./context/QueryClient.ts"
import { SidebarProvider } from "@/components/ui/sidebar"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <SidebarProvider> {/* ✅ Proveedor del Sidebar */}
        <App />
      </SidebarProvider>
    </QueryClientProvider>
  </StrictMode>
)
