"use client";

import React, { useState } from "react";
import Header from "../header/page";

const IframeApp = () => {
    const [iframeSrc, setIframeSrc] = useState("");

    const loadContent = (type: any) => {
        switch (type) {
            case "link":
                setIframeSrc("https://www.example.com");
                break;
            case "image":
                setIframeSrc(
                    '<!DOCTYPE><html><body><img src="https://www.designtagebuch.de/wp-content/uploads/mediathek//2024/11/amazon-logo.jpg" alt="Placeholder Image" style ="width:400px"/></body></html>'
                );
                break;
            case "video":
                setIframeSrc(`
          <!DOCTYPE>
          <html>
            <body>
              <video width="100%" height="100%" controls>
                <source src="https://www.w3schools.com/html/movie.mp4" type="video/mp4">
                Your browser does not support the video tag.
              </video>
            </body>
          </html>
        `);
                break;
            default:
                break;
        }
    };

    return (
        <div className="news">
            <Header />
            <h1>Iframe Remote App</h1>
            <div>
                <button
                    onClick={() => loadContent("link")}
                    style={{
                        border: "1px solid #ddd",
                        margin: "20px",
                        padding: "20px 15px",
                        backgroundColor: "#efefef",
                        borderRadius: "10px",
                    }}
                >
                    Load Link
                </button>
                <button
                    onClick={() => loadContent("image")}
                    style={{
                        border: "1px solid #ddd",
                        margin: "20px",
                        padding: "20px 15px",
                        backgroundColor: "#efefef",
                        borderRadius: "10px",
                    }}
                >
                    Load Image
                </button>
                <button
                    onClick={() => loadContent("video")}
                    style={{
                        border: "1px solid #ddd",
                        margin: "20px",
                        padding: "20px 15px",
                        backgroundColor: "#efefef",
                        borderRadius: "10px",
                    }}
                >
                    Load Video
                </button>
            </div>

            <iframe
                id="iframeContent"
                srcDoc={iframeSrc}
                style={{ width: "80%", height: "400px", marginTop: "20px" }}
                title="Iframe Display"
            />
        </div>

    );
};

export default IframeApp;