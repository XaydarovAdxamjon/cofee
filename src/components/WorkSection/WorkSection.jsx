import React from 'react';
import st from "./work.module.css";

const workSteps = [
    {
        number: "01",
        title: "Pick your coffee",
        text: "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out."
    },
    {
        number: "02",
        title: "Choose the frequency",
        text: "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal."
    },
    {
        number: "03",
        title: "Receive and enjoy!",
        text: "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience."
    }
];

const WorkSection = () => {
    return (
        <div>
            <div className={st.main}>
                <div className={st.container}>
                    <div className={st.title}>
                        How it works
                    </div>

                    <div className={st.line}>
                        <div className={st.linear}></div>
                        <div className={st.cirles}>
                            <div className={st.cirle}></div>
                            <div className={st.cirle}></div>
                            <div className={st.cirle}></div>
                        </div>
                    </div>

                    <div className={st.boxes}>
                        {workSteps.map((step, index) => (
                            <div className={st.box} key={index}>
                                <div className={st.box__number}>{step.number}</div>
                                <div className={st.box__title}>{step.title}</div>
                                <div className={st.box__text}>{step.text}</div>
                            </div>
                        ))}
                    </div>

                    <button>
                        Create your plan
                    </button>
                </div>
            </div>
        </div>
    );
}

export default WorkSection;
