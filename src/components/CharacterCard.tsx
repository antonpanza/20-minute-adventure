import React from "react";

interface Character {
    id: number;
    name: string;
    status: string;
    created: string;
    url: string;
}

interface CharacterCardProps {
    character: Character;
    index: number;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character, index }) => {
    return (
        <a
            href={character.url}
            target="_blank"
            className={`shadow-lg py-5 px-8 flex flex-col w-full ${index < 2 ? "md:w-[calc(50%-10px)]" : "md:w-[calc(33%-10px)]"} grow transition-transform transform hover:scale-105`}
        >
            <h2 className={`text-[25px] leading-none mb-5 md:${index < 2 ? "mb-32" : "mb-14"}`}>{character.name}</h2>

            <div className="mt-auto flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <div className="flex items-center text-[14px]">
                    <span className="text-gray-600 mr-1">Status:</span>
                    <span className={`font-bold ${
                        character.status === "Alive"
                            ? "text-green-600"
                            : character.status === "Dead"
                                ? "text-red-600"
                                : "text-yellow-400"
                    }`}>
                        {character.status}
                    </span>
                </div>

                <div className="text-gray-500 text-[14px]">
                    <span className="mr-2">Created: </span>
                    {new Date(character.created).toLocaleDateString()}
                </div>
            </div>
        </a>
    );
};

export default CharacterCard;
