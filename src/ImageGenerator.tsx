import html2canvas from "html2canvas";
import { useEffect, useRef, useState } from "react";
import { CoverImage } from "./CoverImage";

export const ImageGenerator = (props: { date: Date; overlayColor: string; blur: number }) => {
    const canvasRef2 = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);
    const [imageSrc, setImageSrc] = useState("");
    const { date, overlayColor, blur } = props;

    useEffect(() => {
        generateImage();
    }, [date, overlayColor, blur]);

    // Function to trigger the download
    const handleDownload = async () => {
        const link = document.createElement("a");
        link.href = imageSrc;
        link.download = `spinning-cover-${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}.png`;
        link.click();
        link.remove();
    };

    const generateImage = () => {
        const canvas = canvasRef2.current?.children[0] as HTMLDivElement | undefined;
        if (!canvas) {
            return;
        }

        html2canvas(canvas).then((c) => {
            const ur = c.toDataURL();
            console.log(ur);
            setImageSrc(ur);
        });
    };

    return (
        <>
            <div className="overflow-hidden">
                <div>Preview:</div>
                <img ref={imgRef} alt="generated cover" src={imageSrc} />
                <div className="fixed -top-[1000px] -left-[1000px]" ref={canvasRef2}>
                    <CoverImage date={date} overlayColor={overlayColor} />
                </div>
            </div>
            <button
                type="button"
                onClick={handleDownload}
                className="border-black dark:border-white border-2 p-1 my-2 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black"
            >
                Download Image
            </button>
        </>
    );
};
