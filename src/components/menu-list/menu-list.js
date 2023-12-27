import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';

import './menu-list.scss';

class MenuList extends Component {

    render() {
        const {menuItems} = this.props

        return (
            <ul className="menu__list">
                {
                    menuItems.map(item => {
                        return <MenuListItem key={item.id} menuItem={item}/>
                    })
                }
            </ul>
        )
    }
};


export default MenuList;