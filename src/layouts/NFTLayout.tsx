import ReactHelmet from "react-helmet";
import React, { PropsWithChildren } from "react";

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
			<main className={className}>{children}</main>
		</div>
	);
}
