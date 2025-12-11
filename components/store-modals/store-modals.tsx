'use client';

import { useStoreModal } from '@/hooks/useStoreModal';
import { Modal } from '@/components/ui/modal';

export const StoreModals = () => {
  const storeModal = useStoreModal();

  return (
    <Modal
      title='Create new store'
      description='Add a new store to manage products and categories'
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      Future create store form
    </Modal>
  );
};
