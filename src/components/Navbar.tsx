const navLinks = [
  { href: '#about', label: 'Ueber mich' },
  { href: '#projects', label: 'Projekte' },
  { href: '#skills', label: 'Skills' },
]

function Navbar() {
  return (
    <header className="navbar">
      <div className="brand">
        <span className="brand-mark">NH</span>
        <span className="brand-text">Nayef Hajjaj</span>
      </div>
      <nav className="nav-links">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <a className="nav-cta" href="#contact">
        Kontakt
      </a>
    </header>
  )
}

export default Navbar
