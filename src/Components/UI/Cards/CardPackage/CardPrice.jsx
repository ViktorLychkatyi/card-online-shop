function CardPrice(props){
    return (
        <h2 className={"price-package"}
            style={{backgroundColor: props.bgColor, color: props.textColor, fontSize: props.textSize}}>
            {props.text}
        </h2>
    )
}

export default CardPrice;