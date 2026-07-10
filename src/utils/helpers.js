export function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function scrollToSection(id) {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

export const socialLinks = {
  github: 'https://github.com/ofikiyok12',
  whatsapp: 'https://wa.me/6282339088465',
  instagram: 'https://instagram.com/Ofikiyok_',
  email: 'taufiqandrian99@gmail.com',
}
