// src/features/shared/components/ShowDataDisplay.tsx
import React, { useState } from "react";
import { Table, TableLink, Badge, type TableColumn, type BadgeVariant } from "../../../core/components/ui";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: "attivo" | "inattivo" | "pendente";
  lastLogin: string;
  projects: number;
}

interface Project {
  id: number;
  name: string;
  status: "completato" | "in-corso" | "paused" | "cancelled";
  priority: "alta" | "media" | "bassa";
  dueDate: string;
  team: string[];
}

const ShowDataDisplay: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  // Sample data
  const users: User[] = [
    {
      id: 1,
      name: "Mario Rossi",
      email: "mario.rossi@example.com",
      role: "Admin",
      status: "attivo",
      lastLogin: "2025-06-10",
      projects: 5,
    },
    {
      id: 2,
      name: "Giulia Bianchi",
      email: "giulia.bianchi@example.com",
      role: "Developer",
      status: "attivo",
      lastLogin: "2025-06-11",
      projects: 3,
    },
    {
      id: 3,
      name: "Luca Verdi",
      email: "luca.verdi@example.com",
      role: "Designer",
      status: "inattivo",
      lastLogin: "2025-06-05",
      projects: 2,
    },
    {
      id: 4,
      name: "Anna Neri",
      email: "anna.neri@example.com",
      role: "Manager",
      status: "pendente",
      lastLogin: "2025-06-09",
      projects: 8,
    },
  ];

  const projects: Project[] = [
    { id: 1, name: "Website Redesign", status: "in-corso", priority: "alta", dueDate: "2025-07-15", team: ["Mario", "Giulia"] },
    { id: 2, name: "Mobile App", status: "completato", priority: "media", dueDate: "2025-06-01", team: ["Luca", "Anna"] },
    { id: 3, name: "API Integration", status: "paused", priority: "bassa", dueDate: "2025-08-20", team: ["Giulia"] },
  ];

  const handleUserAction = (action: string, user: User) => {
    console.log(`${action} user:`, user);
    alert(`Azione "${action}" per ${user.name}`);
  };

  const handleProjectAction = (action: string, project: Project) => {
    console.log(`${action} project:`, project);
    alert(`Azione "${action}" per ${project.name}`);
  };

  const simulateLoading = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  // Table columns for users
  const userColumns: TableColumn<User>[] = [
    {
      header: "Nome",
      accessor: "name",
      sortable: true,
    },
    {
      header: "Email",
      accessor: (user) => (
        <TableLink
          variant="primary"
          onClick={() => handleUserAction("Email", user)}
          icon={
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
          }
        >
          {user.email}
        </TableLink>
      ),
    },
    {
      header: "Ruolo",
      accessor: "role",
    },
    {
      header: "Status",
      accessor: (user) => <Badge status={user.status} />,
    },
    {
      header: "Ultimo Login",
      accessor: "lastLogin",
      sortable: true,
    },
    {
      header: "Progetti",
      accessor: "projects",
      className: "text-center",
    },
    {
      header: "Azioni",
      accessor: (user) => (
        <div className="flex space-x-2">
          <TableLink
            variant="primary"
            onClick={() => handleUserAction("Visualizza", user)}
            icon={
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            }
          >
            Visualizza
          </TableLink>
          <TableLink
            variant="secondary"
            onClick={() => handleUserAction("Modifica", user)}
            icon={
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            }
          >
            Modifica
          </TableLink>
        </div>
      ),
      className: "text-center",
    },
  ];

  // Table columns for projects
  const projectColumns: TableColumn<Project>[] = [
    {
      header: "Progetto",
      accessor: (project) => (
        <TableLink variant="primary" onClick={() => handleProjectAction("Apri", project)}>
          {project.name}
        </TableLink>
      ),
      sortable: true,
    },
    {
      header: "Status",
      accessor: (project) => <Badge status={project.status} />,
    },
    {
      header: "Priorità",
      accessor: (project) => {
        const priorityVariantMap: Record<string, BadgeVariant> = {
          alta: "danger",
          media: "warning",
          bassa: "info",
        };
        const variant = priorityVariantMap[project.priority] || "default";
        return <Badge variant={variant} text={project.priority} />;
      },
    },
    {
      header: "Scadenza",
      accessor: "dueDate",
      sortable: true,
    },
    {
      header: "Team",
      accessor: (project) => (
        <div className="flex flex-wrap gap-1">
          {project.team.map((member, idx) => (
            <Badge key={idx} variant="default" size="xs" text={member} />
          ))}
        </div>
      ),
    },
    {
      header: "Azioni",
      accessor: (project) => (
        <div className="flex space-x-2">
          <TableLink
            variant="success"
            onClick={() => handleProjectAction("Completa", project)}
            disabled={project.status === "completato"}
          >
            Completa
          </TableLink>
          <TableLink variant="danger" onClick={() => handleProjectAction("Elimina", project)}>
            Elimina
          </TableLink>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-8">
      {/* Badge Examples */}
      <div>
        <h3 className="text-element-title mb-4">Badge Variants</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-body-sm font-medium mb-2">Standard Variants</h4>
            <div className="flex flex-wrap gap-2">
              <Badge variant="default">Default</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="danger">Danger</Badge>
              <Badge variant="info">Info</Badge>
            </div>
          </div>

          <div>
            <h4 className="text-body-sm font-medium mb-2">Status Mapping</h4>
            <div className="flex flex-wrap gap-2">
              <Badge status="attivo">Attivo</Badge>
              <Badge status="inattivo">Inattivo</Badge>
              <Badge status="eliminato">Eliminato</Badge>
              <Badge status="completato">Completato</Badge>
              <Badge status="pendente">Pendente</Badge>
            </div>
          </div>

          <div>
            <h4 className="text-body-sm font-medium mb-2">Sizes</h4>
            <div className="flex flex-wrap items-center gap-2">
              <Badge size="xs" variant="primary">
                Extra Small
              </Badge>
              <Badge size="sm" variant="primary">
                Small
              </Badge>
              <Badge size="md" variant="primary">
                Medium
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* TableLink Examples */}
      <div>
        <h3 className="text-element-title mb-4">TableLink Variants</h3>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="space-y-3">
            <div className="flex flex-wrap gap-4">
              <TableLink variant="primary" onClick={() => alert("Primary clicked")}>
                Primary Link
              </TableLink>
              <TableLink variant="secondary" onClick={() => alert("Secondary clicked")}>
                Secondary Link
              </TableLink>
              <TableLink variant="success" onClick={() => alert("Success clicked")}>
                Success Link
              </TableLink>
              <TableLink variant="danger" onClick={() => alert("Danger clicked")}>
                Danger Link
              </TableLink>
            </div>

            <div className="flex flex-wrap gap-4">
              <TableLink
                variant="primary"
                onClick={() => alert("With icon")}
                icon={
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                }
              >
                Con Icona
              </TableLink>
              <TableLink variant="secondary" onClick={() => {}} disabled>
                Disabled Link
              </TableLink>
            </div>
          </div>
        </div>
      </div>

      {/* Table Examples */}
      <div>
        <h3 className="text-element-title mb-4">Table - Utenti</h3>
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex justify-between items-center">
              <h4 className="text-body font-medium">Gestione Utenti</h4>
              <button onClick={simulateLoading} className="text-sm text-violet-600 hover:text-violet-700 dark:text-violet-400">
                Simula Loading
              </button>
            </div>
          </div>
          <Table
            data={users}
            columns={userColumns}
            keyExtractor={(user) => user.id.toString()}
            isLoading={isLoading}
            emptyMessage="Nessun utente trovato"
            size="md"
            hoverable={true}
          />
        </div>
      </div>

      {/* Table with different styling */}
      <div>
        <h3 className="text-element-title mb-4">Table - Progetti (Striped)</h3>
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <h4 className="text-body font-medium">Progetti Attivi</h4>
          </div>
          <Table
            data={projects}
            columns={projectColumns}
            keyExtractor={(project) => project.id.toString()}
            size="lg"
            striped={true}
            hoverable={true}
          />
        </div>
      </div>

      {/* Empty Table Example */}
      <div>
        <h3 className="text-element-title mb-4">Table Vuota</h3>
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          <Table
            data={[]}
            columns={userColumns}
            keyExtractor={() => ""}
            emptyMessage="Nessun dato disponibile per questo filtro"
            size="sm"
          />
        </div>
      </div>

      {/* Code Examples */}
      <div>
        <h3 className="text-element-title mb-4">Esempi di Codice</h3>
        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 text-sm font-mono overflow-x-auto">
          <div className="space-y-2 text-gray-800 dark:text-gray-200">
            <div>
              <span className="text-gray-500 dark:text-gray-400">// Badge con status mapping</span>
            </div>
            <div>
              <span className="text-blue-600 dark:text-blue-400">&lt;Badge</span>
              <span className="text-green-600 dark:text-green-400"> status</span>
              <span className="text-gray-800 dark:text-gray-200">=</span>
              <span className="text-orange-600 dark:text-orange-400">"attivo"</span>
              <span className="text-blue-600 dark:text-blue-400"> /&gt;</span>
            </div>
            <div className="mt-3">
              <span className="text-gray-500 dark:text-gray-400">// TableLink con icona</span>
            </div>
            <div>
              <span className="text-blue-600 dark:text-blue-400">&lt;TableLink</span>
              <span className="text-green-600 dark:text-green-400"> variant</span>
              <span className="text-gray-800 dark:text-gray-200">=</span>
              <span className="text-orange-600 dark:text-orange-400">"primary"</span>
              <span className="text-green-600 dark:text-green-400"> icon</span>
              <span className="text-gray-800 dark:text-gray-200">=</span>
              <span className="text-purple-600 dark:text-purple-400">{"{icon}"}</span>
              <span className="text-blue-600 dark:text-blue-400">&gt;</span>
            </div>
            <div className="mt-3">
              <span className="text-gray-500 dark:text-gray-400">// Table con configurazione</span>
            </div>
            <div>
              <span className="text-blue-600 dark:text-blue-400">&lt;Table</span>
              <span className="text-green-600 dark:text-green-400"> data</span>
              <span className="text-gray-800 dark:text-gray-200">=</span>
              <span className="text-purple-600 dark:text-purple-400">{"{users}"}</span>
              <span className="text-green-600 dark:text-green-400"> columns</span>
              <span className="text-gray-800 dark:text-gray-200">=</span>
              <span className="text-purple-600 dark:text-purple-400">{"{columns}"}</span>
              <span className="text-green-600 dark:text-green-400"> striped hoverable</span>
              <span className="text-blue-600 dark:text-blue-400"> /&gt;</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowDataDisplay;
