import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'cf8ec44465d24438ad9d08975dc92e72',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: 'wanghaoming',

  // basic site info (required)
  name: 'Haoming Wang Blog',
  domain: 'haoming.vercel.app',
  author: 'Haoming Wang',

  // open graph metadata (optional)
  description: 'Example Next.js Notion Starter Kit Site',

  // social usernames (optional)
  twitter: 'push105501',
  github: 'floating15',
  linkedin: 'haoming-wang-b0a164171/',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages.
//   navigationStyle: 'default' 
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'Notes',
      pageId: '036b59e356c3491d8d9593682048d683'
    },
    {
      title: 'Posts',
      pageId: '3c11569d10524ff4a1536e1be831d4f7'
    },
    {
      title: 'About',
      pageId: 'd0d07d2113864a4295dc899474e638aa'
    }
  ]
})
