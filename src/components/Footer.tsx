
const Footer = () => {
  return (
    <footer className="bg-black py-8 border-t border-netflix-gray">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <h2 className="text-xl font-bold text-netflix-red mb-2">Direito 360 Premium</h2>
          <p className="text-sm text-netflix-lightGray">Sua biblioteca jurídica completa</p>
        </div>
        
        <p className="text-netflix-lightGray mb-2">© 2025 Direito 360 Premium. Todos os direitos reservados.</p>
        <p className="text-netflix-lightGray text-sm">
          Pagamento único de R$49,99. Sem assinaturas ou cobranças recorrentes.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
