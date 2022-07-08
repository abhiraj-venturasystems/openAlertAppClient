import { Dashboard, People, Business } from '@material-ui/icons';

export const sideNav = [
	{ icon: <Dashboard className="sidenavIcon" />, routeLabel: "Dashboard", link:"/admin/dashboard" },
	{ icon: <Business className="sidenavIcon" />, routeLabel: "Companies", link:"/cms/shops" },
]