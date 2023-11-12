"use client"
import { Modal } from "@/components/ui/modal";
import { userStoreModal } from "@/hooks/use-modal-store";
import { useEffect } from "react";

const SetupPage = () => {
  const onOpen = userStoreModal((state) => state.onOpen)
  const isOpen = userStoreModal((state) => state.isOpen)

  useEffect(() => {
    if(!isOpen) {
      onOpen()
    }

  },[isOpen, onOpen]);

  return null;
};

export default SetupPage;
