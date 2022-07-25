import { Dashboard, People, Business } from '@material-ui/icons';

export const sideNav = [
	{ icon: <Dashboard className="sidenavIcon" />, routeLabel: "Dashboard", link:"/cms/dashboard" },
	{ icon: <Business className="sidenavIcon" />, routeLabel: "Shops", link:"/cms/shops" },
	{ icon: <Business className="sidenavIcon" />, routeLabel: "Tokens", link:"/cms/tokens" },
]