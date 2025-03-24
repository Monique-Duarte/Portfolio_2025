import React from 'react';
import './Id.css';

const Id = () => {
  return (
    <div className="container flex w-full">
      <div className=" flex text-white">
        <div className="box-border flex">
          <img className="id_img" src="/img/Group_1.png" alt="Minha foto" />
          <div className="text">
            <h1 className="titulo overflow-y-hidden text-justify">Monique Alves Duarte</h1>
            <p className="text-lg sm:text-xs leading-[1.2]">Graduanda em Engenharia de Software</p>
            <p className="text-lg sm:text-xs leading-[1.2]">Desenvolvedora Front-end</p>
            <p className="text-lg sm:text-xs leading-[1.2]">Dev | React | JavaScript | TypeScript | HTML | CSS | SQL | Node.js | Sistema Web</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Id;
