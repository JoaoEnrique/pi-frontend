import { Link } from 'react-router-dom';
import './style.css'

type CardProps = {
    link: string,
    imgAlt: string,
    imgSrc: string,
    title: string,
    description: string
}

export function Card(props: CardProps){
    return (
        <>
            <Link className="card" to={props.link}>
                <img src={props.imgSrc} alt={props.imgAlt}/>
                <h3>{ props.title }</h3>
                <p>{ props.description }</p>
            </Link>
        </>
    );
}