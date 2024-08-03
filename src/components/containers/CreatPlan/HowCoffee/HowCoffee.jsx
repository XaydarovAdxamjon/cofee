import React, { useState } from 'react';
import st from "./coffee.module.css";

const HowCoffee = () => {
    const [orderSummary, setOrderSummary] = useState({
        drinkType: '',
        coffeeType: '',
        quantity: '',
        grindOption: '',
        delivery: '',
    });

    const [selectedBoxes, setSelectedBoxes] = useState({
        drinkType: '',
        coffeeType: '',
        quantity: '',
        grindOption: '',
        delivery: '',
    });

    const handleBoxClick = (category, value) => {
        setOrderSummary(prevState => ({
            ...prevState,
            [category]: value,
        }));
        setSelectedBoxes(prevState => ({
            ...prevState,
            [category]: value,
        }));
    };

    const categories = [
        { number: "01", title: "Preferences" },
        { number: "02", title: "Bean Type" },
        { number: "03", title: "Quantity" },
        { number: "04", title: "Grind Option" },
        { number: "05", title: "Deliveries" }
    ];

    const boxes = [
        {
            title: "How do you drink your coffee?",
            category: "drinkType",
            options: [
                { title: "Capsule", info: "Compatible with Nespresso systems and similar brewers" },
                { title: "Filter", info: "For pour over or drip methods like Aeropress, Chemex, and V60" },
                { title: "Espresso", info: "Dense and finely ground beans for an intense, flavorful experience" }
            ]
        },
        {
            title: "What type of coffee?",
            category: "coffeeType",
            options: [
                { title: "Single Origin", info: "Distinct, high quality coffee from a specific family-owned farm" },
                { title: "Decaf", info: "Just like regular coffee, except the caffeine has been removed" },
                { title: "Blended", info: "Combination of two or three dark roasted beans of organic coffees" }
            ]
        },
        {
            title: "How much would you like?",
            category: "quantity",
            options: [
                { title: "250g", info: "Perfect for the solo drinker. Yields about 12 delicious cups." },
                { title: "500g", info: "Perfect option for a couple. Yields about 40 delectable cups." },
                { title: "1000g", info: "Perfect for offices and events. Yields about 90 delightful cups." }
            ]
        },
        {
            title: "Want us to grind them?",
            category: "grindOption",
            options: [
                { title: "Wholebean", info: "Best choice if you cherish the full sensory experience" },
                { title: "Filter", info: "For drip or pour-over coffee methods such as V60 or Aeropress" },
                { title: "Cafetiére", info: "Course ground beans specially suited for french press coffee" }
            ]
        },
        {
            title: "How often should we deliver?",
            category: "delivery",
            options: [
                { title: "Every week", info: "$7.20 per shipment. Includes free first-class shipping." },
                { title: "Every 2 weeks", info: "$9.60 per shipment. Includes free priority shipping." },
                { title: "Every month", info: "$12.00 per shipment. Includes free priority shipping." }
            ]
        }
    ];

    return (
        <div>
            <div className={st.coffee}>
                <div className={st.container}>
                    <div className={st.coffee__type}>
                        {categories.map(category => (
                            <div className={st.item} key={category.number}>
                                <div className={st.item__number}>{category.number}</div>
                                <div className={st.item__title}>{category.title}</div>
                            </div>
                        ))}
                    </div>

                    <div className={st.how__coffee}>
                        {boxes.map(box => (
                            <div className={st.boxes} key={box.title}>
                                <div className={st.title}>{box.title}</div>
                                <div className={st.boxes__info}>
                                    {box.options.map(option => (
                                        <div
                                            className={`${st.box} ${selectedBoxes[box.category] === option.title ? st.selected : ''}`}
                                            key={option.title}
                                            onClick={() => handleBoxClick(box.category, option.title)}
                                        >
                                            <div className={st.box__title}>{option.title}</div>
                                            <div className={st.box__info}>{option.info}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}

                        <div className={st.result}>
                            <div className={st.result__name}>
                                Order Summary
                            </div>
                            <div className={st.result__info}>
                                “I drink my coffee as <span className={st.result__info__green}>{orderSummary.drinkType}</span>, 
                                with a <span className={st.result__info__green}>{orderSummary.coffeeType}</span> type of bean. 
                                <span className={st.result__info__green}>  {orderSummary.quantity}</span> ground ala 
                                <span className={st.result__info__green}>  {orderSummary.grindOption}</span>, sent to me  
                                 <span className={st.result__info__green}>  {orderSummary.delivery}</span>.”
                            </div>
                        </div>

                        <button className={st.btns}>
                            Create my plan!
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default HowCoffee;
