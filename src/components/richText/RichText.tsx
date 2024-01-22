import { documentToReactComponents, Options, RenderMark, RenderNode, CommonNode, NodeRenderer } from "@contentful/rich-text-react-renderer";
import {BLOCKS, INLINES, ResourceLinkInline} from "@contentful/rich-text-types"
import Link from "next/link";

import React, { Children } from 'react'

type Props = {
    content:any;

}


const RichText = ({ content }: Props) => {
  const options: Options = {
    renderNode: {
      [BLOCKS.UL_LIST]: (node, children) => {
        return <ul className="pl-6">{children}</ul>;
      },
      [BLOCKS.LIST_ITEM]: (node, children) => {
        return <li className="list-disc ">{children}</li>;
      },
      [BLOCKS.PARAGRAPH] : (node, children) => {
        return <p className="mb-3">{children}</p>
      },
      [BLOCKS.HEADING_3] : (node, children) => {
        return <h3 className="my-8 text-lg font-bold">{children}</h3>
      },
      [BLOCKS.HEADING_1] : (node, children) => {
        return <h3 className="my-8 text-xl font-bold">{children}</h3>
      },
      [BLOCKS.HEADING_2] : (node, children) => {
        return <h3 className="my-8 text-xl font-bold italic">{children}</h3>
      },
      [BLOCKS.HEADING_6] : (node, children) => {
        return <p className="mb-3 text-md underline text-blue-600 focus:text:blue-400">{children}</p>
      },
      [BLOCKS.EMBEDDED_ENTRY] : (node, children) => {
        return <h3 className="underline">{children}</h3>
      },
      [INLINES.RESOURCE_HYPERLINK] : (node, children) => {
        return (

  <Link href={node.data}  className="underline text-blue-500" >

{children}

</Link>)

      
      }
    },
    renderText: (text) => {
      return text.split("\n").map((textSegment, index, array) => (
        <React.Fragment key={index}>
          {textSegment}
          
          {index < array.length - 1 && <br />}
        </React.Fragment>
      ));
    },
  };

  return <>{documentToReactComponents(content, options)}</>;
};

export default RichText