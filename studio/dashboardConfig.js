export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5da96964d46401e3112ca957',
                  title: 'Sanity Studio',
                  name: 'Devoteam-Cloudify-studio',
                  apiId: 'd47f607a-4b56-47ea-86d0-5fb0af13d429'
                },
                {
                  buildHookId: '5da96964c2579223500219b9',
                  title: 'Landing pages Website',
                  name: 'Devoteam-Cloudify',
                  apiId: '3a45391d-6dac-4c5c-9b07-4c006d9c6659'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/devocloud/Devoteam-Cloudify',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://Devoteam-Cloudify.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
