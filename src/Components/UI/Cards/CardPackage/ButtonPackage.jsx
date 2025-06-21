function ButtonPackage(props) {
    return (
        <button className={"button-package"}
            style={{backgroundColor: props.bgColor, color: props.textColor, fontSize: props.textSize}}>
            {props.text}
        </button>
    )
}

export default ButtonPackage;