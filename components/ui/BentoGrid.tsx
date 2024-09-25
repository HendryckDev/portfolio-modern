import { cn } from "@/utils/cn";
import { Meteors } from "./meteors";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    id,
    img,
    imgClassName,
    titleClassName,
    spareImg,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    id?: number;
    img?: string;
    imgClassName?: string;
    titleClassName?: string;
    spareImg?: string;
}) => {
    return (
        <div
            className={cn(
                "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-[#4C298D]",
                className
            )}
            style={{
                background: 'rgb(26,0,75)',
                backgroundColor: 'linear-gradient(90deg, rgba(26,0,75,1) 0%, rgba(20,0,57,1) 50%, rgba(14,1,37,1) 100%)',
            }}
        >
            <div className={`${id === 5} && 'flex justify-center h-full`}>
                <div className="h-full w-full absolute">
                    {img && (
                        <img src={img} alt={img} className={cn(imgClassName, 'object-cover, object-center')} />
                    )}
                </div>
                <div className={`absolute right-0 -bottom-5 ${id === 3 && 'w-full opacity-80'}`}>
                    {spareImg && (
                        <img src={spareImg} alt={spareImg} className={'object-cover, object-center w-full h-full'} />
                    )}

                </div>
                {id === 3 && (
                    <div className="">
                        <div className=" w-full relative">
                            <div className="absolute h-full w-full transform scale-[0.80]" />
                            <div className="absolute px-48 py-40 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                                <Meteors className="absolute" number={10} />
                            </div>
                        </div>
                    </div>
                )}

                <div className={cn(
                    titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:10 justify-center h-full'
                )}>
                    <div className="font-sans font-extralight text-[#C1C2D3] text-sm md:text-xs lg:text-base z-10">
                        {description}
                    </div>
                    <div className="font-sans font-bold text-white text-lg lg:text-3xl max-w-96 z-10">
                        {title}
                    </div>

                    {id === 2 && (
                        <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
                            <div className="flex flex-col gap-3 lg:gap-8 animate-loop-scroll">
                                {['React.js', 'Next.js', 'Typescript','React.js', 'Next.js', 'Typescript','React.js', 'Next.js', 'Typescript', 'React.js', 'Next.js', 'Typescript','React.js', 'Next.js', 'Typescript','React.js', 'Next.js', 'Typescript'].map((item) => (<span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center text-white-100 bg-[#130036]"> {item} </span>))}
                            </div>
                            <div className="flex flex-col gap-3 lg:gap-8 animate-loop-scroll">
                                <span className="py-4 px-3 rounded-lg text-center bg-[#130036]" />
                                {['Javascript', 'MySQL', 'Tailwind', 'Javascript', 'MySQL', 'Tailwind', 'Javascript', 'MySQL', 'Tailwind', 'Javascript', 'MySQL', 'Tailwind', 'MySQL', 'Javascript', 'MySQL', 'Tailwind'].map((item) => (<span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center text-white-100 bg-[#130036]"> {item} </span>))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
