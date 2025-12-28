import React, { useState } from "react";
import "./Tooltip.scss";

export type TooltipPosition = "top" | "bottom" | "left" | "right";

interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
  position?: TooltipPosition;
  isOpen?: boolean;
  onClose?: () => void;
  className?: string;
}

export const Tooltip = ({
  content,
  children,
  position = "top",
  isOpen,
  onClose,
  className = "",
}: TooltipProps) => {
  const [internalOpen, setInternalOpen] = useState(false);

  const open = isOpen ?? internalOpen;

  const handleToggle = () => {
    if (isOpen === undefined) {
      setInternalOpen(true);
    }
  };

  const handleClose = () => {
    if (isOpen === undefined) {
      setInternalOpen(false);
    }
    onClose?.();
  };

  return (
    <div className={`tooltip ${className}`}>
      <div className="tooltip__trigger" onClick={handleToggle}>
        {children}
      </div>

      {open && (
        <div className={`tooltip__content tooltip__content--${position}`}>
          <button className="tooltip__close" onClick={handleClose}>
            ✕
          </button>
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
