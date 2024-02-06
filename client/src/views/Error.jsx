import {useNavigate} from "react-router-dom";

const Error = (props) => {

    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/')
    }

    return (
        <div>
            <h1>404 ERROR - NOT FOUND</h1>
            <p>The path you requested does not exist on this server. Please check the URL and
                try again. Thank you.
            </p>
            <form onSubmit={handleSubmit}>
                <button>Return Home</button>
            </form>
        </div>
    )
}

export default Error