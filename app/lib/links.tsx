import {
  TbAddressBook as ContactsIcon,
  TbBrowser as FoodMenuIcon,
  TbPhoto as GalleryIcon,
  TbTruckDelivery as OrderNowIcon,
} from "react-icons/tb";

export const Links = [
  { name: "menu", href: "/menu", icon: FoodMenuIcon },
  {
    name: "gallery",
    href: "/gallery",
    icon: GalleryIcon,
  },
  {
    name: "order now",
    href: "https://order.ipos.vn/menu?pos_parent=BRAND-ZQNA&pos_id=70738&fbclid=IwAR2zbduTuJV4Wg0wfLCWLrEtPWtNlqsK5eJYVxixFLARKbZxMGO4LYY3xGs",
    icon: OrderNowIcon,
  },
  { name: "contacts", href: "/contact", icon: ContactsIcon },
];
