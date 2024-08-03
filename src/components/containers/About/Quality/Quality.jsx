import React from 'react'
import st from './quality.module.css'
// import foto from "../../../../images/quality.png"

const Quality = () => {
    return (
        <div>
            <div className={st.quality}>
                <div className={st.container}>
                    <div className={st.info}>
                        <div className={st.title}>
                            Uncompromising quality
                        </div>
                        <div className={st.text}>
                            Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.
                        </div>
                    </div>

                    <div className={st.foto}></div>
                </div>
            </div>
        </div>
    )
}

export default Quality