import { useState } from "react";
import { ImageGenerator } from "./ImageGenerator";
import { ColorPicker } from "./ColorPicker";

export default function () {
    const [date, setDate] = useState(new Date());
    const [overlayColor, setOverlayColor] = useState("bg-red-950/50");

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
            <ImageGenerator date={date} overlayColor={overlayColor} blur={0.5} />
        </main>
    );
}
