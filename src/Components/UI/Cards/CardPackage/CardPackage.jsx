import './CardPackage.css'
import CardTitle from "./CardTitle.jsx";
import CardPrice from "./CardPrice.jsx";
import ButtonPackage from "./ButtonPackage.jsx";
import Check from "../../Elements/Check.jsx";
import Cross from "../../Elements/Cross.jsx";

function CardPackage(props) {
    return (
    <div className={"card-package-container"}>
        <CardTitle
            text={props.title.text}
            bgColor={props.title.bgColor}
            textColor={props.title.textColor}
            textSize={props.title.textSize}
        />

        <CardPrice
            text={props.price.text}
            bgColor={props.price.bgColor}
            textColor={props.price.textColor}
            textSize={props.price.textSize}
        />

        <div className="list-package-container">
            {props.features.map((item, i) => (
                <div className="list-package" key={i}>
                    {item.available ? <Check /> : <Cross />}
                    <span>{item.div}</span>
                </div>
            ))}
        </div>

        <ButtonPackage
            text={props.button.text}
            bgColor={props.button.bgColor}
            textColor={props.button.textColor}
            textSize={props.button.textSize}
        />
        </div>
    )
}

export default CardPackage;