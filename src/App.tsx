import SteamDetails from "./SteamDetails"

function App() {
    const nickname = "葛城, Yagasaki"
    const subnick = "葛城 矢ヶ崎, Katsuragi Yagasaki"
    const location = "Kyoto, Japan"

    const infoTitle = "蒔原とうふ店 (自家用) 🔰"
    const infoSubTitle = "It Started in Japan — ドリフト 🔰"

    const birthday = 1997

    const badgeTitle = "Ídolo das Aquisições"
    const badgeEXP = "12,649"

    return (
        <SteamDetails>
            <div className="background"></div>

            <div className="content">
                <div className="header">
                    <div className="avatar">
                        <img src="/avatar.jpg" alt="" />
                    </div>

                    <div className="nickname">
                        <h2>{nickname}</h2>

                        <div className="subnick">
                            <p>{subnick}</p>
                            <p className="city"><img src="/jp.gif" /> {location}</p>
                        </div>

                        <div className="info">
                            <p>{infoTitle}</p>
                            <i>{infoSubTitle}</i>
                            <a href="">Ver mais informações</a>
                        </div>
                    </div>

                    <div className="level">
                        <h2>Nível <span>{new Date().getFullYear() - birthday}</span></h2>

                        <div className="badge">
                            <div className="leftContent">
                                <img src="/badgeIcon.png" alt="" />
                            </div>

                            <div className="rightContent">
                                <h4>{badgeTitle}</h4>
                                <p>{badgeEXP} XP</p>
                            </div>
                        </div>

                        <div className="buttons">
                            <button>Adicionar aos amigos</button>
                            <img className="award" src="award_icon.svg" alt="" />
                            <img className="avatar" src="equipped_items_icon.svg" alt="" />
                            <button>...</button>
                        </div>
                    </div>
                </div>
            </div>
        </SteamDetails>
    )
}

export default App
