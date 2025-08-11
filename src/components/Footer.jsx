import React from 'react';
import { restaurantInfo } from '../data/menuData';

const Footer = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(restaurantInfo.whatsappMessage);
    const whatsappUrl = `https://wa.me/${restaurantInfo.telefone}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleInstagramClick = () => {
    const instagramUrl = `https://instagram.com/${restaurantInfo.instagram.replace('@', '')}`;
    window.open(instagramUrl, '_blank');
  };

  return (
    <footer className="bg-text-primary text-bg-primary py-12">
      <div className="container-custom">
        <div className="text-center">
          {/* Logo */}
          <h2 className="text-2xl font-bold text-accent-warm mb-6">
            {restaurantInfo.nome}
          </h2>

          {/* Contact Info */}
          <div className="space-y-3 mb-8">
            <p className="text-bg-primary/80">
              📍 {restaurantInfo.endereco}
            </p>
            <p className="text-bg-primary/80">
              🕒 {restaurantInfo.horario}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 mb-8">
            <button
              onClick={handleWhatsAppClick}
              className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors duration-300"
              aria-label="Conversar no WhatsApp"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.382z"/>
              </svg>
              <span>WhatsApp</span>
            </button>

            <button
              onClick={handleInstagramClick}
              className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2 rounded-lg transition-all duration-300"
              aria-label="Seguir no Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323C6.001 8.198 7.152 7.708 8.449 7.708s2.448.49 3.323 1.416c.875.875 1.365 2.026 1.365 3.323s-.49 2.448-1.365 3.323c-.875.807-2.026 1.218-3.323 1.218zm7.718 0c-1.297 0-2.448-.49-3.323-1.297-.875-.875-1.365-2.026-1.365-3.323s.49-2.448 1.365-3.323c.875-.926 2.026-1.416 3.323-1.416s2.448.49 3.323 1.416c.875.875 1.365 2.026 1.365 3.323s-.49 2.448-1.365 3.323c-.875.807-2.026 1.218-3.323 1.218z"/>
              </svg>
              <span>{restaurantInfo.instagram}</span>
            </button>
          </div>

          {/* Copyright */}
          <div className="border-t border-bg-primary/20 pt-6">
            <p className="text-bg-primary/60 text-sm">
              © 2024 {restaurantInfo.nome}. Todos os direitos reservados.
            </p>
            <p className="text-bg-primary/60 text-sm mt-1">
              Cardápio digital desenvolvido com ❤️
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
