import Button from "components/Button";
import NFTLayout from "layouts/NFTLayout";
import homeContent from "json/home.json";
import FeatureCategory from "components/FeatureCategory";

export default function HomePage() {
	return (
		<NFTLayout title="Welcome, starting learning, earning NFTs | EduCoin">
			<section className="w-full bg-primary">
				<div className="hero-banner container py-20">
					<div className="left text-white">
						<h2 className="my-2 font-lora font-bold">
							A Learning Management <br /> System for a Decentralized <br />
							World
						</h2>
						<p className="w-1/2 mt-6 font-dmsans">
							<span className="font-bold">EduCoin</span> is a transformational way to
							register for classes, sell content, and earn credentials via NFTs.
						</p>
						<Button
							className="bg-white font-dmsans rounded-full text-primary px-6 my-10 border py-2 hover:border-white hover-bg-light-blue"
							text="Start Now"
						/>
					</div>
					<div className="right images"></div>
				</div>
				<div className="content bg-white py-8">
					<div className="container">
						<h2 className="mt-4 mb-2 font-lora text-primary ">
							{homeContent.main.question}
						</h2>
						<p className="mt-2 mb-8 text-primary font-dmsans">
							{homeContent.main.answer}
						</p>
						<FeatureCategory category="students" />
						<FeatureCategory category="teachers" />
					</div>
				</div>
			</section>
		</NFTLayout>
	);
}
