import React from 'react'
import st from './plan.module.css'

const PlanMain = () => {
  return (
    <div>
        <div className={st.plan}>
            <div className={st.container}>
                <div className={st.title}>
                Create a plan
                </div>

                <div className={st.info}>
                Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.z
                </div>
            </div>
        </div>
    </div>
  )
}

export default PlanMain