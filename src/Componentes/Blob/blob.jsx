import React from 'react';
import CV from '../../../public/cv.pdf';


const BaixarCurriculo = () => {
  const handleDownload = () => {
    const a = document.createElement('a');
    a.href = CV; // URL do arquivo PDF
    a.download = 'cv.pdf'; // Nome do arquivo que será baixado
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <h3
      className="btn border-white border-2 border-solid text-white p-1"
      onClick={handleDownload}
      style={{ cursor: 'pointer' }}
    >
      Baixar Curriculo
    </h3>
  );
};

export default BaixarCurriculo;
