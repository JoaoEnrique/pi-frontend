import { Helmet } from "react-helmet";
import { FormContainer, Input, Radio, Select } from "../../../components/FormContainer";
import { Nav, NavLeft } from "../../../components/Nav";
import { PrimaryButton } from "../../../components/Buttons";
import { useState } from "react";
import axios from "axios";
import { ErrorMessage, SuccessMessage } from "../../../components/Messages";

export function StoreCourse(){
    const [errorMessage, setErrorMessage] = useState("");
    const [titleMessage, setTitleMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [formData, setFormData] = useState({
        coordinator_id: '',
        name: '',
        period: '',
        type_work: '',
        is_annual: ''
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
            if (!formData.coordinator_id || !formData.name || !formData.period || !formData.is_annual || !formData.type_work) {
                setTitleMessage("");
                setErrorMessage("Informe todos os campos");
                return;
            }

            const response = await axios.post(`${URL_API}/courses`, formData);

            // Sucesso
            setTitleMessage("");
            setSuccessMessage("Informe todos os campos");
            // Aqui você pode redirecionar ou realizar outra ação
            window.location.href = `edit_curso.html?id=${response.data.course.id}`;

        } catch (error) {
            console.error("Ocorreu um erro:", error);
            alert("Erro ao adicionar o curso.");
        }
    };
    
    return (
        <>
            <Helmet>
                <title>Listar Cursos</title>
            </Helmet>
            <Nav/>
            <NavLeft/>
            
            <div className="main-content">
                <h1>Adicionar Curso</h1>

                <ErrorMessage title={titleMessage} isVivible={errorMessage.length ? true : false} text={errorMessage}/>
                <SuccessMessage title={titleMessage} isVivible={successMessage.length ? true : false} text={successMessage}/>

                <FormContainer onSubmit={handleSubmit}>
                <Select
                        label="Coordenador:"
                        name="coordinator_id"
                        value={formData.coordinator_id}
                        onChange={handleInputChange}
                        text="Selecione o Coordenador"
                    />

                    <Input
                        label="Tipo de trabalho final:"
                        name="type_work"
                        placeholder="Tipo de trabalho final"
                        value={formData.type_work}
                        onChange={handleInputChange}
                    />

                    <Input
                        label="Período:"
                        name="period"
                        placeholder="Período"
                        value={formData.period}
                        onChange={handleInputChange}
                    />
                    <Input
                        label="Tipo de trabalho final:"
                        name="type_work"
                        placeholder="Tipo de trabalho final"
                        value={formData.type_work}
                        onChange={handleInputChange}
                    />

                    <label className="form-label">Curso anual ou bimestral:</label>
                    <div>
                        <Radio
                            name="is_annual"
                            value="0"
                            checked={formData.is_annual === "0"}
                            onChange={handleInputChange}
                            text="Bimestral"
                        />
                        <br />
                        <Radio
                            name="is_annual"
                            value="1"
                            checked={formData.is_annual === "1"}
                            onChange={handleInputChange}
                            text="Anual"
                        />
                    </div>


                    <PrimaryButton type="submit">
                        Adicionar Curso
                    </PrimaryButton>
                </FormContainer>
            </div>
        </>
    );
}