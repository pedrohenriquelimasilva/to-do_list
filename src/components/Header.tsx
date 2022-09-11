import ImgLogoToDo from '../assets/logoToDo.svg'
import styled from './Header.module.css'

export function Header() {
  return (
    <header className={styled.header}>
      <img src={ImgLogoToDo}  />
    </header>
  )
}