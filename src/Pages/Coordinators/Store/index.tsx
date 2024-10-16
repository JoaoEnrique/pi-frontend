import { Helmet } from "react-helmet";
import { FormContainer, Input, Radio, Select } from "../../../components/FormContainer";
import { Nav, NavLeft } from "../../../components/Nav";
import { DangerButton, PrimaryButton } from "../../../components/Buttons";
import { useEffect, useState } from "react";
import axios from "axios";
import { ErrorMessage, SuccessMessage } from "../../../components/Messages";
import { useNavigate, useParams } from "react-router-dom";

export function StoreCoordinator(){
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();  // Pega o ID da URL
    const [errorMessage, setErrorMessage] = useState("");
    const [titleMessage, setTitleMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        id: 0,
        code: '',
    });
    const URL_API = import.meta.env.VITE_URL_API;

    // Função para buscar os dados do curso pelo ID
    useEffect(() => {
        const fetchCourse = async () => {
            if(id){
                try {
                    const response = await axios.get(`${URL_API}/coordinators/${id}`);
                    
                    if(response.data){
                        setFormData(response.data);
                        return;
                    }

                    setTitleMessage("Erro ao buscar coordenador");
                    setErrorMessage("O coordenador não foi encontrado");
                } catch (error: any) {
                    console.error("Erro:", error);
                    setErrorMessage(error.response.data.error ?? error.message);
                }
            }
        };

        if (id) fetchCourse();
    }, [id]);

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

            if(id){
                if(!formData.id){
                    return;
                }
                
                var response = await axios.put(`${URL_API}/coordinators/${id}`, formData);
            }
            else
                var response = await axios.post(`${URL_API}/coordinators`, formData);

            // Sucesso
            setTitleMessage("");
            setSuccessMessage(response.data.message);
            setTimeout(() => {
                navigate(`/coordenadores/editar/${response.data.coordinator.id}`);
            }, 1000); // Delay de 2 segundos (2000 milissegundos)
            return;

        } catch (error: any) {
            setTitleMessage("");
            setErrorMessage(error?.response?.data.error ?? error.message);
            console.error("Ocorreu um erro:", error);
        }
    };

    const handleRemove = async (e: React.FormEvent) => {
        try {
            await axios.delete(`${URL_API}/coordinators/${id}`);

            // Sucesso
            setTitleMessage("");
            setSuccessMessage("Coordenador removido");
            setTimeout(() => {
                navigate(`/coordenadores`)
            }, 1000); // Delay de 2 segundos (2000 milissegundos)
            return;

        } catch (error: any) {
            setTitleMessage("Erro: ");
            setErrorMessage(error?.response?.data.error ?? error.message);
            console.error("Ocorreu um erro:", error);
        }
    };
    
    return (
        <>
            <Helmet>
                <title>{id ? "Atualizar Coordenador" : "Adicionar Coordenador"}</title>
            </Helmet>
            <Nav/>
            <NavLeft/>
            
            <div className="main-content">
                <h1>{id ? "Atualizar Coordenador" : "Adicionar Coordenador"}</h1>
                
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

                    <div className="d-flex">
                        <PrimaryButton type="submit">
                            {id ? "Atualizar Coordenador" : "Adicionar Coordenador"}
                        </PrimaryButton>

                        
                        {id ? (
                            <DangerButton onClick={handleRemove} type="button">
                                Remover Coordenador
                            </DangerButton>
                        ) : ''}
                    </div>

                </FormContainer>
            </div>
        </>
    );
}