import { useState } from "react";
import { ImageGenerator } from "./ImageGenerator";
import { ColorPicker } from "./ColorPicker";
import { availableImages, ImageSource } from "./CoverImage";

export default function () {
    const [date, setDate] = useState(new Date());
    const [overlayColor, setOverlayColor] = useState("bg-red-950/50");
    const [imageSrcBgTailwindTag, setImageSrcBgTailwindTag] = useState<ImageSource>("bg-[url('./assets/painting-blurred.png')]");

    const handleCreateCover = (e: React.SyntheticEvent) => {
        console.log(e);
        e.preventDefault();
        const target = e.target as typeof e.target & { value: string };
        setDate(new Date(target.value));
    };

    return (
        <main className="max-w-screen-lg mx-auto dark:bg-black dark:*:text-white">
            <h1 className="text-6xl font-bold">Spinning playlist cover creator</h1>
            <div className="max-w-[669px] my-2">
                <label>
                    Date:
                    <input
                        className="ml-2 dark:text-gray-500"
                        type="date"
                        name="date"
                        defaultValue={date.toLocaleDateString("en-CA")}
                        onChange={handleCreateCover}
                    />
                </label>
                <div>Color: </div>
                <ColorPicker selectedColor={overlayColor} setSelectedColor={setOverlayColor} />
            </div>
            <div className="flex flex-row gap-2 mb-2">
                {availableImages.map((image, index) => (
                    <div key={image + index} className={`w-[50px] h-[50px] ${image}`} onClick={() => setImageSrcBgTailwindTag(image)} />
                ))}
            </div>
            <ImageGenerator date={date} overlayColor={overlayColor} blur={0.5} imageSource={imageSrcBgTailwindTag} />
        </main>
    );
}
