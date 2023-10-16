import React, { useCallback, useEffect, useState, useRef } from "react";


const MultiRangeSlider = ({ min, max }) => {
    const [minVal, setMinVal] = useState(min);
    const [maxVal, setMaxVal] = useState(max);
    const minValRef = useRef(min);
    const maxValRef = useRef(max);
    const range = useRef(null);


    // Convert to percentage
    const getPercent = useCallback(
        value => Math.round(((value - min) / (max - min)) * 100),
        [min, max]
    );

    // Set width of the range to decrease from the left side
    useEffect(() => {
        const minPercent = getPercent(minVal);
        const maxPercent = getPercent(maxValRef.current);

        if (range.current) {
            range.current.style.left = `${minPercent}%`;
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [minVal, getPercent]);

    // Set width of the range to decrease from the right side
    useEffect(() => {
        const minPercent = getPercent(minValRef.current);
        const maxPercent = getPercent(maxVal);

        if (range.current) {
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [maxVal, getPercent]);

    const formatNumber = (number) => {
        const formattedNumber = new Intl.NumberFormat('vi-VN').format(number);
        const shortNumber = (number / 1000000).toFixed(1) + 'tr';
        return { formattedNumber, shortNumber };
    }

    return (
        <div className="h-auto flex items-center justify-center bg-gray-400">
            <input
                type="range"
                min={min}
                max={max}
                value={minVal}
                onChange={event => {
                    const value = Math.min(Number(event.target.value), maxVal - 1);
                    setMinVal(value);
                    minValRef.current = value;
                }}
                className={`absolute pointer-events-none [&::-webkit-slider-thumb]:appearance-none appearance-none h-0 w-[250px] [&::-webkit-slider-thumb]:bg-[#f1f5f7] [&::-webkit-slider-thumb]:border-none [&::-webkit-slider-thumb]:rounded-[50%]
                [&::-webkit-slider-thumb]:shadow-[0_0_1px_1px_#ced4da]  [&::-webkit-slider-thumb]:cursor-pointer  [&::-webkit-slider-thumb]:h-[18px]  [&::-webkit-slider-thumb]:w-[18px]  [&::-webkit-slider-thumb]:mt-[4px]
                 [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:relative
                  [&::-moz-range-thumb]:bg-[#f1f5f7] [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:rounded-[50%]
                [&::-moz-range-thumb]:shadow-[0_0_1px_1px_#ced4da]  [&::-moz-range-thumb]:cursor-pointer  [&::-moz-range-thumb]:h-[18px]  [&::-moz-range-thumb]:w-[18px]  [&::-moz-range-thumb]:mt-[4px]
                 [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:relative z-[5]
                 `}


            />
            <input
                type="range"
                min={min}
                max={max}
                value={maxVal}
                onChange={event => {
                    const value = Math.max(Number(event.target.value), minVal + 1);
                    setMaxVal(value);
                    maxValRef.current = value;
                }}
                className="absolute pointer-events-none [&::-webkit-slider-thumb]:appearance-none appearance-none h-0 w-[250px] z-[4]
                [&::-webkit-slider-thumb]:bg-[#f1f5f7] [&::-webkit-slider-thumb]:border-none [&::-webkit-slider-thumb]:rounded-[50%]
                [&::-webkit-slider-thumb]:shadow-[0_0_1px_1px_#ced4da]  [&::-webkit-slider-thumb]:cursor-pointer  [&::-webkit-slider-thumb]:h-[18px]  [&::-webkit-slider-thumb]:w-[18px]  [&::-webkit-slider-thumb]:mt-[4px]
                 [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:relative

                 [&::-moz-range-thumb]:bg-[#f1f5f7] [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:rounded-[50%]
                [&::-moz-range-thumb]:shadow-[0_0_1px_1px_#ced4da]  [&::-moz-range-thumb]:cursor-pointer  [&::-moz-range-thumb]:h-[18px]  [&::-moz-range-thumb]:w-[18px]  [&::-moz-range-thumb]:mt-[4px]
                 [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:relative"
            />

            <div className="relative w-[250px]">
                <div className="absolute rounded-[3px] h-[5px] bg-gray-400 w-full z-[1]" />
                <div ref={range} className="absolute rounded-[3px] h-[5px] bg-primaryColor z-[2]" />
                <div className="absolute text-textBoldColor text-lg font-medium mt-[20px] left-[2px]">{formatNumber(minVal).shortNumber}</div>
                <div className="absolute text-textBoldColor text-lg font-medium mt-[20px] right-0">{formatNumber(maxVal).shortNumber}</div>
            </div>
        </div>
    );
};

export default MultiRangeSlider;