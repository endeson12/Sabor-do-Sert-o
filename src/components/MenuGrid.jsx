import React from 'react';
import DishCard from './DishCard';

const MenuGrid = ({ dishes, categoryId, categoryName, onOpenModal }) => {
  return (
    <section id={categoryId} className="py-8 sm:py-12 relative">
      <div className="container-custom">
        {/* Category Title */}
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl font-bold gradient-text mb-3 hover:scale-105 transition-transform duration-300">
            {categoryName}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-warm via-accent-green to-accent-gold mx-auto rounded-full shadow-lg"></div>
          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-accent-warm to-transparent mx-auto mt-2 rounded-full"></div>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {dishes.map((dish, index) => (
            <div
              key={dish.id}
              className="animate-slide-up"
              style={{
                animationDelay: `${index * 0.15}s`,
                animationFillMode: 'both'
              }}
            >
              <DishCard dish={dish} onOpenModal={onOpenModal} />
            </div>
          ))}
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-4 left-4 text-accent-gold/20 text-6xl pointer-events-none animate-pulse-gentle">
          🌟
        </div>
        <div className="absolute bottom-4 right-4 text-accent-green/20 text-4xl pointer-events-none animate-pulse-gentle" style={{ animationDelay: '1s' }}>
          🌿
        </div>
      </div>
    </section>
  );
};

export default MenuGrid;
