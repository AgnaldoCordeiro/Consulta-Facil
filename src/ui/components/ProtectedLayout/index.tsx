import React from "react"
import { useAuth } from "data/context/AuthProvider/useAuth"

export const ProtectedLayout = ({ children }: { children: JSX.Element; }) => {
    const auth = useAuth();
    if (!auth.cpf) {
        return (
            <h1> You don t have acess</h1>
        );
    }
    return children;
}