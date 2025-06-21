import CardPackage from "../Components/UI/Cards/CardPackage/CardPackage.jsx";

export const cardsPackets = [
    <CardPackage
        title = {
            {text: "Basic",
            bgColor: "#1e1c1c",
            textColor: "white",
            textSize: "1.5rem"}
        }

        price = {
            {text: "$1",
            bgColor: "rgba(46, 46, 46, 0.84);",
            textColor: "white",
            textSize: "1.5rem"}
        }

        features = {[
            {div: "Sample Text Here", available: true},
            {div: "Other Text Title", available: false},
            {div: "Text Space Goes Here", available: false},
            {div: "Description Space", available: false},
        ]}

        button = {
            {text: "Buy",
            bgColor: "#1e1c1c",
            textColor: "white",
            textSize: "1.5rem"}
        }
    />,

    <CardPackage
        title = {
            {text: "Standard",
            bgColor: "#f11a1a",
            textColor: "white",
            textSize: "1.5rem"}
        }

        price = {
            {text: "$4",
            bgColor: "rgba(46, 46, 46, 0.84);",
            textColor: "white",
            textSize: "1.5rem"}
        }

        features = {[
            {div: "Sample Text Here", available: true},
            {div: "Other Text Title", available: true},
            {div: "Text Space Goes Here", available: true},
            {div: "Description Space", available: false},
        ]}

        button = {
            {text: "Buy",
            bgColor: "#f11a1a",
            textColor: "white",
            textSize: "1.5rem"}
        }
    />,

    <CardPackage
        title = {
            {text: "Premium",
            bgColor: "#f19b1a",
            textColor: "white",
            textSize: "1.5rem"}
        }

        price = {
            {text: "$7",
            bgColor: "rgba(46, 46, 46, 0.84);",
            textColor: "white",
            textSize: "1.5rem"}
        }

        features = {[
            {div: "Sample Text Here", available: true},
            {div: "Other Text Title", available: true},
            {div: "Text Space Goes Here", available: true},
            {div: "Description Space", available: true},
        ]}

        button = {
            {text: "Buy",
            bgColor: "#f19b1a",
            textColor: "white",
            textSize: "1.5rem"}
        }
    />
];