import ReactHelmet from "react-helmet";
import React, { PropsWithChildren } from "react";
import NFTHeader from "./NFTHeader";

interface Props {
	title: string;
	className?: string;
}

export default function NFTLayout({
	title,
	className,
	children,
}: PropsWithChildren<Props>) {
	return (
		<div>
			<ReactHelmet>
				<title>{title}</title>
			</ReactHelmet>
            <NFTHeader />
			<main className={className}>{children}</main>
		</div>
	);
}
