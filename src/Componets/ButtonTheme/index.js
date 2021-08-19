import { MdBrightnessMedium } from "react-icons/md";
import { Button } from "./style";

import { useThemePage } from "../../Context/themePage";

export default function BtnTheme() {
    const { Theme, setTheme} = useThemePage()

    function handleTheme(){

        if(Theme === "ligth"){
            setTheme("dark")
            localStorage.setItem("@Webcoin: Theme", "dark")
        }else{
            setTheme("ligth")
            localStorage.setItem("@Webcoin: Theme", "ligth")
        }
           
     }

    return (
        <Button onClick={handleTheme}>
            <MdBrightnessMedium  size={50}/>
        </Button>
    )
}
