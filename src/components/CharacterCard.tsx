import React from "react";

const CharacterCard = () => {
    return (
        <div
            className="shadow-lg py-5 px-8 m-4 max-w-[518px] flex flex-col transition-transform transform hover:scale-105">
            <h2 className="text-[25px] leading-none mb-14">Stair Goblin - Mythological Creature</h2>

            <div className="mt-auto flex justify-between items-center">
                <div className="flex items-center text-[14px]">
                    <span className="text-gray-600 mr-1">Status:</span>
                    <span className={`font-bold text-green-600`}>
                        Alive
                    </span>
                </div>

                <div className="text-gray-500 text-[14px]">
                    <span className="mr-2">Created:</span>
                    04.11.2017
                </div>
            </div>
        </div>
    );
};

export default CharacterCard;
