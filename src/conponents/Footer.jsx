export default function Footer(props) {
    const { handleToggleModal, data} = props

    return (
        <footer>
            <div className="bgGradient"></div>
            <div>
                <h1>Apod project</h1>
                <h2>{data?.title}</h2>
            </div>
            <button>
                <i className="fa-solid fa-circle-info" onClick={handleToggleModal}></i>
            </button>
        </footer>
    )
}
