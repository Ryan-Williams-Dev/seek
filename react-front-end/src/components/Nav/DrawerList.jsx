import { Box, List } from "@mui/material";
import DrawerlistItem from "./DrawerListItem";


const Drawerlist = (props) => {

  // NOTE: add route to iconMatcher function in DrawerListItem component too
  // To add a link to drawer, add the name to the links array
  const links = [
    { route: '/', text: 'Daily Game'},
    { route: '/custom-game', text: 'Create Custom Game' },
    { route: '/account', text: 'Account' },
    { route: '/leaderboards', text: 'Leaderboards' },
  ]

  const listItems = links.map((item, index) => {
    return (
      <DrawerlistItem
        key={index}
        text={item.text}
        route={item.route}
      />
    )
  })

  return (
    <Box
      role="presentation"
    >
      <List onClick={props.onClickItem} >
        {listItems}
      </List>
    </Box>
  );
}

export default Drawerlist;
