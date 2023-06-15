import { 
  DashboardOutlined, ShoppingCartOutlined, ShoppingOutlined, UserOutlined, PictureOutlined, GiftOutlined, ShopOutlined, UsergroupAddOutlined, MailOutlined, SettingOutlined, MobileOutlined, FileTextOutlined
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const dashBoardNavTree = [{
  key: 'general',
  path: `${APP_PREFIX_PATH}/general`,
  title: 'основные',
  icon: DashboardOutlined,
  breadcrumb: false,
  submenu: [{
    key: 'dashboard',
    path: `${APP_PREFIX_PATH}/general/dashboard`,
    title: 'Дашборд',
    icon: DashboardOutlined,
    breadcrumb: false,
    submenu: []
  },{
    key: 'catalog',
    path: `${APP_PREFIX_PATH}/general/catalog`,
    title: 'Каталог',
    icon: ShoppingCartOutlined,
    breadcrumb: false,
    submenu: [{
      key: 'products',
      path: `${APP_PREFIX_PATH}/general/catalog/products`,
      title: 'Товары',
      icon: '',
      breadcrumb: false,
      submenu: []
    },{
      key: 'collections',
      path: `${APP_PREFIX_PATH}/general/catalog/collections`,
      title: 'Коллекции',
      icon: '',
      breadcrumb: false,
      submenu: []
    },{
      key: 'combo',
      path: `${APP_PREFIX_PATH}/general/catalog/combo`,
      title: 'Комбо',
      icon: '',
      breadcrumb: false,
      submenu: []
    }]
  },{
    key: 'orders',
    path: `${APP_PREFIX_PATH}/general/orders`,
    title: 'Заказы',
    icon: ShoppingOutlined,
    breadcrumb: false,
    submenu: []
  },{
    key: 'clients',
    path: `${APP_PREFIX_PATH}/general/clients`,
    title: 'Клиенты',
    icon: UserOutlined,
    breadcrumb: false,
    submenu: [{
      key: 'list',
      path: `${APP_PREFIX_PATH}/general/clients/list`,
      title: 'Список клиентов',
      icon: '',
      breadcrumb: false,
      submenu: []
    },{
      key: 'groups',
      path: `${APP_PREFIX_PATH}/general/clients/groups`,
      title: 'Группы клиентов',
      icon: '',
      breadcrumb: false,
      submenu: []
    }]
  },{
    key: 'banners',
    path: `${APP_PREFIX_PATH}/general/banners`,
    title: 'Баннеры',
    icon: PictureOutlined,
    breadcrumb: false,
    submenu: []
  },{
    key: 'promo',
    path: `${APP_PREFIX_PATH}/general/promo`,
    title: 'Промокоды',
    icon: GiftOutlined,
    breadcrumb: false,
    submenu: []
  },{
    key: 'points',
    path: `${APP_PREFIX_PATH}/general/points`,
    title: 'Оффлайн точки',
    icon: ShopOutlined,
    breadcrumb: false,
    submenu: [{
      key: 'addresses',
      path: `${APP_PREFIX_PATH}/general/points/addresses`,
      title: 'Адреса',
      icon: '',
      breadcrumb: false,
      submenu: []
    },{
      key: 'geozones',
      path: `${APP_PREFIX_PATH}/general/points/geozones`,
      title: 'Геозоны',
      icon: '',
      breadcrumb: false,
      submenu: []
    }]
  },{
    key: 'employees',
    path: `${APP_PREFIX_PATH}/general/employees`,
    title: 'Сотрудники',
    icon: UsergroupAddOutlined,
    breadcrumb: false,
    submenu: []
  },{
    key: 'mailing',
    path: `${APP_PREFIX_PATH}/general/mailing`,
    title: 'Рассылки',
    icon: MailOutlined,
    breadcrumb: false,
    submenu: []
  }]
}]

const systemNavTree = [{
  key: 'system',
  path: `${APP_PREFIX_PATH}/system`,
  title: 'системные',
  icon: DashboardOutlined,
  breadcrumb: false,
  submenu: [{
    key: 'settings',
    path: `${APP_PREFIX_PATH}/system/settings`,
    title: 'Настройки',
    icon: SettingOutlined,
    breadcrumb: false,
    submenu: []
  },{
    key: 'mobile',
    path: `${APP_PREFIX_PATH}/system/mobile`,
    title: 'Мобильное приложение',
    icon: MobileOutlined,
    breadcrumb: false,
    submenu: []
  },{
    key: 'logs',
    path: `${APP_PREFIX_PATH}/system/logs`,
    title: 'Логи',
    icon: FileTextOutlined,
    breadcrumb: false,
    submenu: []
  }]
}]

const navigationConfig = [
  ...dashBoardNavTree,
  ...systemNavTree
]

export default navigationConfig;
