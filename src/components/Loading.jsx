const Loading = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col text-center">
                    <button className="btn btn-primary" type="button" disabled>
                        <span className="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
                        <span className="visually-hidden" role="status">Cargando...</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Loading;