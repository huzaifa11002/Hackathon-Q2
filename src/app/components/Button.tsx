import { ButtonType } from "../lib/type"


const Button = (props: ButtonType) => {
    return (
        <button disabled={props.disabled} type={props.type} onClick={props.onClick} className={`px-5 py-3 w-fit h-fit flex flex-row gap-3 items-center group-hover:ml-1 bg-primary text-white capitalize rounded-lg text-xs lg:text-sm xl:text-base`}>{props.iconLeft}{props.value}{props.iconRight}</button>
    )
}

export default Button