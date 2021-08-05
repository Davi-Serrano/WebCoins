import { MdBrightnessMedium } from "react-icons/md";
import { Button } from "./style";

import { useThemePage } from "../../Context/themePage";

export default function BtnTheme() {
    const { Theme, setTheme} = useThemePage()

    function handleTheme(){
        Theme === "ligth" ? 
            setTheme("dark")
             :
            setTheme("ligth") 
     }

    return (
        <Button onClick={handleTheme}>
            <MdBrightnessMedium  size={50}/>
        </Button>
    )
}
