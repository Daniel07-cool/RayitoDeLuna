const ItemListContainer = ({ mensaje }) => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col text-center">
                    <div class="alert alert-primary">
                        <strong>{mensaje}</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer;