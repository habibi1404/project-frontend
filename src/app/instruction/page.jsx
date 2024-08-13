import React from 'react'
import Link from "next/link"

export default function page() {
  return (
    <div>
        <div className='pt-24 w-[90%] pl-[90px]'>
            <div className='text-center bg-blue-300 p-5'>
                <h1 className='text-5xl font-bold p-10'>Instructions</h1>
                <p>It’s great to see you! This Quick Start Guide will show you basics on how to get started editing your website.</p>
            </div> 
    </div>
            <div className='pt-24 w-[90%] pl-[90px]'>
            <div className='bg-yellow-300 p-5'>
                <p>If you are just beginning with Webflow, we highly recommend you to take
                     <Link href='https://university.webflow.com'> <strong>Webflow 101 Crash Course</strong></Link>,
                      as this introductory course by <Link href='https://university.webflow.com'> <strong>Webflow University</strong></Link> offers the overview of the basics and the most
                      essential information you need to learn to get up and building your first Webflow website.</p>

            </div>
            </div>
            <div className='pt-24 w-[90%] pl-[90px]'>
        <div className='p-2 border-2 border-black'>
            <p className='bg-red-300 p-5 text-2xl font-bold'>Customizing colors</p>
            <p className='p-2 mt-6'>This template utilizes the Webflow variables feature, allowing you to
             effortlessly modify all colors, which will be promptly updated across the entire site.
            To adjust a color, navigate to the Variables panel, then choose the color you wish to modify.</p>
            <p className='font-bold p-2'>SVG element color</p>
            <p className='p-2'>In order to change the color of SVGs, Download .svg file from Assets and open it to any text editor.
                 Change HEX color code with color of your choice and replace updated .svg file with the current file.</p>
        </div>
        </div>
        <div className='pt-24 w-[90%] pl-[90px]'>
            <div className='p-2 border-2 border-black'>
            <p className='bg-red-300 p-5 text-2xl font-bold '>Changing fonts</p>
                <p className='mt-6'>The fonts used in this template are free to use.</p>
                <p className='p-2 mt-2'>
                    <ol>
                        <li>1. Body (All pages): Changing the body font will affect all fonts on the entire site.</li>
                        <li>2. Heading (All headings): Changing the heading font will affect all heading fonts on the entire site.</li>
                    </ol>
                </p>
                <p className='mb-3'>In case you want to change fonts, you can always go to <em>Project Settings Fonts</em> and you will be able 
                    to upload any custom fonts, can use Google Fonts or even you can connect your Adobe Fonts account.‍</p>
                    <p className='mb-5'>Once upload font from <em>Project Settings</em>, click on the orange selector option in the top right of
                         the <em>Style tab</em> and <em>select Body (All Pages)</em>. Now go to the <em>Typography</em> section below and change the
                          font as per your need. Changing the body font will affect all fonts on the entire site.</p>

            </div>
        </div>
        <div className='pt-24 w-[90%] pl-[90px]'>
        <div className='p-2 border-2 border-black'>
            <p className='bg-red-300 p-5 text-2xl font-bold'>Starter Page</p>
            <p className='p-2 mt-6'>The Utility Pages directory contains a page titled "Starter Page". You can start building your pages with this template, which includes a header, footer, and blank section and container.

Duplicate the Starter Page and start editing or adding sections from other pages.</p>
        </div>
        </div>
        <div className='pt-24 w-[90%] pl-[90px]'>
        <div className='p-2 border-2 border-black'>
            <p className='bg-red-300 p-5 text-2xl font-bold'>Template Support</p>
            <p className='p-2 mt-6'>We'll be glad to help you out with your queries. Please contact us at the <Link href='https://www.webestica.com/webflow-template-support'><strong>Webflow template support page</strong></Link>  and you shall hear back very soon.</p>
            <p className='mt-10 font-extrabold'>Custom Design & Development</p>
            <p className='mt-3 mb-5 '>If you are looking for Custom Design & Development with Webflow, feel free to reach us via Reach us out here.</p>
        </div>
        </div>

        <div className='pt-24 w-[90%] pl-[90px]'>
        <div className='p-2 border-2 border-black'>
            <p className='bg-red-300 p-5 text-2xl font-bold'>Important notes:</p>
            <p className='p-2'><strong>.</strong> <strong>SVG:</strong> For a superior visual experience, we suggest using SVG icons and logotypes. 
            To find a wide selection of SVG icons, you can browse Icon Finder and use the free filter to refine your
             search.</p>
            <p className='p-2'><strong>.</strong><strong>Resize your Images:</strong> It is important to resize your images before adding them to your website, rather than 
                simply downloading and placing them as they are. The size and resolution of an image can have a
                 significant impact, and using an image size of 1200px x 800px for a content size of 300px x 200px is
                  unnecessary. Resize it to 300px x 200px.</p>
            <p className='p-2'><strong>.</strong><strong>Image Formats:</strong> There are mainly 2 common file types that are used for web images which are JPEG and
                     PNG. For images with a Flat Background use JPEG images, for images with a Transparent background use 
                     PNG images.</p>
            <p className='p-2'><strong>.</strong><strong>Compress images to WebP:</strong> For a better loading site, compress existing image assets with
             the built-in <Link href='https://university.webflow.com/lesson/webp-conversion-tool'><strong>WebPconversion
                 tool.</strong></Link>  Please note, Webflow compression tool is currently not available within the CMS. You
                  will need to manually convert them to WebP format and compress them separately.</p>
            <p className='p-2'><strong>.</strong><strong>Clean up:</strong> <Link href='https://university.webflow.com/lesson/triggers-and-animations#how-to-delete-triggers-and-animations'><strong>Clean up interactions</strong></Link>  and <Link href='https://university.webflow.com/lesson/style-manager#clean-up'><strong>Clean up CSS</strong></Link> styles before publishing your site.</p>
            <p className='p-2'><strong>.</strong><strong>Audit panel:</strong> Before going live with your site, find and fix accessibility issues with <Link href='https://university.webflow.com/lesson/audit-panel'><strong>Webflow's Audit panel.</strong></Link></p>
            <p className='p-2'><strong>.</strong><strong>Compressing Images:</strong> For a better loading site, we recommend optimizing all your images using services like <Link href='https://tinypng.com/'><strong>Tinypng.com</strong></Link></p>
            <p className='p-2'><strong>.</strong><strong>SEO:</strong> Before publishing your site, make sure to edit the Title Tag, Meta Description, etc. For more 
                information on SEO and how to optimize your website, Visit <Link href='https://university.webflow.com/lesson/seo-title-meta-description'><strong>Add SEO title and meta description</strong></Link> and <Link href='https://webflow.com/blog/seo-and-webflow-the-essential-guide'><strong>SEO and Webflow: the essential guide.</strong></Link></p>
        </div>
        </div>
    </div>
  )
}
