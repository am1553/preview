import React, {useState} from "react";
const Card = () => {
    const [isShown, setIsShown] = useState(false);
    return (
        <main className = 'card'>

            <div className= 'header-image' onMouseEnter={()=> setIsShown(true)} onMouseLeave={()=> setIsShown(false)}>
                <img src="/images/image-equilibrium.jpg" alt="equilibrium background" />
                {isShown && (
                    <div className="view-icon">
                        <img src="/images/icon-view.svg" alt="view icon" />
                    </div>
                )}
            </div>

            <div className= 'text-wrapper'>
                <h3>Equilibrium #3429</h3>
                <p>Our Equilibrium collection promotes balance and calm.</p>
            </div>

            <div className="stats">
                <div className="price">
                    <img src="/images/icon-ethereum.svg" alt="ethereum icon" />
                    <span>0.041 ETH</span>
                </div>

                <div className="time">
                    <img src="/images/icon-clock.svg" alt="clock icon" />
                    <span>3 days left</span>
                </div>
            </div>

            <div className="line"></div>

            <div className="user">
                <img src="/images/image-avatar.png" alt="user avatar" />
                <p>Creation of <span>Jules Wyvern</span></p>
            </div>
            
        </main>
    )
}

export default Card
