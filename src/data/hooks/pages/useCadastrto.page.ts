import { useEffect, useMemo, useState } from "react";
import router from "next/router";
import { useAuth } from "data/context/AuthProvider/useAuth";
import { ValidationService } from "data/services/ValidationServices";

export default function useCadastro() {
  const [name, setName] = useState(""),
    [cpf, setCpf] = useState(""),
    cpfValido = useMemo(() => {
      return ValidationService.cpf(cpf);
    }, [cpf]),
    [email, setEmail] = useState(""),
    [login, setLogin] = useState(""),
    [password, setPassword] = useState(""),
    [erro, setErro] = useState(""),
    [success, setSuccess] = useState(""),
    [carregando, setCarregando] = useState(false);

  const auth = useAuth();
  function limparInputs() {
    setName(""), setCpf(""), setEmail(""), setLogin(""), setPassword("");
  }

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
      await auth.register(name, cpf.replace(/\D/g, ""), email, login, password);
      setSuccess("Registrado com sucesso!!!");
      setCarregando(false);
    } catch (error) {
      setErro("Informação Invalida, por favor conferir os campos");
      setCarregando(false);
    }
    limparInputs();
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
    success,
    carregando,
  };
}
