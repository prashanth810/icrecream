import { createContext, useEffect, useState } from "react";


export const Productscontext = createContext();

const ProductscontextProvider = (props) => {
    const [vegitables_vegis, setVegitables_vegis] = useState([]);


    const fetchproducts = async () => {
        const resp = await fetch(`http://localhost:8080/auth/products`);
        const res = await resp.json();
        setVegitables_vegis(res);
    }

    useEffect(() => {
        fetchproducts();
    }, []);


    const contextvalues = {
        vegitables_vegis,
        setVegitables_vegis
    }

    return (
        <Productscontext.Provider value={contextvalues}>
            {props.children}
        </Productscontext.Provider>
    )
}
export default ProductscontextProvider;