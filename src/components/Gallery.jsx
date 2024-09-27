"use client"
import { useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import {astroImageInfo} from "@/components/ImageInfo";

const Gallery = () => {
    useEffect(() => {
        Fancybox.bind("[data-fancybox]", {});

        // Clean up Fancybox instance on component unmount
        return () => {
            Fancybox.destroy();
        };
    }, []);

    return (
        <div className="gallery flex flex-wrap gap-1">
            {astroImageInfo.map(image => {
                return (<a  data-fancybox="gallery" key={image.title}  href={image.original}> <img className={"w-10"} alt={image.title} src={image.original}/></a>)
            })}
            {/*<a href="/images/image1.jpg" data-fancybox="gallery">*/}
            {/*    <img src="/images/thumb1.jpg" alt="Image 1" />*/}
            {/*</a>*/}
            {/*<a href="/images/image2.jpg" data-fancybox="gallery">*/}
            {/*    <img src="/images/thumb2.jpg" alt="Image 2" />*/}
            {/*</a>*/}
            {/*<a href="/images/image3.jpg" data-fancybox="gallery">*/}
            {/*    <img src="/images/thumb3.jpg" alt="Image 3" />*/}
            {/*</a>*/}
        </div>
    );
};

export default Gallery;
