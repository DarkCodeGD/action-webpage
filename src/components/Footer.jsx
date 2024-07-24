import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaDribbble
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="py-32">
      <div className="px-4 mx-auto w-full responsive-margin">
        <ul className="flex justify-center gap-2">
          <li>
            <a
              href="#!"
              className="rounded-full size-12 bg-zinc-200 text-zinc-800 grid place-content-center hover:bg-violet-600 hover:text-white transition-colors duration-300"
            >
              <FaFacebookF className="size-4" />
            </a>
          </li>
          <li>
            <a
              href="#!"
              className="rounded-full size-12 bg-zinc-200 text-zinc-800 grid place-content-center hover:bg-violet-600 hover:text-white transition-colors duration-300"
            >
              <FaXTwitter className="size-4" />
            </a>
          </li>
          <li>
            <a
              href="#!"
              className="rounded-full size-12 bg-zinc-200 text-zinc-800 grid place-content-center hover:bg-violet-600 hover:text-white transition-colors duration-300"
            >
              <FaLinkedinIn className="size-4" />
            </a>
          </li>
          <li>
            <a
              href="#!"
              className="rounded-full size-12 bg-zinc-200 text-zinc-800 grid place-content-center hover:bg-violet-600 hover:text-white transition-colors duration-300"
            >
              <FaDribbble className="size-4" />
            </a>
          </li>
        </ul>

        <p className="text-center mt-10 opacity-80">
          &copy; Action - {new Date().getFullYear()} | All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
