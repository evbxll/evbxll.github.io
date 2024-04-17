import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope  } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-3 sm:py-4">
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-4">
          <Link href="https://github.com/evbxll" target='_blank'>
            <span className="hover:text-gray-300 transition-colors duration-300">
              <FontAwesomeIcon icon={faGithub} className="h-6 w-6" />
            </span>
          </Link>
          <Link href="mailto:youremail@example.com" target='_blank'>
            <span className="hover:text-gray-300 transition-colors duration-300">
              <FontAwesomeIcon icon={faEnvelope} className="h-6 w-6" />
            </span>
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-2 sm:space-x-4 md:space-x-6">
            <li>
              <Link href="/">
                <span className="text-lg font-bold hover:text-gray-300 transition-colors duration-300">Home</span>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <span className="hover:text-gray-300 transition-colors duration-300">About</span>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <span className="hover:text-gray-300 transition-colors duration-300">Projects</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
