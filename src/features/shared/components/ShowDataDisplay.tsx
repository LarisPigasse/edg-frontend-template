// src/features/shared/components/ShowDataDisplay.tsx
import React, { useState } from "react";
import { ThemedSurface, ThemedText } from "../../../core/components/atomic";
import { Avatar, Badge, Button, Table, TableLink, type BadgeVariant, type BadgeSize } from "../../../core/components/ui";
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
  Settings,
  Crown,
  Shield,
  Star,
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

  const userData = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      role: "Admin",
      status: "active",
      avatar: "/api/placeholder/40/40?text=JD",
      lastSeen: "2 min fa",
      joinDate: "2023-01-15",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "Editor",
      status: "active",
      avatar: null, // Test fallback
      lastSeen: "1 ora fa",
      joinDate: "2023-03-22",
    },
    {
      id: 3,
      name: "Bob Wilson",
      email: "bob.wilson@example.com",
      role: "Viewer",
      status: "inactive",
      avatar: "/api/placeholder/40/40?text=BW",
      lastSeen: "3 giorni fa",
      joinDate: "2023-02-10",
    },
    {
      id: 4,
      name: "Alice Brown",
      email: "alice.brown@example.com",
      role: "Admin",
      status: "pending",
      avatar: null,
      lastSeen: "Mai",
      joinDate: "2024-01-08",
    },
  ];

  const [selectedUser, setSelectedUser] = useState<number | null>(null);

  // Table columns for user data
  const userColumns = [
    {
      header: "Utente",
      accessor: "user" as const,
      render: (user: (typeof userData)[0]) => (
        <div className="flex items-center gap-3">
          <Avatar
            src={user.avatar}
            alt={user.name}
            initials={user.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
            size="md"
            status={user.status === "active" ? "online" : user.status === "inactive" ? "offline" : undefined}
            variant={user.role === "Admin" ? "danger" : user.role === "Editor" ? "warning" : "secondary"}
            clickable
            onClick={() => setSelectedUser(user.id)}
          />
          <div>
            <div className="font-medium text-text-primary">{user.name}</div>
            <div className="text-sm text-text-secondary">{user.email}</div>
          </div>
        </div>
      ),
    },
    {
      header: "Ruolo",
      accessor: "role" as const,
      render: (user: (typeof userData)[0]) => (
        <div className="flex items-center gap-2">
          {user.role === "Admin" && <Crown className="w-4 h-4 text-amber-500" />}
          {user.role === "Editor" && <Shield className="w-4 h-4 text-blue-500" />}
          <Badge status={user.role.toLowerCase()}>{user.role}</Badge>
        </div>
      ),
    },
    {
      header: "Status",
      accessor: "status" as const,
      render: (user: (typeof userData)[0]) => <Badge status={user.status}>{user.status}</Badge>,
    },
    {
      header: "Ultimo Accesso",
      accessor: "lastSeen" as const,
    },
    {
      header: "Email",
      accessor: "email" as const,
      render: (user: (typeof userData)[0]) => (
        <TableLink variant="primary" onClick={() => window.open(`mailto:${user.email}`)}>
          {user.email}
        </TableLink>
      ),
    },
  ];

  // Mock team data for avatar groups
  const teams = [
    {
      id: 1,
      name: "Frontend Team",
      members: [
        { name: "John Doe", avatar: "/api/placeholder/32/32?text=JD", status: "online" },
        { name: "Jane Smith", avatar: null, initials: "JS", status: "busy" },
        { name: "Bob Wilson", avatar: "/api/placeholder/32/32?text=BW", status: "away" },
        { name: "Alice Brown", avatar: null, initials: "AB", status: "offline" },
        { name: "Charlie Davis", avatar: "/api/placeholder/32/32?text=CD", status: "online" },
      ],
      project: "React Dashboard",
    },
    {
      id: 2,
      name: "Backend Team",
      members: [
        { name: "Eva Martinez", avatar: "/api/placeholder/32/32?text=EM", status: "online" },
        { name: "Frank Thompson", avatar: null, initials: "FT", status: "busy" },
        { name: "Grace Lee", avatar: "/api/placeholder/32/32?text=GL", status: "online" },
      ],
      project: "API Gateway",
    },
  ];

  const handleUserClick = (userId: number) => {
    setSelectedUser(userId);
    const user = userData.find((u) => u.id === userId);
    console.log("Clicked user:", user?.name);
  };

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

      {/* Avatar Showcase */}
      <TitledSurface title="Avatar Components" variant="primary" padding="lg">
        <div className="space-y-6">
          {/* Basic Avatars */}
          <div>
            <ThemedText variant="label" className="font-medium mb-3" block>
              Avatar Base - Dimensioni e Forme
            </ThemedText>
            <div className="flex items-center gap-4 mb-4">
              <Avatar initials="XS" size="xs" variant="primary" />
              <Avatar initials="SM" size="sm" variant="secondary" />
              <Avatar initials="MD" size="md" variant="success" />
              <Avatar initials="LG" size="lg" variant="warning" />
              <Avatar initials="XL" size="xl" variant="danger" />
            </div>

            <div className="flex items-center gap-4">
              <Avatar initials="CI" shape="circle" variant="primary" size="lg" />
              <Avatar initials="SQ" shape="square" variant="secondary" size="lg" />
              <Avatar initials="RO" shape="rounded" variant="info" size="lg" />
            </div>
          </div>

          {/* Status Indicators */}
          <div>
            <ThemedText variant="label" className="font-medium mb-3" block>
              Status Indicators
            </ThemedText>
            <div className="flex items-center gap-6">
              <Avatar src="/api/placeholder/48/48?text=ON" alt="Online User" status="online" size="lg" bordered />
              <Avatar initials="BU" status="busy" variant="danger" size="lg" bordered />
              <Avatar initials="AW" status="away" variant="warning" size="lg" bordered />
              <Avatar initials="OF" status="offline" variant="secondary" size="lg" bordered />
            </div>
          </div>

          {/* Interactive Avatars */}
          <div>
            <ThemedText variant="label" className="font-medium mb-3" block>
              Avatar Interattivi
            </ThemedText>
            <div className="flex items-center gap-4">
              <Avatar
                src="/api/placeholder/48/48?text=PR"
                alt="Profile Avatar"
                clickable
                onClick={() => handleUserClick(1)}
                bordered
                size="lg"
                status="online"
              />
              <Avatar initials="JS" variant="primary" clickable onClick={() => handleUserClick(2)} size="md" status="busy" />
              <Avatar
                fallback={<Settings className="w-5 h-5" />}
                variant="secondary"
                clickable
                onClick={() => console.log("Settings clicked")}
                shape="rounded"
                size="md"
              />
            </div>

            {selectedUser && (
              <div className="mt-3 p-3 bg-bg-info rounded-lg">
                <ThemedText variant="primary" className="text-sm">
                  Avatar cliccato: User ID {selectedUser}
                </ThemedText>
              </div>
            )}
          </div>
        </div>
      </TitledSurface>

      {/* Avatar Groups */}
      <TitledSurface title="Avatar Groups - Team Display" variant="secondary" padding="lg">
        <div className="space-y-6">
          {teams.map((team) => (
            <div key={team.id} className="p-4 border border-border-default rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <ThemedText variant="primary" className="font-semibold" block>
                    {team.name}
                  </ThemedText>
                  <ThemedText variant="secondary" className="text-sm">
                    {team.project} • {team.members.length} membri
                  </ThemedText>
                </div>
                <Badge variant="info">{team.members.length}</Badge>
              </div>

              {/* Avatar Group */}
              <div className="flex items-center">
                <div className="flex -space-x-2 mr-3">
                  {team.members.slice(0, 4).map((member, index) => (
                    <Avatar
                      key={index}
                      src={member.avatar}
                      alt={member.name}
                      initials={member.initials}
                      size="md"
                      status={member.status as any}
                      bordered
                      clickable
                      className={`z-${40 - index * 10}`}
                      onClick={() => console.log("Member clicked:", member.name)}
                    />
                  ))}
                  {team.members.length > 4 && (
                    <Avatar
                      initials={`+${team.members.length - 4}`}
                      variant="secondary"
                      size="md"
                      bordered
                      clickable
                      onClick={() => console.log("Show all members for", team.name)}
                    />
                  )}
                </div>
                <ThemedText variant="secondary" className="text-xs">
                  {team.members.filter((m) => m.status === "online").length} online
                </ThemedText>
              </div>
            </div>
          ))}
        </div>
      </TitledSurface>

      {/* Table with Avatars */}
      <TitledSurface title="Tabella Utenti con Avatar" variant="modal" padding="lg">
        <div className="space-y-4">
          <ThemedText variant="secondary" className="text-sm">
            Esempio di integrazione Avatar in tabelle per liste utenti con status e ruoli.
          </ThemedText>

          <Table data={userData} columns={userColumns} keyExtractor={(item) => item.id.toString()} hoverable size="md" />

          {selectedUser && (
            <div className="p-4 bg-bg-info rounded-lg">
              <ThemedText variant="primary" className="font-medium mb-2" block>
                Utente Selezionato:
              </ThemedText>
              {(() => {
                const user = userData.find((u) => u.id === selectedUser);
                return user ? (
                  <div className="flex items-center gap-3">
                    <Avatar
                      src={user.avatar}
                      alt={user.name}
                      initials={user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                      status={user.status === "active" ? "online" : "offline"}
                      variant={user.role === "Admin" ? "danger" : "primary"}
                    />
                    <div>
                      <div className="font-medium">{user.name}</div>
                      <div className="text-sm text-text-secondary">
                        {user.role} • {user.email}
                      </div>
                    </div>
                  </div>
                ) : null;
              })()}
            </div>
          )}
        </div>
      </TitledSurface>
    </div>
  );
};

export default ShowDataDisplay;
