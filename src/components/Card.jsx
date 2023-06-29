'use client';
import { Card } from 'flowbite-react';
import './../index.css';
export default function CardWithDecorativeImage() {
    return (
        <div className='p-2.5'>
            <div className="text-purple-800 font-bold text-center text-2xl py-4">
                <h2>All Brands</h2>
            </div>
            <div className="flex gap-4 justify-between">
                <Card className="max-w-sm">
                    <div className='flex justify-between'>
                        <div className="rounded-full px-2 py-1 bg-pink-100 text-purple-600 text-xs">
                            <p>Instant Delivery</p>
                        </div>
                        <div className="text-xs bg-price">
                            <p className='p-1'>₹100 to ₹10000</p>
                        </div>
                    </div>
                    <h5 className="text-xl font-bold text-color text-center">
                        Amazon Pay E-Gift Card
                    </h5>
                    <div className='p-4 rounded border border-gray-200'>
                        <img src='https://www.credencerewards.com/media/provider_logo/EGCGBCDRW001.jpg' alt='amazon' />
                    </div>
                    <p className="font-normal text-gray-500 text-center">
                        Amazon
                    </p>
                </Card>
                <Card className="max-w-sm">
                    <div className='flex justify-between'>
                        <div className="rounded-full px-2 py-1 bg-pink-100 text-purple-600 text-xs">
                            <p>Instant Delivery</p>
                        </div>
                        <div className="text-xs bg-price">
                            <p className='p-1'>₹100 to ₹10000</p>
                        </div>
                    </div>
                    <h5 className="text-xl font-bold text-color text-center">
                        Flipkart E-Gift Card
                    </h5>
                    <div className='p-4 rounded border border-gray-200'>
                        <img src='https://www.credencerewards.com/media/provider_logo/EGVGBPES001_PZPBgAW.jpg' alt='flipkart' />
                    </div>
                    <p className="font-normal text-gray-500 text-center">
                        Flipkart
                    </p>
                </Card>
                <Card className="max-w-sm">
                    <div className='flex justify-between'>
                        <div className="rounded-full px-2 py-1 bg-pink-100 text-purple-600 text-xs">
                            <p>Instant Delivery</p>
                        </div>
                        <div className="text-xs bg-price">
                            <p className='p-1'>₹100 to ₹10000</p>
                        </div>
                    </div>
                    <h5 className="text-xl font-bold text-color text-center">
                        Peter England E-Gift Voucher
                    </h5>
                    <div className='p-4 rounded border border-gray-200'>
                        <img src='https://www.credencerewards.com/media/provider_logo/EGVGBPES001.jpg' alt='giftCard' />
                    </div>
                    <p className="font-normal text-gray-500 text-center">
                        Peter England
                    </p>
                </Card>
                <Card className="max-w-sm">
                    <div className='flex justify-between'>
                        <div className="rounded-full px-2 py-1 bg-pink-100 text-purple-600 text-xs">
                            <p>Instant Delivery</p>
                        </div>
                        <div className="text-xs bg-price">
                            <p className='p-1'>₹100 to ₹10000</p>
                        </div>
                    </div>
                    <h5 className="text-xl font-bold text-color text-center">
                        Fastrack E-Gift Card
                    </h5>
                    <div className='p-4 rounded border border-gray-200'>
                        <img src='https://www.credencerewards.com/media/provider_logo/EGVGBFTS001.png' alt='fasttrack' />
                    </div>
                    <p className="font-normal text-gray-500 text-center">
                        Fasttrack
                    </p>
                </Card>
            </div>
        </div>
    )
}


