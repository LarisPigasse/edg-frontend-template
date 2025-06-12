// src/core/components/ui/DeleteAction.tsx
import React, { forwardRef } from "react";
import Button from "./../ui/Button";
import ButtonSize from "./../ui/Button";
import Tooltip from "./../ui/Tooltip";

interface DeleteActionProps<T> {
  item: T;
  onDelete: (item: T) => void;
  canDelete?: (item: T) => boolean;
  size?: ButtonSize;
  tooltip?: string;
  className?: string;
  showTooltip?: boolean;
  requireConfirm?: boolean;
}

function DeleteActionInner<T>(
  {
    item,
    onDelete,
    canDelete = () => true,
    size = "xs",
    tooltip = "Elimina",
    className = "",
    showTooltip = true,
    requireConfirm = true,
  }: DeleteActionProps<T>,
  ref: React.Ref<HTMLButtonElement>
) {
  const isDeletable = canDelete(item);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isDeletable) return;

    if (requireConfirm) {
      const confirmed = window.confirm("Sei sicuro di voler eliminare questo elemento?");
      if (confirmed) {
        onDelete(item);
      }
    } else {
      onDelete(item);
    }
  };

  const deleteIcon = (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
      />
    </svg>
  );

  const button = (
    <Button
      ref={ref}
      variant="ghost"
      size={size}
      onClick={handleClick}
      disabled={!isDeletable}
      className={`text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 ${className}`}
      title={!showTooltip ? tooltip : undefined}
    >
      {deleteIcon}
    </Button>
  );

  if (showTooltip) {
    return (
      <Tooltip content={tooltip} disabled={!isDeletable}>
        {button}
      </Tooltip>
    );
  }

  return button;
}

const DeleteAction = forwardRef(DeleteActionInner) as <T>(
  props: DeleteActionProps<T> & { ref?: React.Ref<HTMLButtonElement> }
) => ReturnType<typeof DeleteActionInner>;

export default DeleteAction;
