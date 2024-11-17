export const CoverImage = (props: { date: Date; overlayColor: string }) => (
    <div className={`w-[600px] h-[600px] bg-[url('./assets/painting-blurred.png')] `}>
        <div className={`flex flex-col ${props.overlayColor} h-full`}>
            <div className="text-white font-extrabold text-[190px] text-center">{props.date.getFullYear()}</div>
            <div className="text-white font-extrabold text-[190px] text-center">
                {props.date.getMonth() + 1}/{props.date.getDate()}
            </div>
        </div>
    </div>
);
