import { Dispatch, SetStateAction } from "react";

export const ColorPicker = (props: { selectedColor: string; setSelectedColor: Dispatch<SetStateAction<string>> }) => {
    const { selectedColor, setSelectedColor } = props;
    const supportedColors = [
        "bg-slate-950/65",
        "bg-gray-950/65",
        "bg-zinc-950/65",
        "bg-neutral-950/65",
        "bg-stone-950/65",
        "bg-red-950/65",
        "bg-orange-950/65",
        "bg-amber-950/65",
        "bg-yellow-950/65",
        "bg-lime-950/65",
        "bg-green-950/65",
        "bg-emerald-950/65",
        "bg-teal-950/65",
        "bg-cyan-950/65",
        "bg-sky-950/65",
        "bg-blue-950/65",
        "bg-indigo-950/65",
        "bg-violet-950/65",
        "bg-purple-950/65",
        "bg-fuchsia-950/65",
        "bg-pink-950/65",
        "bg-rose-950/65",
    ];

    return (
        <div className="flex flex-row flex-wrap">
            {supportedColors.map((c, i) => (
                <div className="w-10 h-10 m-1 bg-white" key={c + i}>
                    <button className={`${c} w-full h-full ${c == selectedColor ? "border-2 border-lime-300" : ""}`} onClick={() => setSelectedColor(c)}>
                        {c.substring(3, 6)}
                    </button>
                </div>
            ))}
        </div>
    );
};
