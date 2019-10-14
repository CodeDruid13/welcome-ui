export default {
  title: 'Welcome UI',
  description: 'Design system of @wttj with react, styled-components and system-ui',
  dest: '/docs',
  menu: ['Getting Started', 'Theming', 'Components'],
  ignore: ['README.md', 'CHANGELOG.md', 'CONTRIBUTING.md'],
  port: 3020,
  // https://github.com/pedronauck/docz/issues/777#issuecomment-489947783
  filterComponents: files => files.filter(filepath => /w*.(js|jsx|ts|tsx)$/.test(filepath))
}
