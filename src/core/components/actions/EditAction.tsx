// src/core/components/ui/EditAction.tsx
import React, { forwardRef } from "react";
import Button from "./../ui/Button";
import ButtonSize from "./../ui/Button";
import Tooltip from "./../ui/Tooltip";

interface EditActionProps<T> {
  item: T;
  onEdit: (item: T) => void;
  canEdit?: (item: T) => boolean;
  size?: ButtonSize;
  tooltip?: string;
  className?: string;
  showTooltip?: boolean;
}

function EditActionInner<T>(
  {
    item,
    onEdit,
    canEdit = () => true,
    size = "xs",
    tooltip = "Modifica",
    className = "",
    showTooltip = true,
  }: EditActionProps<T>,
  ref: React.Ref<HTMLButtonElement>
) {
  const isEditable = canEdit(item);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isEditable) {
      onEdit(item);
    }
  };

  const editIcon = (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
      />
    </svg>
  );

  const button = (
    <Button
      ref={ref}
      variant="ghost"
      size={size}
      onClick={handleClick}
      disabled={!isEditable}
      className={`text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 ${className}`}
      title={!showTooltip ? tooltip : undefined}
    >
      {editIcon}
    </Button>
  );

  if (showTooltip) {
    return (
      <Tooltip content={tooltip} disabled={!isEditable}>
        {button}
      </Tooltip>
    );
  }

  return button;
}

const EditAction = forwardRef(EditActionInner) as <T>(
  props: EditActionProps<T> & { ref?: React.Ref<HTMLButtonElement> }
) => ReturnType<typeof EditActionInner>;

export default EditAction;
