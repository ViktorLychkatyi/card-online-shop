function CardTitle(props) {
    return (
        <h1 className={"title-package"}
            style={{backgroundColor: props.bgColor, color: props.textColor, fontSize: props.textSize}}>
            <span className={"title-package-up"}>
                {props.text}
            </span>
        </h1>
    )
}

export default CardTitle;