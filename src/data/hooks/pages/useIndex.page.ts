import { useState } from "react";
import { ApiService } from "data/services/ApiServices";
import { useAuth } from "data/context/AuthProvider/useAuth";
import router from "next/router";

export default function useIndex() {
  const [cpf, setCpf] = useState(""),
    [login, setLogin] = useState(""),
    [password, setPassword] = useState(""),
    [erro, setErro] = useState(""),
    [carregando, setCarregando] = useState(false);

  const auth = useAuth();

  async function buscaLocatario(cpf: string, login: string, password: string) {
    setCarregando(true);
    setErro("");

    try {
      await auth.authenticate(cpf, login, password);
      router.push("/profile");
      setCarregando(false);
    } catch (error) {
      setErro("Invalide cpf or login or password");
      setCarregando(false);
    }
  }

  return {
    cpf,
    login,
    password,
    setCpf,
    setLogin,
    setPassword,
    buscaLocatario,
    erro,
    carregando,
  };
}
