import React from 'react';
import { motion } from 'framer-motion';
import AccordionItem from '../components/AccordionItem';

const FAQ = () => {
  const faqData = [
    {
      question: "Qual o tempo médio de entrega?",
      answer: "Nosso tempo médio de entrega é de 30 a 45 minutos, dependendo da sua localização e do movimento do dia. Sempre trabalhamos para entregar seu pedido o mais rápido possível, mantendo a qualidade que você merece! 🚚"
    },
    {
      question: "Vocês aceitam Pix?",
      answer: "Sim! Aceitamos Pix, cartão de débito, cartão de crédito e dinheiro. O Pix é nossa forma de pagamento mais rápida e você ainda ganha 5% de desconto! Nosso Pix é enviado no momento da confirmação do pedido. 💳"
    },
    {
      question: "Posso fazer pedidos para eventos?",
      answer: "Claro! Fazemos encomendas especiais para eventos, festas e reuniões. Para pedidos acima de 10 pessoas, recomendamos fazer a encomenda com pelo menos 24 horas de antecedência. Entre em contato conosco pelo WhatsApp para um orçamento personalizado! 🎉"
    },
    {
      question: "Quais são as opções vegetarianas?",
      answer: "Temos várias opções deliciosas para vegetarianos! Nossas tapiocas de queijo, macaxeira frita, baião de dois (versão vegetariana), sucos naturais, cocada e pudim de leite são perfeitos para quem não come carne. Todos preparados com muito carinho! 🌱"
    },
    {
      question: "Vocês entregam em toda a cidade?",
      answer: "Atualmente entregamos em um raio de 8km do nosso restaurante. Se você não tem certeza se entregamos na sua região, mande sua localização pelo WhatsApp que verificamos rapidinho! A taxa de entrega varia de acordo com a distância. 📍"
    },
    {
      question: "Como posso acompanhar meu pedido?",
      answer: "Assim que seu pedido sair para entrega, enviamos uma mensagem pelo WhatsApp com o nome do entregador e o tempo estimado de chegada. Você também pode entrar em contato conosco a qualquer momento para saber o status do seu pedido! 📱"
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-bg-primary to-accent-warm/5 relative overflow-hidden">
      <div className="container-custom">
        {/* Decorative Elements */}
        <div className="absolute top-8 left-8 text-accent-gold/20 text-8xl pointer-events-none animate-pulse-gentle">
          ❓
        </div>
        <div className="absolute bottom-8 right-8 text-accent-green/20 text-6xl pointer-events-none animate-pulse-gentle" style={{ animationDelay: '1s' }}>
          💡
        </div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4 hover:scale-105 transition-transform duration-300">
            Perguntas Frequentes
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-warm via-accent-green to-accent-gold mx-auto rounded-full shadow-lg mb-4"></div>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-accent-warm to-transparent mx-auto rounded-full"></div>
          <p className="text-neutral text-lg mt-4 max-w-2xl mx-auto">
            Tire suas dúvidas sobre nossos pratos, entregas e serviços. Se não encontrar a resposta que procura, 
            entre em contato conosco pelo WhatsApp! 😊
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-accent-green/10">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem
                  question={faq.question}
                  answer={faq.answer}
                  isFirst={index === 0}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-accent-warm/10 to-accent-green/10 rounded-2xl p-8 border border-accent-warm/20">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Ainda tem dúvidas? 🤔
            </h3>
            <p className="text-neutral mb-6 max-w-md mx-auto">
              Nossa equipe está sempre pronta para ajudar! Entre em contato pelo WhatsApp e teremos prazer em atendê-lo.
            </p>
            <button
              onClick={() => {
                const message = encodeURIComponent("Olá! Tenho uma dúvida sobre o cardápio. Podem me ajudar?");
                const whatsappUrl = `https://wa.me/5511999999999?text=${message}`;
                window.open(whatsappUrl, '_blank');
              }}
              className="btn-whatsapp text-lg px-8 py-4 relative overflow-hidden group"
              aria-label="Entrar em contato pelo WhatsApp"
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
                <span className="font-bold">💬 Falar no WhatsApp</span>
              </div>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
