import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { Anime } from '../helpers/imports'
import { all } from '../helpers/construct'

const NaviRoutes = () => <div className={"rts"} >
    {all.map((item: { link: string, text: string }) =>
        <Switch key={item.link}>
            <Route exact path={item.link}
                render={() =>
                    <div className={"Post"}
                        dangerouslySetInnerHTML={{ __html: item.text }}
                    />
                } />
        </Switch>
    )}
</div>

export default NaviRoutes