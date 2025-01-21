import { RiInstagramLine } from "react-icons/ri";
import { RiYoutubeFill } from "react-icons/ri";
import { RiFacebookCircleFill } from "react-icons/ri";

function Footer() {
  return (
    <footer className="w-screen lg:px-16 lg:pb-8">
      <div className="w-full bg-tblue-700 rounded-t-xl lg:rounded-xl flex flex-col items-center p-8 lg:flex-row lg:items-start lg:justify-between lg:px-16 lg:py-12">
        <div className="flex items-center gap-6">
          <img
            src="/logo/logo_talkie.png"
            alt="Logo fractal"
            className="w-20 md:w-32 lg:w-24"
          />
          <p className="font-semibold text-2xl md:text-3xl text-black">Talkie</p>
        </div>
        <div className="md:flex md:flex-row md:justify-around md:w-full lg:w-auto lg:gap-32">
          <div className="flex flex-col items-center mt-10 text-black gap-3 lg:mt-0">
            <h4 className="text-2xl font-semibold mb-3 md:text-left md:w-full">
              Sobre nosotros
            </h4>
            <a href="#" className="underline text-lg md:text-left md:w-full">
              Nuestra misión
            </a>
            <a href="#" className="underline text-lg md:text-left md:w-full">
              Equipo
            </a>
            <a href="#" className="underline text-lg md:text-left md:w-full">
              Newsletter
            </a>
          </div>
          <div className="flex flex-col items-center mt-10 text-black gap-3 lg:mt-0">
            <h4 className="text-2xl font-semibold mb-3 md:text-left md:w-full">
              Legal
            </h4>
            <a href="#" className="underline text-lg md:text-left md:w-full">
              Términos y condiciones
            </a>
            <a href="#" className="underline text-lg md:text-left md:w-full">
              Política de privacidad
            </a>
          </div>
        </div>
        <div className="flex w-full items-center flex-row justify-center gap-6 mt-14 text-3xl text-black lg:hidden">
          <RiInstagramLine />
          <RiYoutubeFill />
          <RiFacebookCircleFill />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
