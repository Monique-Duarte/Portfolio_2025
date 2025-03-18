import React from 'react';
import Header from '../../Componentes/Header';
import Menu from '../../Componentes/Menu';
import Projects from '../../Componentes/Projects';
import SobreMim from '../../Componentes/Sobre';
import Habilidades from '../../Componentes/Habilidades';


const Corpo = () => {
	return (
		<>
    <Header style={{ with:"100%" }} />
    <Menu style={{ backgroundColor: "#000916", with:"100%" }}/>
    <SobreMim />
    <Habilidades />
    <Projects style={{ with:"100%" }} />
    </>
	)
};

export default Corpo;
