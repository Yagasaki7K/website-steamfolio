import { useEffect, useState } from "react";
import SteamDetails from "./SteamDetails";
import { getLevelByGPQ } from "./utils/getLevelByGPQ";
import axios from "axios";

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
    email: string | null;
    hireable: boolean;
    bio: string;
    twitter_username: string;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: string;
    updated_at: string;
}

interface Repo {
    stargazers_count: number;
    language: string;
}

interface LanguagePercentage {
    name: string;
    percentage: string;
}

interface UserRepos {
    repos: Repo[];
    totalStars: number;
    totalCommits: number;
    language: LanguagePercentage;
}

const userGitHub = "Yagasaki7K";

const fetchData = async (
    setUserInfo: (userInfo: UserGitHub) => void,
    setUserRepos: (userRepos: UserRepos) => void,
    github_api_key: string,
    setLoading: (loading: boolean) => void
) => {
    setLoading(true);
    try {
        // Fetch user information
        const userResponse = await axios.get<UserGitHub>('https://api.github.com/users/' + userGitHub, {
            headers: { Authorization: `Bearer ${github_api_key}` }
        });
        setUserInfo(userResponse.data);
        console.log('User Info', userResponse.data);

        // Fetch public repositories of the user
        const reposResponse = await axios.get<Repo[]>('https://api.github.com/users/' + userGitHub + '/repos?sort=updated', {
            headers: { Authorization: `Bearer ${github_api_key}` },
            params: { type: 'public' }
        });
        const repos = reposResponse.data;

        // Fetch commits of all repositories of the user
        const commitsResponse = await axios.get(`https://api.github.com/search/commits?q=${encodeURIComponent(`author:${userGitHub} is:merge`)}`, {
            headers: { Authorization: `token ${github_api_key}`, Accept: 'application/vnd.github.cloak-preview' }
        });
        const totalCommits = commitsResponse.data.total_count;

        // Calculate total stars received
        const totalStars = repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);

        // Calculate percentage of the most used language
        const languages: { [key: string]: number } = repos.reduce((acc, repo) => {
            if (repo.language) {
                acc[repo.language] = acc[repo.language] ? acc[repo.language] + 1 : 1;
            }
            return acc;
        }, {} as { [key: string]: number });
        const totalRepos = repos.length;
        const languagePercentageArray: LanguagePercentage[] = [];
        for (const language in languages) {
            const percentage = ((languages[language] / totalRepos) * 100).toFixed(2);
            languagePercentageArray.push({ name: language, percentage: `${percentage}%` });
        }

        setUserRepos({
            repos,
            totalStars,
            totalCommits,
            language: languagePercentageArray[0]
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
    setLoading(false);
};

function App() {
    const [userInfo, setUserInfo] = useState<UserGitHub | undefined>();
    const [userRepos, setUserRepos] = useState<UserRepos | undefined>();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const githubApiKey = import.meta.env.VITE_GITHUB_API_KEY || '';
        fetchData(setUserInfo, setUserRepos, githubApiKey, setLoading);
    }, []);

    const subnick = "Anderson \"Yagasaki\" Marlon";

    // BlueLight
    // const avatarBorder = "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/570/c6a479fae8979bc9c1a02378e488e3ce06b52cb1.png";
    // Cuttie
    // const avatarBorder = "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/2855140/4324f3a8e05e1c110fad71443d61c7ba82c4e474.png";
    // Halloween
    // const avatarBorder = "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/2603600/ba1ce3d28ef75329afe4e784b1b6f9fe863cfae4.png";
    // Fire
    // const avatarBorder = "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/322330/beaee5e90d93bfafa5f5f55acb23abfd28ad180c.png";
    // Summer
    const avatarBorder = "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/2861690/b921dcff9e6fffb20bd91b29700ead7468f36737.png"

    const flag = "br";

    // Year of your birthday
    const birthday = 1997;

    // since your are developer
    const sinceExperience = 2020;
    const infoSubTitle = "Since 2014. Transforming code into solutions";

    const badgeTitle = "Mid Software Developer";
    const badgeEXP = "12,649";
    const badgeIcon = "https://community.cloudflare.steamstatic.com/public/images/badges/30_steamawardnominations/level04_80.png";
    // Default
    // const badgeIcon = "/badge_icon.png";

    const twitterLink = "https://twitter.com/" + userGitHub;
    const awardIconLink = "https://yagasaki.dev/about#awards";
    // Default
    // const awardIconLink = "/award_icon.svg";
    const perfilIconLink = "https://yagasaki.dev/about";

    // const urlAvatar = "https://github.com/" + userGitHub + ".png";
    const fixedAvatar = "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/2861690/c6de335c0a6737e5105eef701af2d3284ab513c4.gif";
    const nickname = userInfo?.name;
    const location = userInfo?.location;
    const infoTitle = userInfo?.bio;
    const githubLink = "https://github.com/" + userGitHub;

    console.log(userRepos, userInfo);

    return (
        loading ? (<p>Loading ...</p>) : (
            <SteamDetails>
                <div className="background"></div>

                <div className="content">
                    <div className="header">
                        <div className="avatar">
                            <img src={fixedAvatar} alt="" />
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
                                    <img className="award" src="award_icon.svg" alt="" />
                                </a>
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
                            <h3>About</h3>
                            <p><img src="https://github.com/tairosonloa/tairosonloa/blob/main/assets/wave.gif?raw=true" width="15px" /> Hi, I'm <b>Anderson Marlon</b>, a Software Developer with experience building systems and applications scalable in the industries of Chatbot, Artificial Intelligence, Financial Technology (Fintech), Affiliates, Brewery, Health, Journalism, Sustainability, Sales / Entrepreneurship, Podcasts, Advocate, Solutions Tech, Referral Marketing, Government Solutions Assistance and Electronic Sport Scenario & Black Belt Taekwondo @ Campinas Fighters.</p>

                            <h3>Technologies</h3>
                            <div className="groupDetails">
                                <div className="badges">
                                    <img src="/js.png" alt="BadgeIcon" title="Javascript Developer" />
                                    <img src="/ts.png" alt="BadgeIcon" title="Typescript Developer" />
                                    <img src="/nodejs.png" alt="BadgeIcon" title="NodeJS Developer" />
                                    <img src="/bun.png" alt="BadgeIcon" title="Bun Developer" />
                                    <img src="/nestjs.png" alt="BadgeIcon" title="NestJS Experience" />
                                    <img src="/firebase.png" alt="BadgeIcon" title="Firebase Experience" />
                                    <button title="See more on Github" onClick={() => window.location.href = githubLink}>+15</button>
                                </div>
                            </div>

                            <h3>Latest Articles on my Blog (PT-BR)</h3>
                            <div className="groupDetails">
                                <a href="https://yagasaki.dev/search/" target="_blank" rel="noreferrer">× Como atualizar seu README do Github com as últimas publicações de Blog ou Dev.to</a>
                                <a href="https://yagasaki.dev/search/" target="_blank" rel="noreferrer">× Fazendo deploy da sua aplicação Web na Vercel</a>
                                <a href="https://yagasaki.dev/search/" target="_blank" rel="noreferrer">× Análise do Arc Browser, meu substituto do Google Chrome</a>
                                <a href="https://yagasaki.dev/search/" target="_blank" rel="noreferrer">× TypeScript - Types vs. Interfaces e qual usar escolher no próximo projeto?</a>
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
                                    getLevelByGPQ(userRepos?.totalCommits)
                                }
                            </div>

                            <a href={githubLink} target="_blank" rel="noreferrer">Public Repositories <span>{userInfo?.public_repos}</span></a>
                            <a href={githubLink} target="_blank" rel="noreferrer">Total Stars <span>{userRepos?.totalStars}</span></a>
                            <a href={githubLink} target="_blank" rel="noreferrer">Following <span>{userInfo?.following}</span></a>
                            <a href={githubLink} target="_blank" rel="noreferrer">Followers <span>{userInfo?.followers}</span></a>

                            <h2 className="title">Top Repositories</h2>

                            <div className="links">
                                <a href="https://github.com/Yagasaki7K/website-steamfolio" className="link" target="_blank" rel="noreferrer">steamfolio</a>
                                <a href="https://github.com/Yagasaki7K/website-onigirihardcore" className="link" target="_blank" rel="noreferrer">onigirihardcore</a>
                                <a href="https://github.com/Yagasaki7K/website-essentials" className="link" target="_blank" rel="noreferrer">essentials</a>
                                <a href="https://github.com/Yagasaki7K/website-findyourpet" className="link" target="_blank" rel="noreferrer">findyourpet</a>
                                <a href="https://github.com/Yagasaki7K/website-empreguei" className="link" target="_blank" rel="noreferrer">empreguei</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <a href="https://github.com/Yagasaki7K" target="_blank" rel="noreferrer">© {new Date().getFullYear()} Anderson "Yagasaki" Marlon </a>
                </div>
            </SteamDetails>
        )
    )
}

export default App