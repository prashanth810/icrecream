import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const Foodcontext = createContext();

const FoodcontextPprovider = ({ children }) => {
    const [token, setToken] = useState("");
    const [food_list, setFood_list] = useState([]);
    const [cartitems, setCartitems] = useState({});

    const url = "http://localhost:8020";

    const handlefetchfood = async () => {
        const response = await axios.get(url + "/api/food/list");
        setFood_list(response.data.data);
    }

    const addtocart = async (itemId) => {
        if (!cartitems[itemId]) {
            setCartitems((prev) => ({
                ...prev,
                [itemId]: 1
            }))
        }

        else {
            setCartitems((prev) => ({ ...prev, [itemId]: prev[itemId] += 1 }));
        }
        if (token) {
            try {
                await axios.post(url + "/api/cart/add", { itemId }, { headers: { token } });
            }
            catch (error) {
                console.log("adding error", error);
            }
        }
    }


    const removefromcart = async (itemId) => {
        setCartitems((prev) => ({
            ...prev,
            [itemId]: prev[itemId] > 1 ? prev[itemId] - 1 : 0
        }));

        if (token) {
            await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } });
        }
    };

    const gettotalcart = () => {
        let totalAmmount = 0;
        for (const items in cartitems) {
            if (cartitems[items] > 0) {
                let itemInfo = food_list.find((product) => product._id === items);
                totalAmmount += itemInfo * cartitems[items];
            }
        }
        return totalAmmount;
    }

    const loadcartData = async (token) => {
        const response = await axios.post(url + "/api/cart/list", {}, { headers: { token } });
        setCartitems(response.data.cartData);
    }

    useEffect(() => {
        async function loadData() {
            await handlefetchfood();
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"));
                await loadcartData(localStorage.getItem("token"));
            }
        }
        loadData();
    }, []);


    const contextvalue = {
        url,
        token,
        setToken,
        food_list,
        setFood_list,
        addtocart,
        removefromcart,
        cartitems,
        setCartitems,
        gettotalcart,
    }

    return (
        <Foodcontext.Provider value={contextvalue} >
            {children}
        </Foodcontext.Provider>
    )
}

export default FoodcontextPprovider;