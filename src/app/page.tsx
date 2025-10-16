"use client";

import { useState, useEffect } from 'react';
import { Play, CheckCircle, Star, Clock, Gift, Zap, Heart, Leaf, Crown, Shield, TrendingUp, Users } from 'lucide-react';

export default function CodigoDosChasLanding() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 47,
    seconds: 32
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleCTAClick = (eventName = 'Purchase') => {
    // Facebook Pixel tracking
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', eventName, {
        content_name: 'Código dos Chás',
        content_category: 'Ebook',
        value: 19.90,
        currency: 'BRL'
      });
    }
    
    window.open('https://pay.kirvano.com/3b063ec5-d3ab-4f55-b735-66f6e124fa81', '_blank');
  };

  const handleVideoClick = () => {
    // Facebook Pixel tracking for video engagement
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'ViewContent', {
        content_type: 'video',
        content_name: 'VSL Código dos Chás'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-green-50">
      {/* Header com Escassez */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-4 text-center">
        <div className="flex items-center justify-center gap-2 text-sm font-semibold">
          <Clock className="w-4 h-4" />
          <span>OFERTA ESPECIAL EXPIRA EM:</span>
          <div className="flex gap-1 ml-2">
            <span className="bg-white text-red-600 px-2 py-1 rounded font-bold">{String(timeLeft.hours).padStart(2, '0')}</span>
            <span>:</span>
            <span className="bg-white text-red-600 px-2 py-1 rounded font-bold">{String(timeLeft.minutes).padStart(2, '0')}</span>
            <span>:</span>
            <span className="bg-white text-red-600 px-2 py-1 rounded font-bold">{String(timeLeft.seconds).padStart(2, '0')}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-12 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-100/50 to-emerald-100/50"></div>
        <div className="relative max-w-6xl mx-auto">
          {/* Headline Principal */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              Descubra o <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-700">CÓDIGO SECRETO</span><br />
              dos Chás Orientais que está
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-red-600 mb-6">
              DERRETENDO 7KG EM 21 DIAS
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              <strong>Sem dietas malucas, sem exercícios extremos, sem remédios caros.</strong><br />
              Apenas o poder milenar dos chás que as mulheres orientais usam há séculos para manter o corpo perfeito.
            </p>
          </div>

          {/* VSL com YouTube */}
          <div className="relative max-w-4xl mx-auto mb-8">
            <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src="https://www.youtube.com/embed/Cmdo7LolZIU?si=fxEL1LIu5c2_I4kp&rel=0&modestbranding=1"
                  title="Código dos Chás - Vídeo de Vendas"
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  onClick={handleVideoClick}
                ></iframe>
              </div>
              <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg">
                <span className="text-sm">▶️ Assista ao vídeo que está mudando vidas</span>
              </div>
            </div>
          </div>

          {/* CTA Principal */}
          <button 
            onClick={() => handleCTAClick('InitiateCheckout')}
            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-xl md:text-2xl font-bold py-6 px-12 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 mb-4"
          >
            🔓 QUERO DESBLOQUEAR O CÓDIGO AGORA
          </button>
          <p className="text-gray-600 text-sm">✅ Acesso imediato • ✅ Garantia de 7 dias • ✅ Suporte especializado</p>
        </div>
      </section>

      {/* História e Autoridade */}
      <section className="py-16 px-4 bg-gradient-to-r from-emerald-900 to-green-800 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                O Segredo Milenar que as Mulheres Orientais Esconderam por Séculos
              </h3>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  <strong>Há mais de 3.000 anos</strong>, nas montanhas sagradas do Tibet e nas plantações secretas da China, 
                  monges e curandeiros desenvolveram fórmulas específicas de chás que não apenas curavam doenças...
                </p>
                <p>
                  <strong>Eles literalmente reprogramavam o metabolismo</strong> para queimar gordura 24 horas por dia, 
                  mesmo durante o sono.
                </p>
                <p className="text-yellow-300 font-semibold">
                  🔥 Este conhecimento foi guardado a sete chaves por gerações... até hoje.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=600&h=400&fit=crop" 
                alt="Plantação de chá oriental"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-black p-4 rounded-xl font-bold">
                <span className="text-2xl">3000+</span><br />
                <span className="text-sm">Anos de Sabedoria</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios dos Chás - Cards Visuais */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Os 4 Chás Mais Poderosos do <span className="text-emerald-600">CÓDIGO</span>
          </h3>
          <p className="text-xl text-gray-600 text-center mb-12">
            Cada receita foi testada e aprovada por milhares de mulheres
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🍍",
                title: "Chá Verde + Abacaxi",
                benefit: "Ativa a queima de gordura abdominal",
                description: "Acelera o metabolismo em até 40%",
                image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300&h=200&fit=crop"
              },
              {
                icon: "🍌",
                title: "Banana + Canela",
                benefit: "Reduz cortisol e ajuda a emagrecer dormindo",
                description: "Queima gordura durante o sono",
                image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=300&h=200&fit=crop"
              },
              {
                icon: "🌿",
                title: "Louro + Canela",
                benefit: "Desincha e acelera o metabolismo",
                description: "Elimina retenção de líquidos",
                image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=300&h=200&fit=crop"
              },
              {
                icon: "🍇",
                title: "Amora",
                benefit: "Regula intestino e controla hormônios",
                description: "Equilibra o sistema hormonal",
                image: "https://images.unsplash.com/photo-1597318281675-d6b7b8b4d4d5?w=300&h=200&fit=crop"
              }
            ].map((cha, index) => (
              <div key={index} className="bg-gradient-to-b from-green-50 to-emerald-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative mb-4">
                  <img src={cha.image} alt={cha.title} className="w-full h-32 object-cover rounded-xl" />
                  <div className="absolute -top-2 -right-2 bg-white rounded-full p-2 shadow-lg">
                    <span className="text-2xl">{cha.icon}</span>
                  </div>
                </div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">{cha.title}</h4>
                <p className="text-emerald-700 font-semibold mb-2">{cha.benefit}</p>
                <p className="text-gray-600 text-sm">{cha.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black p-6 rounded-2xl inline-block">
              <span className="text-2xl font-bold">💎 +16 receitas ocultas para resultados reais</span>
            </div>
          </div>
        </div>
      </section>

      {/* Oferta Irresistível */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-5xl font-bold mb-8">
            🎁 OFERTA ESPECIAL HOJE
          </h3>
          
          {/* Produto Principal */}
          <div className="bg-gradient-to-r from-emerald-600 to-green-700 rounded-2xl p-8 mb-8 relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full font-bold">
              LIMITADO
            </div>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=300&h=400&fit=crop" 
                  alt="E-book Código dos Chás"
                  className="w-48 h-64 object-cover rounded-xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/50 to-transparent rounded-xl"></div>
                <div className="absolute bottom-4 left-4 text-white font-bold">
                  <span className="text-lg">CÓDIGO DOS</span><br />
                  <span className="text-2xl">CHÁS</span>
                </div>
              </div>
              <div className="text-left">
                <h4 className="text-2xl md:text-3xl font-bold mb-4">CÓDIGO DOS CHÁS</h4>
                <p className="text-lg mb-4">O método completo com 20+ receitas secretas dos chás orientais</p>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl font-bold">R$ 19,90</span>
                  <span className="text-gray-300 line-through text-xl">R$ 97,00</span>
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">80% OFF</span>
                </div>
              </div>
            </div>
          </div>

          {/* Brindes */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6">
              <div className="flex items-center gap-4">
                <Gift className="w-12 h-12 text-yellow-300" />
                <div className="text-left">
                  <h5 className="font-bold text-lg">BRINDE #1</h5>
                  <p className="text-sm">Chás contra diabetes, colesterol e gorduras no fígado</p>
                  <span className="text-yellow-300 font-bold">VALOR: R$ 47,00</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-6">
              <div className="flex items-center gap-4">
                <Gift className="w-12 h-12 text-yellow-300" />
                <div className="text-left">
                  <h5 className="font-bold text-lg">BRINDE #2</h5>
                  <p className="text-sm">Emagreça comendo - Como comer de tudo e ainda emagrecer</p>
                  <span className="text-yellow-300 font-bold">VALOR: R$ 37,00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Valor Total */}
          <div className="bg-yellow-400 text-black p-6 rounded-2xl mb-8">
            <h4 className="text-2xl font-bold mb-2">VALOR TOTAL DO PACOTE</h4>
            <div className="flex items-center justify-center gap-4">
              <span className="text-gray-600 line-through text-xl">R$ 181,00</span>
              <span className="text-4xl font-bold text-red-600">R$ 19,90</span>
            </div>
            <p className="font-semibold mt-2">ECONOMIA DE R$ 161,10 HOJE!</p>
          </div>

          {/* CTA Principal */}
          <button 
            onClick={() => handleCTAClick('Purchase')}
            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-xl md:text-2xl font-bold py-6 px-12 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 mb-4 w-full md:w-auto"
          >
            🔓 SIM! QUERO O CÓDIGO DOS CHÁS AGORA
          </button>
          <p className="text-gray-300 text-sm">✅ Pagamento 100% Seguro • ✅ Acesso Imediato • ✅ Garantia Total</p>
        </div>
      </section>

      {/* Provas Sociais */}
      <section className="py-16 px-4 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Veja os Resultados <span className="text-emerald-600">REAIS</span> de Quem Já Descobriu o Código
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Silva",
                age: "34 anos",
                result: "Perdeu 9kg em 28 dias",
                image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
                testimonial: "Não acreditava que seria tão simples! Os chás são deliciosos e os resultados apareceram na primeira semana."
              },
              {
                name: "Ana Costa",
                age: "41 anos", 
                result: "Perdeu 12kg em 35 dias",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
                testimonial: "Minha diabetes melhorou muito! Além de emagrecer, minha saúde está perfeita. Recomendo para todas!"
              },
              {
                name: "Carla Mendes",
                age: "28 anos",
                result: "Perdeu 7kg em 21 dias",
                image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
                testimonial: "Finalmente encontrei algo que funciona! Não passei fome e ainda ganhei mais energia e disposição."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-green-100">
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.age}</p>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-emerald-500 to-green-600 text-white p-3 rounded-lg mb-4 text-center font-bold">
                  {testimonial.result}
                </div>
                <p className="text-gray-700 italic">"{testimonial.testimonial}"</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black p-4 rounded-xl inline-block">
              <span className="font-bold text-lg">+2.847 mulheres já transformaram suas vidas!</span>
            </div>
          </div>
        </div>
      </section>

      {/* Garantia */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Shield className="w-24 h-24 text-yellow-300" />
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            GARANTIA BLINDADA DE 7 DIAS
          </h3>
          <p className="text-xl leading-relaxed mb-8">
            Experimente o <strong>CÓDIGO DOS CHÁS</strong> por 7 dias completos. Se não ficar 100% satisfeita 
            com os resultados, devolvemos todo seu dinheiro sem perguntas. 
            <strong> Você não tem nada a perder, apenas peso!</strong>
          </p>
          <div className="bg-white text-blue-700 p-6 rounded-2xl inline-block">
            <p className="font-bold text-lg">Risco ZERO para você!</p>
          </div>
        </div>
      </section>

      {/* Urgência Final */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-5xl font-bold mb-6">
            ⚠️ ÚLTIMA CHANCE!
          </h3>
          <p className="text-xl mb-8">
            Esta oferta especial de <strong>R$ 19,90</strong> é limitada e pode sair do ar a qualquer momento. 
            Não perca a oportunidade de transformar sua vida hoje mesmo!
          </p>
          
          <div className="bg-black/30 rounded-2xl p-8 mb-8">
            <h4 className="text-2xl font-bold mb-4">TEMPO RESTANTE:</h4>
            <div className="flex justify-center gap-4 text-4xl font-bold">
              <div className="bg-white text-red-600 px-4 py-2 rounded-lg">
                {String(timeLeft.hours).padStart(2, '0')}
                <div className="text-sm text-gray-600">HORAS</div>
              </div>
              <div className="bg-white text-red-600 px-4 py-2 rounded-lg">
                {String(timeLeft.minutes).padStart(2, '0')}
                <div className="text-sm text-gray-600">MIN</div>
              </div>
              <div className="bg-white text-red-600 px-4 py-2 rounded-lg">
                {String(timeLeft.seconds).padStart(2, '0')}
                <div className="text-sm text-gray-600">SEG</div>
              </div>
            </div>
          </div>

          <button 
            onClick={() => handleCTAClick('Purchase')}
            className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black text-xl md:text-3xl font-bold py-8 px-16 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 mb-4 animate-pulse"
          >
            🔥 GARANTIR MINHA TRANSFORMAÇÃO AGORA!
          </button>
          <p className="text-yellow-200 text-sm">⚡ Acesso liberado em menos de 2 minutos</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-400 text-sm mb-4">
            © 2024 Código dos Chás. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-xs">
            Este produto não se destina a diagnosticar, tratar, curar ou prevenir qualquer doença. 
            Os resultados podem variar de pessoa para pessoa.
          </p>
        </div>
      </footer>
    </div>
  );
}