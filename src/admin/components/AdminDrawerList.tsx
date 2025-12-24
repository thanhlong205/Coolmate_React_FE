import {
  AccountBox,
  Category,
  Logout,
  LocalOffer,
  IntegrationInstructions,
  Add,
  Home,
  ElectricBolt,
  Dashboard,
} from '@mui/icons-material';
import DrawerList from '../../component/DrawerList';

const menu = [
  {
    name: 'Dashboard',
    path: '/admin',
    icon: <Dashboard className="text-blue-300" />,
    activeIcon: <Dashboard className="text-white" />,
  },
  {
    name: 'Coupons',
    path: '/admin/coupon',
    icon: <IntegrationInstructions className="text-blue-300" />,
    activeIcon: <IntegrationInstructions className="text-white" />,
  },
  {
    name: 'Add New Coupon',
    path: '/admin/add-coupon',
    icon: <Add className="text-blue-300" />,
    activeIcon: <Add className="text-white" />,
  },
  {
    name: 'Home Page',
    path: '/admin/home-grid',
    icon: <Home className="text-blue-300" />,
    activeIcon: <Home className="text-white" />,
  },
  {
    name: 'Electronics Category',
    path: '/admin/electronics-category',
    icon: <ElectricBolt className="text-blue-300" />,
    activeIcon: <ElectricBolt className="text-white" />,
  },
  {
    name: 'Shop By Category',
    path: '/admin/shop-by-category',
    icon: <Category className="text-blue-300" />,
    activeIcon: <Category className="text-white" />,
  },
  {
    name: 'Deals',
    path: '/admin/deals',
    icon: <LocalOffer className="text-blue-300" />,
    activeIcon: <LocalOffer className="text-white" />,
  },
];

const menu2 = [
  {
    name: 'Account',
    path: '/seller/account',
    icon: <AccountBox className="text-blue-300" />,
    activeIcon: <AccountBox className="text-white" />,
  },
  {
    name: 'Logout',
    path: '/',
    icon: <Logout className="text-blue-300" />,
    activeIcon: <Logout className="text-white" />,
  },
];

const AdminDrawerList = ({ toggleDrawer }: any) => {
  return <DrawerList menu={menu} menu2={menu2} toggleDrawer={toggleDrawer} />;
};

export default AdminDrawerList;
