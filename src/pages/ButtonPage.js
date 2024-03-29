import Button from "../components/Button";
import { VscBroadcast,VscChip,VscCheck,VscWorkspaceUnknown,VscWorkspaceUntrusted,VscStarEmpty } from "react-icons/vsc";

const ButtonPage = ()=>{

    return(
        <div>
            <Button primary rounded outline><VscBroadcast/> Primary</Button><br/>
            <Button secondary><VscChip />Secondary</Button><br/>
            <Button success rounded outline><VscCheck />Success</Button><br/>
            <Button warning><VscWorkspaceUnknown />Warning</Button><br/>
            <Button danger rounded outline><VscWorkspaceUntrusted />Danger</Button><br/>
            <Button plain><VscStarEmpty />Plain</Button><br/>
        </div>
    )
}

export default ButtonPage;