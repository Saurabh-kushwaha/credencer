'use client';

import { Carousel } from 'flowbite-react';

export default function DefaultCarousel() {
    return (
        <Carousel>
            <img
                className='h-96'
                alt="..."
                src="https://www.credencerewards.com/static/assets/imgs/banners/Summer%20sale%20babies.jpg"
            />
            <img
                className='h-96'
                alt="..."
                src="https://www.credencerewards.com/static/assets/imgs/banners/summer.png"
            />
            <img
                className='h-96'
                alt="..."
                src="https://www.credencerewards.com/static/assets/imgs/banners/Summer%20sale.png"
            />
            <img
                className='h-96'
                alt="..."
                src="https://www.credencerewards.com/static/assets/imgs/banners/Summer%20sale%20hoilday.png"
            />
        </Carousel>
    )
}


