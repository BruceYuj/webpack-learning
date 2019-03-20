function Footer() {
  let dom = document.getElementById('main');
  let footer = document.createElement('p');
  footer.innerText = "Footer module";
  dom.appendChild(footer);
}

export default Footer;