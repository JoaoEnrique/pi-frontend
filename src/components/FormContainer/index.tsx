import './style.css'

interface FormContainerProps {
    children: React.ReactNode; // Permite que o FormContainer receba qualquer conteúdo como filhos
}

interface InputContainerProps {
    label: string;
    placeholher?: string;
    name: string;
    type?: string;
    id?: string;
}

interface SelectContainerProps {
    label: string;
    name: string;
    text: string;
    id?: string;
    children?: React.ReactNode;
}

interface RadioContainerProps {
    name: string;
    text: string;
    id?: string;
    value?: string;
}

export function FormContainer({ children }: FormContainerProps){
    return (
        <div className="Form">
            <form id="form">
                {children}
            </form>
        </div>
    );
}

export function Input(props: InputContainerProps){
    return (
        <>
            <div className="mb-3 text-start">
                <label htmlFor={props.name} className="form-label">{props.label}</label>
                <input type={props.type ?? "text"} name={props.name} className="form-control" id={props.id ?? props.name} placeholder={props.placeholher}/>
            </div>
        </>
    );
}

export function Select(props: SelectContainerProps){
    return (
        <>
            <div className="mb-3 text-start">
                <label className="form-label">{props.label}</label>
                <select className="form-control" name={props.name} id={props.id ?? props.name}>
                    <option selected disabled value="">{props.text}</option>
                    {props.children}
                </select>
            </div>
        </>
    );
}

export function Radio(props: RadioContainerProps){
    return (
        <>
            <label className="custom-radio">
                <input type="radio" id={props.id ?? props.name} name={props.name} value={props.value}/>
                <span className="radio-btn"></span>
                {props.text}
            </label>
        </>
    );
}