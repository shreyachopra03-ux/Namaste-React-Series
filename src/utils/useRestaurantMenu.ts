import { MENU_API } from "../utils/constants";
import { useEffect, useState } from "react";

// CUSTOM HOOK
const useRestaurantMenu = (resId?: string) => {
    const [resInfo, setResInfo] = useState<any>(null)

    useEffect(() => {
        fetchData();
    }, [resId]);

    const fetchData = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();

        setResInfo(json.data);
    }
    return resInfo;

}; 
export default useRestaurantMenu;