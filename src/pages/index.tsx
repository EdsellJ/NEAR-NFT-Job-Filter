import Button from "components/Button";
import NFTLayout from "layouts/NFTLayout";

export default function HomePage() {
	return (
		<NFTLayout title="Welcome, starting learning, earning NFTs | EduCoin">
			<section className="w-full bg-deep-blue">
				<div className="container">
					<div className="hero-banner">
						<div className="left">
							<h4>
								A Learning Management <br /> System for a Decentralized <br />
								World
							</h4>
							<p>
								<span className="font-bold">EduCoin</span> is a transformational way to
								register for classes, sell content, and earn credentials via NFTs.
							</p>
							<Button className="bg-white text-blue px-4 py-3" text="Start Now" />
						</div>
						<div className="right images"></div>
					</div>
                    <div className="content">
                        
                    </div>
				</div>
			</section>
		</NFTLayout>
	);
}
