"use client"; // This is needed for client-side rendering
import React, { useRef, useEffect } from "react";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css"; // Import LightGallery styles
import "lightgallery/css/lg-thumbnail.css"; // Import thumbnail styles
import "lightgallery/css/lg-zoom.css"; // Import zoom styles
import { astroImageInfo } from "@/components/ImageInfo"; // Adjust your import as needed

// Plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const Gallery = () => {
    const lightGalleryRef = useRef(null);

    const images = astroImageInfo.map((image) => ({
        src: image.original,
        thumb: image.original, // You can provide a different thumbnail if needed
        alt: image.title,
    }));

    // Initialize LightGallery after the component is mounted
    useEffect(() => {
        if (lightGalleryRef.current) {
            lightGalleryRef.current.addEventListener('onInit', () => {
                console.log('LightGallery has been initialized');
            });
        }
    }, []);

    return (
        <div>
            <LightGallery
                ref={lightGalleryRef}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                {images.map((image, index) => (
                    <a key={index} href={image.src} data-lg-size="1200-800">
                        <img
                            src={image.thumb}
                            alt={image.alt}
                            className="rounded shadow-lg cursor-pointer"
                            style={{ width: "200px", margin: "10px" }}
                        />
                    </a>
                ))}
            </LightGallery>
        </div>
    );
};

export default Gallery;
