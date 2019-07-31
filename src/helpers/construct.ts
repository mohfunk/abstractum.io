import Sugar from 'sugar';
import _ from 'lodash';
const S = Sugar.String
//@ts-ignore
import * as _content from '../content/**/*.md'

export interface NaviItemProps {
    ordr: number,
    head: string,
    date: string,
    type: string,
    link: string,
    text: string,
}
const construct = () => {
    let __content = { ..._content.work, ..._content.games, ..._content.blog, }
    let _file = _.keys((__content))
    let map: Array<NaviItemProps> = new Array();
    _file.forEach((item: string) => {
        const _path = item.split('.')
        const _ordr = Number(_path[0])
        const _link = `/${_path[1]}`
        const p: Array<string> = __content[item].split('\n')
        const [_head, _date, _type]: string[] = p.slice(1, 4).map((s: string) => S.stripTags(s))
        const _text = p.slice(5).join('\n')
        console.log(_head)
        const _item: NaviItemProps = {
            ordr: _ordr,
            head: _head,
            date: _date,
            type: _type,
            link: _link,
            text: _text
        }
        map.push(_item)
    });
    return map;
}

const map = construct()
const prepare = (type: string) =>
    _.reverse(_.sortBy(
        _.filter(map, ['type', type]),
        (item: NaviItemProps) => new Date(item.date))
    )
const content = () => {
    let cont: Array<{ link: string, text: string }> = new Array()
    map.forEach(item => {
        const { text, link } = item
        cont.push({ link, text })
    });
    return cont
}
const menu = (type: string) => {
    let cont: Array<{ head: string, date: string, link: string }> = new Array()
    prepare(type).forEach(item => {
        const { head, date, link } = item;
        cont.push({ head, date, link })
    })
    return cont
}
const all = content()
const blog = menu('blog')
const work = menu('work')
const game = menu('game')
const sket = menu('sket')
console.log(all)

export {
    all,
    blog,
    work,
    game,
    sket
}