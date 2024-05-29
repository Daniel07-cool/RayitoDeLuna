import {useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, where, query } from "firebase/firestore";
import Loading from "./Loading";

const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const {id} = useParams();
    const [visible, setVisible] = useState(true);

   

    
    // Acceder a una Collection en Firestore
    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "productos");

        const queryCollection = id ? query(itemsCollection, where ("categoria", "==", id)) : itemsCollection;
        getDocs(queryCollection).then((snapShot) => {
            if (snapShot.size > 0) {
                setItems(snapShot.docs.map(item => ({id:item.id, ...item.data()})));
                setVisible(false);
            }
        });
    }, [id]);



    return (
        <div className="container">
            <div className="row my-5">
                {visible ? <Loading /> :<ItemList items={items} /> }
            </div>
        </div>
    )
}

export default ItemListContainer;