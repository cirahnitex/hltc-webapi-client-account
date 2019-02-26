import * as React from 'react';
import {AccountCircle} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton/IconButton";
import Popover from "@material-ui/core/Popover/Popover";
import MenuList from "@material-ui/core/MenuList/MenuList";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import User from "../data/User";
import Typography from "@material-ui/core/Typography/Typography";
import Logout from "../data/actions/Logout";

interface Props {
    activeUser: User;
}
interface State {
    anchorEl?: HTMLElement;
}
class ActiveUserView extends React.Component<Props,State> {
    constructor(props:Props) {
        super(props);
        this.state = {
        }
    }
    handleMenuOpenClick = (e:React.MouseEvent<HTMLElement>)=>this.setState({anchorEl:e.currentTarget});
    closeMenu() {this.setState({anchorEl:undefined})}
    render() {
        const menuOpen = !!this.state.anchorEl;

        return (
            <div>
                <IconButton
                    aria-haspopup="true"
                    onClick={this.handleMenuOpenClick}
                    style={{color:"inherit"}}
                >
                    <AccountCircle />
                </IconButton>
                <Popover
                    open={menuOpen}
                    anchorEl={this.state.anchorEl}
                    onClose={()=>this.closeMenu()}>
                    <MenuList>
                        <Typography variant={"caption"} style={{margin:"4px 16px 8px 16px"}}>{this.props.activeUser.email}</Typography>
                        <MenuItem onClick={()=>{this.closeMenu();Logout.perform()}}>Sign out</MenuItem>
                    </MenuList>
                </Popover>
            </div>
        );
    }
}

export default ActiveUserView;