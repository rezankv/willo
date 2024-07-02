// TODO move styles
// TODO handle styles using grid
// TODO add appropriate links and icons

import { Metadata } from 'next';
import Link from 'next/link';

// ** icons
import { BoardIcon, CalendarIcon, TaskIcon } from '@icons';

// ** constants
import { info } from '@constants';

export const metadata: Metadata = {
  title: `${info.projectName} | Content not found!`,
};

const NotFound = () => {
  const navigations = [
    {
      icon: <TaskIcon />,
      title: 'Tasks',
      desc: 'Manage your daily tasks here',
      //   href: APP_CHECKLIST_ROUTE,
    },
    {
      icon: <CalendarIcon />,
      title: 'Calendar',
      desc: 'Discover you event and appointments',
      //   href: APP_CALENDAR_ROUTE,
    },
    {
      icon: <BoardIcon />,
      title: 'Board',
      desc: 'Lorem Ipsum is simply dummy text of the printing',
      //   href: APP_BOARD_ROUTE,
    },
  ];

  return (
    <>
      <main>
        <div className="mx-auto flex h-screen max-w-screen-xl items-center justify-start px-4 md:px-8">
          <div className="mx-auto max-w-lg text-gray-600">
            <div className="space-y-3 text-center">
              <h3 className="font-semibold text-primary">404 Error</h3>
              <p className="text-4xl font-semibold sm:text-5xl">
                Page not found
              </p>
              <p className="text-text-light">
                Sorry, the page you are looking for could not be found or has
                been removed.
              </p>
            </div>
            <div className="mt-12">
              <ul className="divide-y">
                {navigations.map((item, idx) => (
                  <li key={idx} className="flex gap-x-4 py-6">
                    <div className="flex h-14 w-14 flex-none items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                      {item.icon}
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-medium text-gray-800">
                        {item.title}
                      </h4>
                      <p>{item.desc}</p>
                      <Link
                        href={'item.href'}
                        className="inline-flex items-center gap-x-1 text-sm font-medium text-indigo-600 duration-150 hover:text-indigo-400"
                      >
                        Let&aposs go
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="h-5 w-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFound;
