// src/core/components/ui/Table.tsx
import React, { ReactNode } from "react";
import { useThemeStyles } from "../../hooks/useThemeStyles";

export interface TableColumn<T> {
  header: string;
  accessor: keyof T | ((item: T) => ReactNode);
  className?: string;
  sortable?: boolean;
}

export type TableSize = "sm" | "md" | "lg";

interface TableProps<T> {
  data: T[];
  columns: TableColumn<T>[];
  keyExtractor: (item: T) => string | number;
  isLoading?: boolean;
  emptyMessage?: string;
  className?: string;
  size?: TableSize;
  striped?: boolean;
  hoverable?: boolean;
}

function Table<T>({
  data,
  columns,
  keyExtractor,
  isLoading = false,
  emptyMessage = "Nessun dato disponibile",
  className = "",
  size = "md",
  striped = false,
  hoverable = true,
}: TableProps<T>) {
  const { tokens, utils } = useThemeStyles();

  const sizeClasses = {
    sm: "text-sm",
    md: "text-sm",
    lg: "text-base",
  };

  const cellPaddingClasses = {
    sm: "px-3 py-2",
    md: "px-4 py-3",
    lg: "px-6 py-4",
  };

  const headerPaddingClasses = {
    sm: "px-3 py-2",
    md: "px-4 py-3",
    lg: "px-6 py-4",
  };

  if (isLoading) {
    return (
      <div className="p-8 text-center">
        <div className="flex items-center justify-center space-x-2">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-violet-500"></div>
          <span className={utils.text.secondary}>Caricamento in corso...</span>
        </div>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="p-8 text-center">
        <div className="text-4xl mb-4">📋</div>
        <p className={utils.text.secondary}>{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className={`min-w-full divide-y divide-[${tokens.surface.border}] ${sizeClasses[size]}`}>
        <thead className={`bg-[${tokens.surface.bg}]`}>
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                className={`${headerPaddingClasses[size]} text-left text-xs font-medium ${
                  utils.text.secondary
                } uppercase tracking-wider ${column.className || ""}`}
              >
                <div className="flex items-center space-x-1">
                  <span>{column.header}</span>
                  {column.sortable && (
                    <svg className={`w-4 h-4 ${utils.text.secondary}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                      />
                    </svg>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody
          className={`bg-[${tokens.surface.bgElevated}] divide-y divide-[${tokens.surface.border}] ${
            striped ? "divide-y-0" : ""
          }`}
        >
          {data.map((item, rowIndex) => (
            <tr
              key={keyExtractor(item)}
              className={`
                ${hoverable ? `hover:bg-[${tokens.interactive.hover.bg}]` : ""}
                ${striped && rowIndex % 2 === 1 ? `bg-[${tokens.surface.bg}]/50` : ""}
                ${utils.transition.fast}
              `}
            >
              {columns.map((column, colIndex) => {
                const cellContent = typeof column.accessor === "function" ? column.accessor(item) : item[column.accessor];

                return (
                  <td
                    key={colIndex}
                    className={`${cellPaddingClasses[size]} whitespace-nowrap ${utils.text.primary} ${column.className || ""}`}
                  >
                    {cellContent}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
