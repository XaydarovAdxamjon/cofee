import React from 'react'
import st from "./about.module.css"

const AboutUs = () => {
    return (
        <div>
            <div className={st.AboutUs}>
                <div className={st.container}>
                    <div className={st.title}>
                        About Us
                    </div>
                    <div className={st.text}>
                        Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs