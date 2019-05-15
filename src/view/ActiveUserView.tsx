import React from 'react';
import {AccountCircle} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton/IconButton";
import Popover from "@material-ui/core/Popover/Popover";
import MenuList from "@material-ui/core/MenuList/MenuList";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import Typography from "@material-ui/core/Typography/Typography";
import {ActiveUserContext} from "../data/ActiveUserContext";

function ActiveUserView() {
    const [anchorEl, setAnchorEl] = React.useState<HTMLElement>();
    const {user, logout} = React.useContext(ActiveUserContext);
    return (
        <div>
            <IconButton
                aria-haspopup="true"
                onClick={e=>setAnchorEl(e.currentTarget)}
                style={{color:"inherit"}}
            >
                <AccountCircle />
            </IconButton>
            <Popover
                open={!!anchorEl}
                anchorEl={anchorEl}
                onClose={()=>setAnchorEl(undefined)}>
                <MenuList>
                    <Typography variant={"caption"} style={{margin:"4px 16px 8px 16px"}}>{user.email}</Typography>
                    <MenuItem onClick={logout}>Sign out</MenuItem>
                </MenuList>
            </Popover>
        </div>
    );
}

export default ActiveUserView;