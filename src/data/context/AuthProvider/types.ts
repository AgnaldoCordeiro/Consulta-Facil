export interface IUser {
  token?: string;
  cpf?: string;
  login?: string;
  password?: string;
}

export interface IContext extends IUser {
  authenticate: (cpf: string, login: string, password: string) => Promise<void>;
  logout: () => void;
}

export interface IAuthProvider {
  children: JSX.Element;
}
