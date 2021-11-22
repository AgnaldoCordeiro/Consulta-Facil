import { useState } from "react";
import router from "next/router";
import { useAuth } from "data/context/AuthProvider/useAuth";

export default function useCadastro() {
  const [name, setName] = useState(""),
    [cpf, setCpf] = useState(""),
    [email, setEmail] = useState(""),
    [login, setLogin] = useState(""),
    [password, setPassword] = useState(""),
    [erro, setErro] = useState(""),
    [carregando, setCarregando] = useState(false);

  const auth = useAuth();

  async function cadastroLocatario(
    name: string,
    cpf: string,
    email: string,
    login: string,
    password: string
  ) {
    setCarregando(true);
    setErro("");

    try {
      await auth.register(name, cpf, email, login, password);
      router.push("/login");
      setCarregando(false);
    } catch (error) {
      setErro("Invalide informação");
      setCarregando(false);
    }
  }

  return {
    name,
    cpf,
    email,
    login,
    password,
    setName,
    setCpf,
    setEmail,
    setLogin,
    setPassword,
    cadastroLocatario,
    erro,
    carregando,
  };
}
