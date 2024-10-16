import { Link } from "react-router-dom";

type ButtonProps = {
    type?: "submit" | "reset" | "button";
    isLink?: boolean;
    href?: string;
    children: React.ReactNode; 
    onClick?: (e: React.FormEvent) => void;
}

export function PrimaryButton(props: ButtonProps){
    if(props.isLink){
        return (
            <div className="add-user">
                <Link to={props.href ?? ""}><button>{props.children}</button></Link>
            </div>
        );
    }

    return (
        <div onClick={props.onClick} className="add-user">
            <button type={props.type}>{props.children}</button>
        </div>
    );
}


export function DangerButton(props: ButtonProps){
    if(props.isLink){
        return (
            <div className="remove-user">
                <Link to={props.href ?? ""}><button>{props.children}</button></Link>
            </div>
        );
    }

    return (
        <div onClick={props.onClick} className="remove-user">
            <button type={props.type}>{props.children}</button>
        </div>
    );
}