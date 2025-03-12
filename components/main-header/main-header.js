
import Link from "next/link";
import logoImg from '@/assets/logo.png';
import classes from './main-header.module.css'
import Image from "next/image";
import MainHeaderBackGroud from "../main-header-backgroud/main-Header-Backgroud";
import NavLink from "../navlink/nav-link";

export default function MainHeader() {

    return <>
        <MainHeaderBackGroud />
        <header className={classes.header}>
            <Link className={classes.logo} href="/">
                <Image src={logoImg} alt="A plate with food on it"></Image>
                NextLevel Food
            </Link>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink href="/meals">Browse Meals</NavLink>
                    </li>

                    <li>
                        <NavLink href="/community">Foodies Community</NavLink>
                    </li>
                </ul>
            </nav>
        </header>

    </>

}
