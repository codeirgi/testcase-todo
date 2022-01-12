import { Spinner } from "react-bootstrap"

const Loaders = () => {
    return(
        <div className="position-absolute top-50 start-50 translate-middle text-center">
            <Spinner animation="grow" />
        </div>
    )
}

export default Loaders;