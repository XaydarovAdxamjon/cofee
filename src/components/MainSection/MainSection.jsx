import React from 'react'
import st from './main.module.css'

const MainSection = () => {
    return (
        <div>
            <div className={st.main}>
                <div className={st.container}>
                    <div className={st.main__info}>
                        <h1>Great coffee <br />
                            made simple.
                        </h1>
                        <p>
                            Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.
                        </p>

                        <button>
                            Create your plan
                        </button>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default MainSection