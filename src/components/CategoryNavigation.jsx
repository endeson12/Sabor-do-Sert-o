import React, { useState, useEffect } from 'react';

const CategoryNavigation = ({ activeCategory, onCategoryChange }) => {
  const categories = [
    { id: 'entradas', name: 'Entradas' },
    { id: 'principais', name: 'Principais' },
    { id: 'bebidas', name: 'Bebidas' },
    { id: 'doces', name: 'Doces' }
  ];

  const scrollToSection = (categoryId) => {
    const element = document.getElementById(categoryId);
    if (element) {
      const headerHeight = 80; // Account for sticky header
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    onCategoryChange(categoryId);
  };

  // Update active category based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = categories.map(cat => ({
        id: cat.id,
        element: document.getElementById(cat.id)
      }));

      const headerHeight = 80;
      const scrollPosition = window.scrollY + headerHeight + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          if (activeCategory !== section.id) {
            onCategoryChange(section.id);
          }
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeCategory, onCategoryChange]);

  return (
    <nav className="sticky top-16 sm:top-20 z-40 bg-bg-primary/95 backdrop-blur-custom border-b border-accent-green/20 shadow-md">
      <div className="container-custom">
        <div className="flex overflow-x-auto scrollbar-hide py-4">
          <div className="flex space-x-2 min-w-max mx-auto">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => scrollToSection(category.id)}
                className={`nav-button whitespace-nowrap px-6 animate-fade-in ${
                  activeCategory === category.id ? 'active' : ''
                }`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'both'
                }}
                aria-label={`Ver ${category.name}`}
              >
                <span className="relative z-10">{category.name}</span>
                {activeCategory === category.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-warm/20 to-accent-green/20 rounded-lg animate-pulse-gentle"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default CategoryNavigation;
