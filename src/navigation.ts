import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About',
      href: '/about'
    },
    {
      text: 'Services',
      href: '/services'
    },
    {
      text: 'Contact',
      href: '/contact'

    },
    {
      text: 'Patient Portal',
      href: 'https://solespecialists.ema.md',
    },
    {
      text: 'Documents',
      links: [
        {
          text: 'Intake Form',
          href: '/public/documents/Sole_Intake_Form.pdf',
          download: true,
          fileName: 'Intake_Form.pdf',
        },
        {
          text: 'Injection Consent',
          href: 'public/documents/Sole_Injection_Consent.pdf',
          download: true,
          fileName: 'Injection_Consent.pdf',
        },
        {
          text: 'DME Dispense',
          href: 'public/documents/Sole_DME_Dispense.pdf',
          download: true,
          fileName: 'DME_Dispense.pdf',
        },
      ]
    }
    // Example with submenu
    // {
    //   text: 'Blog',
    //   links: [
    //     {
    //       text: 'Blog List',
    //       href: getBlogPermalink(),
    //     },
    //     {
    //       text: 'Article',
    //       href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
    //     },
    //     {
    //       text: 'Article (with MDX)',
    //       href: getPermalink('markdown-elements-demo-post', 'post'),
    //     },
    //     {
    //       text: 'Category Page',
    //       href: getPermalink('tutorials', 'category'),
    //     },
    //     {
    //       text: 'Tag Page',
    //       href: getPermalink('astro', 'tag'),
    //     },
    //   ],
    // },

  ],
  actions: [{ text: 'Pay my bill', href: 'https://solespecialists.ema.md/ema/pay/onlinepay', target: '_blank' }, 
  ],
};

export const footerData = {
  // TODO: Maybe replace footer with map or contact form
  links: [
    {
      title: null,
      links: [
        {
          text: 'About',
          href: '/about'
        },
        {
          text: 'Services',
          href: '/services'
        },
        {
          text: 'Contact',
          href: '/contact'
        },
        {
          text: 'Patient Portal',
          href: 'https://solespecialists.ema.md',
          target: '_blank'
        },
        {
          text: 'Pay my bill',
          href: 'https://solespecialists.ema.md/ema/pay/onlinepay',
          target: '_blank'
        },
      ]

    },


  ],
  secondaryLinks: [
    // { text: 'Terms', href: getPermalink('/terms') },
    // { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  // TODO: do we have social links?
  socialLinks: [
    // { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    // { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  ],
  // footNote: `
  //   <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
  //   Made by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  // `,
};
