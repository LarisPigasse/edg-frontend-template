// src/features/shared/ComponentExplorer.tsx
import React, { useState, useMemo } from "react";
import { InfoCard } from "../../core/components/ui";
import { HeaderGroup } from "../../core/components/layout";
import { COMPONENTS_LIST, searchComponents, getComponentsByCategory } from "../../data/components.data";
import type { ComponentCategory } from "../../core/components/ui/InfoCard";
import type { ComponentData } from "../../data/components.data";
import ComponentModal from "./ComponentModal";

interface ComponentExplorerProps {
  /** Categoria da filtrare (opzionale) */
  categoryFilter?: ComponentCategory;
  /** Query di ricerca iniziale */
  initialSearch?: string;
  /** Titolo personalizzato */
  title?: string;
  /** Sottotitolo personalizzato */
  subtitle?: string;
  /** Classi CSS aggiuntive */
  className?: string;
}

/**
 * ComponentExplorer - Grid di InfoCard per esplorare i componenti del design system.
 * Include ricerca, filtri per categoria e modal per i dettagli.
 */
const ComponentExplorer: React.FC<ComponentExplorerProps> = ({
  categoryFilter,
  initialSearch = "",
  title = "Component Explorer",
  subtitle = "Esplora tutti i componenti del design system EDG",
  className = "",
}) => {
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState<ComponentCategory | "all">(categoryFilter || "all");
  const [selectedComponent, setSelectedComponent] = useState<ComponentData | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Filtra e cerca componenti
  const filteredComponents = useMemo(() => {
    let components = COMPONENTS_LIST;

    // Filtra per categoria
    if (selectedCategory !== "all") {
      components = getComponentsByCategory(selectedCategory);
    }

    // Filtra per ricerca
    if (searchQuery.trim()) {
      components = searchComponents(searchQuery.trim()).filter(
        (comp) => selectedCategory === "all" || comp.category === selectedCategory
      );
    }

    return components;
  }, [searchQuery, selectedCategory]);

  // Categorie disponibili per il filtro
  const availableCategories = useMemo(() => {
    const categories = Array.from(new Set(COMPONENTS_LIST.map((comp) => comp.category)));
    return categories.sort();
  }, []);

  // Handle card click
  const handleCardClick = (component: ComponentData) => {
    setSelectedComponent(component);
    setModalOpen(true);
  };

  // Handle modal close
  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedComponent(null);
  };

  // Get stats
  const totalComponents = COMPONENTS_LIST.length;
  const filteredCount = filteredComponents.length;

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Header */}
      <div>
        <HeaderGroup
          title={title}
          subtitle={`${subtitle} • ${filteredCount} di ${totalComponents} componenti`}
          spacing="tight"
        />
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Search Input */}
        <div className="flex-1">
          <input
            type="text"
            placeholder="Cerca componenti..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 border border-border-default rounded-lg bg-bg-primary text-text-primary placeholder-text-placeholder focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
          />
        </div>

        {/* Category Filter */}
        <div className="sm:w-48">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value as ComponentCategory | "all")}
            className="w-full px-4 py-2 border border-border-default rounded-lg bg-bg-primary text-text-primary focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
          >
            <option value="all">Tutte le categorie</option>
            {availableCategories.map((category) => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Results Info */}
      {searchQuery && (
        <div className="text-sm text-text-secondary">
          {filteredCount > 0 ? (
            <>
              Trovati <strong>{filteredCount}</strong> componenti per "{searchQuery}"
            </>
          ) : (
            <>Nessun componente trovato per "{searchQuery}"</>
          )}
        </div>
      )}

      {/* Components Grid */}
      {filteredComponents.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
          {filteredComponents.map((component) => (
            <InfoCard
              key={component.id}
              title={component.title}
              description={component.description}
              category={component.category}
              onClick={() => handleCardClick(component)}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-lg font-semibold text-text-primary mb-2">Nessun componente trovato</h3>
          <p className="text-text-secondary">Prova a modificare i filtri di ricerca o la categoria selezionata.</p>
          {(searchQuery || selectedCategory !== "all") && (
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="mt-4 px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors"
            >
              Mostra tutti i componenti
            </button>
          )}
        </div>
      )}

      {/* Component Details Modal */}
      {selectedComponent && <ComponentModal isOpen={modalOpen} component={selectedComponent} onClose={handleModalClose} />}
    </div>
  );
};

export default ComponentExplorer;
