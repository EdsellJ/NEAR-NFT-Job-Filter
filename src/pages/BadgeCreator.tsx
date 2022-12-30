import NFTHeroBanner from "components/NFTHeroBanner";
import TransactionLogTable from "components/TransactionLogTable";
import NFTLayout from "layouts/NFTLayout";

export default function BadgeCreator() {
	return (
		<NFTLayout title="Mint NFT's">
			<NFTHeroBanner />
			<TransactionLogTable />
		</NFTLayout>
	);
}
