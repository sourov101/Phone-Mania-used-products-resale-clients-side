import React from 'react';

const Stories = () => {
    const stories = [
        {
            id: 1,
            title: 'Apple and Samsung laughing; Sony wants new $500 camera to replace your iPhone, Galaxy! ',
            author: 'Martin Filipov',
            image: 'https://m-cdn.phonearena.com/images/article/143747-wide-two_940/Apple-and-Samsung-laughing-Sony-wants-new-500-camera-to-replace-your-iPhone-Galaxy.webp?1668947676',

        },
        {
            id: 2,
            title: 'Why get an impostor when you can get Note 20 Ultra with SD slot for crazy low price ',
            author: 'Anam Hamid',
            image: 'https://m-cdn.phonearena.com/images/article/143808-wide-two_940/Why-get-an-impostor-when-you-can-get-Note-20-Ultra-with-SD-slot-for-crazy-low-price.webp?1668897587',

        },
        {
            id: 3,
            title: 'Jaw-dropping Pixel Fold, first foldable to challenge Galaxy Z Fold - Android, iPhone users react!',
            author: 'Martin Filipov',
            image: 'https://m-cdn.phonearena.com/images/article/143689-wide-two_940/Jaw-dropping-Pixel-Fold-first-foldable-to-challenge-Galaxy-Z-Fold---Android-iPhone-users-react.webp?1668959966',

        },

    ]
    return (

        <div>
            <h1 className='text-3xl mt-10'>Popular Stories</h1>
            <div className='grid my-10 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    stories.map(story =>
                        <div key={story.id} className="card bg-base-100 shadow-xl">
                            <figure><img src={story.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{story.title}</h2>
                                <p>{story.author}</p>

                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Stories;