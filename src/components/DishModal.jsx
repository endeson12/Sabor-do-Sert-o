import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { restaurantInfo } from '../data/menuData';

const DishModal = ({ dish, isOpen, onClose }) => {
  if (!dish) return null;

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `${restaurantInfo.whatsappMessage}\n\n🍽️ ${dish.nome} - ${dish.preco}\n${dish.descricao}\n\nGostaria de fazer o pedido!`
    );
    const whatsappUrl = `https://wa.me/${restaurantInfo.telefone}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Enhanced dish details for modal
  const getIngredients = (dishName) => {
    const ingredients = {
      'Carne de Sol': ['Carne de sol desfiada', 'Macaxeira', 'Manteiga de garrafa', 'Cebola', 'Alho', 'Temperos nordestinos'],
      'Baião de Dois': ['Arroz', 'Feijão verde', 'Queijo coalho', 'Carne seca', 'Linguiça', 'Temperos especiais'],
      'Tapioca Recheada': ['Massa de tapioca', 'Queijo coalho', 'Carne de sol', 'Coco ralado'],
      'Macaxeira Frita': ['Mandioca', 'Óleo', 'Sal', 'Temperos da casa'],
      'Escondidinho': ['Carne seca desfiada', 'Purê de macaxeira', 'Queijo gratinado', 'Temperos'],
      'Peixe Assado': ['Peixe fresco', 'Temperos nordestinos', 'Limão', 'Coentro', 'Pimentão'],
      'Galinha Caipira': ['Galinha caipira', 'Legumes da região', 'Temperos tradicionais'],
      'Buchada': ['Miúdos', 'Temperos tradicionais', 'Especiarias nordestinas'],
      'Cajuína': ['Caju', 'Açúcar', 'Água'],
      'Água de Coco': ['Coco verde natural'],
      'Suco Natural': ['Frutas frescas da região', 'Açúcar', 'Água'],
      'Cocada': ['Coco ralado', 'Açúcar', 'Leite condensado'],
      'Rapadura': ['Cana-de-açúcar', 'Processo artesanal'],
      'Pudim de Leite': ['Leite', 'Ovos', 'Açúcar', 'Baunilha']
    };
    return ingredients[dishName] || ['Ingredientes selecionados', 'Temperos especiais', 'Preparado com carinho'];
  };

  const getAllergens = () => {
    return ['Pode conter glúten', 'Pode conter lactose', 'Preparado em cozinha que manipula diversos ingredientes'];
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={handleOverlayClick}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.4, type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Fechar modal"
            >
              <svg className="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex flex-col lg:flex-row max-h-[90vh] overflow-y-auto">
              {/* Image Section */}
              <div className="lg:w-1/2 relative">
                <div className="aspect-[4/3] lg:aspect-auto lg:h-full relative bg-gradient-to-br from-accent-warm/10 to-accent-green/10">
                  <img
                    src={dish.imagem}
                    alt={dish.nome}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  
                  {/* Destaque Badge */}
                  {dish.destaque && (
                    <div className="absolute top-6 left-6 bg-gradient-to-r from-accent-warm to-accent-red text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg animate-pulse-gentle border border-white/20">
                      ✨ {dish.destaque}
                    </div>
                  )}
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:w-1/2 p-6 lg:p-8 flex flex-col">
                <div className="flex-1">
                  {/* Title and Price */}
                  <div className="mb-6">
                    <h2 className="text-3xl lg:text-4xl font-bold gradient-text mb-2">
                      {dish.nome}
                    </h2>
                    <div className="flex items-center justify-between">
                      <span className="text-4xl font-bold bg-gradient-to-r from-accent-warm to-accent-red bg-clip-text text-transparent">
                        {dish.preco}
                      </span>
                      <div className="flex items-center space-x-1 text-accent-gold">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-text-primary mb-2">Descrição</h3>
                    <p className="text-neutral leading-relaxed text-base">
                      {dish.descricao}. Um prato tradicional da culinária nordestina, preparado com ingredientes selecionados e todo o carinho da nossa cozinha. Uma explosão de sabores que traz o verdadeiro gosto do sertão para sua mesa.
                    </p>
                  </div>

                  {/* Ingredients */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-text-primary mb-3">Ingredientes</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {getIngredients(dish.nome).map((ingredient, index) => (
                        <div key={index} className="flex items-center space-x-2 text-sm text-neutral">
                          <div className="w-2 h-2 bg-accent-green rounded-full"></div>
                          <span>{ingredient}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Allergens */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-text-primary mb-2">Informações Importantes</h3>
                    <div className="bg-accent-gold/10 border border-accent-gold/20 rounded-lg p-3">
                      {getAllergens().map((allergen, index) => (
                        <p key={index} className="text-xs text-neutral mb-1 last:mb-0">
                          ⚠️ {allergen}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full btn-whatsapp text-lg py-4 relative overflow-hidden group"
                  aria-label={`Pedir ${dish.nome} pelo WhatsApp`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-green-500 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 mr-3 group-hover:animate-pulse"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.382z"/>
                    </svg>
                    <span className="font-bold">🛒 Pedir Agora pelo WhatsApp</span>
                  </div>
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DishModal;
