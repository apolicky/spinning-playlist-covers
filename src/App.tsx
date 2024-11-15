import { useRef, useState } from "react";
import { CoverImage } from "./CoverImage";

export default function () {
    const formRef = useRef(null);
    const [date, setDate] = useState(new Date());

    const handleCreateCover = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            date: { value: string };
        };
        setDate(new Date(target.date.value));

        console.log(date);
    };

    const defaultValue = date.toLocaleDateString("en-CA");

    return (
        <>
            <h1 className="text-6xl dark:text-white font-bold">Spinning playlist cover creator</h1>
            <form ref={formRef} onSubmit={handleCreateCover}>
                <div>
                    <label>
                        Date:
                        <input type="date" name="date" defaultValue={defaultValue} />
                    </label>
                </div>
                <div>
                    <input type="submit" value="Create cover" />
                </div>
            </form>
            <CoverImage date={date} overlayColor="rgba(0, 40, 0, 0.5)" blur={0.5} />
        </>
    );
}
