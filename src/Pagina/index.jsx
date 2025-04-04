import React from 'react';
import Projects from '../Componentes/Projects';
import SobreMim from '../Componentes/Sobre';
import Menu from '../Componentes/Menu';
import Id from '../Componentes/Id';

const Inicio = () => {
	return (
		<>
    <Menu />
    <Id />
    <SobreMim />
    <Projects />
    </>
	)
};

export default Inicio;
