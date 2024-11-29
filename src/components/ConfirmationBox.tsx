import React from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from "@mui/material";

// Define types for props
interface ConfirmationModalProps {
  open: boolean;
  message: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  ConfirmTitle: string;
  title?: string;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  open,
  message,
  onConfirm,
  onCancel,
  ConfirmTitle,
  title = "Confirm Action",
}) => {
  return (
    <Dialog open={open} onClose={onCancel}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <p>{message}</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel} color="secondary">
          Cancel
        </Button>
        <Button onClick={onConfirm} color="primary">
          {ConfirmTitle}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationModal;
