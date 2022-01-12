import check from '../assets/icons/check.png';
import minus from '../assets/icons/minus.png';

const Lists = ({ title, status, onClick, onChangeStatus, ...props }) => {
    return(
        <div
            className="d-flex align-items-center"
            role="button"
            {...props}
        >
            {status === 0 ? (
                <img 
                    src={check}
                    width={14}
                    height={14}
                    onClick={onChangeStatus}
                    alt="check"
                />
                ) : (
                <img 
                    src={minus}
                    width={14}
                    height={14}
                    onClick={onChangeStatus}
                    alt="minus"
                />
            )}
            &nbsp;
            <p
                className={`list-task m-0 ${status ? "text-decoration-line-through text-secondary" : ""}`}
                onClick={onClick}
            > {title} </p>
        </div>
    )
}

Lists.defaultProps = {
    title: "default",
    checked: false
}

export default Lists;