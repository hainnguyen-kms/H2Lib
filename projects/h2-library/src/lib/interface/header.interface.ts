import { MenuItem } from './menuItem.interface';
export interface HeaderSettings {
  logoUrl: string;
  pageTitle: string;
  menus: MenuItem[];
  user?: User;
}
interface User {
  isLogin: boolean;
  userName: string;
  profileImage: string;
}
