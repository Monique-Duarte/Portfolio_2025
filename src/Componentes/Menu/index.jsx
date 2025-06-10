import 'bootstrap-icons/font/bootstrap-icons.css';

const menuItems = [
  { iconClass: 'bi bi-house fs-4', link: '/', label: 'Home' },
  { iconClass: 'bi bi-person fs-4', link: '/#SobreMim', label: 'Sobre Mim' },
  { iconClass: 'bi bi-book fs-4', link: '/#Conhecimentos', label: 'Conhecimentos' },
  { iconClass: 'bi bi-code-slash fs-4', link: '/#Projetos', label: 'Projetos' },
];

const Menu = () => {
  return (
    <nav className="flex items-center space-x-4">
      {menuItems.map(({ iconClass, link, label }) => (
        <a
          key={link}
          href={link}
          className="flex items-center space-x-1 text-gray-800 hover:text-blue-600 font-medium px-2 py-1 transition-colors duration-200"
        >
          <i className={`${iconClass} text-sm sm:text-lg`}></i>
          <span className='hidden sm:flex sm:text-lg'>{label}</span>
        </a>
      ))}
    </nav>
  );
};

export default Menu;
