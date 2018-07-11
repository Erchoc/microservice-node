module.exports = {
  namespace: 'Microservices',
  nodeID: 'localhost',

  logger: true,
  logLevel: 'debug',
  logFormatter: 'default',
  logObjectPrinter: null,
	
  transporter: 'redis://localhost',
  requestTimeout: 3 * 1000,
  requestRetry: 0,
  maxCallLevel: 100,
  heartbeatInterval: 5,
  heartbeatTimeout: 15,
 
  trackContext: false,
  gracefulStopTimeout: 2000,
  
  serializer: 'JSON',
  disableBalancer: false,

  registry: {
    // strategy: Moleculer.Strategies.RoundRobinStrategy,
    strategy: 'RoundRobin',
    preferLocal: true
  },

  circuitBreaker: {
    enabled: true,
    maxFailures: 3,
    halfOpenTime: 10 * 1000,
    failureOnTimeout: true,
    failureOnReject: true
  },
 
 
  cacher: 'memory',
  validation: true,
  validator: null,
  metrics: false,
  metricsRate: 1,
  statistics: false,
  internalServices: true,
  internalActions: true,

  hotReload: true,

  // Register middlewares
  middlewares: [],

  // Called after broker created.
  created (broker) {
		
  },

  // Called after broker starte.
  started (broker) {

  },

  // Called after broker stopped.
  stopped (broker) {

  },
	
  replCommand: [],
	
  transit: {
    maxQueueSize: 50 * 1000
  }
};
