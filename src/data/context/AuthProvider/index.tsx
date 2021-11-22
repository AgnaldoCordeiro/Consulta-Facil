import React, { createContext, useEffect, useState } from "react";
import { IAuthProvider, IContext, IUser } from "./types";
import { CadastroRequest, getUserLocalStorage, LoginRequest, setUserLocalStorage } from "./util";


export const AuthContext = createContext<IContext>({} as IContext)

export const AuthProvider = ({ children }: IAuthProvider) => {
    const [user, setUser] = useState<IUser | null>()

    useEffect(() => {
        const user = getUserLocalStorage()

        if (user) {
            setUser(user)
        }

    }, [])

    async function authenticate(cpf: string, login: string, password: string) {
        const response = await LoginRequest(cpf, login, password);

        const payload = { token: response.token, cpf, login };

        setUser(payload);
        setUserLocalStorage(payload)
    } 
    function register(name: string, cpf: string, email: string, login: string, password: string) {
         CadastroRequest(name, cpf, email, login, password);
    } 

    function logout(): void {
        setUser(null);

    }

    return (
        <AuthContext.Provider value={{ ...user, authenticate, logout, register }}>
            {children}
        </AuthContext.Provider>
    )

}