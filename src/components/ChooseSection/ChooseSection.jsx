import React from 'react';
import st from "./choose.module.css";
import foto1 from '../../images/choose1.png';
import foto2 from '../../images/choose2.png';
import foto3 from '../../images/choose3.png';

const chooseOptions = [
    {
        image: foto1,
        title: "Best quality",
        text: "Discover an endless variety of the world’s best artisan coffee from each of our roasters."
    },
    {
        image: foto2,
        title: "Best quality",
        text: "Discover an endless variety of the world’s best artisan coffee from each of our roasters."
    },
    {
        image: foto3,
        title: "Best quality",
        text: "Discover an endless variety of the world’s best artisan coffee from each of our roasters."
    }
];

const ChooseSection = () => {
    return (
        <div>
            <div className={st.main}>
                <div className={st.container}>
                    <div className={st.title}>
                        Why choose us?
                    </div>

                    <div className={st.text}>
                        A large part of our role is choosing which particular coffees will be featured
                        in our range. This means working closely with the best coffee growers to give
                        you a more impactful experience on every level.
                    </div>

                    <div className={st.boxes}>
                        {chooseOptions.map((option, index) => (
                            <div className={st.box} key={index}>
                                <img src={option.image} alt={option.title} />
                                <div className={st.box__info}>
                                    <div className={st.box__title}>{option.title}</div>
                                    <div className={st.box__text}>{option.text}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ChooseSection;
