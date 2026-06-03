// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import cookieParser from 'cookie-parser'; //_splitter_
import { dirname } from 'path'; //_splitter_
import { fileURLToPath } from 'url'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
//append_imports_end
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export class getMedicalData {
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
    this.serviceName = 'getMedicalData';
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
      instance = new getMedicalData(
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
    //appendnew_flow_getMedicalData_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: getMedicalData');
    //appendnew_flow_getMedicalData_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: getMedicalData');

    this.app['post'](
      `${this.serviceBasePath}/getMedicalData`,
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
          bh = await this.sd_K2mlYVZabHS2sxBu(bh, parentSpanInst);
          //appendnew_next_sd_BjKHZ2zXctTbzFMi
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_BjKHZ2zXctTbzFMi');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_getMedicalData_HttpIn
  }
  //   service flows_getMedicalData

  //appendnew_flow_getMedicalData_start

  async sd_K2mlYVZabHS2sxBu(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_K2mlYVZabHS2sxBu',
      parentSpanInst
    );
    try {
      bh.local.payload = {
        pageNumber: 0,
        pageSize: 10,
        multiplicity: 'multiple',
        filter: {},
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_C8fUYEVcA1q6CUvD(bh, parentSpanInst);
      //appendnew_next_sd_K2mlYVZabHS2sxBu
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_K2mlYVZabHS2sxBu',
        spanInst,
        'sd_K2mlYVZabHS2sxBu'
      );
    }
  }

  async sd_C8fUYEVcA1q6CUvD(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: 'https://reels-pt.neutrinos-apps.com/integration/api/records/filter/72b58c39-817f-4204-95dc-4f5eec8fd929/9dc1b997-15b7-42ab-93e6-2f6c91d2bae7/fe62755d-259e-47ab-b72d-378e5787d5ac',
        timeout: 30000,
        method: 'post',
        headers: {
          token:
            'd674bdf6-0554-42a8-ae27-264befe13c23.ceee41185aba511f29d2c85a1471a03eaf828eda0dc42f8b914c384051f8c46f',
        },
        followRedirects: true,
        cookies: undefined,
        authType: undefined,
        body: bh.local.payload,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: undefined,
        useQuerystring: false,
      };
      requestOptions.rejectUnauthorized = false;
      requestOptions.tlsConfig = undefined;
      requestOptions.proxyConfig = undefined;
      let responseMsg: any = await this.sdService.httpRequest(
        requestOptions.url,
        requestOptions.timeout,
        requestOptions.method,
        requestOptions.headers,
        requestOptions.followRedirects,
        requestOptions.cookies,
        requestOptions.authType,
        requestOptions.body,
        requestOptions.paytoqs,
        requestOptions.proxyConfig,
        requestOptions.tlsConfig,
        requestOptions.ret,
        requestOptions.params,
        requestOptions.rejectUnauthorized,
        requestOptions.username,
        requestOptions.password,
        requestOptions.token
      );

      bh.local.result = responseMsg;
      await this.sd_J6NMfndzYuRCFDwx(bh, parentSpanInst);
      //appendnew_next_sd_C8fUYEVcA1q6CUvD
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_C8fUYEVcA1q6CUvD');
    }
  }

  async sd_J6NMfndzYuRCFDwx(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_J6NMfndzYuRCFDwx');
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
    if (bh.web.next) {
      bh.web.next(e);
    } else {
      throw e;
    }
  }
  //appendnew_flow_getMedicalData_Catch
}
