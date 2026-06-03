export default {
  logger: {
    level: 'debug',
    transport: ['file', 'console'],
    exceptionFile: 'logs/exception.log',
    logFile: 'logs/console.log',
  },
  middlewares: {
    pre: [
      { ids: 'hrefstart' },
      { __ssdGlobalMiddlewares__: 'sd_7EmxxOk703exD5hF' },
      { __ssdGlobalMiddlewares__: 'cors' },
    ],
    post: [],
    sequences: { IDSAuthroizedAPIs: { pre: [{ ids: 'Authorize' }], post: [] } },
  },
  ids: {
    client_id: 'pwEj_-MGH_0rn4tGJ72i3',
    client_secret:
      'CvlLqrq0oZxzYk4z4krfZtymzv2NyRpqBfd96wOK5PBtxqPLdtHZl-qL-mKAQFc5vXe9XwIwDx9SFytR9wQjpA',
    issuerURL: 'https://ids.neutrinos.co',
    enabled: true,
  },
};
