import React from "react";

export default function NFTHeroBanner() {
	return (
		<section className="container">
			<div className="flex">
				<div className="text-content left w-1/2">
					<h1>EduCount Badge Creator</h1>
					<p>
						By clicking “Mint a Badge” you are creating a non-fungible token which can be
						used to certify skills or access content. This NFT will be saved to a live
						blockchain.
					</p>
                    
				</div>
				<div className="image w-1/2">
					<img src="/images/woman.png" alt="woman minting nft" />
				</div>
			</div>
		</section>
	);
}
