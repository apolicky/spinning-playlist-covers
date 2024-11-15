import { useRef } from "react";

export const CoverImage = (props: { date: Date; overlayColor: string; blur: number }) => {
    const canvasRef2 = useRef<HTMLDivElement>(null);
    const { date, overlayColor, blur } = props;

    // Function to trigger the download
    const handleDownload = () => {
        const canvas = canvasRef2.current;
        const image = canvas?.toDataURL("image/png"); // Convert to PNG data URL

        // Create a link and trigger a download
        const link = document.createElement("a");
        link.href = image ?? "#";
        link.download = `date-image-${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}.png`;
        link.click();
    };

    return (
        <div>
            <button onClick={handleDownload}>Download Image</button>
            <div ref={canvasRef2}>
                <div className="w-[600px] h-[600px] bg-[url('./assets/painting.png')]">
                    <div className="backdrop-blur-md bg-lime-950/50 bg-blend-darken w-full h-full grid grid-rows-2 grid-cols-1 [&>*]:place-self-center">
                        <div className="text-white font-extrabold text-[190px]">2024</div>
                        <div className="text-white font-extrabold text-[190px]">11/2</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
