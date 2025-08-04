// src/features/shared/components/ShowNavigationMenu.tsx
import React from "react";
import { NavigationMenu } from "../../../core/components/ui";
import { TitledSurface } from "../../../core/components/layout";
import { ThemedText } from "../../../core/components/atomic";
import {
  Globe,
  Smartphone,
  Monitor,
  BookOpen,
  Github,
  MessageSquare,
  Shield,
  Database,
  BarChart,
  Zap,
  LayoutDashboard,
  FolderOpen,
  Settings,
  Users,
  CreditCard,
  Bell,
  HelpCircle,
  Crown,
  Sparkles,
} from "lucide-react";

/**
 * ShowNavigationMenu - Showcase completo per NavigationMenu component.
 *
 * Dimostra tutte le features del NavigationMenu:
 * - Layout types (list, grid, mega)
 * - Trigger variants (default, ghost, minimal)
 * - Orientamenti (horizontal, vertical)
 * - Content grouping e badge integration
 * - Keyboard navigation e accessibility
 * - Real-world use cases
 */
const ShowNavigationMenu: React.FC = () => {
  // Basic menu items
  const basicMenuItems = [
    {
      trigger: "Prodotti",
      content: [
        {
          title: "Web App",
          href: "/web-app",
          description: "Applicazione web completa",
          icon: <Globe className="w-4 h-4" />,
        },
        {
          title: "Mobile App",
          href: "/mobile",
          description: "App per iOS e Android",
          icon: <Smartphone className="w-4 h-4" />,
        },
        {
          title: "Desktop",
          href: "/desktop",
          description: "Applicazione desktop",
          icon: <Monitor className="w-4 h-4" />,
        },
      ],
    },
    {
      trigger: "Soluzioni",
      content: [
        { title: "Per Startup", href: "/startup", description: "Ideale per iniziare" },
        { title: "Per Enterprise", href: "/enterprise", description: "Soluzioni aziendali" },
        { title: "Per Sviluppatori", href: "/developers", description: "API e integrazioni" },
      ],
    },
  ];

  // Grouped menu items
  const groupedMenuItems = [
    {
      trigger: "Risorse",
      triggerIcon: <BookOpen className="w-4 h-4" />,
      content: [
        {
          title: "Documentazione",
          links: [
            {
              title: "Getting Started",
              href: "/docs/getting-started",
              description: "Inizia da qui",
              badge: { text: "New", variant: "success" as const },
            },
            {
              title: "API Reference",
              href: "/docs/api",
              description: "Documentazione completa API",
            },
            {
              title: "Examples",
              href: "/docs/examples",
              description: "Esempi pratici e tutorial",
            },
          ],
        },
        {
          title: "Community",
          links: [
            {
              title: "GitHub",
              href: "https://github.com/company/repo",
              description: "Codice sorgente e issues",
              external: true,
              icon: <Github className="w-4 h-4" />,
            },
            {
              title: "Discord",
              href: "https://discord.com/invite/company",
              description: "Chat della community",
              external: true,
              icon: <MessageSquare className="w-4 h-4" />,
            },
          ],
        },
      ],
      layout: "list" as const,
    },
  ];

  // Grid layout menu
  const gridMenuItems = [
    {
      trigger: "Features",
      content: [
        {
          title: "Authentication",
          href: "/features/auth",
          description: "Sistema di autenticazione sicuro",
          icon: <Shield className="w-4 h-4" />,
        },
        {
          title: "Database",
          href: "/features/database",
          description: "Gestione dati avanzata",
          icon: <Database className="w-4 h-4" />,
        },
        {
          title: "Analytics",
          href: "/features/analytics",
          description: "Analisi e reporting dettagliati",
          icon: <BarChart className="w-4 h-4" />,
        },
        {
          title: "Integrations",
          href: "/features/integrations",
          description: "Connessioni con servizi esterni",
          icon: <Zap className="w-4 h-4" />,
        },
      ],
      layout: "grid" as const,
      width: "lg" as const,
    },
  ];

  // Mega menu items
  const megaMenuItems = [
    {
      trigger: "Solutions",
      content: [
        {
          title: "By Industry",
          links: [
            {
              title: "E-commerce",
              href: "/solutions/ecommerce",
              description: "Negozi online",
            },
            {
              title: "Healthcare",
              href: "/solutions/healthcare",
              description: "Sanità digitale",
            },
            {
              title: "Education",
              href: "/solutions/education",
              description: "Piattaforme educative",
            },
            {
              title: "Finance",
              href: "/solutions/finance",
              description: "Servizi finanziari",
            },
          ],
        },
        {
          title: "By Size",
          links: [
            {
              title: "Startup",
              href: "/solutions/startup",
              description: "Per aziende in crescita",
              badge: { text: "Popular", variant: "info" as const },
            },
            {
              title: "SMB",
              href: "/solutions/smb",
              description: "Piccole e medie imprese",
            },
            {
              title: "Enterprise",
              href: "/solutions/enterprise",
              description: "Grandi organizzazioni",
              icon: <Crown className="w-4 h-4" />,
            },
          ],
        },
        {
          title: "By Use Case",
          links: [
            {
              title: "CRM",
              href: "/solutions/crm",
              description: "Customer relationship",
            },
            {
              title: "Project Management",
              href: "/solutions/pm",
              description: "Gestione progetti",
            },
            {
              title: "Team Collaboration",
              href: "/solutions/collaboration",
              description: "Collaborazione team",
            },
          ],
        },
      ],
      layout: "mega" as const,
      width: "xl" as const,
    },
  ];

  // Vertical menu for sidebar
  const verticalMenuItems = [
    {
      trigger: "Dashboard",
      triggerIcon: <LayoutDashboard className="w-4 h-4" />,
      content: [
        {
          title: "Overview",
          href: "/dashboard",
          description: "Panoramica generale",
        },
        {
          title: "Analytics",
          href: "/dashboard/analytics",
          description: "Metriche e statistiche",
        },
        {
          title: "Reports",
          href: "/dashboard/reports",
          description: "Report personalizzati",
        },
      ],
    },
    {
      trigger: "Projects",
      triggerIcon: <FolderOpen className="w-4 h-4" />,
      content: [
        {
          title: "All Projects",
          href: "/projects",
          description: "Tutti i progetti",
          badge: { text: "12", variant: "default" as const },
        },
        {
          title: "Active",
          href: "/projects/active",
          description: "Progetti attivi",
          badge: { text: "8", variant: "success" as const },
        },
        {
          title: "Archived",
          href: "/projects/archived",
          description: "Progetti archiviati",
          badge: { text: "4", variant: "secondary" as const },
        },
      ],
    },
    {
      trigger: "Settings",
      triggerIcon: <Settings className="w-4 h-4" />,
      content: [
        {
          title: "Profile",
          href: "/settings/profile",
          description: "Impostazioni profilo",
          icon: <Users className="w-4 h-4" />,
        },
        {
          title: "Account",
          href: "/settings/account",
          description: "Gestione account",
          icon: <Shield className="w-4 h-4" />,
        },
        {
          title: "Billing",
          href: "/settings/billing",
          description: "Fatturazione e pagamenti",
          icon: <CreditCard className="w-4 h-4" />,
        },
      ],
    },
  ];

  // Menu with states (disabled, badges, etc.)
  const stateMenuItems = [
    {
      trigger: "Plans",
      triggerIcon: <Sparkles className="w-4 h-4" />,
      content: [
        {
          title: "Basic Plan",
          href: "/plans/basic",
          description: "Perfetto per iniziare",
          badge: { text: "Free", variant: "success" as const },
          icon: <Users className="w-4 h-4" />,
        },
        {
          title: "Pro Plan",
          href: "/plans/pro",
          description: "Per professionisti",
          badge: { text: "Popular", variant: "info" as const },
          icon: <Crown className="w-4 h-4" />,
        },
        {
          title: "Enterprise",
          href: "/plans/enterprise",
          description: "Per grandi team",
          badge: { text: "Coming Soon", variant: "warning" as const },
          disabled: true,
          icon: <Shield className="w-4 h-4" />,
        },
      ],
    },
    {
      trigger: "Beta Features",
      triggerIcon: <Bell className="w-4 h-4" />,
      disabled: true,
      content: [
        { title: "Feature 1", href: "/beta/1" },
        { title: "Feature 2", href: "/beta/2" },
      ],
    },
    {
      trigger: "Help",
      triggerIcon: <HelpCircle className="w-4 h-4" />,
      content: [
        {
          title: "Documentation",
          href: "/help/docs",
          description: "Guide e tutorial",
        },
        {
          title: "Contact Support",
          href: "/help/contact",
          description: "Assistenza clienti",
        },
        {
          title: "Community Forum",
          href: "https://community.example.com",
          description: "Forum della community",
          external: true,
        },
      ],
    },
  ];

  return (
    <div className="space-y-8">
      {/* Basic NavigationMenu */}
      <TitledSurface title="NavigationMenu Base" variant="primary" padding="lg">
        <div className="space-y-6">
          <ThemedText variant="secondary" className="text-sm">
            NavigationMenu semplice con layout list e trigger default.
          </ThemedText>

          <div className="flex justify-center">
            <NavigationMenu items={basicMenuItems} />
          </div>
        </div>
      </TitledSurface>

      {/* Trigger Variants */}
      <TitledSurface title="Trigger Variants" variant="secondary" padding="lg">
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <ThemedText variant="label" className="font-medium mb-3" block>
                Default Triggers
              </ThemedText>
              <NavigationMenu items={basicMenuItems.slice(0, 1)} triggerVariant="default" />
            </div>

            <div>
              <ThemedText variant="label" className="font-medium mb-3" block>
                Ghost Triggers
              </ThemedText>
              <NavigationMenu items={basicMenuItems.slice(0, 1)} triggerVariant="ghost" />
            </div>

            <div>
              <ThemedText variant="label" className="font-medium mb-3" block>
                Minimal Triggers
              </ThemedText>
              <NavigationMenu items={basicMenuItems.slice(0, 1)} triggerVariant="minimal" />
            </div>
          </div>
        </div>
      </TitledSurface>

      {/* Layout Types */}
      <TitledSurface title="Layout Types" variant="modal" padding="lg">
        <div className="space-y-8">
          {/* List Layout */}
          <div>
            <ThemedText variant="label" className="font-medium mb-3" block>
              List Layout - Con Gruppi
            </ThemedText>
            <div className="flex justify-center">
              <NavigationMenu items={groupedMenuItems} triggerVariant="ghost" />
            </div>
          </div>

          {/* Grid Layout */}
          <div>
            <ThemedText variant="label" className="font-medium mb-3" block>
              Grid Layout - Features
            </ThemedText>
            <div className="flex justify-center">
              <NavigationMenu items={gridMenuItems} triggerVariant="ghost" />
            </div>
          </div>

          {/* Mega Layout */}
          <div>
            <ThemedText variant="label" className="font-medium mb-3" block>
              Mega Menu Layout - Solutions
            </ThemedText>
            <div className="flex justify-center">
              <NavigationMenu items={megaMenuItems} triggerVariant="minimal" />
            </div>
          </div>
        </div>
      </TitledSurface>

      {/* Vertical Navigation */}
      <TitledSurface title="NavigationMenu Verticale" variant="info" padding="lg">
        <div className="space-y-6">
          <ThemedText variant="secondary" className="text-sm">
            Perfetto per sidebar navigation con orientamento verticale.
          </ThemedText>

          <div className="flex justify-center">
            <div className="w-72 p-4 bg-bg-secondary rounded-lg">
              <NavigationMenu
                items={verticalMenuItems}
                orientation="vertical"
                triggerVariant="ghost"
                size="md"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </TitledSurface>

      {/* Size Variants */}
      <TitledSurface title="Size Variants" variant="secondary" padding="lg">
        <div className="space-y-6">
          <div className="space-y-4">
            <div>
              <ThemedText variant="label" className="font-medium mb-3" block>
                Small Size
              </ThemedText>
              <NavigationMenu items={basicMenuItems.slice(0, 1)} size="sm" triggerVariant="ghost" />
            </div>

            <div>
              <ThemedText variant="label" className="font-medium mb-3" block>
                Medium Size (Default)
              </ThemedText>
              <NavigationMenu items={basicMenuItems.slice(0, 1)} size="md" triggerVariant="ghost" />
            </div>

            <div>
              <ThemedText variant="label" className="font-medium mb-3" block>
                Large Size
              </ThemedText>
              <NavigationMenu items={basicMenuItems.slice(0, 1)} size="lg" triggerVariant="ghost" />
            </div>
          </div>
        </div>
      </TitledSurface>

      {/* Advanced Features */}
      <TitledSurface title="Features Avanzate" variant="info" padding="lg">
        <div className="space-y-6">
          <ThemedText variant="secondary" className="text-sm">
            Badge, stati disabled, link esterni e icone personalizzate.
          </ThemedText>

          <div className="flex justify-center">
            <NavigationMenu items={stateMenuItems} triggerVariant="default" />
          </div>

          <div className="mt-6 p-4 bg-bg-secondary rounded-lg">
            <ThemedText variant="label" className="font-medium mb-2" block>
              Keyboard Navigation:
            </ThemedText>
            <div className="text-sm text-text-secondary space-y-1">
              <div>
                <kbd className="px-2 py-1 bg-bg-primary rounded text-xs">Tab</kbd> - Naviga tra i trigger
              </div>
              <div>
                <kbd className="px-2 py-1 bg-bg-primary rounded text-xs">Enter/Space</kbd> - Apri menu
              </div>
              <div>
                <kbd className="px-2 py-1 bg-bg-primary rounded text-xs">↑↓</kbd> - Naviga nel menu aperto
              </div>
              <div>
                <kbd className="px-2 py-1 bg-bg-primary rounded text-xs">Esc</kbd> - Chiudi menu
              </div>
              <div>
                <kbd className="px-2 py-1 bg-bg-primary rounded text-xs">Home/End</kbd> - Primo/ultimo item
              </div>
            </div>
          </div>
        </div>
      </TitledSurface>

      {/* Use Cases */}
      <TitledSurface title="Use Cases Reali" variant="modal" padding="lg">
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 border border-border-default rounded-lg">
              <ThemedText variant="primary" className="font-semibold mb-2" block>
                Header Navigation
              </ThemedText>
              <ThemedText variant="secondary" className="text-sm mb-4">
                Menu orizzontale per header con prodotti e soluzioni
              </ThemedText>
              <NavigationMenu items={basicMenuItems} triggerVariant="ghost" size="sm" />
            </div>

            <div className="p-4 border border-border-default rounded-lg">
              <ThemedText variant="primary" className="font-semibold mb-2" block>
                Sidebar Navigation
              </ThemedText>
              <ThemedText variant="secondary" className="text-sm mb-4">
                Menu verticale per sidebar con dashboard e settings
              </ThemedText>
              <NavigationMenu items={verticalMenuItems.slice(0, 2)} orientation="vertical" triggerVariant="ghost" size="sm" />
            </div>
          </div>

          <div className="p-4 border border-border-default rounded-lg">
            <ThemedText variant="primary" className="font-semibold mb-2" block>
              Marketing Website Menu
            </ThemedText>
            <ThemedText variant="secondary" className="text-sm mb-4">
              Mega menu per siti marketing con soluzioni per industry
            </ThemedText>
            <NavigationMenu items={megaMenuItems} triggerVariant="minimal" size="md" />
          </div>
        </div>
      </TitledSurface>
    </div>
  );
};

export default ShowNavigationMenu;
