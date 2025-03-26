import React from 'react';
import './Id.css';

const Id = () => {
  return (
    <div className="container flex justify-center md:max-w-[90%] px-4 sm:px-6">
      <div className="id box-border p-0 text-white">
        <img className="id_img" src="/img/Group_1.png" alt="Minha foto" />
        <h1 className="text-3xl sm:text-2xl md:text-2xl overflow-y-hidden text-justify mt-4">Monique Alves Duarte</h1>
        <p className="text-xl sm:text-base md:text-2xl leading-[1.2] overflow-y-hidden mt-2">Graduanda em Engenharia de Software</p>
        <p className="text-xl sm:text-base md:text-2xl leading-[1.2] overflow-y-hidden mt-2">Desenvolvedora Front-end</p>
        <p className="text-lg sm:text-sm md:text-xl leading-[1.2] overflow-y-hidden mt-2">
          Dev | React | JavaScript | TypeScript | HTML | CSS | SQL | Node.js | Sistema Web
        </p>
      </div>
    </div>
  );
};

export default Id;
