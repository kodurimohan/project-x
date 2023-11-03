"use client";

import { userStoreModal } from "@/hooks/use-modal-store";
import { Modal } from "@/components/ui/modal";

export const StoreModal = () => {
  const storeModal = userStoreModal();
  return (
    <Modal
      title="Create Store"
      description="Add a new store to manage products and categories"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      Future Create Store
    </Modal>
  );
};
