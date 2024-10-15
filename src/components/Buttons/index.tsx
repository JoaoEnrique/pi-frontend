type ButtonProps = {
    type?: "submit" | "reset" | "button";
    isLink?: boolean;
    href?: string;
    children: React.ReactNode; 
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
        <div className="add-user">
            <button type={props.type}>{props.children}</button>
        </div>
    );
}