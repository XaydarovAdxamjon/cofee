import React from 'react';
import st from "./page.module.css";
import foto1 from "../../images/collection1.png";
import foto2 from "../../images/collection1.png";
import foto3 from "../../images/collection3.png";
import foto4 from "../../images/collection4.png";
import Collection from '../../images/ourcollection.png';

const coffeeCollections = [
    {
        image: foto1,
        title: "Gran Espresso",
        info: "Light and flavorful blend with cocoa and black pepper for an intense experience."
    },
    {
        image: foto2,
        title: "Gran Espresso",
        info: "Light and flavorful blend with cocoa and black pepper for an intense experience."
    },
    {
        image: foto3,
        title: "Gran Espresso",
        info: "Light and flavorful blend with cocoa and black pepper for an intense experience."
    },
    {
        image: foto4,
        title: "Gran Espresso",
        info: "Light and flavorful blend with cocoa and black pepper for an intense experience."
    }
];

const OurCollection = () => {
    return (
        <div>
            <div className={st.main}>
                <div className={st.container}>
                    <div className={st.title}></div>
                    <div className={st.boxes}>
                        {coffeeCollections.map((collection, index) => (
                            <div className={st.box} key={index}>
                                <img src={collection.image} alt={collection.title} />
                                <div className={st.box__text}>
                                    <div className={st.box__title}>{collection.title}</div>
                                    <div className={st.box__info}>{collection.info}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurCollection;
