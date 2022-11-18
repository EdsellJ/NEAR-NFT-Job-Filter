import React, { useCallback, useState, useEffect } from "react";
import { Accept, useDropzone } from "react-dropzone";

interface Props {
	acceptType: Accept | undefined;
	setFile: any;
	setImage: any;
	defaultRes?: any;
}

const Dropzone: React.FC<Props> = (props) => {
	const { acceptType, setFile, setImage, defaultRes } = props;

	const [fileType, setFileType] = useState(defaultRes?.type || 0);

	const useDisplayImage = () => {
		const [result, setResult] = useState("");

		const uploader = (e: any) => {
			const imageFile = e;

			const reader = new FileReader();
			reader.addEventListener("load", (e: any) => {
				setResult(e.target.result);
			});

			reader.readAsDataURL(imageFile);
		};

		return { result, uploader };
	};

	const onDrop = useCallback((acceptedFiles: any) => {
		acceptedFiles.forEach((file: any) => {
			uploader(file);
		});
	}, []); //eslint-disable-line

	const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
		onDrop,
		multiple: false,
		accept: acceptType,
	});

	const { result, uploader } = useDisplayImage();

	useEffect(() => {
		if (acceptedFiles.length > 0) {
			let type = 0;
			if (acceptedFiles[0].type.indexOf("image") !== -1) {
				type = 0;
			} else if (acceptedFiles[0].type.indexOf("video") !== -1) {
				type = 1;
			} else if (acceptedFiles[0].type.indexOf("audio") !== -1) {
				type = 2;
			}

			setFileType(type);
			setFile(acceptedFiles[0], type);
		} else {
			setFileType(0);
		}
	}, [acceptedFiles]); //eslint-disable-line

	useEffect(() => {
		setFileType(defaultRes?.type || 0);
	}, [defaultRes]);

	useEffect(() => {
		setImage(result);
	}, [result]); //eslint-disable-line

	return (
		<div {...getRootProps()} className="border-2 border-dashed w-full h-full p-2">
			<input {...getInputProps()} />
			{fileType === 0 && (
				<img
					src={result || defaultRes?.link || "/images/img_error.png"}
					alt="placeholder"
					className="object-contain w-full h-full"
				/>
			)}
		</div>
	);
};

export default Dropzone;
