import './style.css'

interface FormContainerProps {
    children: React.ReactNode; // Permite que o FormContainer receba qualquer conteúdo como filhos
    onSubmit?: (e: React.FormEvent) => void;
}

interface InputContainerProps {
    label: string;
    placeholder?: string;
    value?: string;
    name: string;
    type?: string;
    id?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

interface SelectContainerProps {
    label: string;
    name: string;
    text: string;
    id?: string;
    children?: React.ReactNode;
    value: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

interface RadioContainerProps {
    name: string;
    text: string;
    id?: string;
    value?: string;
    checked?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export function FormContainer(props: FormContainerProps){
    return (
        <div className="Form">
            <form id="form" onSubmit={props.onSubmit}>
                {props.children}
            </form>
        </div>
    );
}

export function Input(props: InputContainerProps){
    return (
        <>
            <div className="mb-3 text-start">
                <label htmlFor={props.name} className="form-label">{props.label}</label>
                <input value={props.value} onChange={props.onChange} type={props.type ?? "text"} name={props.name} className="form-control" id={props.id ?? props.name} placeholder={props.placeholder}/>
            </div>
        </>
    );
}

export function Select(props: SelectContainerProps){
    return (
        <>
            <div className="mb-3 text-start">
                <label className="form-label">{props.label}</label>
                <select value={props.value} onChange={props.onChange} className="form-control" name={props.name} id={props.id ?? props.name}>
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
                <input checked={props.checked} onChange={props.onChange} type="radio" id={props.id ?? props.name} name={props.name} value={props.value}/>
                <span className="radio-btn"></span>
                {props.text}
            </label>
        </>
    );
}