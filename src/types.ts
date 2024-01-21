import { language } from "@/utils/language";
import text from "@/data/text.json";

export type LinkType = {
  name: string;
  href?: string;
  link?: LinkType[];
};

export type BlogPost = {
  titulo: string;
  shortDesc:string;
  slug:string;
  intro:string;
  desc: {
    data: Record<string, any>;
    content: Array<any>; 
    nodeType: string;
  };
  media: {
    metadata: Record<string, any>;
    sys: Record<string, any>;
    fields: Record<string, any>;
  };
}