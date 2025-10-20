import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export function LoginSection(): JSX.Element {
  const navigate = useNavigate();
  const [tab, setTab] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupConfirm, setSignupConfirm] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (signupPassword !== signupConfirm) {
      alert("As senhas não conferem");
      return;
    }
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-200 to-pink-50 flex items-start pt-12">
      <div className="max-w-2xl mx-auto w-full px-4">
        <div className="text-center mb-6">
          <div className="w-16 h-16 mx-auto rounded-full bg-pink-500/20 flex items-center justify-center text-pink-600 text-xl font-bold">
            +
          </div>
          <h1 className="text-2xl font-semibold text-pink-700 mt-4">
            Área de Membros
          </h1>
          <p className="text-sm text-pink-600/80">
            Acesse sua conta ou faça parte da nossa comunidade
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 pt-6 pb-8">
            <h2 className="text-lg font-semibold text-pink-600 text-center">
              Acesso ao Portal
            </h2>

            <div className="flex items-center justify-center gap-2 mb-4">
              <button
                onClick={() => setTab("login")}
                className={`px-4 py-2 rounded-full ${
                  tab === "login"
                    ? "bg-pink-500 text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                Entrar
              </button>
              <button
                onClick={() => setTab("signup")}
                className={`px-4 py-2 rounded-full ${
                  tab === "signup"
                    ? "bg-pink-500 text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                Cadastrar
              </button>
            </div>

            {tab === "login" ? (
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="text-sm text-gray-600">E-mail</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 w-full border border-pink-100 rounded-md p-2"
                    placeholder="seu@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-600">Senha</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 w-full border border-pink-100 rounded-md p-2"
                    placeholder="•••••••"
                    required
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="text-sm flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="accent-pink-500"
                    />{" "}
                    Lembrar-me
                  </label>
                  <a
                    className="text-sm text-pink-600 hover:underline"
                    href="#"
                  >
                    Esqueci minha senha
                  </a>
                </div>

                <button className="w-full bg-pink-500 text-white rounded-md py-2 font-medium">
                  Entrar
                </button>
              </form>
            ) : (
              <form onSubmit={handleSignup} className="space-y-4">
                <div>
                  <label className="text-sm text-gray-600">Nome</label>
                  <input
                    value={signupName}
                    onChange={(e) => setSignupName(e.target.value)}
                    className="mt-1 w-full border border-pink-100 rounded-md p-2"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-600">E-mail</label>
                  <input
                    type="email"
                    value={signupEmail}
                    onChange={(e) => setSignupEmail(e.target.value)}
                    className="mt-1 w-full border border-pink-100 rounded-md p-2"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-600">Senha</label>
                  <input
                    type="password"
                    value={signupPassword}
                    onChange={(e) => setSignupPassword(e.target.value)}
                    className="mt-1 w-full border border-pink-100 rounded-md p-2"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-600">Confirmar senha</label>
                  <input
                    type="password"
                    value={signupConfirm}
                    onChange={(e) => setSignupConfirm(e.target.value)}
                    className="mt-1 w-full border border-pink-100 rounded-md p-2"
                    required
                  />
                </div>
                <button className="w-full bg-pink-500 text-white rounded-md py-2 font-medium">
                  Cadastrar
                </button>
              </form>
            )}
          </div>
        </div>

        {/* benefícios (responsivo) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          <div className="bg-white rounded-lg p-6 shadow-sm text-center">
            <div className="mx-auto w-12 h-12 bg-pink-50 rounded-full flex items-center justify-center text-pink-600 mb-2">
              👤
            </div>
            <h4 className="font-medium">Perfil Personalizado</h4>
            <p className="text-sm text-gray-500">
              Salve suas leituras bíblicas favoritas.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm text-center">
            <div className="mx-auto w-12 h-12 bg-pink-50 rounded-full flex items-center justify-center text-pink-600 mb-2">
              📚
            </div>
            <h4 className="font-medium">Conteúdo Exclusivo</h4>
            <p className="text-sm text-gray-500">
              Estudos e materiais para membros.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm text-center">
            <div className="mx-auto w-12 h-12 bg-pink-50 rounded-full flex items-center justify-center text-pink-600 mb-2">
              ✉️
            </div>
            <h4 className="font-medium">Comunicação Direta</h4>
            <p className="text-sm text-gray-500">
              Receba avisos sobre eventos e cultos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginSection;