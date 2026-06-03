// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import cookieParser from 'cookie-parser'; //_splitter_
import * as crypto from 'crypto'; //_splitter_
import { dirname } from 'path'; //_splitter_
import * as url from 'url'; //_splitter_
import { fileURLToPath } from 'url'; //_splitter_
import * as settings from '../config/config'; //_splitter_
import { Middleware } from '../middleware/Middleware'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { TracerService } from '../services/TracerService'; //_splitter_
import log from '../utils/Logger'; //_splitter_
import * as sd_iSSkm6uH9MP88jME from './idsutil'; //_splitter_
//append_imports_end
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export class ids {
  private sdService = new SDBaseService();
  private tracerService = new TracerService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;

  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    globalTimers
  ) {
    this.serviceName = 'ids';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new ids(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    //append_listeners
  }

  async mountTimers() {
    //appendnew_flow_ids_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: ids');
    let mw_hrefstart: Middleware = new Middleware(
      this.serviceName,
      'hrefstart',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          let parentSpanInst = null;
          bh = await this.sd_1Udo3AUbO9jZsPqh(bh, parentSpanInst);
          //appendnew_next_sd_EknXRsLYwGwACdSB
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_EknXRsLYwGwACdSB');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['hrefstart'] = mw_hrefstart;
    let mw_Authorize: Middleware = new Middleware(
      this.serviceName,
      'Authorize',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          let parentSpanInst = null;
          bh = await this.sd_1XoKOU82x6MF3vDz(bh, parentSpanInst);
          //appendnew_next_sd_EQP4rWMvxjZkyfmL
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_EQP4rWMvxjZkyfmL');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['Authorize'] = mw_Authorize;
    //appendnew_flow_ids_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: ids');

    this.app['get'](
      `${this.serviceBasePath}/login`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_OTXFSOObH1p2PJZJ(bh, parentSpanInst);
          //appendnew_next_sd_eerUGsrQ1tubtfxJ
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_eerUGsrQ1tubtfxJ');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/login/cb`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_hc9w71fDpIWkrs7P(bh, parentSpanInst);
          //appendnew_next_sd_d0p7ptinLw3Jiq99
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_d0p7ptinLw3Jiq99');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/user/info`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_d2oxTsyRLoMTfuqF(bh, parentSpanInst);
          //appendnew_next_sd_t9gGm5kNAtOHtu6G
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_t9gGm5kNAtOHtu6G');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/logout`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_Z5B2SiQIDt8h6xaK(bh, parentSpanInst);
          //appendnew_next_sd_x7QZ4MomMPC68vwt
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_x7QZ4MomMPC68vwt');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/logout/cb`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_k7gLoQJBMamgQpA1(bh, parentSpanInst);
          //appendnew_next_sd_CRSZkWdXmW6YoY6L
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_CRSZkWdXmW6YoY6L');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_ids_HttpIn
  }
  //   service flows_ids

  //appendnew_flow_ids_start

  async sd_OTXFSOObH1p2PJZJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_OTXFSOObH1p2PJZJ',
      parentSpanInst
    );
    try {
      bh.local.idsConfigured = false;
      if (
        settings.default.hasOwnProperty('ids') &&
        settings.default['ids'].hasOwnProperty('client_id') &&
        settings.default['ids'].hasOwnProperty('client_secret')
      ) {
        bh.local.idsConfigured = true;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_VpORcTW0X00CNzkI(bh, parentSpanInst);
      //appendnew_next_sd_OTXFSOObH1p2PJZJ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_OTXFSOObH1p2PJZJ',
        spanInst,
        'sd_OTXFSOObH1p2PJZJ'
      );
    }
  }

  async sd_VpORcTW0X00CNzkI(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_VpORcTW0X00CNzkI',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.local.idsConfigured,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_edqSCf7gcbNE4bYa(bh, parentSpanInst);
      } else {
        bh = await this.sd_9KbWNQq5bguLA4nZ(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VpORcTW0X00CNzkI',
        spanInst,
        'sd_VpORcTW0X00CNzkI'
      );
    }
  }

  async sd_edqSCf7gcbNE4bYa(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_edqSCf7gcbNE4bYa',
      parentSpanInst
    );
    try {
      bh.local.reqParams = {
        state: crypto.randomBytes(16).toString('hex'),
        nonce: crypto.randomBytes(16).toString('hex'),
        isMobile: bh.input.query.isMobile,
        redirectTo: bh.input.query.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Q8DLaQyeVx1T4qeA(bh, parentSpanInst);
      //appendnew_next_sd_edqSCf7gcbNE4bYa
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_edqSCf7gcbNE4bYa',
        spanInst,
        'sd_edqSCf7gcbNE4bYa'
      );
    }
  }

  async sd_Q8DLaQyeVx1T4qeA(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Q8DLaQyeVx1T4qeA',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.reqParams;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_EjsA1JYwF4GVe1wb(bh, parentSpanInst);
      //appendnew_next_sd_Q8DLaQyeVx1T4qeA
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Q8DLaQyeVx1T4qeA',
        spanInst,
        'sd_Q8DLaQyeVx1T4qeA'
      );
    }
  }

  async sd_EjsA1JYwF4GVe1wb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_EjsA1JYwF4GVe1wb',
      parentSpanInst
    );
    try {
      const sd_iSSkm6uH9MP88jMEInstance: sd_iSSkm6uH9MP88jME.idsutil =
        sd_iSSkm6uH9MP88jME.idsutil.getInstance();
      let outputVariables =
        await sd_iSSkm6uH9MP88jMEInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_eopKwzGJVB1qaPKu(bh, parentSpanInst);
      //appendnew_next_sd_EjsA1JYwF4GVe1wb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_EjsA1JYwF4GVe1wb',
        spanInst,
        'sd_EjsA1JYwF4GVe1wb'
      );
    }
  }

  async sd_eopKwzGJVB1qaPKu(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_eopKwzGJVB1qaPKu',
      parentSpanInst
    );
    try {
      const sd_iSSkm6uH9MP88jMEInstance: sd_iSSkm6uH9MP88jME.idsutil =
        sd_iSSkm6uH9MP88jME.idsutil.getInstance();
      let outputVariables =
        await sd_iSSkm6uH9MP88jMEInstance.getAuthorizationParams(
          spanInst,
          undefined
        );
      bh.input.authParams = outputVariables.input.authParams;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_RG8i9N2vT8CT7z6v(bh, parentSpanInst);
      //appendnew_next_sd_eopKwzGJVB1qaPKu
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_eopKwzGJVB1qaPKu',
        spanInst,
        'sd_eopKwzGJVB1qaPKu'
      );
    }
  }

  async sd_RG8i9N2vT8CT7z6v(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_RG8i9N2vT8CT7z6v',
      parentSpanInst
    );
    try {
      const authorizationRequest = Object.assign(
        {
          redirect_uri: url.resolve(bh.web.req.href, '/api/login/cb'),
          scope: 'openid profile email address phone user',
          state: bh.local.reqParams.state,
          nonce: bh.local.reqParams.nonce,
          response_type: bh.input.client.response_types[0],
        },
        bh.input.authParams
      );

      bh.local.redirectHeaders = {
        location: bh.input.client.authorizationUrl(authorizationRequest),
      };

      this.tracerService.sendData(spanInst, bh);
      await this.sd_PQDaVjuMUU4bM2l2(bh, parentSpanInst);
      //appendnew_next_sd_RG8i9N2vT8CT7z6v
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_RG8i9N2vT8CT7z6v',
        spanInst,
        'sd_RG8i9N2vT8CT7z6v'
      );
    }
  }

  async sd_PQDaVjuMUU4bM2l2(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_PQDaVjuMUU4bM2l2');
    }
  }

  async sd_9KbWNQq5bguLA4nZ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_9KbWNQq5bguLA4nZ',
      parentSpanInst
    );
    try {
      bh.local.res = {
        message:
          'IDS client not registered. Register on the Neutrinos Stuido and try again',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_X5DuTpqT2QtZFIHX(bh, parentSpanInst);
      //appendnew_next_sd_9KbWNQq5bguLA4nZ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9KbWNQq5bguLA4nZ',
        spanInst,
        'sd_9KbWNQq5bguLA4nZ'
      );
    }
  }

  async sd_X5DuTpqT2QtZFIHX(bh, parentSpanInst) {
    try {
      bh.web.res.status(404).send(bh.local.res.message);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_X5DuTpqT2QtZFIHX');
    }
  }

  async sd_1Udo3AUbO9jZsPqh(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_1Udo3AUbO9jZsPqh',
      parentSpanInst
    );
    try {
      const protocol =
        bh.input.headers['x-forwarded-proto'] || bh.web.req.protocol;
      const href =
        protocol + '://' + bh.web.req.get('Host') + bh.web.req.originalUrl;
      bh.web.req.href = href;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_0boGxC9wWxnqY15I(bh, parentSpanInst);
      //appendnew_next_sd_1Udo3AUbO9jZsPqh
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1Udo3AUbO9jZsPqh',
        spanInst,
        'sd_1Udo3AUbO9jZsPqh'
      );
    }
  }

  async sd_0boGxC9wWxnqY15I(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_0boGxC9wWxnqY15I',
      parentSpanInst
    );
    try {
      bh.web.next();
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0boGxC9wWxnqY15I',
        spanInst,
        'sd_0boGxC9wWxnqY15I'
      );
    }
  }

  async sd_hc9w71fDpIWkrs7P(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_hc9w71fDpIWkrs7P',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.input.sessionParams = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_5tVES3NgX373RITx(bh, parentSpanInst);
      //appendnew_next_sd_hc9w71fDpIWkrs7P
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hc9w71fDpIWkrs7P',
        spanInst,
        'sd_hc9w71fDpIWkrs7P'
      );
    }
  }

  async sd_5tVES3NgX373RITx(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_5tVES3NgX373RITx',
      parentSpanInst
    );
    try {
      const sd_iSSkm6uH9MP88jMEInstance: sd_iSSkm6uH9MP88jME.idsutil =
        sd_iSSkm6uH9MP88jME.idsutil.getInstance();
      let outputVariables =
        await sd_iSSkm6uH9MP88jMEInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_PlNjLOagZODQZ3em(bh, parentSpanInst);
      //appendnew_next_sd_5tVES3NgX373RITx
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5tVES3NgX373RITx',
        spanInst,
        'sd_5tVES3NgX373RITx'
      );
    }
  }

  async sd_PlNjLOagZODQZ3em(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_PlNjLOagZODQZ3em',
      parentSpanInst
    );
    try {
      const params = bh.input.client.callbackParams(bh.web.req);
      let tokenset = await bh.input.client.callback(
        url.resolve(bh.web.req.href, 'cb'),
        params,
        {
          nonce: bh.input.sessionParams.data.nonce,
          state: bh.input.sessionParams.data.state,
        }
      );

      bh.local.redirectTo = bh.input.sessionParams.data.redirectTo;

      bh.local.userDetails = {
        tokenset: Object.assign({}, tokenset),
        userInfo: await bh.input.client.userinfo(tokenset['access_token']),
      };
      bh.local.userDetails['tokenset']['claims'] = Object.assign(
        {},
        tokenset.claims()
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_S0GUOnMiPzjd9yY8(bh, parentSpanInst);
      //appendnew_next_sd_PlNjLOagZODQZ3em
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PlNjLOagZODQZ3em',
        spanInst,
        'sd_PlNjLOagZODQZ3em'
      );
    }
  }

  async sd_S0GUOnMiPzjd9yY8(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_S0GUOnMiPzjd9yY8',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.userDetails;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Q5e8LhPthAPLwzH8(bh, parentSpanInst);
      //appendnew_next_sd_S0GUOnMiPzjd9yY8
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_S0GUOnMiPzjd9yY8',
        spanInst,
        'sd_S0GUOnMiPzjd9yY8'
      );
    }
  }

  async sd_Q5e8LhPthAPLwzH8(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Q5e8LhPthAPLwzH8',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['se'](
          bh.input.sessionParams.data.isMobile,
          'true',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_u4M2B2YUrWKRfeNE(bh, parentSpanInst);
      } else {
        bh = await this.sd_kvp3cAe43fzDKsNN(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Q5e8LhPthAPLwzH8',
        spanInst,
        'sd_Q5e8LhPthAPLwzH8'
      );
    }
  }

  async sd_u4M2B2YUrWKRfeNE(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_u4M2B2YUrWKRfeNE',
      parentSpanInst
    );
    try {
      bh.local.htmlResponse = `
 <html>
   <script>
      let _timer;
      _timer = setInterval(() => {
                  if(window.webkit) {
                      window.webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify({'auth': 'success'}));
                      clearInterval(_timer);
                  }
              }, 250);
      
   </script>
</html>`;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_p06sKIKivOJnGJYF(bh, parentSpanInst);
      //appendnew_next_sd_u4M2B2YUrWKRfeNE
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_u4M2B2YUrWKRfeNE',
        spanInst,
        'sd_u4M2B2YUrWKRfeNE'
      );
    }
  }

  async sd_p06sKIKivOJnGJYF(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script-src 'sha256-wcX+PzUovy0uNFqMGCbbbzuT5v4aAxU9obFNyt6BHAQ='",
      });

      bh.web.res.status(200).send(bh.local.htmlResponse);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_p06sKIKivOJnGJYF');
    }
  }

  async sd_kvp3cAe43fzDKsNN(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_kvp3cAe43fzDKsNN',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_tHN0izKpB5cFuRi7(bh, parentSpanInst);
      //appendnew_next_sd_kvp3cAe43fzDKsNN
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_kvp3cAe43fzDKsNN',
        spanInst,
        'sd_kvp3cAe43fzDKsNN'
      );
    }
  }

  async sd_tHN0izKpB5cFuRi7(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('Redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_tHN0izKpB5cFuRi7');
    }
  }

  async sd_d2oxTsyRLoMTfuqF(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_d2oxTsyRLoMTfuqF',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.session = JSON.parse(JSON.stringify(requestObject.session));
      }

      this.tracerService.sendData(spanInst, bh);
      await this.sd_0XwVWaQekjA2JOZY(bh, parentSpanInst);
      //appendnew_next_sd_d2oxTsyRLoMTfuqF
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_d2oxTsyRLoMTfuqF',
        spanInst,
        'sd_d2oxTsyRLoMTfuqF'
      );
    }
  }

  async sd_0XwVWaQekjA2JOZY(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.session.data.userInfo);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_0XwVWaQekjA2JOZY');
    }
  }

  async sd_Vc3da5CTIz2tyEXR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Vc3da5CTIz2tyEXR',
      parentSpanInst
    );
    try {
      bh.web.res.redirect('/api/login');
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_Vc3da5CTIz2tyEXR
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Vc3da5CTIz2tyEXR',
        spanInst,
        'sd_Vc3da5CTIz2tyEXR'
      );
    }
  }

  async sd_Z5B2SiQIDt8h6xaK(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Z5B2SiQIDt8h6xaK',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_YPQTSeRoQ83vsgGi(bh, parentSpanInst);
      //appendnew_next_sd_Z5B2SiQIDt8h6xaK
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Z5B2SiQIDt8h6xaK',
        spanInst,
        'sd_Z5B2SiQIDt8h6xaK'
      );
    }
  }

  async sd_YPQTSeRoQ83vsgGi(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_YPQTSeRoQ83vsgGi',
      parentSpanInst
    );
    try {
      bh.local.sessionExists = false;
      if (
        bh.local.sessionData &&
        bh.local.sessionData.data &&
        bh.local.sessionData.data.tokenset
      ) {
        bh.local.sessionData['data']['redirectTo'] =
          bh.input.query['redirectTo'];
        bh.local.sessionData['data']['isMobile'] = bh.input.query['isMobile'];
        bh.local.sessionExists = true;
      } else {
        delete bh.local.sessionData['redirectTo'];
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Qjirds3hnxZJKZ5Y(bh, parentSpanInst);
      //appendnew_next_sd_YPQTSeRoQ83vsgGi
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YPQTSeRoQ83vsgGi',
        spanInst,
        'sd_YPQTSeRoQ83vsgGi'
      );
    }
  }

  async sd_Qjirds3hnxZJKZ5Y(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Qjirds3hnxZJKZ5Y',
      parentSpanInst
    );
    try {
      const sd_iSSkm6uH9MP88jMEInstance: sd_iSSkm6uH9MP88jME.idsutil =
        sd_iSSkm6uH9MP88jME.idsutil.getInstance();
      let outputVariables =
        await sd_iSSkm6uH9MP88jMEInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_HaI4RMTX2loOTeMt(bh, parentSpanInst);
      //appendnew_next_sd_Qjirds3hnxZJKZ5Y
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Qjirds3hnxZJKZ5Y',
        spanInst,
        'sd_Qjirds3hnxZJKZ5Y'
      );
    }
  }

  async sd_HaI4RMTX2loOTeMt(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_HaI4RMTX2loOTeMt',
      parentSpanInst
    );
    try {
      let unsatisfied = true;
      if (
        this.sdService.operators['true'](
          bh.local.sessionExists,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_Wmtygp2FVpAZ2TT2(bh, parentSpanInst);
        unsatisfied = false;
      }
      if (unsatisfied) {
        bh = await this.sd_4vBuhGzfdcmNwNGB(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HaI4RMTX2loOTeMt',
        spanInst,
        'sd_HaI4RMTX2loOTeMt'
      );
    }
  }

  async sd_Wmtygp2FVpAZ2TT2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Wmtygp2FVpAZ2TT2',
      parentSpanInst
    );
    try {
      await Promise.all([
        bh.local.sessionData.data.tokenset.access_token
          ? bh.input.client.revoke(
              bh.local.sessionData.data.tokenset.access_token,
              'access_token'
            )
          : undefined,
        bh.local.sessionData.data.tokenset.refresh_token
          ? bh.input.client.revoke(
              bh.local.sessionData.data.tokenset.refresh_token,
              'refresh_token'
            )
          : undefined,
      ]);

      bh.local.res = {
        idsURL: url.format(
          Object.assign(
            url.parse(bh.input.client.issuer.end_session_endpoint),
            {
              search: null,
              query: {
                id_token_hint: bh.local.sessionData.data.tokenset.id_token,
                post_logout_redirect_uri: url.resolve(
                  bh.web.req.href,
                  '/api/logout/cb'
                ),
                client_id: settings.default['ids']['client_id'],
              },
            }
          )
        ),
        sessionExists: true,
      };

      // Remove user info and tokenset before login redirect
      bh.local.sessionData.data.tokenset = null;
      bh.local.sessionData.data.userInfo = null;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_dCWCI7Lqpk6tk1KJ(bh, parentSpanInst);
      //appendnew_next_sd_Wmtygp2FVpAZ2TT2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Wmtygp2FVpAZ2TT2',
        spanInst,
        'sd_Wmtygp2FVpAZ2TT2'
      );
    }
  }

  async sd_dCWCI7Lqpk6tk1KJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dCWCI7Lqpk6tk1KJ',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.sessionData.data;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_fO281HCG5Ypzs1fY(bh, parentSpanInst);
      //appendnew_next_sd_dCWCI7Lqpk6tk1KJ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dCWCI7Lqpk6tk1KJ',
        spanInst,
        'sd_dCWCI7Lqpk6tk1KJ'
      );
    }
  }

  async sd_fO281HCG5Ypzs1fY(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_fO281HCG5Ypzs1fY');
    }
  }

  async sd_4vBuhGzfdcmNwNGB(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_4vBuhGzfdcmNwNGB',
      parentSpanInst
    );
    try {
      bh.local.res = {
        sessionExists: false,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_fO281HCG5Ypzs1fY(bh, parentSpanInst);
      //appendnew_next_sd_4vBuhGzfdcmNwNGB
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4vBuhGzfdcmNwNGB',
        spanInst,
        'sd_4vBuhGzfdcmNwNGB'
      );
    }
  }

  async sd_k7gLoQJBMamgQpA1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_k7gLoQJBMamgQpA1',
      parentSpanInst
    );
    try {
      bh.local.isPasswordResetCallback =
        !!bh.input.query.password_reset_username;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_2RU4COWMeH1cszgX(bh, parentSpanInst);
      //appendnew_next_sd_k7gLoQJBMamgQpA1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_k7gLoQJBMamgQpA1',
        spanInst,
        'sd_k7gLoQJBMamgQpA1'
      );
    }
  }

  async sd_2RU4COWMeH1cszgX(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_2RU4COWMeH1cszgX',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.local.isPasswordResetCallback,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_UvO5NHMTrTZocOBI(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.local.isPasswordResetCallback,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_Dt5inMteeAFqfapw(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2RU4COWMeH1cszgX',
        spanInst,
        'sd_2RU4COWMeH1cszgX'
      );
    }
  }

  async sd_UvO5NHMTrTZocOBI(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_UvO5NHMTrTZocOBI',
      parentSpanInst
    );
    try {
      const sessionStore = bh.web.req.sessionStore;
      const res = new Promise((res, rej) => {
        sessionStore.all((err, sessions) => {
          const promises = Object.keys(sessions).map((sid) => {
            return new Promise((resolve, reject) => {
              sessionStore.get(sid, (err, session) => {
                if (
                  session?.data?.userInfo?.username ===
                  bh.input.query.password_reset_username
                ) {
                  log.debug(
                    `[LCB] username matched::${session.data.userInfo.username}`
                  );
                  sessionStore.destroy(sid, (err, d) => {
                    resolve(d);
                  });
                } else {
                  resolve(undefined);
                }
              });
            });
          });
          Promise.all(promises).then((d) => res(d));
        });
      });

      const rr = await res;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_RkCE84PjaWUgRml5(bh, parentSpanInst);
      //appendnew_next_sd_UvO5NHMTrTZocOBI
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_UvO5NHMTrTZocOBI',
        spanInst,
        'sd_UvO5NHMTrTZocOBI'
      );
    }
  }

  async sd_RkCE84PjaWUgRml5(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send({ message: 'destroyed' });

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_RkCE84PjaWUgRml5');
    }
  }

  async sd_Dt5inMteeAFqfapw(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Dt5inMteeAFqfapw',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_vIuWN9AjI5yUNxLb(bh, parentSpanInst);
      //appendnew_next_sd_Dt5inMteeAFqfapw
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Dt5inMteeAFqfapw',
        spanInst,
        'sd_Dt5inMteeAFqfapw'
      );
    }
  }

  async sd_vIuWN9AjI5yUNxLb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_vIuWN9AjI5yUNxLb',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        let p = function () {
          return new Promise<void | string>((resolve, reject) => {
            requestObject.session.destroy(function (error) {
              if (error) {
                return reject(error);
              }
              return resolve();
            });
          });
        };
        await p();
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_k6DfGC6e93xH952u(bh, parentSpanInst);
      //appendnew_next_sd_vIuWN9AjI5yUNxLb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vIuWN9AjI5yUNxLb',
        spanInst,
        'sd_vIuWN9AjI5yUNxLb'
      );
    }
  }

  async sd_k6DfGC6e93xH952u(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_k6DfGC6e93xH952u',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['se'](
          bh.local.sessionData.data.isMobile,
          'true',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_my6ue9UwgS1ZfDRz(bh, parentSpanInst);
      } else {
        bh = await this.sd_pW8arsSkTYnj9hsF(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_k6DfGC6e93xH952u',
        spanInst,
        'sd_k6DfGC6e93xH952u'
      );
    }
  }

  async sd_my6ue9UwgS1ZfDRz(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_my6ue9UwgS1ZfDRz',
      parentSpanInst
    );
    try {
      bh.local.res = `<html>
   <script>
      var _timer;
      _timer = setInterval(() => {
                  if(window.webkit) {
                      window.webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify({'auth': 'success'}));
                      clearInterval(_timer);
                  }
              }, 250);
      
   </script>
</html>`;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_3BNWbHyARXXMbMbt(bh, parentSpanInst);
      //appendnew_next_sd_my6ue9UwgS1ZfDRz
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_my6ue9UwgS1ZfDRz',
        spanInst,
        'sd_my6ue9UwgS1ZfDRz'
      );
    }
  }

  async sd_3BNWbHyARXXMbMbt(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script 'sha256-j4HHWBMKh2PoLEAu017BWktgUmmL7VVMjnHuNWUHGOg='",
      });

      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_3BNWbHyARXXMbMbt');
    }
  }

  async sd_pW8arsSkTYnj9hsF(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_pW8arsSkTYnj9hsF',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.sessionData.data.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_xBmkIfOBMmGewqBN(bh, parentSpanInst);
      //appendnew_next_sd_pW8arsSkTYnj9hsF
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pW8arsSkTYnj9hsF',
        spanInst,
        'sd_pW8arsSkTYnj9hsF'
      );
    }
  }

  async sd_xBmkIfOBMmGewqBN(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_xBmkIfOBMmGewqBN');
    }
  }

  async sd_1XoKOU82x6MF3vDz(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_1XoKOU82x6MF3vDz',
      parentSpanInst
    );
    try {
      bh.local = {};
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_GT6gdzUVdHnyMiF4(bh, parentSpanInst);
      //appendnew_next_sd_1XoKOU82x6MF3vDz
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1XoKOU82x6MF3vDz',
        spanInst,
        'sd_1XoKOU82x6MF3vDz'
      );
    }
  }

  async sd_GT6gdzUVdHnyMiF4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_GT6gdzUVdHnyMiF4',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_3ZAfu8qLJhaD0Msb(bh, parentSpanInst);
      //appendnew_next_sd_GT6gdzUVdHnyMiF4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GT6gdzUVdHnyMiF4',
        spanInst,
        'sd_GT6gdzUVdHnyMiF4'
      );
    }
  }

  async sd_3ZAfu8qLJhaD0Msb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_3ZAfu8qLJhaD0Msb',
      parentSpanInst
    );
    try {
      bh.local.sessionExists = false;

      if (
        bh.local.sessionData &&
        bh.local.sessionData.data &&
        bh.local.sessionData.data.tokenset &&
        bh.local.sessionData.data.tokenset.access_token &&
        bh.local.sessionData.data.tokenset.refresh_token
      ) {
        bh.local.sessionExists = true;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_PDVJfQlhhQHWiEvb(bh, parentSpanInst);
      //appendnew_next_sd_3ZAfu8qLJhaD0Msb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3ZAfu8qLJhaD0Msb',
        spanInst,
        'sd_3ZAfu8qLJhaD0Msb'
      );
    }
  }

  async sd_PDVJfQlhhQHWiEvb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_PDVJfQlhhQHWiEvb',
      parentSpanInst
    );
    try {
      let unsatisfied = true;
      if (
        this.sdService.operators['true'](
          bh.local.sessionExists,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_5l7kRnCRn6ei6MZB(bh, parentSpanInst);
        unsatisfied = false;
      }
      if (unsatisfied) {
        bh = await this.sd_QWQPr9sd9K35XWFj(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PDVJfQlhhQHWiEvb',
        spanInst,
        'sd_PDVJfQlhhQHWiEvb'
      );
    }
  }

  async sd_5l7kRnCRn6ei6MZB(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_5l7kRnCRn6ei6MZB',
      parentSpanInst
    );
    try {
      const sd_iSSkm6uH9MP88jMEInstance: sd_iSSkm6uH9MP88jME.idsutil =
        sd_iSSkm6uH9MP88jME.idsutil.getInstance();
      let outputVariables = await sd_iSSkm6uH9MP88jMEInstance.handleTokenExpiry(
        spanInst,
        bh.local.sessionData,
        undefined
      );
      bh.local.newSession = outputVariables.input.newSession;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_eQLFoFWzrHi13Xne(bh, parentSpanInst);
      //appendnew_next_sd_5l7kRnCRn6ei6MZB
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5l7kRnCRn6ei6MZB',
        spanInst,
        'sd_5l7kRnCRn6ei6MZB'
      );
    }
  }

  async sd_eQLFoFWzrHi13Xne(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_eQLFoFWzrHi13Xne',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['false'](
          bh.local.newSession,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_S72Q0FP8WeXrYqz5(bh, parentSpanInst);
      } else {
        bh = await this.sd_VkIQWW2huyF9fR1x(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_eQLFoFWzrHi13Xne',
        spanInst,
        'sd_eQLFoFWzrHi13Xne'
      );
    }
  }

  async sd_S72Q0FP8WeXrYqz5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_S72Q0FP8WeXrYqz5',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        let p = function () {
          return new Promise<void | string>((resolve, reject) => {
            requestObject.session.destroy(function (error) {
              if (error) {
                return reject(error);
              }
              return resolve();
            });
          });
        };
        await p();
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_cIw8y2yHdmlW6LqI(bh, parentSpanInst);
      //appendnew_next_sd_S72Q0FP8WeXrYqz5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_S72Q0FP8WeXrYqz5',
        spanInst,
        'sd_S72Q0FP8WeXrYqz5'
      );
    }
  }

  async sd_cIw8y2yHdmlW6LqI(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_cIw8y2yHdmlW6LqI',
      parentSpanInst
    );
    try {
      bh.local.res = {
        code: 'TOKEN_EXPIRED',
        message: 'Token invalid or access revoked',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_18rXX0nAeVGvr1ee(bh, parentSpanInst);
      //appendnew_next_sd_cIw8y2yHdmlW6LqI
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cIw8y2yHdmlW6LqI',
        spanInst,
        'sd_cIw8y2yHdmlW6LqI'
      );
    }
  }

  async sd_18rXX0nAeVGvr1ee(bh, parentSpanInst) {
    try {
      bh.web.res.status(403).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_18rXX0nAeVGvr1ee');
    }
  }

  async sd_VkIQWW2huyF9fR1x(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_VkIQWW2huyF9fR1x',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.local.newSession.rotated,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_urE8Ii3juvISOGPg(bh, parentSpanInst);
      } else {
        bh = await this.sd_tFtEmKQDJi7xEOy0(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VkIQWW2huyF9fR1x',
        spanInst,
        'sd_VkIQWW2huyF9fR1x'
      );
    }
  }

  async sd_urE8Ii3juvISOGPg(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_urE8Ii3juvISOGPg',
      parentSpanInst
    );
    try {
      delete bh.local.newSession.rotated;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_MUwQxS66jzU1Ft7n(bh, parentSpanInst);
      //appendnew_next_sd_urE8Ii3juvISOGPg
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_urE8Ii3juvISOGPg',
        spanInst,
        'sd_urE8Ii3juvISOGPg'
      );
    }
  }

  async sd_MUwQxS66jzU1Ft7n(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_MUwQxS66jzU1Ft7n',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.newSession;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_tFtEmKQDJi7xEOy0(bh, parentSpanInst);
      //appendnew_next_sd_MUwQxS66jzU1Ft7n
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MUwQxS66jzU1Ft7n',
        spanInst,
        'sd_MUwQxS66jzU1Ft7n'
      );
    }
  }

  async sd_tFtEmKQDJi7xEOy0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_tFtEmKQDJi7xEOy0',
      parentSpanInst
    );
    try {
      bh.web.next();
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_tFtEmKQDJi7xEOy0',
        spanInst,
        'sd_tFtEmKQDJi7xEOy0'
      );
    }
  }

  async sd_QWQPr9sd9K35XWFj(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_QWQPr9sd9K35XWFj',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['cont'](
          bh.input.path,
          '/user/info',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_VAQqJKsmmPeFXfJZ(bh, parentSpanInst);
      } else {
        bh = await this.sd_SkNyFETOtB6ddR8p(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QWQPr9sd9K35XWFj',
        spanInst,
        'sd_QWQPr9sd9K35XWFj'
      );
    }
  }

  async sd_VAQqJKsmmPeFXfJZ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_VAQqJKsmmPeFXfJZ',
      parentSpanInst
    );
    try {
      bh.local.res = { message: 'Session expired' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_18rXX0nAeVGvr1ee(bh, parentSpanInst);
      //appendnew_next_sd_VAQqJKsmmPeFXfJZ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VAQqJKsmmPeFXfJZ',
        spanInst,
        'sd_VAQqJKsmmPeFXfJZ'
      );
    }
  }

  async sd_SkNyFETOtB6ddR8p(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_SkNyFETOtB6ddR8p',
      parentSpanInst
    );
    try {
      bh.local.res = { code: 'NO_SESSION', message: 'Session not present' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_18rXX0nAeVGvr1ee(bh, parentSpanInst);
      //appendnew_next_sd_SkNyFETOtB6ddR8p
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_SkNyFETOtB6ddR8p',
        spanInst,
        'sd_SkNyFETOtB6ddR8p'
      );
    }
  }

  //appendnew_node

  // error_handler_slot
  private async errorHandler(
    bh,
    e,
    src,
    parentSpanInst?,
    functionName?
  ): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    bh.errorFunName = functionName;
    this.tracerService.sendData(parentSpanInst, bh, true);
    if (
      false ||
      (await this.sd_fN4fUyhrki2mUPUx(bh, parentSpanInst)) ||
      (await this.sd_zl4sQbkS4cY6DpD2(bh, parentSpanInst))
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  async sd_fN4fUyhrki2mUPUx(bh, parentSpanInst) {
    const nodes = [
      'sd_eopKwzGJVB1qaPKu',
      'sd_d0p7ptinLw3Jiq99',
      'sd_5tVES3NgX373RITx',
      'sd_PlNjLOagZODQZ3em',
      'sd_hc9w71fDpIWkrs7P',
      'sd_Q5e8LhPthAPLwzH8',
      'sd_u4M2B2YUrWKRfeNE',
      'sd_kvp3cAe43fzDKsNN',
      'sd_p06sKIKivOJnGJYF',
      'sd_tHN0izKpB5cFuRi7',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_Vc3da5CTIz2tyEXR(bh, parentSpanInst);
      //appendnew_next_sd_fN4fUyhrki2mUPUx
      return true;
    }
    return false;
  }
  async sd_zl4sQbkS4cY6DpD2(bh, parentSpanInst) {
    const nodes = ['sd_5l7kRnCRn6ei6MZB'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_cIw8y2yHdmlW6LqI(bh, parentSpanInst);
      //appendnew_next_sd_zl4sQbkS4cY6DpD2
      return true;
    }
    return false;
  }
  //appendnew_flow_ids_Catch
}
