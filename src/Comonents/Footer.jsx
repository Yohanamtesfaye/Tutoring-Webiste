import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="p-4 bg-blue-400 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
      <span className="text-sm sm:text-center dark:text-gray-400">
        © 2030{" "}
        <Link to="/" className="hover:underline">
        Tutoring-Website
        </Link>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm dark:text-gray-400 sm:mt-0">
        <li>
          <a
            href="/"
            target="_blank"
            rel="no-referrer"
            className="mr-4 hover:underline md:mr-6 "
          >
            Facebook
          </a>
        </li>
        <li>
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className="mr-4 hover:underline md:mr-6"
          >
            YouTube
          </a>
        </li>
        <li>
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className="mr-4 hover:underline md:mr-6"
          >
            Telegram
          </a>
        </li>
        <li>
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className="mr-4 hover:underline md:mr-6"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            Github
          </a>
        </li>
       
      </ul>
    </footer>
    
  );
}
export default Footer