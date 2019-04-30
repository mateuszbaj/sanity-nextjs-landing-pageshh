export default {
  widgets: [
    {name: 'sanity-tutorials'},
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              sites: [
                {
                  buildHookId: '',
                  name: 'Content Studio',
                  siteId: '87ac8e77-4519-459c-90ab-93d78686ad2c'
                },
                {
                  buildHookId: '',
                  name: 'Blog Website',
                  siteId: '4e2a84e9-e7d8-404b-a44f-53378f97787d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mateuszbaj/sanity-nextjs-landing-pageshh',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https:&#x2F;&#x2F;sanity-nextjs-landing-pageshh.netlify.com', category: 'apps'}
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
