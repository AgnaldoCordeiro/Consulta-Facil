import { ApiService } from "data/services/ApiServices";
import { IUser } from "./types";

export function setUserLocalStorage(user: IUser | null) {
  localStorage.setItem("u", JSON.stringify(user));
}
export function getUserLocalStorage() {
  const json = localStorage.getItem("u");

  if (!json) {
    return null;
  }
  const user = JSON.parse(json);
  return user ?? null;
}

export async function LoginRequest(
  cpf: string,
  login: string,
  password: string
) {
  try {
    const request = await ApiService.post("authenticate", {
      cpf,
      login,
      password,
    });
    return request.data;
  } catch (error) {
    return null;
  }
}
export async function CadastroRequest(
  name: string,
  cpf: string,
  email: string,
  login: string,
  password: string
) {
  try {
    const request = await ApiService.post("register", {
      name,
      cpf,
      email,
      login,
      password,
    });
    return request.data;
  } catch (error) {
    return null;
  }
}
