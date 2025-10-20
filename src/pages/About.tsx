import React from "react";

export function About(): JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white py-12">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-pink-600 mb-4">Sobre Este Portal</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Um espaço digital para fortalecer a fé e conectar a comunidade metodista.</p>
        </div>

        <section className="grid gap-8">
          <div className="bg-white rounded-lg p-6 shadow">
            <h2 className="text-2xl font-semibold text-pink-600 mb-2">Nossa Missão Digital</h2>
            <p className="text-gray-600">Este portal foi criado com o objetivo de levar a mensagem metodista a todos, em sintonia com estudos bíblicos e reflexão espiritual.</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow">
            <h2 className="text-xl font-semibold mb-2">Identidade Metodista</h2>
            <p className="text-gray-600">Conecte-se com a tradição metodista em um ambiente digital moderno e acolhedor.</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow">
            <h2 className="text-2xl font-semibold text-pink-600 mb-2">Desenvolvimento</h2>
            <p className="text-gray-600">Projeto desenvolvido para oferecer uma experiência fluida em todos os dispositivos.</p>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div>
                <h3 className="font-medium">Tecnologias Utilizadas</h3>
                <ul className="text-sm text-gray-600 list-inside list-disc">
                  <li>React + TypeScript</li>
                  <li>TailwindCSS</li>
                  <li>Vite</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium">Recursos Principais</h3>
                <ul className="text-sm text-gray-600 list-inside list-disc">
                  <li>Design responsivo</li>
                  <li>Acessibilidade</li>
                  <li>Performance</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow text-center">
            <h2 className="text-2xl font-semibold text-pink-600 mb-2">Desenvolvido por</h2>
            <p className="text-gray-600 mb-4">Este site foi desenvolvido por <strong>Isis</strong>, com dedicação ao design e à experiência do usuário.</p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 bg-pink-50 rounded-full flex items-center justify-center text-pink-600 font-medium">I</div>
              <div className="text-left">
                <p className="font-medium">Isis</p>
                <p className="text-sm text-gray-500">Desenvolvedora / Designer</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;