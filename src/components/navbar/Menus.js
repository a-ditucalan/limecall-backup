import home from '../../assets/images/home.svg'
import phone from '../../assets/images/phone.svg'
import square from '../../assets/images/square.svg'
import twoPerson from '../../assets/images/two-person.svg'
import settings from '../../assets/images/settings.svg'
import homeActive from '../../assets/images/home-black.svg'
import phoneActive from '../../assets/images/phone-black.svg'
import squareActive from '../../assets/images/square-black.svg'
import twoPersonActive from '../../assets/images/two-person-black.svg'
import settingsActive from '../../assets/images/settings-black.svg'

export const menus = [
  {
    handle: 'menuHome',
    stateKey: 'activeHome',
    url: '/home',
    inactiveIcon: home,
    activeIcon: homeActive,
    hoverName: 'Home'
  },
  {
    handle: 'menuPhone',
    stateKey: 'activePhone',
    url: '/leads',
    inactiveIcon: phone,
    activeIcon: phoneActive,
    hoverName: 'Leads'
  },
  {
    handle: 'menuSquare',
    stateKey: 'activeSquare',
    url: '/widgets',
    inactiveIcon: square,
    activeIcon: squareActive,
    hoverName: 'Widgets'
  },
  {
    handle: 'menuPeople',
    stateKey: 'activePeople',
    url: '/settings',
    inactiveIcon: twoPerson,
    activeIcon: twoPersonActive,
    hoverName: 'Team Settings'
  },
  {
    handle: 'menuSettings',
    stateKey: 'activeSettings',
    url: '/settings',
    inactiveIcon: settings,
    activeIcon: settingsActive,
    hoverName: 'Settings'
  }
]
