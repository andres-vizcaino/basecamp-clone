import Button from "@components/Button";
import Input from "@components/Input";
import { NextPage } from "next";
import { useState, ChangeEvent } from "react";

const Login: NextPage = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    const onSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
    }

    return (
        <section className="grid min-h-screen place-content-center">
            <h1>Login</h1>
            <form className="flex gap-5 flex-col" onSubmit={onSubmit}>
                <Input name="email" type="email" onChange={handleChange} value={formData.email} placeholder="Correo Electronico" />
                <Input name="password" type="password" onChange={handleChange} value={formData.password} placeholder="Contraseña" />

                <Button type="submit" >Iniciar sesión</Button>
            </form>
        </section>
    );
}

export default Login;