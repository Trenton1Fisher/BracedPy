import DefaultLayout from '../layouts/defaultLayout'
import Home from '../routes/home'
import Docs from '../routes/docs'
import TutorialPage1 from '../routes/tutorial/page1'
import TutorialPage2 from '../routes/tutorial/page2'
import TutorialPage3 from '../routes/tutorial/page3'
import TutorialPage4 from '../routes/tutorial/page4'
import TutorialPage5 from '../routes/tutorial/page5'
import TutorialPage6 from '../routes/tutorial/page6'
import NoFooterLayout from '../layouts/noFooterLayout'

export const routerConstant = [
  {
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/docs',
        element: <Docs />,
      },
    ],
  },
  {
    element: <NoFooterLayout />,
    children: [
      {
        path: '/tutorial/1',
        element: <TutorialPage1 />,
      },
      {
        path: '/tutorial/2',
        element: <TutorialPage2 />,
      },
      {
        path: '/tutorial/3',
        element: <TutorialPage3 />,
      },
      {
        path: '/tutorial/4',
        element: <TutorialPage4 />,
      },
      {
        path: '/tutorial/5',
        element: <TutorialPage5 />,
      },
      {
        path: '/tutorial/6',
        element: <TutorialPage6 />,
      },
    ],
  },
]
