import ApartmentIcon from "@material-ui/icons/Apartment";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import SportsSoccerIcon from "@material-ui/icons/SportsSoccer";
import PhotoAlbumIcon from "@material-ui/icons/PhotoAlbum";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import CodeIcon from "@material-ui/icons/Code";
import LocalGroceryStoreIcon from "@material-ui/icons/LocalGroceryStore";
import NoteIcon from "@material-ui/icons/Note";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import {
  faChartBar,
  faClone,
  faCreditCard,
  faHotel,
  faRocket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const dashboardPages = [
  {
    icon: <FontAwesomeIcon icon={faHotel} />,
    title: "Dashboard",
    href: "/",
    active: "active",
  },
  { icon: <ApartmentIcon />, title: "Tables", href: "/table" },
  {
    icon: <FontAwesomeIcon icon={faCreditCard} />,
    title: "Billing",
    href: "/billing",
  },
];

const AccoundPages = [
  { icon: <FontAwesomeIcon icon={faUser} />, title: "Profile", href: "/profile" },
  {
    icon: <FontAwesomeIcon icon={faChartBar} />,
    title: "Charts",
    href: "/charts",
  },
  {
    icon: <FontAwesomeIcon icon={faRocket} />,
    title: "Sign up",
    href: "/signUp",
  },
  {
    icon: <FontAwesomeIcon icon={faClone} />,
    title: "Sign in",
    href: "/signIn",
  },
];

const boxes = [
  {
    title: "Today's Money",
    price: "$53,000 ",
    percent: "+55%",
    icon: <MonetizationOnIcon />,
  },
  {
    title: "Today's Users",
    price: "2,300 ",
    percent: "3%",
    icon: <SportsSoccerIcon />,
  },
  {
    title: "New Clients",
    price: "+3,462  ",
    percent: "-2%",
    icon: <PhotoAlbumIcon />,
  },
  {
    title: "Sales",
    price: "$103,430",
    percent: "+5%",
    icon: <ShoppingBasketIcon />,
  },
];

const table = [
  {
    logo: "https://demos.creative-tim.com/soft-ui-dashboard/assets/img/small-logos/logo-xd.svg",
    title: "Soft UI XD Version",
    img1: "https://demos.creative-tim.com/soft-ui-dashboard/assets/img/team-1.jpg",
    img2: "https://demos.creative-tim.com/soft-ui-dashboard/assets/img/team-2.jpg",
    img3: "https://demos.creative-tim.com/soft-ui-dashboard/assets/img/team-3.jpg",
    img4: "https://demos.creative-tim.com/soft-ui-dashboard/assets/img/team-4.jpg",
    price: "$14,000",
    percen: "60%",
    loading: "eighttypercen",
  },
  {
    logo: "https://demos.creative-tim.com/soft-ui-dashboard/assets/img/small-logos/logo-atlassian.svg",
    title: "Add Progress Track",
    img1: "https://demos.creative-tim.com/soft-ui-dashboard/assets/img/team-1.jpg",
    img2: "https://demos.creative-tim.com/soft-ui-dashboard/assets/img/team-2.jpg",
    img3: "https://demos.creative-tim.com/soft-ui-dashboard/assets/img/team-3.jpg",
    img4: "https://demos.creative-tim.com/soft-ui-dashboard/assets/img/team-4.jpg",
    price: "$3,000",
    percen: "10%",
    loading: "ten",
  },
  {
    logo: "https://demos.creative-tim.com/soft-ui-dashboard/assets/img/small-logos/logo-slack.svg",
    title: "Fix Platform Errors",
    img1: "https://demos.creative-tim.com/soft-ui-dashboard/assets/img/team-1.jpg",
    img2: "https://demos.creative-tim.com/soft-ui-dashboard/assets/img/team-2.jpg",
    img3: "https://demos.creative-tim.com/soft-ui-dashboard/assets/img/team-3.jpg",
    img4: "https://demos.creative-tim.com/soft-ui-dashboard/assets/img/team-4.jpg",
    price: "Not set",
    percen: "100%",
    loading: "eighttypercenthousand",
  },
  {
    logo: "https://demos.creative-tim.com/soft-ui-dashboard/assets/img/small-logos/logo-spotify.svg",
    title: "Launch our Mobile App",
    img1: "https://demos.creative-tim.com/soft-ui-dashboard/assets/img/team-1.jpg",
    img2: "https://demos.creative-tim.com/soft-ui-dashboard/assets/img/team-2.jpg",
    img3: "https://demos.creative-tim.com/soft-ui-dashboard/assets/img/team-3.jpg",
    img4: "https://demos.creative-tim.com/soft-ui-dashboard/assets/img/team-4.jpg",
    price: "$20,500",
    percen: "100%",
    loading: "eighttypercenthousand",
  },
  {
    logo: "https://demos.creative-tim.com/soft-ui-dashboard/assets/img/small-logos/logo-jira.svg",
    title: "Add the New Pricing Page",
    img1: "https://demos.creative-tim.com/soft-ui-dashboard/assets/img/team-1.jpg",
    img2: "https://demos.creative-tim.com/soft-ui-dashboard/assets/img/team-2.jpg",
    img3: "https://demos.creative-tim.com/soft-ui-dashboard/assets/img/team-3.jpg",
    img4: "https://demos.creative-tim.com/soft-ui-dashboard/assets/img/team-4.jpg",
    price: "$500",
    percen: "25%",
    loading: "eightt",
  },
  {
    logo: "https://demos.creative-tim.com/soft-ui-dashboard/assets/img/small-logos/logo-invision.svg",
    title: "Redesign New Online Shop",
    img1: "https://demos.creative-tim.com/soft-ui-dashboard/assets/img/team-1.jpg",
    img2: "https://demos.creative-tim.com/soft-ui-dashboard/assets/img/team-2.jpg",
    img3: "https://demos.creative-tim.com/soft-ui-dashboard/assets/img/team-3.jpg",
    img4: "https://demos.creative-tim.com/soft-ui-dashboard/assets/img/team-4.jpg",
    price: "$2,000",
    percen: "40%",
    loading: "eighttypro",
  },
];

const timeline = [
  {
    icon: <NotificationsNoneIcon className="icon_success" />,
    title: "$2400, Design changes",
    subtitle: "22 DEC 7:20 PM",
  },
  {
    icon: <CodeIcon className="icon_danger" />,
    title: "New order #1832412",
    subtitle: "21 DEC 11 PM",
  },
  {
    icon: <LocalGroceryStoreIcon className="icon_primary" />,
    title: "Server payments for April",
    subtitle: "21 DEC 9:34 PM",
  },
  {
    icon: <NoteIcon className="icon_warning" />,
    title: "New card added for order #4395133",
    subtitle: "20 DEC 2:20 AM",
  },
  {
    icon: <VpnKeyIcon className="icon_pink" />,
    title: "Unlock packages for development",
    subtitle: "18 DEC 4:54 AM",
  },
  {
    icon: <MonetizationOnIcon className="icon_dark" />,
    title: "New order #9583120",
    subtitle: "17 DEC",
  },
];

export { dashboardPages, AccoundPages, boxes, table, timeline };
