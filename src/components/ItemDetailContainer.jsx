import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Loading from "./Loading";

const ItemDetailContainer = () => {
    
    const [item, setItem] = useState([]);
    const {id} = useParams();
    const [visible, setVisible] = useState(true);

    


    //Acceso a un Producto por ID en Firebase
    useEffect(() => {
        const db = getFirestore(); // conexion a BD
        const productoRef = doc(db, "productos", id);
        getDoc(productoRef).then(snapShot => {
            if(snapShot.exists()) {
                setItem({id:snapShot.id, ...snapShot.data()});
                setVisible(false);
            }
        });
    }, [id]);

    
    return (
        <div className="container">
            <div className="row my-5">
                    {visible ? <Loading /> : <ItemDetail item={item} />}
            </div>
        </div>
    )
}

export default ItemDetailContainer;