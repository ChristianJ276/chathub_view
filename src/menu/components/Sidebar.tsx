import { FaCircleUser } from "react-icons/fa6";
import { IoIosChatbubbles, IoMdContacts } from "react-icons/io"; 
import { IoSettings } from "react-icons/io5";
import { SidebarMenuItem } from "./SidebarMenuItem";
import { RiContactsBookFill } from "react-icons/ri";

const menuItems = [
  // {
  //   path: '/dashboard/main',
  //   icon: <IoBrowsersOutline size={40} />,
  //   title: 'Dashboard',
  //   subTitle: 'Visualización'
  // },
  {
    path: '/dashboard/useracount',
    icon_selected: <FaCircleUser size={24} color="#16a34a"/>,
    icon: <FaCircleUser size={24} color="#white"/>,    
    title: 'User Acount'
  },
  {
    path: '/dashboard/chats',
    icon_selected: <IoIosChatbubbles size={24} color="#16a34a"/>,
    icon: <IoIosChatbubbles size={24} color="white"/>,
    title: 'Chats',
  },
  {
    path: '/dashboard/contacts',
    icon_selected: <RiContactsBookFill size={24} color="#16a34a"/>,
    icon: <RiContactsBookFill size={24} color="white"/>,
    title: 'Contactos',
  },
  {
    path: '/dashboard/persons',
    icon_selected: <IoMdContacts size={24} color="#16a34a"/>,
    icon: <IoMdContacts size={24} color="white"/>,
    title: 'Personas',
  },
  {
    path: '/dashboard/settings',
    icon_selected: <IoSettings size={24} color="#16a34a"/>,
    icon: <IoSettings size={24} color="white"/>,
    title: 'Settings',
  },

]

export const Sidebar = () => {
  return (
    <div className="bg-gray-900 w-[6%]">
      <div id="nav" className="flex flex-col justify-center">
      {
          menuItems.map( item => (
              <SidebarMenuItem  key={ item.path } {...item} />
          ))
        }
      </div>
    </div>
  );
};
