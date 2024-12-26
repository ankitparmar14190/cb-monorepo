
'use client';
import React, { useEffect, useState } from 'react';
import { drupalClient } from "../lib/drupalClient";
import Image from "next/image";
import Link from "next/link";
import Header from '../header/page';


const baseUrl = process.env.CLIENT_ID;

const NewsClient = () => {
    const [news, setNews] = useState([]);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    const fetchToken = async () => {
        try {
            console.log('base_url =>', `${baseUrl}/oauth/token = ${process.env.NEXT_PUBLIC_CLIENT_ID}`);

            const response = await fetch(`${baseUrl}/oauth/token`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: new URLSearchParams({
                    client_id: process.env.NEXT_PUBLIC_CLIENT_ID!,
                    client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET!,
                    username: process.env.NEXT_PUBLIC_USERNAME!,
                    password: process.env.NEXT_PUBLIC_PASSWORD!,
                    grant_type: process.env.NEXT_PUBLIC_GRANT_TYPE!,
                    scope: process.env.NEXT_PUBLIC_SCOPE!
                })
            });
            console.log('response =>', response);

        } catch (err) {
            console.log('err =>', err);
        }
    }

    // Fetch token on component mount
    useEffect(() => {
        fetchToken();
    }, []); // Empty dependency array to run only once after the component mounts

    //   // Function to fetch the token
    //   const fetchToken = async () => {
    //     if (!baseUrl) {
    //         console.error("baseUrl is not defined.");
    //         return;
    //       }
    //     try {
    //       const response = await fetch(`${baseUrl}/oauth/token`, {
    //         method: 'POST',
    //         headers: {
    //           "Content-Type": "application/x-www-form-urlencoded"
    //         },
    //         body: new URLSearchParams({
    //           client_id: process.env.NEXT_PUBLIC_CLIENT_ID!,
    //           client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET!,
    //           username: process.env.NEXT_PUBLIC_USERNAME!,
    //           password: process.env.NEXT_PUBLIC_PASSWORD!,
    //           grant_type: process.env.NEXT_PUBLIC_GRANT_TYPE!,
    //           scope: process.env.NEXT_PUBLIC_SCOPE!
    //         })
    //       });

    //       if (!response.ok) {
    //         const error = await response.json();
    //         throw new Error(error.message || 'Failed to fetch token');
    //       }

    //       const tokenData = await response.json();
    //       setToken(tokenData.access_token); // Set the token in the state
    //     } catch (error) {
    //       console.error('Error fetching token:', error);
    //       //setError('Error fetching token');
    //     }
    //   };

    //   // Function to fetch news
    //   const fetchNews = async () => {
    //     if (!token) return; // Don't fetch news if there's no token yet
    //     try {
    //       const newsResponse = await drupalClient.fetch(`${baseUrl}/jsonapi/node/news`, {
    //         headers: {
    //           Authorization: `Bearer ${token}`
    //         }
    //       });

    //       const data = await newsResponse.json();
    //       setNews(data.data); // Set the news data in state
    //     } catch (error) {
    //       console.error('Error fetching news:', error);
    //       //setError('Error fetching news');
    //     } finally {
    //       setLoading(false); // Once the fetch is complete, set loading to false
    //     }
    //   };

    //   // Fetch token on component mount
    //   useEffect(() => {
    //     fetchToken();
    //   }, []); // Empty dependency array to run only once after the component mounts

    //   // Fetch news after the token is fetched
    //   useEffect(() => {
    //     if (token) {
    //       fetchNews();
    //     }
    //   }, [token]); // Dependency array includes token, so this will run when token is set

    //   // Handling loading and error states
    //   if (loading) return <div>Loading...</div>;
    //   if (error) return <div>{error}</div>;

    //   // Render the news items
    //   const newsItems = news.map((item: any) => {
    //     const newsId = item.id;
    //     const imageId = item.relationships.field_news_image.data.id;

    //     const imageNewsUrl = `${baseUrl}/jsonapi/file/mime_attachment_binary/${imageId}`;

    //     return (
    //       <div key={newsId} className="justify-center flex-1">
    //         <div className="rounded-2xl overflow-hidden">
    //           <div className="p-7 text-xl">
    //             <h1 className="font-extrabold text-gray-800 mb-5">{item.attributes.title}</h1>

    //             {/* Dynamically fetch the image */}
    //             <Image
    //               src={imageNewsUrl} // Image URL will be fetched dynamically here
    //               width={200}
    //               height={200}
    //               alt="image"
    //               style={{ maxWidth: "200px", height: "200px", objectFit: "cover" }}
    //             />

    //             <div
    //               dangerouslySetInnerHTML={{
    //                 __html: item.attributes.body.value
    //               }}
    //               className="newsDescription"
    //             />
    //             <p className="text-gray-700 mb-5">
    //               {item.attributes.field_news_campaign_period && (
    //                 <p>
    //                   Start: {item.attributes.field_news_campaign_period?.value} end:{" "}
    //                   {item.attributes.field_news_campaign_period?.end_value}
    //                 </p>
    //               )}
    //             </p>
    //             <div className="flex gap-6">
    //               <div className="rounded-full bg-gray-200 py-1 px-4 text-gray-800 hover:bg-slate-500">
    //                 <Link href={item.attributes.field_news_link.uri}>
    //                   {item.attributes.field_news_link.title}
    //                 </Link>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     );
    //   });

    return (
        <div className="news">
            Client Page
            {/* <Header />
      <div className="newsList flex">{newsItems}</div> */}
        </div>
    );
};

export default NewsClient;
