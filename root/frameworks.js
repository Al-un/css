const frameworks = [
  // ---------- Bootstraps -----------------------------------------------------
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
        'Pretty easy to handle once familiar with CSS Grid grammar',
        'Card management'
      ],
      cons: [
        'Pretty verbose but I guess it is the burden of most CSS framworks',
        'JavaScript dependencies if you consider it as an issue'
      ]
    },
    footer: {
      demo: '/css/bootstrap4/',
      docs: 'https://getbootstrap.com/docs/4.2/getting-started/introduction/'
    },
    info: {
      github: 'https://github.com/twbs/bootstrap'
    }
  },
  // ---------- Bulma ----------------------------------------------------------
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
    },
    info: {
      github: 'https://github.com/jgthms/bulma'
    }
  },
  // ---------- Foundation -----------------------------------------------------
  {
    header: {
      title: 'Foundation',
      icon: ''
    },
    content: {
      misc: null,
      pros: [
        'Documentation highlights whenever JavaScript is required',
        'A lot of mixins for your own S(C|A)SS',
        'Looks pretty customizable'
      ],
      cons: [
        'I did not find helpers classes very helpful',
        'Semantic takes a while to get used to: "label" vs "badges", "reveals" ' +
          ' are "modals", "callout" are "messages" or "alert", "off-canvas" are ' +
          'not related to <code>canvas</code> tags...',
        'Badges must have a square shaped content'
      ]
    },
    footer: {
      demo: '/css/foundation/',
      docs: 'https://foundation.zurb.com/sites/docs/'
    },
    info: {
      github: 'https://github.com/zurb/foundation-sites'
    }
  }
  // ----------
  // {
  //   header: {
  //     title: '',
  //     icon: ''
  //   },
  //   content: {
  //     misc: null,
  //     pros: [''],
  //     cons: ['']
  //   },
  //   footer: {
  //     demo: '/css/',
  //     docs: ''
  //   },
  //   info: {
  //     github: ''
  //   }
  // }
];

export default frameworks;
