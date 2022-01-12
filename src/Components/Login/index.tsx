import {TextField} from "@mui/material"
import {Div, Form, Error} from "./style"
import Button from "../../Components/Button"
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import {useAuth} from "../../Providers/Auth"

interface userData{
    email: string;
    password: string;
}

function Login(){
    const {signIn} = useAuth();
    
    const formSchema = yup.object().shape({
        email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
        password: yup.string().required("Senha obrigatória"),
    })

    const { register, 
            handleSubmit, 
            formState: { errors },
    } = useForm({
        resolver:yupResolver(formSchema),
    })



    const onSubmitFunction = (data: userData) => {
        signIn(data)
    }

    

    return(
        <Div>
            <Form onSubmit={handleSubmit(onSubmitFunction)}>
                <TextField margin="normal" fullWidth id="login-basic" label="E-mail" variant="outlined" {...register("email")}/>
                <Error>
                    {
                    errors.email?.message.split(";").map((item: string, index: number)=>(
                        <li key={index}>
                          {item}
                        </li>
                    ))
                    
                    }
                  </Error>
                <TextField margin="normal" fullWidth type="password" id="password-basic" label="Password" variant="outlined" {...register("password")}/>
                <Error>
                    {
                    errors.password?.message.split(";").map((item: string, index: number)=>(
                        <li key={index}>
                          {item}
                        </li>
                    ))
                    
                    }
                  </Error>
                <Button type="submit" text={"Logar"} color="true">Logar</Button>    
            </Form>
        </Div>
    )
}

export default Login;