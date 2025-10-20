import React from "react";

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-pink-50 text-pink-700">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold">Site Cristão</h4>
            <p className="text-sm mt-1">Crescendo juntos na fé.</p>
          </div>
          <div>
            <h4 className="font-semibold">Contato</h4>
            <p className="text-sm mt-1">contato@exemplo.com</p>
          </div>
          <div>
            <h4 className="font-semibold">Siga</h4>
            <div className="flex gap-3 mt-2">
              <a className="text-sm bg-white/60 px-3 py-1 rounded-full">E-mail</a>
              <a className="text-sm bg-white/60 px-3 py-1 rounded-full">GitHub</a>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-pink-600/70">
          © {new Date().getFullYear()} Site Cristão — Desenvolvido por Isis
        </div>
      </div>
    </footer>
  );
}