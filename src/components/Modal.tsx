// import Cancel from "@/public/icon/Cancel";
import Button from "components/Button";
import type { PropsWithChildren } from "react";
import "styles/mixin/_modal.css";

interface ModalProps {
	modal: boolean;
	modalHandler: () => void;
	title?: string;
	header?: JSX.Element;
	modalHeaderClassName?: string;
}
export default function Modal({
	modal,
	modalHandler,
	title,
	children,
	modalHeaderClassName,
	header,
}: PropsWithChildren<ModalProps>) {
	const headerClassName = modalHeaderClassName ? modalHeaderClassName : "w-full";
	return (
		<>
			{modal ? (
				<>
					<div
						role="dialog"
						className="modal site-modal border border-gray-100 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 focus:outline-none"
					>
						<div className="appmodal relative w-auto my-6 mx-auto max-w-5xl">
							<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
								<div className={`${headerClassName} header flex items-center p-5`}>
									<div className="flex justify-between relative items-center w-full">
										{header}
										<Button
											className="p-1 border-0 text-black absolute right-0 -top-4 text-3xl leading-none font-semibold"
											text="X"
											onClickHandler={modalHandler}
											// icon={<Cancel />}
										/>
									</div>
								</div>
								{title && (
									<div className="flex relative items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
										<h3 className="text-3xl font-semibold">{title}</h3>
									</div>
								)}
								<div className="relative p-3 lg:p-6 w-96 h-40 flex mx-auto">
									{children}
								</div>
							</div>
						</div>
					</div>
					<div
						aria-label="close"
						className="modal-overlay opacity-50 fixed inset-0 z-50 bg-black h-full w-full"
						onClick={modalHandler}
					/>
				</>
			) : null}
		</>
	);
}
