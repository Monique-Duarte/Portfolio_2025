import Contact from "./Contact";

const Hero = () => {
  return (
    <section id="home"
      className="h-[40vh] lg:h-[80vh] relative w-full bg-cover bg-center overflow-hidden mt-24"
      style={{ backgroundImage: "url('/img/code.png')" }}
      aria-label="Imagem de fundo do Hero"
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div
        className="absolute inset-0 bg-cover bg-center animate-zoomSlow"
        style={{ backgroundImage: "url('/img/code.png')" }}
      >
      </div>
      <div className="absolute dm:bottom-6 text-center bottom-1 right-1 md:right-6 z-10 text-white max-w-md px-10 py-10 md:py-20">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-3 drop-shadow-lg">
          Monique Duarte
        </h1>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-3 drop-shadow-lg">Dev. Front-end</h2>
        <Contact />
      </div>
    </section>
  );
};

export default Hero;
