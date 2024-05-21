import React, { useEffect } from 'react';

const BelowButton = () => {
    useEffect(() => {

        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        }

        catch (e) {
                console.log(e);
        }

    },[]);

  return (
    <>
    <div>
       
    <ins class="adsbygoogle"
     style={{display:"block"}}
     data-ad-format="autorelaxed"
     data-ad-client="ca-pub-8884977910314227"
     data-ad-slot="3841692338"></ins>
    </div>
    </>
  )
}

export default BelowButton