import React, { useState } from 'react';

export const ModalProvider = ({ children }) => {
  const [modalConfig, setModalConfig] = useState(null);

  const showModal = (config) => {
    setModalConfig(config);
  };

  const hideModal = () => {
    setModalConfig(null);
  };

  return (
    <ModalContext.Provider value={{ modalConfig, showModal, hideModal }}>
      {children}
    </ModalContext.Provider>
  );
};
