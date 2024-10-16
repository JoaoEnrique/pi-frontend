import { Helmet } from "react-helmet";
import { FormContainer, Input, Radio, Select } from "../../../components/FormContainer";
import { Nav, NavLeft } from "../../../components/Nav";
import { PrimaryButton } from "../../../components/Buttons";
import { useState } from "react";
import axios from "axios";
import { ErrorMessage, SuccessMessage } from "../../../components/Messages";

export function EditCoordinator(){
    const [errorMessage, setErrorMessage] = useState("");
    const [titleMessage, setTitleMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        code: '',
    });
    const URL_API = import.meta.env.VITE_URL_API;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            // Verifica se todos os campos estão preenchidos
            if (!formData.name || !formData.name || !formData.email || !formData.code) {
                setTitleMessage("");
                setErrorMessage("Informe todos os campos");
                return;
            }

            const response = await axios.post(`${URL_API}/coordinators`, formData);

            // Sucesso
            setTitleMessage("");
            setSuccessMessage("Curso Cadastrado");
            // Aqui você pode redirecionar ou realizar outra ação
            // window.location.href = `edit_curso.html?id=${response.data.coordinator.id}`;
            window.location.href = `/coordenadores`;
            return;

        } catch (error: any) {
            setTitleMessage("");
            setErrorMessage(error?.response?.data.error ?? error.message);
            console.error("Ocorreu um erro:", error);
        }
    };
    
    return (
        <>
            <Helmet>
                <title>Cadastrar Coordenador</title>
            </Helmet>
            <Nav/>
            <NavLeft/>
            
            <div className="main-content">
                <h1>Adicionar Coordenador</h1>
                
                <ErrorMessage title={titleMessage} isVivible={errorMessage.length ? true : false} text={errorMessage}/>
                <SuccessMessage title={titleMessage} isVivible={successMessage.length ? true : false} text={successMessage}/>

                <FormContainer onSubmit={handleSubmit}>
                    <Input
                        label="Nome:"
                        name="name"
                        placeholder="Nome"
                        value={formData.name}
                        onChange={handleInputChange}
                    />

                    <Input
                        label="Email:"
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    <Input
                        label="RM:"
                        name="code"
                        placeholder="RM"
                        value={formData.code}
                        onChange={handleInputChange}
                    />

                    <PrimaryButton type="submit">
                        Adicionar Curso
                    </PrimaryButton>
                </FormContainer>
            </div>
        </>
    );
}