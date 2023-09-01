import React from 'react';
import Image from 'next/image'

const Sprite = ({sprites, chosenSprite}) => {
    const sprite = sprites[chosenSprite];
    return (
        <div className="bg-zinc-100 flex justify-center justify-self-start pb-20 pt-8 px-5 rounded">
            <div className="p-px bg-gray-950 rounded self-start">
               <Image src={sprite} alt="" height={200} width={200} />
            </div>
        </div>
    );
}

export default Sprite;
