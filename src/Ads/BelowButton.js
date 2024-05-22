import React, { useEffect, useState } from 'react';

const BelowButton = () => {
    const [isUnfilled, setIsUnfilled] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            const adElement = document.querySelector('.adsbygoogle');
            if (adElement && adElement.getAttribute('data-ad-status') === 'unfilled') {
                setIsUnfilled(true);
            } else {
                setIsUnfilled(false);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.log(e);
        }
    }, []);

    return (
        <div>
            <ins className={`adsbygoogle ${isUnfilled ? 'hidden' : ''}`}
                 style={{ display: "block" }}
                 data-ad-format="autorelaxed"
                 data-ad-client="ca-pub-8884977910314227"
                 data-ad-slot="3841692338"></ins>
        </div>
    );
}

export default BelowButton;
