export const defaultHeaderLinks = [
  {
    label: 'About',
    route: '/about',
  },
  {
    label: 'Docs',
    route: '/docs',
  }
]

export const signedInHeaderLinks = [
  {
    label: 'Create Data Tracker',
    route: '/events/create',
  },
  {
    label: 'My Profile',
    route: '/profile',
  },
]

export const eventDefaultValues = {
  title: '',
  description: '',
  location: '',
  imageUrl: '',
  startDateTime: new Date(),
  endDateTime: new Date(),
  categoryId: '',
  price: '',
  isFree: false,
  url: '',
}
