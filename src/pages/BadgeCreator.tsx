import NFTHeroBanner from "components/NFTHeroBanner";
import UpcomingEvents from "components/UpcomingEvents";
import NFTLayout from "layouts/NFTLayout";

export default function BadgeCreator() {
	return (
		<NFTLayout title="Mint NFT's">
			<NFTHeroBanner />
			<UpcomingEvents />
		</NFTLayout>
	);
}
