// src/features/shared/components/ShowActions.tsx
import React, { useState } from "react";
import { ActionMenu, CreateAction, EditAction, DeleteAction, type Action } from "../../../core/components/actions";

import { Table, Badge, Button, type TableColumn } from "../../../core/components/ui";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: "attivo" | "inattivo" | "sospeso";
  canEdit: boolean;
  canDelete: boolean;
}

const ShowActions: React.FC = () => {
  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      name: "Mario Rossi",
      email: "mario@example.com",
      role: "Admin",
      status: "attivo",
      canEdit: true,
      canDelete: false,
    },
    {
      id: 2,
      name: "Giulia Bianchi",
      email: "giulia@example.com",
      role: "Editor",
      status: "attivo",
      canEdit: true,
      canDelete: true,
    },
    {
      id: 3,
      name: "Luca Verdi",
      email: "luca@example.com",
      role: "Viewer",
      status: "inattivo",
      canEdit: false,
      canDelete: true,
    },
    { id: 4, name: "Anna Neri", email: "anna@example.com", role: "Editor", status: "sospeso", canEdit: true, canDelete: true },
  ]);

  const handleCreateUser = () => {
    const newUser: User = {
      id: users.length + 1,
      name: `Nuovo Utente ${users.length + 1}`,
      email: `user${users.length + 1}@example.com`,
      role: "Viewer",
      status: "attivo",
      canEdit: true,
      canDelete: true,
    };
    setUsers((prev) => [...prev, newUser]);
    alert(`Creato utente: ${newUser.name}`);
  };

  const handleEditUser = (user: User) => {
    alert(`Modifica utente: ${user.name}`);
  };

  const handleDeleteUser = (user: User) => {
    setUsers((prev) => prev.filter((u) => u.id !== user.id));
    alert(`Eliminato utente: ${user.name}`);
  };

  const handleViewUser = (user: User) => {
    alert(`Visualizza dettagli: ${user.name}`);
  };

  const handleDuplicateUser = (user: User) => {
    const duplicatedUser: User = {
      ...user,
      id: users.length + 1,
      name: `${user.name} (Copia)`,
      email: `copy_${user.email}`,
    };
    setUsers((prev) => [...prev, duplicatedUser]);
    alert(`Duplicato utente: ${user.name}`);
  };

  const handleExportUsers = () => {
    alert("Esportazione utenti in corso...");
  };

  const handleBulkAction = (action: string) => {
    alert(`Azione bulk: ${action}`);
  };

  // Table columns
  const userColumns: TableColumn<User>[] = [
    {
      header: "Nome",
      accessor: "name",
      sortable: true,
    },
    {
      header: "Email",
      accessor: "email",
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
      header: "Azioni Singole",
      accessor: (user) => (
        <div className="flex items-center space-x-1">
          <EditAction item={user} onEdit={handleEditUser} canEdit={(u) => u.canEdit} tooltip="Modifica utente" />
          <DeleteAction item={user} onDelete={handleDeleteUser} canDelete={(u) => u.canDelete} tooltip="Elimina utente" />
        </div>
      ),
      className: "text-center",
    },
    {
      header: "Menu Azioni",
      accessor: (user) => {
        const actions: Action[] = [
          {
            id: "view",
            label: "Visualizza",
            onClick: () => handleViewUser(user),
          },
          {
            id: "edit",
            label: "Modifica",
            onClick: () => handleEditUser(user),
            disabled: !user.canEdit,
          },
          {
            id: "copy",
            label: "Duplica",
            onClick: () => handleDuplicateUser(user),
            variant: "success",
          },
          {
            id: "delete",
            label: "Elimina",
            onClick: () => handleDeleteUser(user),
            disabled: !user.canDelete,
            variant: "danger",
          },
        ];

        return <ActionMenu actions={actions} alignMenu="left" size="sm" />;
      },
      className: "text-center",
    },
  ];

  return (
    <div className="space-y-8">
      {/* CreateAction Examples */}
      <div>
        <h3 className="text-element-title mb-4">Create Actions</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-body-sm font-medium mb-3">Varianti Create</h4>
            <div className="flex flex-wrap gap-3">
              <CreateAction onClick={handleCreateUser} label="Nuovo Utente" />
              <CreateAction onClick={handleCreateUser} label="Aggiungi" variant="secondary" />
              <CreateAction onClick={handleCreateUser} label="Crea Elemento" variant="outline" />
              <CreateAction
                onClick={handleCreateUser}
                label="Importa"
                variant="info"
                icon={
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                    />
                  </svg>
                }
              />
            </div>
          </div>

          <div>
            <h4 className="text-body-sm font-medium mb-3">Dimensioni Create</h4>
            <div className="flex flex-wrap items-center gap-3">
              <CreateAction onClick={handleCreateUser} label="Small" size="sm" />
              <CreateAction onClick={handleCreateUser} label="Medium" size="md" />
              <CreateAction onClick={handleCreateUser} label="Large" size="lg" />
            </div>
          </div>
        </div>
      </div>

      {/* Edit & Delete Actions Examples */}
      <div>
        <h3 className="text-element-title mb-4">Edit & Delete Actions</h3>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-body-sm font-medium mb-3">Edit Actions</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded">
                  <span className="text-body-sm">Documento modificabile</span>
                  <EditAction item={users[0]} onEdit={handleEditUser} canEdit={() => true} />
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded">
                  <span className="text-body-sm">Documento protetto</span>
                  <EditAction
                    item={users[0]}
                    onEdit={handleEditUser}
                    canEdit={() => false}
                    tooltip="Non hai i permessi per modificare"
                  />
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-body-sm font-medium mb-3">Delete Actions</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded">
                  <span className="text-body-sm">Elemento eliminabile</span>
                  <DeleteAction item={users[1]} onDelete={handleDeleteUser} canDelete={() => true} />
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded">
                  <DeleteAction
                    item={users[0]}
                    onDelete={handleDeleteUser}
                    canDelete={() => false}
                    tooltip="Admin non eliminabile"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ActionMenu Examples */}
      <div>
        <h3 className="text-element-title mb-4">Action Menus</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-body-sm font-medium mb-3">Varianti Menu</h4>
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center space-x-2">
                <span className="text-body-sm">Menu Standard:</span>
                <ActionMenu
                  actions={[
                    { id: "view", label: "Visualizza", onClick: () => alert("Visualizza") },
                    { id: "edit", label: "Modifica", onClick: () => alert("Modifica") },
                    { id: "delete", label: "Elimina", onClick: () => alert("Elimina"), variant: "danger" },
                  ]}
                />
              </div>

              <div className="flex items-center space-x-2">
                <span className="text-body-sm">Menu Personalizzato:</span>
                <ActionMenu
                  actions={[
                    { id: "copy", label: "Copia Link", onClick: () => alert("Link copiato"), variant: "success" },
                    { id: "export", label: "Esporta", onClick: () => alert("Esportazione"), variant: "warning" },
                    { id: "archive", label: "Archivia", onClick: () => alert("Archiviato") },
                  ]}
                  menuButton={
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  }
                />
              </div>

              <div className="flex items-center space-x-2">
                <span className="text-body-sm">Menu Disabilitato:</span>
                <ActionMenu actions={[]} disabled={true} />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-body-sm font-medium mb-3">Allineamento Menu</h4>
            <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-800 rounded">
              <div className="flex items-center space-x-2">
                <span className="text-body-sm">Sinistra:</span>
                <ActionMenu
                  actions={[
                    { id: "action1", label: "Azione 1", onClick: () => alert("Azione 1") },
                    { id: "action2", label: "Azione 2", onClick: () => alert("Azione 2") },
                  ]}
                  alignMenu="left"
                />
              </div>

              <div className="flex items-center space-x-2">
                <span className="text-body-sm">Destra:</span>
                <ActionMenu
                  actions={[
                    { id: "action1", label: "Azione 1", onClick: () => alert("Azione 1") },
                    { id: "action2", label: "Azione 2", onClick: () => alert("Azione 2") },
                  ]}
                  alignMenu="right"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bulk Actions */}
      <div>
        <h3 className="text-element-title mb-4">Bulk Actions</h3>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="flex flex-wrap gap-3 mb-4">
            <Button
              variant="outline"
              size="sm"
              leftIcon={
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              }
              onClick={handleExportUsers}
            >
              Esporta Selezionati
            </Button>

            <ActionMenu
              actions={[
                { id: "activate", label: "Attiva Tutti", onClick: () => handleBulkAction("Attiva"), variant: "success" },
                {
                  id: "deactivate",
                  label: "Disattiva Tutti",
                  onClick: () => handleBulkAction("Disattiva"),
                  variant: "warning",
                },
                { id: "delete-all", label: "Elimina Tutti", onClick: () => handleBulkAction("Elimina"), variant: "danger" },
              ]}
              menuButton={
                <Button variant="outline" size="sm">
                  Azioni Multiple
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Button>
              }
            />
          </div>

          <p className="text-body-sm text-muted">Seleziona elementi nella tabella per abilitare le azioni bulk</p>
        </div>
      </div>

      {/* Table with Actions */}
      <div>
        <h3 className="text-element-title mb-4">Tabella con Azioni Complete</h3>
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
            <h4 className="text-body font-medium">Gestione Utenti</h4>
            <CreateAction onClick={handleCreateUser} label="Nuovo Utente" size="sm" />
          </div>
          <Table data={users} columns={userColumns} keyExtractor={(user) => user.id.toString()} size="md" hoverable={true} />
        </div>
      </div>

      {/* Code Examples */}
      <div>
        <h3 className="text-element-title mb-4">Esempi di Codice</h3>
        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 text-sm font-mono overflow-x-auto">
          <div className="space-y-2 text-gray-800 dark:text-gray-200">
            <div>
              <span className="text-gray-500 dark:text-gray-400">// CreateAction</span>
            </div>
            <div>
              <span className="text-blue-600 dark:text-blue-400">&lt;CreateAction</span>
              <span className="text-green-600 dark:text-green-400"> onClick</span>
              <span className="text-gray-800 dark:text-gray-200">=</span>
              <span className="text-purple-600 dark:text-purple-400">{"{handleCreate}"}</span>
              <span className="text-green-600 dark:text-green-400"> label</span>
              <span className="text-gray-800 dark:text-gray-200">=</span>
              <span className="text-orange-600 dark:text-orange-400">"Nuovo"</span>
              <span className="text-blue-600 dark:text-blue-400"> /&gt;</span>
            </div>
            <div className="mt-3">
              <span className="text-gray-500 dark:text-gray-400">// EditAction con permessi</span>
            </div>
            <div>
              <span className="text-blue-600 dark:text-blue-400">&lt;EditAction</span>
              <span className="text-green-600 dark:text-green-400"> item</span>
              <span className="text-gray-800 dark:text-gray-200">=</span>
              <span className="text-purple-600 dark:text-purple-400">{"{user}"}</span>
              <span className="text-green-600 dark:text-green-400"> onEdit</span>
              <span className="text-gray-800 dark:text-gray-200">=</span>
              <span className="text-purple-600 dark:text-purple-400">{"{handleEdit}"}</span>
              <span className="text-green-600 dark:text-green-400"> canEdit</span>
              <span className="text-gray-800 dark:text-gray-200">=</span>
              <span className="text-purple-600 dark:text-purple-400">{"{u => u.canEdit}"}</span>
              <span className="text-blue-600 dark:text-blue-400"> /&gt;</span>
            </div>
            <div className="mt-3">
              <span className="text-gray-500 dark:text-gray-400">// ActionMenu</span>
            </div>
            <div>
              <span className="text-blue-600 dark:text-blue-400">&lt;ActionMenu</span>
              <span className="text-green-600 dark:text-green-400"> actions</span>
              <span className="text-gray-800 dark:text-gray-200">=</span>
              <span className="text-purple-600 dark:text-purple-400">{"{actions}"}</span>
              <span className="text-green-600 dark:text-green-400"> alignMenu</span>
              <span className="text-gray-800 dark:text-gray-200">=</span>
              <span className="text-orange-600 dark:text-orange-400">"right"</span>
              <span className="text-blue-600 dark:text-blue-400"> /&gt;</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowActions;
