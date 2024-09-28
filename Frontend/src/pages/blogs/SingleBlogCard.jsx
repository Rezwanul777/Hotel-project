import React from 'react'
import { formatDate } from './../../../utils/dateFormate';
import EditorJSHTML from 'editorjs-html';

const editorJSHTML = EditorJSHTML();
const SingleBlogCard = ({blog}) => {
    const { title, createdAt, author, content, coverImg } = blog || {};
    const htmlContent = editorJSHTML.parse(content).join('');
  return (
    <div className='bg-white  p-8'>
        {/* blog header */}
        <div>
            <h1 className='md:text-4xl text-3xl font-medium mb-4'>{title}</h1>
            <p className='mb-6'>{formatDate(createdAt)} <span className='text-blue-400 cursor-pointer'>by Admin</span></p>
        </div>
        <div>
                <img src={coverImg} alt="" className="w-full md:h-[520px] bg-cover" />
              </div>
              {/* details */}
              <div className="mt-8 space-y-4">
               
                
                <div dangerouslySetInnerHTML={{ __html: htmlContent }} className='space-y-3 editorjsdiv'/>
                <div>
                    <span className="text-lg font-medium">Rating: </span>
                    <span>4.4  (based on 2,370 reviews)</span>
                </div>
                <h3 className="text-lg font-medium">Key Features: </h3>
                <div>
                    <ul className="space-y-2 pl-5">
                        <li>1. Rooftop Pool: Ascend to our rooftop oasis and bask in the sun as you savor panoramic vistas of Los Angeles’s captivating skyline.</li>
                        <li>2. Spacious Accommodations: Our meticulously designed rooms and suites provide the perfect fusion of comfort and style, ensuring a truly rejuvenating stay.</li>
                        <li>3. Dining Excellence: Embark on a gastronomic journey at our on-site restaurant, where a diverse menu featuring local and international delicacies awaits your palate.</li>
                    </ul>
                </div>
            </div>
    </div>
  )
}

export default SingleBlogCard