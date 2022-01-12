import { ButtonHTMLAttributes } from "react"
import {ButtonT} from "./style"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    color?: string;
}

function Button({color, text, ...rest}: ButtonProps){
    return (
        <ButtonT color={color} {...rest}>{text}</ButtonT>
    )
}

export default Button;