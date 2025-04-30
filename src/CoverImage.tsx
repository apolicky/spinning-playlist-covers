export const availableImages = ["bg-[url('./assets/painting-blurred.png')]", "bg-[url('./assets/splash.png')]"] as const;
export type ImageSource = (typeof availableImages)[number];

export const CoverImage = (props: { date: Date; overlayColor: string; imageSourceBg: ImageSource }) => (
    <div className={`w-[600px] h-[600px] ${props.imageSourceBg}`}>
        <div className={`flex flex-col ${props.overlayColor} h-full`}>
            <div className="text-white font-extrabold text-[190px] text-center">{props.date.getFullYear()}</div>
            <div className="text-white font-extrabold text-[190px] text-center">
                {props.date.getMonth() + 1}/{props.date.getDate()}
            </div>
        </div>
    </div>
);
