import { useEffect, useState } from "react"
import SteamDetails from "./SteamDetails"
import { getLevelByGPQ } from "./utils/getLevelByGPQ"

interface UserGitHub {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    name: string;
    company: string;
    blog: string;
    location: string;
    email: null;
    hireable: boolean;
    bio: string;
    twitter_username: string;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: Date;
    updated_at: Date;
}

function App() {
    const [infoGithub, setInfoGithub] = useState<UserGitHub>()

    const userGitHub = "Yagasaki7K"
    const subnick = "Anderson \"Yagasaki\" Marlon"

    // BlueLight
    // const avatarBorder = "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/570/c6a479fae8979bc9c1a02378e488e3ce06b52cb1.png"
    // Cuttie 
    // const avatarBorder = "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/2855140/4324f3a8e05e1c110fad71443d61c7ba82c4e474.png"
    // Halloween 
    const avatarBorder = "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/2603600/ba1ce3d28ef75329afe4e784b1b6f9fe863cfae4.png"
    // Fire
    // const avatarBorder = "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/322330/beaee5e90d93bfafa5f5f55acb23abfd28ad180c.png"

    const flag = "br"

    // Year of your birthday
    const birthday = 1997

    // since your are developer
    const sinceExperience = 2020
    const infoSubTitle = "Since 2014. Transforming code into solutions"

    const badgeTitle = "Mid Software Developer"
    const badgeEXP = "12,649"
    const badgeIcon = "https://community.cloudflare.steamstatic.com/public/images/badges/30_steamawardnominations/level04_80.png"
    // Default
    // const badgeIcon = "/badge_icon.png"

    const twitterLink = "https://twitter.com/Yagasaki7K"
    const awardIconLink = "https://yagasaki.dev/about#awards"
    // Default
    // const awardIconLink = "/award_icon.svg"
    const perfilIconLink = "https://yagasaki.dev/about"

    useEffect(() => {
        fetch("https://api.github.com/users/Yagasaki7K")
            .then(response => response.json())
            .then(data => {
                setInfoGithub(data)
            });
    }, [])

    const urlAvatar = "https://github.com/" + userGitHub + ".png"
    const nickname = infoGithub?.name
    const location = infoGithub?.location
    const infoTitle = infoGithub?.bio
    const githubLink = "https://github.com/" + userGitHub

    return (
        <SteamDetails>
            <div className="background"></div>

            <div className="content">
                <div className="header">
                    <div className="avatar">
                        <img src={urlAvatar} alt="" />
                        <img className="border" src={avatarBorder} alt="" />
                    </div>

                    <div className="nickname">
                        <h2>{nickname}</h2>

                        <div className="subnick">
                            <p>{subnick}</p>
                            <p className="city"><img src={"https://community.cloudflare.steamstatic.com/public/images/countryflags/" + flag + ".gif"} /> {location}</p>
                        </div>

                        <div className="info">
                            <p>{infoTitle}</p>
                            <i>{infoSubTitle}</i>
                            <a href={githubLink}>View more info</a>
                        </div>
                    </div>

                    <div className="level">
                        <h2>Nível <span>{new Date().getFullYear() - birthday}</span></h2>

                        <div className="badge">
                            <div className="leftContent">
                                <img src={badgeIcon} alt="BadgeIcon" />
                            </div>

                            <div className="rightContent">
                                <h4>{badgeTitle}</h4>
                                <p>{badgeEXP} XP</p>
                            </div>
                        </div>

                        <div className="buttons">
                            <button onClick={() => window.location.href = twitterLink}>Send Friend Request</button>
                            <a href={awardIconLink} target="_blank" rel="noreferrer">
                                <img className="award" src="award_icon.svg" alt="" /></a>
                            <a href={perfilIconLink} target="_blank" rel="noreferrer">
                                <img className="avatar" src="equipped_items_icon.svg" alt="" />
                            </a>
                            <button onClick={() => window.location.href = githubLink}>...</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="body">
                <div className="subgroups">
                    <div className="group">
                        <h3>YAGASAKI 矢ヶ崎-KATSURAGI -葛城</h3>
                        <p><img src="https://github.com/tairosonloa/tairosonloa/blob/main/assets/wave.gif?raw=true" width="15px" /> Hi, I'm <b>Anderson Marlon</b>, a Software Developer with experience building systems and applications scalable in the industries of Chatbot, Artificial Intelligence, Financial Technology (Fintech), Affiliates, Brewery, Health, Journalism, Sustainability, Sales / Entrepreneurship, Podcasts, Advocate, Solutions Tech, Referral Marketing, Government Solutions Assistance and Electronic Sport Scenario & Black Belt Taekwondo @ Campinas Fighters.</p>

                        <h3>Technologies</h3>
                        <div className="groupDetails">
                            <div className="badges">
                                <img src="/js.png" alt="BadgeIcon" title="Javascript Developer" />
                                <img src="/ts.png" alt="BadgeIcon" title="Typescript Developer" />
                                <img src="/nodejs.png" alt="BadgeIcon" title="NodeJS Developer" />
                                <img src="/reactjs.png" alt="BadgeIcon" title="ReactJS Experience" />
                                <img src="/nestjs.png" alt="BadgeIcon" title="NestJS Experience" />
                                <img src="/firebase.png" alt="BadgeIcon" title="Firebase Experience" />
                                <button title="See more on Github" onClick={() => window.location.href = githubLink}>+15</button>
                            </div>
                        </div>

                        <h3>Latest Articles on my Blog (PT-BR)</h3>
                        <div className="groupDetails">
                            <a href="https://yagasaki.dev/blog/evento-da-rocketseat-junto-da-minha-experi%C3%AAncia-com-bun" target="_blank" rel="noreferrer">× Evento da Rocketseat junto da minha experiência com Bun</a>
                            <a href="https://yagasaki.dev/blog/como-criar-um-blog-usando-github-pages-obsidian-quartz" target="_blank" rel="noreferrer">× Como criar um blog usando Github Pages + Obsidian + Quartz</a>
                            <a href="https://yagasaki.dev/blog/notificacao-automatica-da-twitch-para-o-discord" target="_blank" rel="noreferrer">× Notificação automática da Twitch para o Discord</a>
                            <a href="https://yagasaki.dev/blog/cultivar-a-semente-ou-usar-um-kit-de-ferramentas" target="_blank" rel="noreferrer">× Cultivar a Semente ou usar um Kit de Ferramentas?</a>
                            <a href="https://yagasaki.dev/blog/node-br-em-campinas-pelo-frontend-universe" target="_blank" rel="noreferrer">× Evento do NodeBR em Campinas - Frontend Universe</a>
                        </div>
                    </div>
                </div>
                <div className="sidebar">
                    <h2>Currently Online</h2>

                    <div className="links">
                        <a href="">Badges <span>87</span></a>

                        <div className="badges">
                            <img src="/js.png" alt="BadgeIcon" title="Node Developer" />
                            <img src="/ts.png" alt="BadgeIcon" title="Typescript Developer" />

                            <img src={"https://community.cloudflare.steamstatic.com/public/images/badges/02_years/steamyears" + (new Date().getFullYear() - sinceExperience) + "_54.png"} alt="BadgeIcon" title="Years of Experience" />

                            {
                                getLevelByGPQ(infoGithub?.public_repos)
                            }
                        </div>

                        <a href={githubLink} target="_blank" rel="noreferrer">Public Repositories <span>{infoGithub?.public_repos}</span></a>
                        <a href={githubLink} target="_blank" rel="noreferrer">Public Gists <span>{infoGithub?.public_gists}</span></a>
                        <a href={githubLink} target="_blank" rel="noreferrer">Followers <span>{infoGithub?.followers}</span></a>
                        <a href={githubLink} target="_blank" rel="noreferrer">Following <span>{infoGithub?.following}</span></a>
                    </div>

                    <h2 className="title">Top Repositories</h2>

                    <div className="links">
                        <a href="https://github.com/Yagasaki7K/website-essentials" className="link" target="_blank" rel="noreferrer">essentials</a>
                        <a href="https://github.com/Yagasaki7K/website-onigirihardcore" className="link" target="_blank" rel="noreferrer">onigirihardcore</a>
                        <a href="https://github.com/Yagasaki7K/website-findyourpet" className="link" target="_blank" rel="noreferrer">findyourpet</a>
                        <a href="https://github.com/Yagasaki7K/website-steamfolio" className="link" target="_blank" rel="noreferrer">steamfolio</a>
                        <a href="https://github.com/Yagasaki7K/website-empreguei" className="link" target="_blank" rel="noreferrer">empreguei</a>
                    </div>
                </div>
            </div>

            <div className="copyright">
                <a href="https://github.com/Yagasaki7K" target="_blank" rel="noreferrer">© {new Date().getFullYear()} Anderson "Yagasaki" Marlon </a>
            </div>
        </SteamDetails>
    )
}

export default App
