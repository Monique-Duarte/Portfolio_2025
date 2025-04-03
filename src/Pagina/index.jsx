import React from 'react';
import Header from '../Componentes/Header';
import Projects from '../Componentes/Projects';
import SobreMim from '../Componentes/Sobre';

const Corpo = () => {
	return (
		<>
    <Header style={{ with:"100%" }} />
    <SobreMim />
    <Projects style={{ with:"100%" }} />
    </>
	)
};

export default Corpo;
