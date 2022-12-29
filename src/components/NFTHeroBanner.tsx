import Button from "components/Button";

export default function NFTHeroBanner() {
	return (
		<section className="container">
			<div className="flex items-center">
				<div className="text-content left w-1/2">
					<h2 className="text-xl text-blue-500 my-2">EduCount Badge Creator</h2>
					<p>
						By clicking “Mint a Badge” you are creating a non-fungible token which can be
						used to certify skills or access content. This NFT will be saved to a live
						blockchain.
					</p>
					<Button
						text="Mint a Badge"
						className="rounded-full py-4 text-white bg-red-500 mt-6"
					/>
				</div>
				<div className="image w-1/2">
					<img src="/images/woman.png" alt="woman minting nft" />
				</div>
			</div>
		</section>
	);
}
