import ReactHelmet from "react-helmet";
import React, { PropsWithChildren } from "react";
import NFTHeader from "./NFTHeader";
import Footer from "./Footer";

interface Props {
	title: string;
	className?: string;
	showFooter?: boolean;
}

export default function NFTLayout({
	title,
	className,
	children,
	showFooter = false,
}: PropsWithChildren<Props>) {
	return (
		<div>
			<ReactHelmet>
				<title>{title}</title>
			</ReactHelmet>
			<NFTHeader />
			<main className={className}>{children}</main>
			{showFooter && <Footer />}
		</div>
	);
}
