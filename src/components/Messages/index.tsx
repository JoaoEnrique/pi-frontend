import './style.css'
type MessageProps = {
    title?: string;
    text: string;
    isVivible: boolean;
}

export function ErrorMessage(props: MessageProps){
    return (
        <div style={{display: props.isVivible ? "block" : 'none'}} className="alert alert-danger alert-dismissible fade show d-none">
            <strong id="alert-title"> {props.title}  </strong> 
            <span id="alert-text">{props.text}</span>
        </div>
    );
}

export function SuccessMessage(props: MessageProps){
    return (
        <div style={{display: props.isVivible ? "block" : 'none'}} className="alert alert-success alert-dismissible fade show d-none">
            <strong id="alert-title"> {props.title}  </strong> 
            <span id="alert-text">{props.text}</span>
        </div>
    );
}