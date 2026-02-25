import { toast } from "sonner";
import { SafeImage } from "../components/SafeImage";

export function getLevelByGPQ(githubProjectQuantity: number | undefined) {
    function getLevel(level: number) {
        return "https://community.cloudflare.steamstatic.com/public/images/badges/13_gamecollector/" + level + "_80.png?v=4";
    }

    let badgeImage = null;

    if (!githubProjectQuantity) {
        return toast.error("GitHub not found");
    }

    if (githubProjectQuantity > 1) {
        badgeImage = (
            <SafeImage
                src={getLevel(1)}
                alt="Badges"
                className="level"
                title={githubProjectQuantity + " contributions in this account"}
                fallbackText="Lvl"
                width={64}
                height={64}
            />
        );
    }

    if (githubProjectQuantity > 5) {
        badgeImage = (
            <SafeImage
                src={getLevel(5)}
                alt="Badges"
                className="level"
                title={githubProjectQuantity + " contributions in this account"}
                fallbackText="Lvl"
                width={64}
                height={64}
            />
        );
    }

    if (githubProjectQuantity > 10) {
        badgeImage = (
            <SafeImage
                src={getLevel(10)}
                alt="Badges"
                className="level"
                title={githubProjectQuantity + " contributions in this account"}
                fallbackText="Lvl"
                width={64}
                height={64}
            />
        );
    }

    if (githubProjectQuantity > 50) {
        badgeImage = (
            <SafeImage
                src={getLevel(50)}
                alt="Badges"
                className="level"
                title={githubProjectQuantity + " contributions in this account"}
                fallbackText="Lvl"
                width={64}
                height={64}
            />
        );
    }

    if (githubProjectQuantity > 100) {
        badgeImage = (
            <SafeImage
                src={getLevel(100)}
                alt="Badges"
                className="level"
                title={githubProjectQuantity + " contributions in this account"}
                fallbackText="Lvl"
                width={64}
                height={64}
            />
        );
    }

    if (githubProjectQuantity > 500) {
        badgeImage = (
            <SafeImage
                src={getLevel(500)}
                alt="Badges"
                className="level"
                title={githubProjectQuantity + " contributions in this account"}
                fallbackText="Lvl"
                width={64}
                height={64}
            />
        );
    }

    const maxLimit = 40000;

    for (let i = 1000; i <= maxLimit; i += 1000) {
        if (githubProjectQuantity >= i) {
            badgeImage = (
                <SafeImage
                    src={getLevel(i)}
                    alt="Badges"
                    className="level"
                    title={githubProjectQuantity + " contributions in this account"}
                    fallbackText="Lvl"
                    width={64}
                    height={64}
                />
            );
        } else {
            break;
        }
    }
    return badgeImage;
}
