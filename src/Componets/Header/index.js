import { TopHeader } from "./styled"
import  BtnTheme  from "../ButtonTheme/index";
import { AiOutlineLogin } from "react-icons/ai";
import { AiOutlineLogout } from "react-icons/ai";


export default function Header() {

    const login = localStorage.getItem("@Webcoins: log")

    function handleLogout(){
        localStorage.setItem("@Webcoins: log", "no")
    }

    if(login === "yes"){
        return(
            <TopHeader>
                <h1>Web Coins</h1> <a href="/login"> <AiOutlineLogout onClick={handleLogout} alt="Logout" size={35}/> Logout</a>
                < BtnTheme alt="BtnTheme"/>
            </TopHeader>
            )


}     
        return (
            <TopHeader>
                <h1>Web Coins</h1> <a href="/login"> <AiOutlineLogin alt="Login" size={35} />  Login</a>
                < BtnTheme alt="BtnTheme"/>
            </TopHeader>

        )}
