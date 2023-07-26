import React from 'react';
import YoutubeEmbed from './YouTube'; // Import custom Component for the youtube video


function Home() {
    const youtubeUrl = "https://www.youtube.com/watch?v=_sZH-psg9yE";

    return (
        <>
         <h1>WORLD of Hot Sauce</h1>
         <ol>
            <h1>Hot Sauce links</h1>
            {/* 3 anchored ordered list links about hot sauce */}
            <a href='https://www.allrecipes.com/most-popular-hot-sauces-in-us-2023-7498923' className='hot-sauce-links'><li>TOP 10 US hot sauce picks</li></a>
            <a href='https://www.cntraveler.com/story/best-hot-sauces-from-around-the-world' className='hot-sauce-links'><li> Best Hot Sauce from around the world</li></a>
            <a href='https://manofmany.com/lifestyle/food/hottest-hot-sauces-in-the-world' className='hot-sauce-links'><li>Hottest of the HOT</li></a>
         </ol>
         <div>
         <h1>Hot Ones</h1>
         {/* custom Component where it passes a prop - url={youtubeUrl} - where the video is embedded; --- location YouTube.js */}
         <YoutubeEmbed url={youtubeUrl} />
</div>
        </>
    )
};


export default Home;