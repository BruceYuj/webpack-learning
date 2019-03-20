function Sidebar() {
  let dom = document.getElementById('main');
  let sidebar = document.createElement('p');
  sidebar.innerText = "Sidebar module";
  dom.appendChild(sidebar);
}

export default Sidebar;