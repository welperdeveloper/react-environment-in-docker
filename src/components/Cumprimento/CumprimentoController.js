import React, { useState, useRef, useCallback } from 'react';
import CumprimentoView from './CumprimentoView';

const CumprimentoController = () => {
  const [nome, setNome] = useState('');
  const toast = useRef(null);

  const onCumprimentar = useCallback(() => {
    if (nome.trim()) {
      toast.current.show({
        severity: 'success',
        summary: 'Olá!',
        detail: `Olá, ${nome}!`,
        life: 3000,
      });
    } else {
      toast.current.show({
        severity: 'warn',
        summary: 'Aviso',
        detail: 'Insira seu nome.',
        life: 3000,
      });
    }
  }, [nome]);

  return (
    <CumprimentoView
      nome={nome}
      setNome={setNome}
      onCumprimentar={onCumprimentar}
      toastRef={toast}
    />
  );
};

export default CumprimentoController;
