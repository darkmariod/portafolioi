import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faNodeJs, // Icono de Node.js
} from '@fortawesome/free-brands-svg-icons';
import { faRocket, faGem } from '@fortawesome/free-solid-svg-icons'; // Iconos de Astro y Ruby on Rails

const Icon = ({ icon }) => {
  let selectedIcon;
  switch (icon) {
    case 'faNodeJs':
      selectedIcon = faNodeJs; // Icono de Node.js
      break;
    case 'faRocket':
      selectedIcon = faRocket; // Icono de Astro
      break;
    case 'faGem':
      selectedIcon = faGem; // Icono de Ruby on Rails
      break;
    default:
      selectedIcon = faRocket; // Icono por defecto
  }

  return (
    <FontAwesomeIcon
      icon={selectedIcon}
      className="text-blue-600 text-lg" // Tamaño más pequeño (text-lg)
    />
  );
};

export default Icon;