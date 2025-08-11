import React, { useState } from 'react';
import Header from './components/Header';
import CategoryNavigation from './components/CategoryNavigation';
import MenuGrid from './components/MenuGrid';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';
import DishModal from './components/DishModal';
import FAQ from './sections/FAQ';
import { menuData } from './data/menuData';

function App() {
  const [activeCategory, setActiveCategory] = useState('entradas');
  const [selectedDish, setSelectedDish] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    { id: 'entradas', name: 'Entradas', dishes: menuData.entradas },
    { id: 'principais', name: 'Principais', dishes: menuData.principais },
    { id: 'bebidas', name: 'Bebidas', dishes: menuData.bebidas },
    { id: 'doces', name: 'Doces', dishes: menuData.doces }
  ];

  const handleOpenModal = (dish) => {
    setSelectedDish(dish);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedDish(null);
  };

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Header */}
      <Header />

      {/* Category Navigation */}
      <CategoryNavigation 
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* Main Content */}
      <main className="pb-16">
        {categories.map((category) => (
          <MenuGrid
            key={category.id}
            dishes={category.dishes}
            categoryId={category.id}
            categoryName={category.name}
            onOpenModal={handleOpenModal}
          />
        ))}
      </main>

      {/* FAQ Section */}
      <FAQ />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Dish Modal */}
      <DishModal
        dish={selectedDish}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default App;
