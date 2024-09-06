import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import { Link } from 'react-router-dom';



const options = {

    renderNode: {
        [BLOCKS.HEADING_1]: (node, children) => (
            <h1 className='text-4xl '>{children}</h1>
        ),
        [BLOCKS.HEADING_5]: (node, children) => (
            <h5 className='text-xl  text-black font-mono'>{children}</h5>
        ),
        [BLOCKS.QUOTE]: (node, children) => (
           <blockquote className='text-4xl font-bold text-green-500'>{children}</blockquote>
        )
        ,

        [BLOCKS.PARAGRAPH]:(node,children)=>(
            <p className='text-2xl font-sans text-justify'>{children}</p>
        ),

        [BLOCKS.EMBEDDED_ASSET]: (node, children) => (
            <img src={node.data.target.fields.file.url} alt="" />
        ),

        [INLINES.HYPERLINK]: (node, children) => (
            <a
                href={node.data.uri}
                target="_blank"
             className='text-blue-500 underline font-bold text-2xl hover:text-green-500'>{children}</a>
        ),

        [BLOCKS.UL_LIST]:(node, children) => (
            <ul className=''>
                {children}

            </ul>
        ),
        [BLOCKS.LIST_ITEM]: (node, children) => (
            <li className=''>{children}</li>
            
        ),
    }
   
    
}
function RichText({ content }) {

    return (

        <>
            {
                documentToReactComponents(content, options)
            }
        </>


    )
}

export default RichText
