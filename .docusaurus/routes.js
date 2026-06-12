import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/laboratorium/blog',
    component: ComponentCreator('/laboratorium/blog', '6a4'),
    exact: true
  },
  {
    path: '/laboratorium/blog/archive',
    component: ComponentCreator('/laboratorium/blog/archive', '4f9'),
    exact: true
  },
  {
    path: '/laboratorium/blog/authors',
    component: ComponentCreator('/laboratorium/blog/authors', 'c3e'),
    exact: true
  },
  {
    path: '/laboratorium/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/laboratorium/blog/authors/all-sebastien-lorber-articles', '650'),
    exact: true
  },
  {
    path: '/laboratorium/blog/authors/yangshun',
    component: ComponentCreator('/laboratorium/blog/authors/yangshun', '88f'),
    exact: true
  },
  {
    path: '/laboratorium/blog/first-blog-post',
    component: ComponentCreator('/laboratorium/blog/first-blog-post', '7ba'),
    exact: true
  },
  {
    path: '/laboratorium/blog/long-blog-post',
    component: ComponentCreator('/laboratorium/blog/long-blog-post', 'd48'),
    exact: true
  },
  {
    path: '/laboratorium/blog/mdx-blog-post',
    component: ComponentCreator('/laboratorium/blog/mdx-blog-post', '4a7'),
    exact: true
  },
  {
    path: '/laboratorium/blog/tags',
    component: ComponentCreator('/laboratorium/blog/tags', '9e2'),
    exact: true
  },
  {
    path: '/laboratorium/blog/tags/docusaurus',
    component: ComponentCreator('/laboratorium/blog/tags/docusaurus', '157'),
    exact: true
  },
  {
    path: '/laboratorium/blog/tags/facebook',
    component: ComponentCreator('/laboratorium/blog/tags/facebook', '4b3'),
    exact: true
  },
  {
    path: '/laboratorium/blog/tags/hello',
    component: ComponentCreator('/laboratorium/blog/tags/hello', '176'),
    exact: true
  },
  {
    path: '/laboratorium/blog/tags/hola',
    component: ComponentCreator('/laboratorium/blog/tags/hola', '71a'),
    exact: true
  },
  {
    path: '/laboratorium/blog/welcome',
    component: ComponentCreator('/laboratorium/blog/welcome', '011'),
    exact: true
  },
  {
    path: '/laboratorium/markdown-page',
    component: ComponentCreator('/laboratorium/markdown-page', '9bd'),
    exact: true
  },
  {
    path: '/laboratorium/docs',
    component: ComponentCreator('/laboratorium/docs', '19b'),
    routes: [
      {
        path: '/laboratorium/docs',
        component: ComponentCreator('/laboratorium/docs', '1ec'),
        routes: [
          {
            path: '/laboratorium/docs',
            component: ComponentCreator('/laboratorium/docs', '301'),
            routes: [
              {
                path: '/laboratorium/docs/category/standar-operasional-labor',
                component: ComponentCreator('/laboratorium/docs/category/standar-operasional-labor', '120'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/laboratorium/docs/category/tutorial-instalasi-software',
                component: ComponentCreator('/laboratorium/docs/category/tutorial-instalasi-software', 'bd1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/laboratorium/docs/intro',
                component: ComponentCreator('/laboratorium/docs/intro', '606'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/laboratorium/docs/SOP/aturan_labor_1',
                component: ComponentCreator('/laboratorium/docs/SOP/aturan_labor_1', 'c99'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/laboratorium/docs/SOP/cara_upload_2',
                component: ComponentCreator('/laboratorium/docs/SOP/cara_upload_2', 'e41'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/laboratorium/docs/tutorial-extras/instalasi_vscode_1',
                component: ComponentCreator('/laboratorium/docs/tutorial-extras/instalasi_vscode_1', 'f74'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/laboratorium/docs/tutorial-extras/instalasi_xampp_2',
                component: ComponentCreator('/laboratorium/docs/tutorial-extras/instalasi_xampp_2', '0e1'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/laboratorium/',
    component: ComponentCreator('/laboratorium/', '0c4'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
