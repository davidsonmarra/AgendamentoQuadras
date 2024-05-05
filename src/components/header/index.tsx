import Link from "next/link"
import "./style.css"

export default function Header() {
    return <nav className="header">
        <ul className="header-items">
            <li>
               <Link href="/home">Home</Link>
            </li>
            <li>
                <Link href="/home">Link 1</Link>
            </li>
            <li>
                <Link href="/home">Link 2</Link>
            </li>
        </ul>
        <h1>Logo</h1>
        <p>Olá, Davidson</p>
    </nav>
}