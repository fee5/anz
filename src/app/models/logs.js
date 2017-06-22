const faker = require('faker')

const data = [...new Array(500).keys()].map(v => {
  return {
    id: v,
    logLevel: ['DEBUG', 'INFO', 'WARN', 'ERROR', 'FATAL'][parseInt(Math.random() * 5, 10)],
    timestamp: faker.date.between(new Date('2015-06-24'), new Date('2015-07-01'))
      .toISOString().replace('T', ' ').replace('Z', '').replace('.', ','),
    logMarker: ['admin', 'user'][parseInt(Math.random() * 2, 10)],
    logger: 'c.a.acs.acs-aem-tools-bundle',
    currentThread: 'qtp1395423247-193',
    logMessage: faker.lorem.sentence(),
  }
})

export default data
