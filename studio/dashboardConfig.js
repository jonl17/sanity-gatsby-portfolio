export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d10b2f9b4df788796acb4c5',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-jtg9h8gf',
                  apiId: 'af4f61e6-a60f-43d7-b9a8-cc00d93368a7'
                },
                {
                  buildHookId: '5d10b2f9d1130f01945b9683',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-ppbym2ut',
                  apiId: 'bcdeb327-2171-4356-aea5-0f40a66e2f1f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jonl17/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-ppbym2ut.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
