import React from 'react';
import Image from 'next/image'

const Sprite = ({sprites}) => {
    const sprite = sprites.front_default;
    return (
        <div className="px-5 pt-8 pb-20 bg-zinc-100 rounded">
            <div className="p-px bg-gray-950 rounded self-start">
               <Image src={sprite} alt="" height={200} width={200} />
            </div>
        </div>
    );
}

export default Sprite;
