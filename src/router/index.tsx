
import { AuthPage } from '../pages/Auth';
import { CreateArticlePage } from '../pages/CreateArticlePage';

import { KeyPropPage } from '../pages/KeyPropExample';
import { MemoExamplePage } from '../pages/MemoExample';

import { RefExamplePage } from '../pages/RefExamplePage';
import { ResizeExamplePage } from '../pages/ResizeExample';
import { TimerPage } from '../pages/TimerPage';

import { createBrowserRouter } from 'react-router-dom';
import { Root } from '../features/core/Root';
import { ArticlePage } from '../pages/ArticlePage';
import { FreshPage } from '../pages/FreshPage';
import { PopularPage } from '../pages/PopularPage';

import { Nature } from 'pages/Nature';
import { Maps} from 'pages/Map';
import { Climate } from 'pages/Climate';
import { Sights } from 'pages/Sights';
import { Seasons } from 'pages/Seasons';
import { Comment } from 'pages/Comment';
import { Faq } from 'pages/Faq';
import { Gallery } from 'pages/Gallery';
import { Main } from 'pages/Main';
import { ROUTES } from './routes';
import { Routes } from 'pages/Routes';
import { Donate } from 'pages/Donate';


export const router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: <Root />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: ROUTES.NATURE,
        index: true,
        element: <Nature />,
      },
      
      {
        path: ROUTES.SIGHTS,
        index: true,
        element: <Sights />,
      },
      {
        path: ROUTES.SEASONS,
        index: true,
        element: <Seasons />,
      },
      {
        path: ROUTES.ROUTES,
        index: true,
        element: <Routes />,
      },
      {
        path: ROUTES.MAP,
        index: true,
        element: <Maps />,
      },
      {
        path: ROUTES.CLIMATE,
        index: true,
        element: <Climate />,
      },
      {
        path: ROUTES.FAQ,
        index: true,
        element: <Faq />,
      },
      {
        path: ROUTES.DONATE,
        index: true,
        element: <Donate />,
      },
      {
        path: ROUTES.GALLERY,
        index: true,
        element: <Gallery />,
      },
      {
        path: ROUTES.POPULAR,
        element: <PopularPage />,
      },
      {
        path: ROUTES.FRESH,
        element: <FreshPage />,
      },
      {
        path: `${ROUTES.ARTICLE}/:id`,
        element: <ArticlePage />,
      },
      {
        path: ROUTES.ROUTES,
        index: true,
        element: <Comment />,
      },
      {
        path: ROUTES.AUTH,
        element: <AuthPage />,
      },
      {
        path: ROUTES.TIMER,
        element: <TimerPage />,
      },
      {
        path: ROUTES.RESIZE,
        element: <ResizeExamplePage />,
      },
      {
        path: ROUTES.CREATE_ARTICLE,
        element: <CreateArticlePage />,
      },
      {
        path: ROUTES.MEMO_EXAMPLE,
        element: <MemoExamplePage />,
      },
      {
        path: ROUTES.KEY_PROP,
        element: <KeyPropPage />,
      },
      {
        path: ROUTES.REF_EXAMPLE,
        element: <RefExamplePage />,
      },
    ],
  },
]);







