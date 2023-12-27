export type LinkType = {
  name: string;
  linkTo: string;
};

export type NestedLink = {
  [key: string]: string | NestedLink[];
};

export type MyLinkType = Array<{ [key: string]: LinkType | NestedLink }>;

