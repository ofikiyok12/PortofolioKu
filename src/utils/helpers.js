export function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function scrollToSection(id) {
  if (window.lenis) {
    window.lenis.scrollTo(`#${id}`)
    return
  }
  const element = document.getElementById(id)
  if (element) {
    const top = element.getBoundingClientRect().top + window.scrollY - 80
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

export const socialLinks = {
  github: 'https://github.com/ofikiyok12',
  whatsapp: 'https://wa.me/6282339088465',
  instagram: 'https://instagram.com/Ofikiyok_',
  email: 'taufiqandrian99@gmail.com',
}
