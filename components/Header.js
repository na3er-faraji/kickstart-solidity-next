import React from 'react'
import { MenuMenu, MenuItem, Menu } from 'semantic-ui-react'
import { Link } from '../routes'

export default () => {
    return (
        <Menu style={{ marginTop: '10px' }}>
            <Link className="item" route="/">
                CrowdCoin
            </Link>
            <Menu.Menu position='right' >
                <MenuMenu position='right'>
                    <Link className="item" route="/">
                        Campaigns
                    </Link>
                    <Link className="item" route="/campaign/new">
                        +
                    </Link>
                </MenuMenu>
            </Menu.Menu>
        </Menu>
    )
}