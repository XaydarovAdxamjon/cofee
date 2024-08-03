import React from 'react';
import st from "./country.module.css";
import canada from "../../../../images/canada.png";
import united from "../../../../images/united.png";
import australiya from "../../../../images/australiya.png";

const offices = [
    {
        img: united,
        title: "United Kingdom",
        address: [
            "68 Asfordby Rd",
            "Alcaston",
            "SY6 1YA",
            "+44 1241 918425"
        ]
    },
    {
        img: canada,
        title: "Canada",
        address: [
            "1528 Eglinton Avenue",
            "Toronto",
            "Ontario M4P 1A6",
            "+1 416 485 2997"
        ]
    },
    {
        img: australiya,
        title: "Australia",
        address: [
            "36 Swanston Street",
            "Kewell",
            "Victoria",
            "+61 4 9928 3629"
        ]
    }
];

const Coutry = () => {
    return (
        <div>
            <div className={st.country}>
                <div className={st.container}>
                    <div className={st.title}>
                        Our headquarters
                    </div>

                    <div className={st.boxes}>
                        {offices.map((office, index) => (
                            <div className={st.box} key={index}>
                                <img src={office.img} alt={office.title} />
                                <div className={st.box__title}>
                                    {office.title}
                                </div>
                                <div className={st.box__text}>
                                    {office.address.map((line, i) => (
                                        <div key={i}>{line}<br/></div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Coutry;
