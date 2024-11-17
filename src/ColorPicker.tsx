import { Dispatch, SetStateAction } from "react";

export const ColorPicker = (props: { selectedColor: string; setSelectedColor: Dispatch<SetStateAction<string>> }) => {
    const { selectedColor, setSelectedColor } = props;
    const supportedColors = [
        "bg-slate-950/50",
        "bg-gray-950/50",
        "bg-zinc-950/50",
        "bg-neutral-950/50",
        "bg-stone-950/50",
        "bg-red-950/50",
        "bg-orange-950/50",
        "bg-amber-950/50",
        "bg-yellow-950/50",
        "bg-lime-950/50",
        "bg-green-950/50",
        "bg-emerald-950/50",
        "bg-teal-950/50",
        "bg-cyan-950/50",
        "bg-sky-950/50",
        "bg-blue-950/50",
        "bg-indigo-950/50",
        "bg-violet-950/50",
        "bg-purple-950/50",
        "bg-fuchsia-950/50",
        "bg-pink-950/50",
        "bg-rose-950/50",
    ];

    return (
        <div className="flex flex-row flex-wrap">
            {supportedColors.map((c, i) => (
                <div className="w-10 h-10 m-1 bg-white" key={c + i}>
                    <button
                        className={`${c} w-full h-full ${c == selectedColor ? "border-2 border-lime-300" : ""}`}
                        onClick={() => setSelectedColor(c)}
                    >
                        {c.substring(3, 6)}
                    </button>
                </div>
            ))}
        </div>
    );
};
