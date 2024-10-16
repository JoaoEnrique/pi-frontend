import { Helmet } from "react-helmet";
import { FormContainer, Input, Radio, Select } from "../../../components/FormContainer";
import { Nav, NavLeft } from "../../../components/Nav";
import { PrimaryButton } from "../../../components/Buttons";

export function StoreCourse(){
    return (
        <>
            <Helmet>
                <title>Listar Cursos</title>
            </Helmet>
            <Nav/>
            <NavLeft/>
            
            <div className="main-content">
                <h1>Adicionar Curso</h1>
                <FormContainer>
                    <Select label="Coordenador:" name="coordinator_id" text="Selecione o Coordenador"> </Select>

                    <Input label="Nome do curso:" name="name" placeholher="Nome do curso" />
                    <Input label="Periodo:" name="period" placeholher="Periodo" />
                    <Input label="Tipo de trabalho final:" name="type_work" placeholher="Tipo de trabalho final" />


                    <label className="form-label">Curso anual ou bimestral:</label>
                    <div>
                        <Radio name="is_annual" value="0" text="Bimestral" />
                        <br/>
                        <Radio name="is_annual" value="1" text="Anual" />
                    </div>

                    <PrimaryButton>
                        Adicionar Curso
                    </PrimaryButton>
                </FormContainer>
            </div>
        </>
    );
}