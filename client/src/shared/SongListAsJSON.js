import React from 'react';
import CategoryDetails from '../components/CategoryDetails'

function SongListAsJSON() {
    const Songs = [
        {
            id: 1,
            name: 'Song 1',
            image:'https://external-preview.redd.it/5Jm2ZNIXEhxxslb7LOLGkMLw3ILS_It0xdougJXzA50.jpg?auto=webp&s=abc1cc24aaf1c33bfe3ef321bb3ab0e08b3bc7eb',
            artist:'Guru Randhawa',
            category: 'Music song , Bollywood'
        },
        {
            id: 2,
            name: 'Song 2',
            image:'https://external-preview.redd.it/5Jm2ZNIXEhxxslb7LOLGkMLw3ILS_It0xdougJXzA50.jpg?auto=webp&s=abc1cc24aaf1c33bfe3ef321bb3ab0e08b3bc7eb',
            artist:'Guru Randhawa',
            category: 'Music song , Bollywood'
        },
        {
            id: 3,
            name: 'Song 3',
            image:'https://external-preview.redd.it/5Jm2ZNIXEhxxslb7LOLGkMLw3ILS_It0xdougJXzA50.jpg?auto=webp&s=abc1cc24aaf1c33bfe3ef321bb3ab0e08b3bc7eb',
            artist:'Guru Randhawa',
            category: 'Music song , Bollywood'
        }
    ]

    
    return (
            <CategoryDetails songs={Songs} /> 
    )
}

export default SongListAsJSON