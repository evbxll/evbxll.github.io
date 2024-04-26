import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-4">
      <div className="container mx-auto flex justify-between items-end px-6">
        <p>&copy; {new Date().getFullYear()} Evan Bell (evbxll). All rights reserved. ;) I havent finished this site yet</p>
        <div className="flex space-x-4">
          <a
            href="https://github.com/evbxll"
            target='_blank'
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faGithub} className="h-6 w-6" />
          </a>
          <a
            href="mailto:embell@mit.edu"
            target='_blank'
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faEnvelope} className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
