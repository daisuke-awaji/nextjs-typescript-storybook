import Link from 'next/link';
import { useRouter } from 'next/router';

type Page = {
  [key in string]: {
    route: string;
  };
};

const PAGES_DICT: Page = { overview: { route: '/overview' }, settings: { route: '/settings' } } as const;

type Pages = keyof typeof PAGES_DICT;

export const Header: React.FC<{ username: string }> = ({ username }) => {
  return (
    <div className="flex items-center pt-3 pb-5 md:pt-4 md:pb-3">
      <div className="flex items-center flex-none">
        <Link aria-label="Go to dashboard" href="/">
          <a className="rounded text-primary">
            <svg width="41" height="32" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 41 32">
              <path
                fill="currentColor"
                d="M39.386 0l-7.238 7.403C29.378 3.05 24.594.18 19.177.18c-4.13 0-8.014 1.672-10.918 4.721-2.892 3.029-4.487 7.046-4.487 11.316 0 1.093.102 2.166.317 3.207a28.011 28.011 0 00-2.31 2.745c-1.85 2.566-2.26 4.49-1.217 5.71.154.189.634.694 1.564.778.082.01.154.01.235.01 1.493 0 3.343-1.125 5.48-3.354l16.978-17.32-1.186-1.23L7.38 23.345a13.864 13.864 0 01-1.932-7.119c0-3.817 1.421-7.403 4.007-10.106 2.587-2.713 6.042-4.206 9.722-4.206 4.957 0 9.312 2.692 11.745 6.73l-12.92 13.219c-.84.862-1.892 1.924-2.659 3.112-1.39 2.135-1.083 3.723-.777 4.47l.01.02c.358.831.972 1.494 1.78 1.936.92.494 1.85.567 2.79.599h.04a15.249 15.249 0 0010.959-4.637c2.934-2.987 4.549-6.983 4.549-11.232a16.2 16.2 0 00-1.666-7.182L40.57 1.23 39.386 0zM2.36 26.942h-.01c-.286 0-.43-.105-.47-.137l-.041-.052c-.327-.379-.164-1.504 1.288-3.534.49-.694 1.043-1.335 1.492-1.85.389 1.114.9 2.187 1.534 3.217-2.065 2.03-3.251 2.356-3.793 2.356zm26.598-.8c-2.596 2.65-6.072 4.123-9.762 4.133-.93-.031-1.503-.105-2.055-.41a2.277 2.277 0 01-1.022-1.093c-.409-1.052.307-2.335.634-2.84.675-1.04 1.656-2.04 2.443-2.839l12.573-12.85a14.529 14.529 0 011.247 5.899c-.02 3.786-1.451 7.34-4.058 10z"
              ></path>
            </svg>
          </a>
        </Link>
      </div>
      <div className="flex items-center flex-grow">
        <a
          className="items-center hidden p-1 text-lg leading-3 transition rounded text-primary sm:flex px-2 from-neutral-700"
          href={'/overview'}
        >
          <span className="font-bold">QA+</span>
          <span className="p-1 text-gray-400">/</span>
          <span className="font-bold">{username}</span>
        </a>
      </div>
      <div className="flex items-center flex-none">icon</div>
    </div>
  );
};

type HeaderBarProps = {
  username: string;
  activePage: Pages;
};

export const HeaderBarPresenter: React.FC<HeaderBarProps> = ({ username, activePage }) => {
  const activeHeaderBarStyle =
    'text-primary sm:px-2 pb-2 pt-1 leading-none transition whitespace-nowrap border-b font-semibold border-black';
  const passiveHeaderBarStyle =
    'text-primary sm:px-2 pb-2 pt-1 leading-none transition whitespace-nowrap border-b border-transparent hover:border-gray-300 dark:hover:border-gray-500';

  return (
    <div className="relative z-40 px-3 border-b sm:px-6 lg:px-8 bg-primary text-primary">
      <header className="relative mx-auto max-w-7xl">
        <Header username={username} />
        <div className="flex -mb-px space-x-3 overflow-x-auto sm:space-x-0">
          <a className={activePage === 'overview' ? activeHeaderBarStyle : passiveHeaderBarStyle} href={'/overview'}>
            Overview
          </a>
          <a className={activePage === 'settings' ? activeHeaderBarStyle : passiveHeaderBarStyle} href={'/settings'}>
            Settings
          </a>
        </div>
      </header>
    </div>
  );
};

/**
 * Global Header Component
 * @returns
 */
export const HeaderBar = () => {
  const router = useRouter();

  const username = router.query.username as string;
  const route = router.route;

  const activePage = Object.keys(PAGES_DICT).find((pageName) => PAGES_DICT[pageName].route === route) ?? 'overview';
  return <HeaderBarPresenter username={username} activePage={activePage} />;
};
