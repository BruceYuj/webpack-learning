function Header() {
  let dom = document.getElementById('main');
  let header = document.createElement('p');
  header.innerText = "Header module";
  dom.appendChild(header);
}

export default Header;