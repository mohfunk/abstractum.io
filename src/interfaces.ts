export interface ConstructContentItem {
    ordr: number,
    head: string,
    date: string,
    type: string,
    link: string,
    text: string,
}
export type ConstructContent = Array<ConstructContentItem>

export interface ContentItem {
    link: string,
    text: string
}
export type Content = Array<ContentItem>

export interface MenuItem {
    head: string,
    date: string,
    link: string
}
export type Menu = Array<MenuItem>

export interface WebsiteContent {
    all: Content,
    blog: Menu,
    game: Menu,
    work: Menu,
    sket: Menu,
}
export interface Menus {
    [key: string]: Menu
    blog: Menu,
    game: Menu,
    work: Menu,
    sket: Menu,

}
export interface AppProps {
    content: WebsiteContent
}
export interface HomePageProps {
    content: WebsiteContent
}
export interface PageProps {
    content: Content
}
export interface NavMenuProps {
    head: string,
    menu: Menu
}