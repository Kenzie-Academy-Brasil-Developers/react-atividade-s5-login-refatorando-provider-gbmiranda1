import { Container } from "./style";
import Button from "../Button";
import {useAuth} from "../../Providers/Auth"

function Dashboard(){
    const {Logout} = useAuth();
    return(
        <Container>
            <div>Logado</div>
            <Button type="submit" text={"Sair"} onClick={Logout}></Button> 
        </Container>
    )
}

export default Dashboard;