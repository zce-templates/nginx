const path = require('path')

module.exports = {
  name: 'nginx',
  version: '0.1.0',
  metadata: {
    cwd: process.cwd(),
    webroot: path.join(process.cwd(), 'www')
  },
  prompts: {
    domain: {
      type: 'input',
      message: 'Site domain'
    },
    ssl: {
      type: 'confirm',
      message: 'Enable SSL',
      default: false
    },
    redirect: {
      type: 'confirm',
      message: 'Enforce HTTPS',
      when: answers => answers.ssl,
      default: true
    },
    email: {
      type: 'confirm',
      message: 'Let\'s Encrypt email (used for Let\'s Encrypt notifications)',
      when: answers => answers.ssl
    },
    location: {
      type: 'input',
      message: 'Proxy location',
      default: '/'
    },
    port: {
      type: 'input',
      message: 'Proxy pass port',
      default: 3000
    }
  },
  filters: {
    '${domain}-ssl.conf': answers => answers.ssl
  },
  complete: context => {
    console.log('  Good luck~ :-D')
  }
}
