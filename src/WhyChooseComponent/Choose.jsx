import React from 'react'
import "./Choose.css"
import chooseimg1 from '../assets/Frame 20.png'
import chooseimg2 from '../assets/Frame 19.png'
import chooseimg3 from '../assets/Frame 21.png'
import chooseimg4 from '../assets/frame 22.png'

const Choose = () => {
    return (
        <div>
            <section className="section_6">
                <div className="section4_heading">
                    <h2>Why Choose Propelio</h2>
                    <p>We make property ownership accessible, inclusive, and empowering for all.</p>
                </div>
                <div className="section6_box">
                    <div className="flexible">
                        <img src={chooseimg1} alt="section6_img" />
                        <h2>Flexible Financial Options</h2>
                        <p>Propelio provides a range of flexible financing solutions,
                            which includes property trust funds, co-ownership models, and lease-to-own arrangements.
                        </p>
                    </div>

                    <div className="flexible">
                        <img src={chooseimg2} alt="section6_img" />
                        <h2>Diverse Property Options</h2>
                        <p>From urban condos to suburban villas and rural retreats,
                            we offer diverse range of accommodation options tailored to the needs and preferences of its users.
                        </p>
                    </div>

                    <div className="flexible">
                        <img src={chooseimg3} alt="section6_img" />
                        <h2>AI Recommendations</h2>
                        <p>Our AI-powered recommendation engine analyses user preferences, budget constraints,
                            and location preferences to provide well suited tailored recommendations to users.
                        </p>
                    </div>

                    <div className="flexible">
                        <img src={chooseimg4} alt="section6_img" />
                        <h2>Transparent Transactions</h2>
                        <p>By leveraging blockchain tech, Propelio ensures
                            transparent and secure property transactions, to mitigate the risks of fraud and dispute in the real estate business.
                        </p>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Choose