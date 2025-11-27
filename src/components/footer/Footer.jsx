const Footer = () => {
  return (
    <div className="pt-4 bg-black">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-0 py-8 px-4 sm:px-6 justify-between">
        {/* Columna izquierda - Información principal */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-[25px] font-['Cinzel_Decorative'] text-white mb-4">
            DulcE MOmENtO
          </h1>
          <h2 className="text-[20px] font-['Afacad'] text-white leading-relaxed">
            Porque la vida sabe mejor cuando compartimos un Dulce Momento
          </h2>
          <p className="text-sm sm:text-base lg:text-[20px] font-['Afacad'] text-white my-5 flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 justify-center lg:justify-start">
            <span className="hover:text-gray-300 cursor-pointer transition-colors text-[20px]">¿Quienes somos?</span>
            <span className="hidden sm:inline">|</span>
            <span className="hover:text-gray-300 cursor-pointer transition-colors text-[20px]">Contacta con nosotros</span>
            <span className="hidden sm:inline">|</span>
            <span className="hover:text-gray-300 cursor-pointer transition-colors text-[20px]">Terminos y condiciones</span>
            <span className="hidden sm:inline">|</span>
            <span className="hover:text-gray-300 cursor-pointer transition-colors text-[20px]">Politica de privacidad</span>
          </p>
        </div>

        {/* Columna derecha - Redes sociales */}
        <div className="flex-1 text-center lg:text-right lg:max-w-xs">
          <h2 className="text-[20px] font-['Afacad'] font-bold text-white mb-4">
            SOCIAL:
          </h2>
          <div className="flex flex-col gap-2 sm:gap-3 items-center lg:items-end">
            <p className="text-[20px] font-['Afacad'] text-white hover:text-gray-300 cursor-pointer transition-colors">
              - Facebook
            </p>
            <p className="text-[20px] font-['Afacad'] text-white hover:text-gray-300 cursor-pointer transition-colors">
              - Instagram
            </p>
            <p className="text-[20px] font-['Afacad'] text-white hover:text-gray-300 cursor-pointer transition-colors">
              - Twitter
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;