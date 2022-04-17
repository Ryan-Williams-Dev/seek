import { Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { VideogameAsset , ManageAccounts, Leaderboard } from "@mui/icons-material";
// import DrawerListItem from "./DrawerListitem";


const Drawerlist = (props) => {

  // To add a link to drawer, add the name to the links array
  const links = ['Custom Game', 'Account', 'Leaderboards']

  // Add a matching case to this switch function returning the desired icon for list item
  const iconMatcher = (linkName) => {
    switch(linkName) {
      case 'Custom Game':
        return (<VideogameAsset />);
      case 'Account':
        return (<ManageAccounts />);
      case 'Leaderboards':
        return (<Leaderboard/>)
      default:
        return '';
    }
  }

  const listItems = links.map((item) => {
    return (
        <ListItem button key={item}>
          <ListItemIcon>
            {iconMatcher(item)}
          </ListItemIcon>
          <ListItemText primary={item} />
        </ListItem>
    )
  })

  return (
    <Box
      role="presentation"
    >
      <List>
        {listItems}
      </List>
    </Box>
  );
}

export default Drawerlist;
