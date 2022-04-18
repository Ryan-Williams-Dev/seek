import { VideogameAsset , ManageAccounts, Leaderboard, AddLocationAlt } from "@mui/icons-material";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import './nav-styles.scss'

// NOTE: add route to links array in DrawerList component too 
// Add a matching case to this switch function returning the desired icon for list item
const iconMatcher = (linkName) => {
  switch(linkName) {
    case 'Daily Game':
      return <VideogameAsset />
    case 'Create Custom Game':
      return <AddLocationAlt />;
    case 'Account':
      return <ManageAccounts />;
    case 'Leaderboards':
      return <Leaderboard/>;
    default:
      return;
  }
}

const DrawerlistItem = (props) => {

  return (
    <Link to={props.route} className="drawer-link">
      <ListItem button>
        <ListItemIcon>
          {iconMatcher(props.text)}
        </ListItemIcon>
        <ListItemText primary={props.text} />
      </ListItem>
    </Link>
  );
}

export default DrawerlistItem;


