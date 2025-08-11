import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { restaurantInfo } from '../data/menuData';

const DishCard = ({ dish, onOpenModal }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `${restaurantInfo.whatsappMessage}\n\n🍽️ ${dish.nome} - ${dish.preco}\n${dish.descricao}`
    );
    const whatsappUrl = `https://wa.me/${restaurantInfo.telefone}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  const handleCardClick = () => {
    onOpenModal(dish);
  };

  return (
    <motion.div 
      className="card-dish card-highlight animate-fade-in" 
      onClick={handleCardClick}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image Container */}
      <div className="relative aspect-[16/9] bg-gradient-to-br from-accent-warm/5 to-accent-green/5 overflow-hidden">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-accent-warm/10 to-accent-green/10">
            <div className="w-8 h-8 border-3 border-accent-warm border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        
        {!imageError ? (
          <img
            src={dish.imagem}
            alt={dish.nome}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={handleImageLoad}
            onError={handleImageError}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-neutral/10">
            <svg
              className="w-12 h-12 text-neutral/40"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        )}

        {/* Destaque Badge */}
        {dish.destaque && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-accent-warm to-accent-red text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse-gentle border border-white/20">
            ✨ {dish.destaque}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-bold text-text-primary text-lg leading-tight flex-1 mr-2 hover:text-accent-warm transition-colors duration-300">
            {dish.nome}
          </h3>
          <span className="font-bold text-2xl whitespace-nowrap bg-gradient-to-r from-accent-warm to-accent-red bg-clip-text text-transparent">
            {dish.preco}
          </span>
        </div>
        
        <p className="text-neutral text-sm leading-relaxed mb-4 hover:text-text-primary transition-colors duration-300">
          {dish.descricao}
        </p>

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <button
            className="flex-1 btn-secondary text-sm relative overflow-hidden group"
            onClick={(e) => {
              e.stopPropagation();
              onOpenModal(dish);
            }}
            aria-label={`Ver detalhes de ${dish.nome}`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent-cool/80 to-accent-cool opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 flex items-center justify-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span className="font-bold">Ver Mais</span>
            </div>
          </button>
          
          <button
            className="flex-1 btn-whatsapp text-sm relative overflow-hidden group"
            onClick={(e) => {
              e.stopPropagation();
              handleWhatsAppClick();
            }}
            aria-label={`Pedir ${dish.nome} pelo WhatsApp`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-green-500 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 flex items-center justify-center">
              <svg
                className="w-4 h-4 mr-2 group-hover:animate-pulse"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.382z"/>
              </svg>
              <span className="font-bold">Pedir</span>
            </div>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default DishCard;
