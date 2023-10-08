import React from 'react';

const Descreption = ({video}) => {
    const {title, date, views, description, likes, unlikes} = video
    return (
        <div>
        <h1
            className="text-lg font-semibold tracking-tight text-slate-800"
        >
          {title}
        </h1>
        <div
            className="pb-4 flex items-center space-between border-b"
        >
            <h2
                className="text-sm leading-[1.7142857] text-slate-600 w-full"
            >
                {date}
            </h2>

            {/* <!-- like/unlike --> */}
            <div className="flex gap-10 w-48">
                <div className="flex gap-1">
                    <div className="shrink-0">
                        <img
                            className="w-5 block"
                            src="/like.svg"
                            alt="Like"
                        />
                    </div>
                    <div
                        className="text-sm   text-slate-600"
                    >
                        {likes}
                    </div>
                </div>
                <div className="flex gap-1">
                    <div className="shrink-0">
                        <img
                            className="w-5 block"
                            src="/unlike.svg"
                            alt="Unlike"
                        />
                    </div>
                    <div
                        className="text-sm   text-slate-600"
                    >
                        {unlikes}
                    </div>
                </div>
            </div>
        </div>

        <div
            className="mt-4 text-sm text-[#334155] dark:text-slate-400"
        >
           {description}
        </div>
    </div>
    );
};

export default Descreption;