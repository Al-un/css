const frameworks = [
  // Bootstraps
  {
    header: {
      title: 'Bootstrap4',
      icon: 'https://getbootstrap.com/docs/4.2/assets/brand/bootstrap-solid.svg'
    },
    content: {
      misc: null,
      pros: [
        'A lot of utilities and helpers even if it ends up like <code>mt-4 mb-3 pt-2 wtf-7</code>',
        'Embedded JavaScript, convenient for simple stuff such as toggling CSS classes',
        'Pretty easy to handle once familiar with CSS Grid grammar'
      ],
      cons: [
        'Pretty verbose but I guess it is the burden of most CSS framworks',
        'JavaScript dependencies if you consider it as an issue'
      ]
    },
    footer: {
      demo: '/css/bootstrap4/',
      docs: 'https://getbootstrap.com/docs/4.2/getting-started/introduction/'
    }
  },
  // Bulma
  {
    header: {
      title: 'Bulma',
      icon: 'https://bulma.io/images/bulma-logo-white.png'
    },
    content: {
      misc: null,
      pros: [
        'Awesome layout management: grid CSS + tiles',
        'Boxes, panels and friends',
        'Impressive and clear documentation',
        'When properly written, syntax is almost like Enlish. E.g. <code>message is-info</code>',
        '[TBC] unopionated (ex: modal background has to be manually defined)',
        '[TBC] flexible and highly customizable '
      ],
      cons: [
        'No included JavaScript',
        'No support for list handling to make it table-like',
        'default theme is quite flash and primary color conflict with success color'
      ]
    },
    footer: {
      demo: '/css/bulma/',
      docs: 'https://bulma.io/documentation/'
    }
  }
];

export default frameworks;
