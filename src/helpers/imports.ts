
import p5 from 'p5';
import sketch from './cube';
//@ts-ignore
new p5(sketch, document.getElementById("skt"));
//@ts-ignore
import * as constants from '../content/constants.yaml';
import Anime from 'react-anime';

import { createBrowserHistory, History } from 'history';

const history: History = createBrowserHistory()
//@ts-ignore
import * as blog from '../content/blog/*.md';
//@ts-ignore
import * as work from '../content/work/*.md';
//@ts-ignore
import * as game from '../content/games/*.md';
//@ts-ignore 
import * as sket from '../content/sket/*.md';
//@ts-ignore 
import * as book from '../assets/svg/book.svg';
const content = {
    blog,
    work,
    game,
    sket
}
const svg = {
    book
}
export {
    content,
    constants,
    Anime,
    history,
    svg
}