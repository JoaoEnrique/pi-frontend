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
                <a href={props.href}><button>{props.children}</button></a>
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
                <a href={props.href}><button>{props.children}</button></a>
            </div>
        );
    }

    return (
        <div onClick={props.onClick} className="remove-user">
            <button type={props.type}>{props.children}</button>
        </div>
    );
}