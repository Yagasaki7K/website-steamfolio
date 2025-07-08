import { toast } from "sonner";

export function getLevelByGPQ(githubProjectQuantity: number | undefined) {
	function getLevel(level: number) {
		return (
			"https://community.cloudflare.steamstatic.com/public/images/badges/13_gamecollector/" +
			level +
			"_80.png?v=4"
		);
	}

	let badgeImage = null;

	if (!githubProjectQuantity) {
		return toast.error("GitHub not found");
	}

	if (githubProjectQuantity > 1) {
		badgeImage = (
			<img
				src={getLevel(1)}
				alt="Badges"
				className="level"
				title={githubProjectQuantity + " contributions in this account"}
			/>
		);
	}

	if (githubProjectQuantity > 5) {
		badgeImage = (
			<img
				src={getLevel(5)}
				alt="Badges"
				className="level"
				title={githubProjectQuantity + " contributions in this account"}
			/>
		);
	}

	if (githubProjectQuantity > 10) {
		badgeImage = (
			<img
				src={getLevel(10)}
				alt="Badges"
				className="level"
				title={githubProjectQuantity + " contributions in this account"}
			/>
		);
	}

	if (githubProjectQuantity > 50) {
		badgeImage = (
			<img
				src={getLevel(50)}
				alt="Badges"
				className="level"
				title={githubProjectQuantity + " contributions in this account"}
			/>
		);
	}

	if (githubProjectQuantity > 100) {
		badgeImage = (
			<img
				src={getLevel(100)}
				alt="Badges"
				className="level"
				title={githubProjectQuantity + " contributions in this account"}
			/>
		);
	}

	if (githubProjectQuantity > 500) {
		badgeImage = (
			<img
				src={getLevel(500)}
				alt="Badges"
				className="level"
				title={githubProjectQuantity + " contributions in this account"}
			/>
		);
	}

	const maxLimit = 40000;

	for (let i = 1000; i <= maxLimit; i += 1000) {
		if (githubProjectQuantity >= i) {
			badgeImage = (
				<img
					src={getLevel(i)}
					alt="Badges"
					className="level"
					title={githubProjectQuantity + " contributions in this account"}
				/>
			);
		} else {
			break;
		}
	}
	return badgeImage;
}
