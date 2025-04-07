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
      className="btn border-white text-white p-2"
      onClick={handleDownload}
      style={{ cursor: 'pointer', flexWrap: 'wrap'}}
    >
      Baixar Curriculo
    </h3>
  );
};

export default BaixarCurriculo;
