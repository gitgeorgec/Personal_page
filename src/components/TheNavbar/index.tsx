import style from "./navbar.module.scss";

export default function TheNavbar() {
  return (
    <nav className={style.navbar}>
      <ul>
        <li>nav1</li>
        <li>nav2</li>
        <li>nav3</li>
      </ul>
    </nav>
  );
}
