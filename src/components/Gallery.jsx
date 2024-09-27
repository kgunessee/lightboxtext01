"use client";

// components/ImageGallery.js
import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import { astroImageInfo } from "@/components/ImageInfo"; // Adjust your import as needed

const ImageGallery = () => {
    const [toggler, setToggler] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0); // To keep track of the current index

    const images = astroImageInfo.map((image) => ({
        src: image.original,
        title: image.title,
    }));

    // Extract sources as an array of URLs for fslightbox
    const sources = images.map(image => image.src);

    return (
        <div>
            <div className="grid grid-cols-3 gap-4">
                {images.map((image, index) => (
                    <div key={index}>
                        <img
                            src={image.src}
                            alt={`Gallery Image ${index + 1}`}
                            className="cursor-pointer rounded shadow-lg"
                            onClick={() => {
                                setCurrentIndex(index); // Set the current index when clicked
                                setToggler(!toggler); // Toggle the lightbox
                            }}
                            data-fslightbox="gallery"
                        />
                    </div>
                ))}
            </div>

            <FsLightbox
                toggler={toggler}
                sources={sources} // Use the sources array here
                onClose={() => setToggler(false)}
                index={currentIndex} // Optional: Pass current index to open the correct image
            />
        </div>
    );
};

export default ImageGallery;
