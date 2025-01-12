import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        {/* Logo e Direitos Autorais */}
        <div className="mb-4 md:mb-0">
        
          <p className="text-sm mt-2">© 2025 Sua Empresa. Todos os direitos reservados.</p>
        </div>

        {/* Links úteis */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <Link to="/about" className="text-sm text-gray-400 hover:text-white">
            Sobre Nós
          </Link>
          <Link to="/contact" className="text-sm text-gray-400 hover:text-white">
            Contato
          </Link>
          <Link to="/privacy" className="text-sm text-gray-400 hover:text-white">
            Política de Privacidade
          </Link>
        </div>

        {/* Redes Sociais */}
        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
           logo face
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
           insta
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            twitter
          </a>
        </div>
      </div>
    </footer>
  );
};
