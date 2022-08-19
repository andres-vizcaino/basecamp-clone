/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useContext, useEffect, useState } from 'react';
import { client } from '@lib/PocketBase';
import Cookies from 'js-cookie';
import { User } from 'pocketbase';
import { useRouter } from 'next/router';

interface AuthContextProps {
    isAuthenticated: boolean;
    user: User | undefined;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({
    isAuthenticated: false,
    user: undefined,
    login: async () => { },
    logout: async () => { },
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | undefined>(undefined)
    const router = useRouter();

    useEffect(() => {
        async function loadUserFromCookies() {
            const { model: currentUser, token } = client.authStore;
            Cookies.set('pocketbase_auth_token', token);
            if (currentUser) setUser(currentUser as User);
        }

        loadUserFromCookies()
    }, [])

    const login = async (email: string, password: string) => {
        try {
            const { user, token } = await client.users.authViaEmail(email, password);
            setUser(user);
            Cookies.set('pocketbase_auth_token', token);
        } catch (error) {
            alert("Correo o contraseña incorrectos"); // TODO: Manejar un error de autenticación
        }
    }

    const logout = () => {
        Cookies.remove('pocketbase_auth_token');
        setUser(undefined)
        client.authStore.clear();
        router.push('/login')
    }


    return (
        <AuthContext.Provider value={{ isAuthenticated: !!user, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

// export const ProtectRoute = ({ children }: { children: NextPage }) => {
//     const { isAuthenticated, isLoading } = useAuth();
//     if (isLoading || (!isAuthenticated && window.location.pathname !== '/login')) {
//         return <div>Estoy cargandooooooooooo...</div>;
//     }
//     return children;
// };

export const useAuth = () => useContext(AuthContext)


