import { useState } from "react";

import NFTHeroBanner from "components/NFTHeroBanner";
import TransactionLogTable from "components/TransactionLogTable";
import NFTLayout from "layouts/NFTLayout";
import Modal from "components/Modal";

export default function BadgeCreator() {
	const [modal, setModal] = useState(false);
	return (
		<>
			<Modal modal={modal} modalHandler={() => setModal(false)}>
				<h4 className="text-center flex mx-auto">I am a modal</h4>
			</Modal>
			<NFTLayout title="Mint NFT's">
				<NFTHeroBanner />
				<TransactionLogTable toggleModal={() => setModal(true)} />
			</NFTLayout>
		</>
	);
}
