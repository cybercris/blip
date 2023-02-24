import BlipLogo from '../assets/blip-logo.svg'

export function Header() {
  return (
    <header>
      <img src={BlipLogo} alt="Logo Blip" />
      <strong>Blip</strong>
    </header>
  )
}
