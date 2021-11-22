export interface IUser {
  token?: string;
  cpf?: string;
  login?: string;
  password?: string;
  name?: string;
  email?: string;
}

export interface IContext extends IUser {
  authenticate: (cpf: string, login: string, password: string) => Promise<void>;
  register: (
    cpf: string,
    login: string,
    password: string,
    name: string,
    email: string
  ) => Promise<void>;
  logout: () => void;
}

export interface IAuthProvider {
  children: JSX.Element;
}
