import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

const CumprimentoView = ({ nome, setNome, onCumprimentar, toastRef }) => (
  <div style={{ padding: '2rem' }}>
    <Toast ref={toastRef} />
    <h2>Digite seu nome:</h2>
    <InputText value={nome} onChange={(e) => setNome(e.target.value)} />
    <Button
      label="Cumprimentar"
      icon="pi pi-smile"
      className="p-button-success"
      onClick={onCumprimentar}
      style={{ marginLeft: '1rem' }}
    />
  </div>
);
export default CumprimentoView;
