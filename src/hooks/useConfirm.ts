import { useState } from "react";

export interface ConfirmProps {
  visible?: boolean;
  title?: string;
  subtitle?: string;
  onSubmit: () => void;
}
export default function useConfirm() {
  const [confirm, setConfirm] = useState<ConfirmProps>({
    visible: false,
    title: "Are are you sure?",
    subtitle: "Do you want to delete item",
    onSubmit: () => {},
  });

  const onConfirm = (state: ConfirmProps) => {
    setConfirm((prev) => ({ ...prev, visible: true, ...state }));
  };

  const onCancel = () => {
    setConfirm((prev) => ({
      ...prev,
      title: "",
      subtitle: "",
      visible: false,
    }));
  };

  return {
    confirm,
    onCancel,
    onConfirm,
  };
}
