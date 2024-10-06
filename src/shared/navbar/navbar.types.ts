export interface navbarProp extends React.HTMLAttributes<HTMLDivElement>{
    logo:string
    links: { label: string; href: string }[];
}