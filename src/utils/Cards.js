import { 
    Card
} from 'react-bootstrap';

import plus from '../assets/icons/plus.png';

const Cards = () => {
    return(
        <div></div>
    )
}

Cards.Home = ({ className, children, ...props }) => {
    return(
        <Card 
            className={`shadow m-3 p-3 rounded border-0 ${className}`}
        >
            <Card.Body>
                {children}
            </Card.Body>
        </Card>
    )
}

Cards.Frame = ({ title, onCreate, children }) => {
    return(
        <Card className="shadow-sm rounded border-0 w-100 m-1">
            <Card.Header className="d-flex align-items-center justify-content-between">
                {title}
                {onCreate && (
                    <img 
                        src={plus}
                        width={14}
                        height={14}
                        onClick={onCreate}
                        role="button"
                    />
                )}
            </Card.Header>
            <Card.Body>
                {children}
            </Card.Body>
        </Card>
    )
}

export default Cards;