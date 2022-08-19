import Button from "@components/Button";
import Input from "@components/Input";
import { useAuth } from "context/auth.context";
import { GetServerSideProps, NextPage } from "next";
import { ChangeEvent } from "react";

const Login: NextPage = () => {
    const { login } = useAuth();

    const onSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value
        try {
            login(email, password);
        } catch (error) {
            alert(error);
        }
    }

    return (
        <section className="grid min-h-screen place-content-center">
            <h1>Login</h1>
            <h2 className="mb-5">igloo-camp</h2>
            <form className="flex gap-5 flex-col" onSubmit={onSubmit}>
                <Input name="email" type="email" placeholder="Correo Electronico" />
                <Input name="password" type="password" placeholder="Contraseña" />
                <Button type="submit" >Iniciar sesión</Button>
            </form>
        </section>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { pocketbase_auth_token } = context.req.cookies
    if (pocketbase_auth_token) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }

    return { props: {} }
}


export default Login;