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
import { DmUtils } from '../../utils/ndefault-datamodel/find/dmUtils'; //_splitter_
//append_imports_end
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export class createApplication {
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
    this.serviceName = 'createApplication';
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
      instance = new createApplication(
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
    //appendnew_flow_createApplication_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: createApplication');
    //appendnew_flow_createApplication_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: createApplication');

    this.app['post'](
      `${this.serviceBasePath}/create-application`,
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
          bh = await this.sd_tHn9fnkA5WRUSlRx(bh, parentSpanInst);
          //appendnew_next_sd_HZVhp2NPwhGmKPyA
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_HZVhp2NPwhGmKPyA');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_createApplication_HttpIn
  }
  //   service flows_createApplication

  //appendnew_flow_createApplication_start

  async sd_tHn9fnkA5WRUSlRx(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_tHn9fnkA5WRUSlRx',
      parentSpanInst
    );
    try {
      bh.local.applicationData = {
        application_id: 'APP' + Date.now(),

        fullname: bh.input.body.applicantName,

        dob: bh.input.body.dob,

        gender: bh.input.body.gender,

        mobile: bh.input.body.mobile,

        email: bh.input.body.email,

        address: bh.input.body.address,

        plan_type: bh.input.body.planType,

        sum_insured: bh.input.body.sumInsured,

        policy_term: bh.input.body.policyTerm,

        medical_declaration: bh.input.body.medicalDeclaration,

        status: 'Draft',
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_PClG7itopReOo67f(bh, parentSpanInst);
      //appendnew_next_sd_tHn9fnkA5WRUSlRx
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_tHn9fnkA5WRUSlRx',
        spanInst,
        'sd_tHn9fnkA5WRUSlRx'
      );
    }
  }

  async sd_PClG7itopReOo67f(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_PClG7itopReOo67f',
      parentSpanInst
    );
    try {
      const dmUtilsInst = new DmUtils('sd_nbkKdk1GxCrX8E0j');
      bh.local.result = await dmUtilsInst.insert(
        '_EN_9ctpcuh1k',
        bh.local.applicationData
      );

      this.tracerService.sendData(spanInst, bh);
      await this.sd_5wJbRwPwSKIPbIQw(bh, parentSpanInst);
      //appendnew_next_sd_PClG7itopReOo67f
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PClG7itopReOo67f',
        spanInst,
        'sd_PClG7itopReOo67f'
      );
    }
  }

  async sd_5wJbRwPwSKIPbIQw(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_5wJbRwPwSKIPbIQw');
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
  //appendnew_flow_createApplication_Catch
}
