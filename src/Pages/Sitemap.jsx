// Fetch the sitemap in your React component
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Sitemap = () => {
  const [sitemap, setSitemap] = useState(null);

  useEffect(() => {
    const fetchSitemap = async () => {
      try {
        const response = await axios.get('https://aktu-quantum-backend.onrender.com/sitemap.xml');
        setSitemap(response.data);
      } catch (error) {
        console.error('Error fetching sitemap:', error);
      }
    };

    fetchSitemap();
  }, []);

  console.log("inside");
  return (
    <div>
    
      <h1>Sitemap</h1>
      <pre>{sitemap}</pre>
    </div>
  );
};

// export default Sitemap;


// const Sitemap = () => {
//   return (
//     <div>Sitemap</div>
//   )
// }

export default Sitemap