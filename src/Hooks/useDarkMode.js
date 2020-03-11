import useLocalStorage from "./useLocalStorage";
import { useEffect } from "react";

const useDarkMode = (key) => {
    const [someValue, setSomeValue] = useLocalStorage(key)

    useEffect(() => {
        if (someValue === true) {
            document.querySelector("body").classList.add("dark-mode")
        }
        else {
            document.querySelector('body').classList.remove("dark-mode");
        }

    }, [someValue])

    const setTheValue = (someValue) => {
        setSomeValue (someValue)
        localStorage.setItem(key, JSON.stringify(someValue));
    }
    return [someValue, setTheValue]
    
}
export default useDarkMode