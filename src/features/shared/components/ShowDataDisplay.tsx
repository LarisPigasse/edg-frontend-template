// src/features/shared/components/ShowDataDisplay.tsx
import React, { useState } from "react";
import { ThemedSurface, ThemedText } from "../../../core/components/atomic";
import { Badge, Button, Table, TableLink, type BadgeVariant, type BadgeSize } from "../../../core/components/ui";
import { HeaderGroup, TitledSurface } from "../../../core/components/layout";
import {
  Clock,
  CheckCircle,
  XCircle,
  Info,
  Users,
  FileText,
  ExternalLink,
  Eye,
  Edit,
  Trash2,
  Copy,
  Download,
} from "lucide-react";

const ShowDataDisplay: React.FC = () => {
  const variants: BadgeVariant[] = ["success", "warning", "danger", "info", "default"];
  const sizes: BadgeSize[] = ["xs", "sm", "md"];

  // Status examples for auto-mapping demo
  const statusExamples = ["attivo", "inattivo", "errore", "in attesa"];

  const [selectedRow, setSelectedRow] = useState<string | null>(null);

  // Mock data for table examples
  const mockUsers = [
    { id: "1", name: "Mario Rossi", email: "mario.rossi@example.com", role: "Admin", status: "attivo" },
    { id: "2", name: "Laura Bianchi", email: "laura.bianchi@example.com", role: "Editor", status: "inattivo" },
    { id: "3", name: "Paolo Verdi", email: "paolo.verdi@example.com", role: "Viewer", status: "pendente" },
  ];

  const mockProjects = [
    { id: "PRJ-001", name: "Frontend Template", type: "React", priority: "high", status: "completato" },
    { id: "PRJ-002", name: "API Gateway", type: "Node.js", priority: "medium", status: "in_elaborazione" },
    { id: "PRJ-003", name: "Mobile App", type: "React Native", priority: "low", status: "nuovo" },
  ];

  const handleRowClick = (id: string) => {
    setSelectedRow(selectedRow === id ? null : id);
  };

  const handleEmailClick = (user: (typeof mockUsers)[0]) => {
    window.open(`mailto:${user.email}`, "_blank");
  };

  // Mock handlers for actions
  const handleEditUser = (user: (typeof mockUsers)[0]) => {
    alert(`Modifica utente: ${user.name}`);
  };

  const handleDeleteUser = (user: (typeof mockUsers)[0]) => {
    alert(`Elimina utente: ${user.name}`);
  };

  const handleDuplicateUser = (user: (typeof mockUsers)[0]) => {
    alert(`Duplica utente: ${user.name}`);
  };

  const handleExportUser = (user: (typeof mockUsers)[0]) => {
    alert(`Esporta utente: ${user.name}`);
  };

  const handleEditProject = (project: (typeof mockProjects)[0]) => {
    alert(`Modifica progetto: ${project.name}`);
  };

  const handleDeleteProject = (project: (typeof mockProjects)[0]) => {
    alert(`Elimina progetto: ${project.name}`);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <HeaderGroup
          title="Data Display Components"
          subtitle="Badge e componenti per la visualizzazione di dati, stati e informazioni"
          spacing="tight"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 1. Badge Variants */}
        <TitledSurface title="Badge - Colori e dimensioni" padding="md" className="lg:col-span-1">
          <div className="grid grid-cols-5 gap-4">
            {variants.map((variant) => (
              <div key={variant} className="space-y-3">
                <Badge variant={variant}>{variant}</Badge>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-6 mt-4">
            {sizes.map((size) => (
              <div key={size} className="space-y-2">
                <Badge variant="info" size={size}>
                  Badge {size}
                </Badge>
              </div>
            ))}
          </div>
        </TitledSurface>

        <TitledSurface title="Status Auto-Mapping" padding="md" className="lg:col-span-2">
          <div className="space-y-4">
            <ThemedText variant="secondary" className="text-sm">
              I Badge possono essere generati automaticamente da status testuali, senza specificare colori manualmente.
            </ThemedText>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {statusExamples.map((status) => (
                <div key={status} className="flex items-center justify-between p-3 border border-border-default rounded-lg">
                  <ThemedText variant="secondary" className="text-sm">
                    {status}
                  </ThemedText>
                  <Badge status={status}>{status}</Badge>
                </div>
              ))}
            </div>
          </div>
        </TitledSurface>
      </div>
      {/* 3. Status Auto-Mapping */}

      {/* 5. Badge with Icons */}
      <TitledSurface title="Badge con Icone" padding="md">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Badge variant="success" size="sm">
            <CheckCircle className="w-3 h-3 mr-1" />
            Completato
          </Badge>

          <Badge variant="warning" size="sm">
            <Clock className="w-3 h-3 mr-1" />
            In attesa
          </Badge>

          <Badge variant="danger" size="sm">
            <XCircle className="w-3 h-3 mr-1" />
            Errore
          </Badge>

          <Badge variant="info" size="sm">
            <Info className="w-3 h-3 mr-1" />
            Informazione
          </Badge>
        </div>
      </TitledSurface>

      {/* Table Component */}
      <TitledSurface title="Table - Tabella con Componente" padding="md">
        <Table
          data={mockUsers}
          columns={[
            {
              header: "Utente",
              accessor: (user) => (
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-text-secondary" />
                  <ThemedText variant="primary" className="font-medium">
                    {user.name}
                  </ThemedText>
                </div>
              ),
            },
            {
              header: "Email",
              accessor: "email",
              clickable: true,
              clickVariant: "primary",
              onCellClick: handleEmailClick,
            },
            { header: "Ruolo", accessor: "role" },
            {
              header: "Status",
              accessor: (user) => <Badge status={user.status}>{user.status}</Badge>,
            },
            {
              header: () => <div className="flex justify-end">Azioni</div>,
              accessor: () => (
                <div className="flex items-center justify-end space-x-2">
                  <Button variant="ghost" size="xs">
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="xs">
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="xs">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              ),
            },
          ]}
          keyExtractor={(user) => user.id}
          hoverable
          striped
          size="md"
        />
        <div className="mt-4 p-3 bg-bg-info border border-border-default rounded-lg">
          <ThemedText variant="info" className="text-sm">
            💡 <strong>Celle Email cliccabili:</strong> Prova a cliccare su un indirizzo email per aprire il client mail
          </ThemedText>
        </div>
      </TitledSurface>

      {/* TableLink Component */}
      <TitledSurface title="TableLink - Righe Cliccabili" padding="md">
        <div className="space-y-2">
          {mockProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleRowClick(project.id)}
              className={`
                p-4 border border-border-default rounded-lg cursor-pointer transition-all
                hover:bg-bg-hover hover:border-border-strong
                ${selectedRow === project.id ? "bg-bg-selected border-border-contrast" : "bg-bg-primary"}
              `}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <FileText className="w-5 h-5 text-text-secondary" />
                  <div>
                    <div className="flex items-center space-x-2">
                      <ThemedText variant="primary" className="font-medium">
                        {project.name}
                      </ThemedText>
                      <ThemedText variant="secondary" className="text-sm">
                        ({project.id})
                      </ThemedText>
                    </div>
                    <ThemedText variant="secondary" className="text-sm">
                      {project.type}
                    </ThemedText>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Badge
                    variant={project.priority === "high" ? "danger" : project.priority === "medium" ? "warning" : "default"}
                    size="xs"
                  >
                    {project.priority}
                  </Badge>
                  <Badge status={project.status}>{project.status}</Badge>
                  <TableLink
                    variant="primary"
                    onClick={(e) => {
                      e.stopPropagation();
                      alert(`Navigating to ${project.name}`);
                    }}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </TableLink>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedRow && (
          <div className="mt-4 p-3 bg-bg-info border border-border-default rounded-lg">
            <ThemedText variant="info" className="text-sm">
              Progetto selezionato: <strong>{mockProjects.find((p) => p.id === selectedRow)?.name}</strong>
            </ThemedText>
          </div>
        )}
      </TitledSurface>

      {/* Table with Actions - Menu Mode */}
      <TitledSurface title="Table con Actions - Modalità Menu" padding="md">
        <Table
          data={mockUsers}
          columns={[
            {
              header: "Utente",
              accessor: (user) => (
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-text-secondary" />
                  <ThemedText variant="primary" className="font-medium">
                    {user.name}
                  </ThemedText>
                </div>
              ),
            },
            {
              header: "Email",
              accessor: "email",
              clickable: true,
              clickVariant: "primary",
              onCellClick: handleEmailClick,
            },
            { header: "Ruolo", accessor: "role" },
            {
              header: "Status",
              accessor: (user) => <Badge status={user.status}>{user.status}</Badge>,
            },
          ]}
          keyExtractor={(user) => user.id}
          rowActions={{
            enabled: true,
            mode: "menu",
            quickActions: {
              edit: {
                enabled: true,
                onEdit: handleEditUser,
              },
              delete: {
                enabled: true,
                onDelete: handleDeleteUser,
                requireConfirmation: true,
                getItemName: (user) => user.name,
              },
            },
            actions: (user) => [
              {
                id: "duplicate",
                label: "Duplica",
                onClick: () => handleDuplicateUser(user),
                icon: <Copy className="w-4 h-4" />,
                divider: true,
              },
              {
                id: "export",
                label: "Esporta",
                onClick: () => handleExportUser(user),
                icon: <Download className="w-4 h-4" />,
              },
            ],
          }}
          hoverable
          striped
          size="md"
        />
      </TitledSurface>

      {/* Table with Actions - Buttons Mode */}
      <TitledSurface title="Table con Actions - Modalità Bottoni" padding="md">
        <Table
          data={mockProjects}
          columns={[
            {
              header: "Progetto",
              accessor: (project) => (
                <div className="flex items-center space-x-2">
                  <FileText className="w-4 h-4 text-text-secondary" />
                  <div>
                    <ThemedText variant="primary" className="font-medium">
                      {project.name}
                    </ThemedText>
                    <ThemedText variant="secondary" className="text-xs">
                      {project.id}
                    </ThemedText>
                  </div>
                </div>
              ),
            },
            { header: "Tecnologia", accessor: "type" },
            {
              header: "Priorità",
              accessor: (project) => (
                <Badge
                  variant={project.priority === "high" ? "danger" : project.priority === "medium" ? "warning" : "default"}
                  size="xs"
                >
                  {project.priority}
                </Badge>
              ),
            },
            {
              header: "Status",
              accessor: (project) => <Badge status={project.status}>{project.status}</Badge>,
            },
          ]}
          keyExtractor={(project) => project.id}
          rowActions={{
            enabled: true,
            mode: "buttons",
            quickActions: {
              edit: {
                enabled: true,
                onEdit: handleEditProject,
                showLabel: false,
              },
              delete: {
                enabled: true,
                onDelete: handleDeleteProject,
                requireConfirmation: true,
                getItemName: (project) => project.name,
                showLabel: false,
              },
            },
          }}
          hoverable
          size="md"
        />
      </TitledSurface>

      {/* Table with Actions - Mixed Mode */}
      <TitledSurface title="Table con Actions - Modalità Mista" padding="md">
        <Table
          data={mockUsers}
          columns={[
            {
              header: "Utente",
              accessor: (user) => (
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-text-secondary" />
                  <ThemedText variant="primary" className="font-medium">
                    {user.name}
                  </ThemedText>
                </div>
              ),
            },
            { header: "Email", accessor: "email" },
            { header: "Ruolo", accessor: "role" },
            {
              header: "Status",
              accessor: (user) => <Badge status={user.status}>{user.status}</Badge>,
            },
          ]}
          keyExtractor={(user) => user.id}
          rowActions={{
            enabled: true,
            mode: "mixed",
            header: "Operazioni",
            quickActions: {
              edit: {
                enabled: true,
                onEdit: handleEditUser,
              },
              delete: {
                enabled: true,
                onDelete: handleDeleteUser,
                requireConfirmation: true,
                getItemName: (user) => user.name,
              },
            },
            actions: (user) => [
              {
                id: "duplicate",
                label: "Duplica Utente",
                onClick: () => handleDuplicateUser(user),
                icon: <Copy className="w-4 h-4" />,
              },
              {
                id: "export",
                label: "Esporta Dati",
                onClick: () => handleExportUser(user),
                icon: <Download className="w-4 h-4" />,
              },
              {
                id: "view",
                label: "Visualizza Dettagli",
                onClick: () => alert(`Visualizza dettagli: ${user.name}`),
                icon: <Eye className="w-4 h-4" />,
              },
            ],
          }}
          hoverable
          striped
          size="md"
        />
      </TitledSurface>

      {/* 6. Code Examples */}
      <ThemedSurface variant="secondary" borderVariant="default" className="rounded-lg border p-4">
        <ThemedText variant="primary" className="text-lg font-semibold mb-4">
          Esempi di Codice
        </ThemedText>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
          <div className="bg-bg-contrast text-text-contrast p-4 rounded text-sm font-mono overflow-x-auto">
            <div className="text-green-400 mb-2">// Badge base</div>
            <div>{`<Badge variant="success">Attivo</Badge>`}</div>
          </div>

          <div className="bg-bg-contrast text-text-contrast p-4 rounded text-sm font-mono overflow-x-auto">
            <div className="text-green-400 mb-2">// Auto-mapping da status</div>
            <div>{`<Badge status="completato">Task Done</Badge>`}</div>
            <div className="text-gray-400 text-xs mt-1">// Automatically maps to "success"</div>
          </div>

          <div className="bg-bg-contrast text-text-contrast p-4 rounded text-sm font-mono overflow-x-auto">
            <div className="text-green-400 mb-2">// Con icone</div>
            <div>{`<Badge variant="success" size="sm">`}</div>
            <div className="ml-4">{`<CheckIcon className="w-3 h-3 mr-1" />`}</div>
            <div className="ml-4">{`Completato`}</div>
            <div>{`</Badge>`}</div>
          </div>

          <div className="bg-bg-contrast text-text-contrast p-4 rounded text-sm font-mono overflow-x-auto">
            <div className="text-green-400 mb-2">// Table component</div>
            <div>{`<Table data={users} columns={columns} keyExtractor={user => user.id} hoverable striped />`}</div>
          </div>

          <div className="bg-bg-contrast text-text-contrast p-4 rounded text-sm font-mono overflow-x-auto">
            <div className="text-green-400 mb-2">// TableLink clickable cell</div>
            <div>{`<TableLink variant="primary" onClick={handleClick}>`}</div>
            <div className="ml-4">{`user.email`}</div>
            <div>{`</TableLink>`}</div>
          </div>

          <div className="bg-bg-contrast text-text-contrast p-4 rounded text-sm font-mono overflow-x-auto">
            <div className="text-green-400 mb-2">// Table con celle cliccabili</div>
            <div>{`{ header: "Email", accessor: "email", clickable: true, onCellClick: handleEmailClick }`}</div>
          </div>
        </div>
      </ThemedSurface>
    </div>
  );
};

export default ShowDataDisplay;
