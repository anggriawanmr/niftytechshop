import { v4 as uuid } from 'uuid';

export const mapMainMenuItems = (menuItems) => {
  return menuItems.map((menuItem) => ({
    id: uuid(),
    destination: menuItem.menuItems.destination?.uri,
    label: menuItem.menuItems.label,
    subMenuItems: (menuItem.items || []).map((subMenuItem) => ({
      id: uuid(),
      destination: subMenuItem.destination?.uri,
      label: subMenuItem.label,
    })),
  }));
};
