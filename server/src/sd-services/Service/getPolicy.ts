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
import { GenericRDBMSOperations } from '../../utils/ndefault-sql/ExecuteSql/GenericRDBMSOperations'; //_splitter_
//append_imports_end
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export class getPolicy {
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
    this.serviceName = 'getPolicy';
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
      instance = new getPolicy(
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
    //appendnew_flow_getPolicy_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: getPolicy');
    //appendnew_flow_getPolicy_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: getPolicy');

    this.app['post'](
      `${this.serviceBasePath}/getPolicy`,
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
          bh = await this.sd_7R41Q9AjCfLcusgY(bh, parentSpanInst);
          //appendnew_next_sd_4nnQdINFgsnV7yJR
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_4nnQdINFgsnV7yJR');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/policy/submitwithcase`,
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
          bh = await this.sd_uvNTbtMv1kugmsHA(bh, parentSpanInst);
          //appendnew_next_sd_Ban9aOvDoPsGPaiE
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Ban9aOvDoPsGPaiE');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/policy/search`,
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
          bh = await this.sd_1ibeVnCKAeDjRBac(bh, parentSpanInst);
          //appendnew_next_sd_jWKc1AXA9LnXdkLM
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_jWKc1AXA9LnXdkLM');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/policy/draft`,
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
          bh = await this.sd_hXApaF11udSuJWKg(bh, parentSpanInst);
          //appendnew_next_sd_HxFB0l0kcdSfxs8c
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_HxFB0l0kcdSfxs8c');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/policy/getDrafts`,
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
          bh = await this.sd_q6nzqe34nKzJckOR(bh, parentSpanInst);
          //appendnew_next_sd_KJ1AU7CLwIICkPEa
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_KJ1AU7CLwIICkPEa');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/getPolicyByApplicationId`,
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
          bh = await this.sd_gkETtYVETR9BGAtS(bh, parentSpanInst);
          //appendnew_next_sd_zv4lv5QMALfZ2p6W
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_zv4lv5QMALfZ2p6W');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/policy/update`,
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
          bh = await this.sd_46vzy6MOEKDaG5rv(bh, parentSpanInst);
          //appendnew_next_sd_AaQko741ZilsNsLB
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_AaQko741ZilsNsLB');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/searchOnePolicy`,
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
          bh = await this.sd_sNvh7GTu2GwIZPEw(bh, parentSpanInst);
          //appendnew_next_sd_dBFwlqvIjFNKWkEH
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_dBFwlqvIjFNKWkEH');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/policy/submit`,
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
          bh = await this.sd_S7KpNOI3nzHTizfe(bh, parentSpanInst);
          //appendnew_next_sd_CBffBcLBXVe0aUtR
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_CBffBcLBXVe0aUtR');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_getPolicy_HttpIn
  }
  //   service flows_getPolicy

  //appendnew_flow_getPolicy_start

  async sd_7R41Q9AjCfLcusgY(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_7R41Q9AjCfLcusgY',
      parentSpanInst
    );
    try {
      bh.local.payload = {
        pageNumber: 0,
        pageSize: 20,
        multiplicity: 'multiple',
        filter: {},
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_DY15vxZcCybd72OP(bh, parentSpanInst);
      //appendnew_next_sd_7R41Q9AjCfLcusgY
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7R41Q9AjCfLcusgY',
        spanInst,
        'sd_7R41Q9AjCfLcusgY'
      );
    }
  }

  async sd_DY15vxZcCybd72OP(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: 'https://reels-pt.neutrinos-apps.com/integration/api/records/filter/72b58c39-817f-4204-95dc-4f5eec8fd929/02deac5e-69f8-4359-acd3-143f13b92b6f/63c03bbc-3038-47aa-87f3-28f737019de1',
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
      await this.sd_byiWnU75a9LeTAsL(bh, parentSpanInst);
      //appendnew_next_sd_DY15vxZcCybd72OP
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_DY15vxZcCybd72OP');
    }
  }

  async sd_byiWnU75a9LeTAsL(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_byiWnU75a9LeTAsL');
    }
  }

  async sd_uvNTbtMv1kugmsHA(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_uvNTbtMv1kugmsHA',
      parentSpanInst
    );
    try {
      // bh.local.ticketData = {
      //     case_id: caseId,
      //     ticket_type: body.ticketType || "Incident",
      //     title: body.title || "",
      //     description: body.description || "",
      //     category: body.category || "",
      //     priority: body.priority || "",
      //     assignment_group: body.assignmentGroup || "",
      //     requester_name: body.requesterName || "",
      //     requester_email: body.requesterEmail || "",
      //     status: "NEW"
      // };
      // bh.local.policyPayload = {
      //    application_id:
      //     `APP-${Date.now()}`,
      //   fullname: bh.input.fullname || "",
      //   dob: body.formattedDob || "",
      //   gender: body.gender || "",
      //   age:body.age || "",
      //   mobile: body.mobile || "",
      //   address: body.address || "",
      //   base_premium: body.basePremium || "",
      //   discount_percentage: body.discountPercent || "",
      //   policy:body.selectedPolicyTerm,
      //   plan_type:body.selectedPlanType,
      //   status:"submitted"
      // };

      // console.log("test",bh);
      const body = bh.input.body || {};
      bh.local.policyPayload = {
        application_id: `APP-${Date.now()}`,
        ticket_type: body.ticket_type,
        fullname: body.fullname || '',
        dob: body.dob || null,
        gender: body.gender || '',
        email: body.email || '',
        age: body.age || 0,
        mobile: body.mobile || 0,
        address: body.address || '',
        base_premium: body.base_premium || 0,
        discount_percentage: body.discount_percentage || 0,
        final_premium: body.final_premium || 0,
        medical_declaration: body.medical_declaration,
        policy: body.policy || '',
        plan_type: body.plan_type || '',
        status: 'submitted',
      };

      // console.log("BODY =>", body);

      // console.log("ENTITY =>", policy);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_v79B2mlltMwHbhyF(bh, parentSpanInst);
      //appendnew_next_sd_uvNTbtMv1kugmsHA
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uvNTbtMv1kugmsHA',
        spanInst,
        'sd_uvNTbtMv1kugmsHA'
      );
    }
  }

  async sd_v79B2mlltMwHbhyF(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_v79B2mlltMwHbhyF',
      parentSpanInst
    );
    try {
      const dmUtilsInst = new DmUtils('sd_nbkKdk1GxCrX8E0j');
      bh.local.response = await dmUtilsInst.insert(
        '_EN_9ctpcuh1k',
        bh.local.policyPayload
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.alphaPayload(bh, parentSpanInst);
      //appendnew_next_sd_v79B2mlltMwHbhyF
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_v79B2mlltMwHbhyF',
        spanInst,
        'sd_v79B2mlltMwHbhyF'
      );
    }
  }

  async alphaPayload(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'alphaPayload',
      parentSpanInst
    );
    try {
      bh.local.response = {
        success: true,
        message: 'Application  submitted successfully',
        caseId: bh.local.policyPayload.application_id,
        data: {
          caseId: bh.local.policyPayload.application_id,
          ticket_type: bh.local.policyPayload.ticket_type,
          fullname: bh.local.policyPayload.fullname || '',
          dob: bh.local.policyPayload.dob || null,
          gender: bh.local.policyPayload.gender || '',
          email: bh.local.policyPayload.email || '',
          age: bh.local.policyPayload.age || 0,
          mobile: bh.local.policyPayload.mobile || 0,
          address: bh.local.policyPayload.address || '',
          base_premium: bh.local.policyPayload.base_premium || 0,
          discount_percentage: bh.local.policyPayload.discount_percentage || 0,
          final_premium: bh.local.policyPayload.final_premium || 0,
          medical_declaration: bh.local.policyPayload.medical_declaration,
          policy: bh.local.policyPayload.policy || '',
          plan_type: bh.local.policyPayload.plan_type || '',
          status: bh.local.policyPayload.status,
        },
      };

      // This payload will be passed to Alpha workflow
      bh.local.alphaPayload = {
        caseType: 'subha-health-poc',
        caseData: {
          caseId: bh.local.policyPayload.application_id,
          ticket_type: bh.local.policyPayload.ticket_type,
          fullname: bh.local.policyPayload.fullname || '',
          dob: bh.local.policyPayload.dob || null,
          gender: bh.local.policyPayload.gender || '',
          email: bh.local.policyPayload.email || '',
          age: bh.local.policyPayload.age || 0,
          mobile: bh.local.policyPayload.mobile || 0,
          address: bh.local.policyPayload.address || '',
          base_premium: bh.local.policyPayload.base_premium || 0,
          discount_percentage: bh.local.policyPayload.discount_percentage || 0,
          final_premium: bh.local.policyPayload.final_premium || 0,
          medical_declaration: bh.local.policyPayload.medical_declaration,
          policy: bh.local.policyPayload.policy || '',
          plan_type: bh.local.policyPayload.plan_type || '',
          status: bh.local.policyPayload.status,
        },
      };
      bh.local.tokenpayload = {
        client_secret:
          'e28WZR6ZKyrYILTSKKClFEwNlYoGR2cvISwFCoIXP4S7DJgsaqhHRSNqpoWgYbcx_DUlrSkoA1zS5uFOzP-J9C',
        client_id: '0ddh_euTKkSA682Yy5HuC',
        grant_type: 'client_credentials',
      };
      console.log('Alpha payload:', bh.local.alphaPayload);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.tokenApi(bh, parentSpanInst);
      //appendnew_next_alphaPayload
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3jVB3BCdvHCeyTHi',
        spanInst,
        'alphaPayload'
      );
    }
  }

  async tokenApi(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: 'https://ids-ctr-pt.neutrinos-apps.com/token',
        timeout: 30000,
        method: 'post',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        followRedirects: true,
        cookies: undefined,
        authType: undefined,
        body: bh.local.tokenpayload,
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

      bh.local.token = responseMsg;
      bh = await this.token(bh, parentSpanInst);
      //appendnew_next_tokenApi
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_RJb21pIVTG3eyy9A');
    }
  }

  async token(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('token', parentSpanInst);
    try {
      console.log(':::::::::token::::::::', bh.local.token);
      bh.local.authHeader = bh.local.token.payload.access_token;
      console.log(':::::::::token11::::::::', bh.local.authHeader);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.caseCreation(bh, parentSpanInst);
      //appendnew_next_token
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_nLrVVjwQq8pXTm8k',
        spanInst,
        'token'
      );
    }
  }

  async caseCreation(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: 'https://alpha-pt.neutrinos-apps.com/caseservice/case/instance/create',
        timeout: 30000,
        method: 'post',
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
        },
        followRedirects: true,
        cookies: undefined,
        authType: 'bearer',
        body: bh.local.alphaPayload,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: bh.local.authHeader,
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

      bh.local.alpharesponse = responseMsg;
      bh = await this.sd_sx7a5Afb4lljXzAF(bh, parentSpanInst);
      //appendnew_next_caseCreation
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8A92ELENUicUWIR3');
    }
  }

  async sd_sx7a5Afb4lljXzAF(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_sx7a5Afb4lljXzAF',
      parentSpanInst
    );
    try {
      bh.local.allresponse = {
        ticket: bh.local.response,
        'case-creation': bh.local.alpharesponse,
        //  "auto-assign":bh.local.result
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_Fk9Wf6nmiuBExBxp(bh, parentSpanInst);
      //appendnew_next_sd_sx7a5Afb4lljXzAF
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_sx7a5Afb4lljXzAF',
        spanInst,
        'sd_sx7a5Afb4lljXzAF'
      );
    }
  }

  async sd_Fk9Wf6nmiuBExBxp(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Fk9Wf6nmiuBExBxp');
    }
  }

  async sd_1ibeVnCKAeDjRBac(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_1ibeVnCKAeDjRBac',
      parentSpanInst
    );
    try {
      console.log('Search API Hit');

      // console.log("Input =>", bh.input);

      // const body =
      //   bh.input.body || {};

      // bh.local.application_id =
      //   body.application_id || "";

      // console.log(
      //   "Searching Application ID =>",
      //   bh.local.application_id
      // );

      bh.local.searchQuery = `
  SELECT *
  FROM policy_applications
  WHERE application_id = '${bh.input.body.application_id}'
`;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_2D7kLlo5FdTdN7s5(bh, parentSpanInst);
      //appendnew_next_sd_1ibeVnCKAeDjRBac
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1ibeVnCKAeDjRBac',
        spanInst,
        'sd_1ibeVnCKAeDjRBac'
      );
    }
  }

  async sd_2D7kLlo5FdTdN7s5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_2D7kLlo5FdTdN7s5',
      parentSpanInst
    );
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_nbkKdk1GxCrX8E0j'
      );
      let connectionName;
      if (
        configObj &&
        configObj.hasOwnProperty('dbOption') &&
        configObj.dbOption.hasOwnProperty('name')
      ) {
        connectionName = configObj.dbOption.name;
      } else {
        throw new Error('Cannot find the selected config name');
      }
      let params = [];
      params = params ? params : [];
      bh.local.policySearchDataResult =
        await new GenericRDBMSOperations().executeSQL(
          connectionName,
          bh.local.searchQuery,
          params
        );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_5qmLad79g9kaKSe1(bh, parentSpanInst);
      //appendnew_next_sd_2D7kLlo5FdTdN7s5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2D7kLlo5FdTdN7s5',
        spanInst,
        'sd_2D7kLlo5FdTdN7s5'
      );
    }
  }

  async sd_5qmLad79g9kaKSe1(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.policySearchDataResult);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_5qmLad79g9kaKSe1');
    }
  }

  async sd_hXApaF11udSuJWKg(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_hXApaF11udSuJWKg',
      parentSpanInst
    );
    try {
      // bh.local.ticketData = {
      //     case_id: caseId,
      //     ticket_type: body.ticketType || "Incident",
      //     title: body.title || "",
      //     description: body.description || "",
      //     category: body.category || "",
      //     priority: body.priority || "",
      //     assignment_group: body.assignmentGroup || "",
      //     requester_name: body.requesterName || "",
      //     requester_email: body.requesterEmail || "",
      //     status: "NEW"
      // };
      // bh.local.policyPayload = {
      //    application_id:
      //     `APP-${Date.now()}`,
      //   fullname: bh.input.fullname || "",
      //   dob: body.formattedDob || "",
      //   gender: body.gender || "",
      //   age:body.age || "",
      //   mobile: body.mobile || "",
      //   address: body.address || "",
      //   base_premium: body.basePremium || "",
      //   discount_percentage: body.discountPercent || "",
      //   policy:body.selectedPolicyTerm,
      //   plan_type:body.selectedPlanType,
      //   status:"submitted"
      // };
      console.log('sgdshf');
      console.log('test', bh);
      const body = bh.input.body || {};
      bh.local.policyPayload = {
        application_id: `APP-${Date.now()}`,
        fullname: body.fullname || '',
        dob: body.dob || null,
        gender: body.gender || '',
        email: body.email || '',
        age: body.age || 0,
        mobile: body.mobile || 0,
        address: body.address || '',
        base_premium: body.base_premium || 0,
        discount_percentage: body.discount_percentage || 0,
        final_premium: body.final_premium || 0,
        medical_declaration: body.medical_declaration,
        policy: body.policy || '',
        plan_type: body.plan_type || '',
        status: 'draft',
      };

      // console.log("BODY =>", body);

      // console.log("ENTITY =>", policy);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Wk4BFD1WUGMATDes(bh, parentSpanInst);
      //appendnew_next_sd_hXApaF11udSuJWKg
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hXApaF11udSuJWKg',
        spanInst,
        'sd_hXApaF11udSuJWKg'
      );
    }
  }

  async sd_Wk4BFD1WUGMATDes(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Wk4BFD1WUGMATDes',
      parentSpanInst
    );
    try {
      const dmUtilsInst = new DmUtils('sd_nbkKdk1GxCrX8E0j');
      bh.local.response = await dmUtilsInst.insert(
        '_EN_9ctpcuh1k',
        bh.local.policyPayload
      );

      this.tracerService.sendData(spanInst, bh);
      await this.sd_akooukC0nFUR1nhu(bh, parentSpanInst);
      //appendnew_next_sd_Wk4BFD1WUGMATDes
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Wk4BFD1WUGMATDes',
        spanInst,
        'sd_Wk4BFD1WUGMATDes'
      );
    }
  }

  async sd_akooukC0nFUR1nhu(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_akooukC0nFUR1nhu');
    }
  }

  async sd_q6nzqe34nKzJckOR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_q6nzqe34nKzJckOR',
      parentSpanInst
    );
    try {
      console.log('Draft API Hit');

      bh.local.searchFilter = {
        // status: "draft"
      };

      console.log('Filter =>', bh.local.searchFilter);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Py0qbyTDef8lTiHX(bh, parentSpanInst);
      //appendnew_next_sd_q6nzqe34nKzJckOR
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_q6nzqe34nKzJckOR',
        spanInst,
        'sd_q6nzqe34nKzJckOR'
      );
    }
  }

  async sd_Py0qbyTDef8lTiHX(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Py0qbyTDef8lTiHX',
      parentSpanInst
    );
    try {
      const dmUtilsInst = new DmUtils('sd_nbkKdk1GxCrX8E0j');
      bh.local.draftApplications = await dmUtilsInst.find(
        '_EN_9ctpcuh1k',
        bh.local.searchFilter,
        undefined,
        undefined,
        undefined
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_sCXMW53crcq8LtBG(bh, parentSpanInst);
      //appendnew_next_sd_Py0qbyTDef8lTiHX
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Py0qbyTDef8lTiHX',
        spanInst,
        'sd_Py0qbyTDef8lTiHX'
      );
    }
  }

  async sd_sCXMW53crcq8LtBG(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_sCXMW53crcq8LtBG',
      parentSpanInst
    );
    try {
      console.log('AFTER FIND =>', bh.local.draftApplications);

      this.tracerService.sendData(spanInst, bh);
      await this.sd_2xRtMf4YHlDx43EQ(bh, parentSpanInst);
      //appendnew_next_sd_sCXMW53crcq8LtBG
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_sCXMW53crcq8LtBG',
        spanInst,
        'sd_sCXMW53crcq8LtBG'
      );
    }
  }

  async sd_2xRtMf4YHlDx43EQ(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.draftApplications);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_2xRtMf4YHlDx43EQ');
    }
  }

  async sd_gkETtYVETR9BGAtS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_gkETtYVETR9BGAtS',
      parentSpanInst
    );
    try {
      // bh.local.searchQuery = `
      // SELECT *
      // FROM policy_applications
      // WHERE application_id = '${bh.input.id}';
      // `;

      console.log('kjhskfhkdsjf ', bh);
      console.log('Received ID =>', bh.input.body.id);

      bh.local.searchQuery = `
SELECT *
FROM policy_applications
WHERE id = '${bh.input.body.id}'
`;

      // console.log(
      //   bh.local.searchQuery
      // );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_wcxajt6l3tkmomib(bh, parentSpanInst);
      //appendnew_next_sd_gkETtYVETR9BGAtS
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gkETtYVETR9BGAtS',
        spanInst,
        'sd_gkETtYVETR9BGAtS'
      );
    }
  }

  async sd_wcxajt6l3tkmomib(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_wcxajt6l3tkmomib',
      parentSpanInst
    );
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_nbkKdk1GxCrX8E0j'
      );
      let connectionName;
      if (
        configObj &&
        configObj.hasOwnProperty('dbOption') &&
        configObj.dbOption.hasOwnProperty('name')
      ) {
        connectionName = configObj.dbOption.name;
      } else {
        throw new Error('Cannot find the selected config name');
      }
      let params = [];
      params = params ? params : [];
      bh.local.policyDataById = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.local.searchQuery,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_cc70NFxVhi6UbTVf(bh, parentSpanInst);
      //appendnew_next_sd_wcxajt6l3tkmomib
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wcxajt6l3tkmomib',
        spanInst,
        'sd_wcxajt6l3tkmomib'
      );
    }
  }

  async sd_cc70NFxVhi6UbTVf(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.policyDataById);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_cc70NFxVhi6UbTVf');
    }
  }

  async sd_46vzy6MOEKDaG5rv(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_46vzy6MOEKDaG5rv',
      parentSpanInst
    );
    try {
      const body = bh.input.body || {};
      bh.local.updateQuery = `
UPDATE policy_applications
SET
    application_id = '${body.application_id}',
    fullname = '${body.fullname}',
    dob = '${body.dob}',
    gender = '${body.gender}',
    email = '${body.email}',
    age = '${body.age}',
    mobile = '${body.mobile}',
    address = '${body.address}',
    base_premium = '${body.base_premium}',
    discount_percentage = '${body.discount_percentage}',
    final_premium = '${body.final_premium}',
    medical_declaration='${JSON.stringify(body.medical_declaration)}',
    policy = '${body.policy}',
    plan_type = '${body.plan_type}',
    status = 'submitted'
WHERE id = '${body.id}'
RETURNING *;
`;

      console.log(bh.local.updateQuery);

      console.log('bh in back end apicall', bh);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_UwyOndAPOlhfGe0h(bh, parentSpanInst);
      //appendnew_next_sd_46vzy6MOEKDaG5rv
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_46vzy6MOEKDaG5rv',
        spanInst,
        'sd_46vzy6MOEKDaG5rv'
      );
    }
  }

  async sd_UwyOndAPOlhfGe0h(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_UwyOndAPOlhfGe0h',
      parentSpanInst
    );
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_nbkKdk1GxCrX8E0j'
      );
      let connectionName;
      if (
        configObj &&
        configObj.hasOwnProperty('dbOption') &&
        configObj.dbOption.hasOwnProperty('name')
      ) {
        connectionName = configObj.dbOption.name;
      } else {
        throw new Error('Cannot find the selected config name');
      }
      let params = [];
      params = params ? params : [];
      bh.local.response = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.local.updateQuery,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_TsGw2fl1tx318o98(bh, parentSpanInst);
      //appendnew_next_sd_UwyOndAPOlhfGe0h
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_UwyOndAPOlhfGe0h',
        spanInst,
        'sd_UwyOndAPOlhfGe0h'
      );
    }
  }

  async sd_TsGw2fl1tx318o98(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_TsGw2fl1tx318o98');
    }
  }

  async sd_sNvh7GTu2GwIZPEw(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_sNvh7GTu2GwIZPEw',
      parentSpanInst
    );
    try {
      // bh.local.searchQuery = `
      // SELECT *
      // FROM policy_applications
      // WHERE application_id = '${bh.input.id}';
      // `;

      // console.log("kjhskfhkdsjf ",bh)
      // console.log("Received ID =>", bh.input.body.id);

      bh.local.searchQuery = `
SELECT *
FROM policy_applications
WHERE application_id = '${bh.input.body.application_id}'
`;

      // console.log(
      //   bh.local.searchQuery
      // );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_aYjA3WCcv3aIkmEY(bh, parentSpanInst);
      //appendnew_next_sd_sNvh7GTu2GwIZPEw
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_sNvh7GTu2GwIZPEw',
        spanInst,
        'sd_sNvh7GTu2GwIZPEw'
      );
    }
  }

  async sd_aYjA3WCcv3aIkmEY(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_aYjA3WCcv3aIkmEY',
      parentSpanInst
    );
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_nbkKdk1GxCrX8E0j'
      );
      let connectionName;
      if (
        configObj &&
        configObj.hasOwnProperty('dbOption') &&
        configObj.dbOption.hasOwnProperty('name')
      ) {
        connectionName = configObj.dbOption.name;
      } else {
        throw new Error('Cannot find the selected config name');
      }
      let params = [];
      params = params ? params : [];
      bh.local.policyDataById = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.local.searchQuery,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_A4MzDqvk0qaux55c(bh, parentSpanInst);
      //appendnew_next_sd_aYjA3WCcv3aIkmEY
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_aYjA3WCcv3aIkmEY',
        spanInst,
        'sd_aYjA3WCcv3aIkmEY'
      );
    }
  }

  async sd_A4MzDqvk0qaux55c(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.policyDataById);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_A4MzDqvk0qaux55c');
    }
  }

  async sd_S7KpNOI3nzHTizfe(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_S7KpNOI3nzHTizfe',
      parentSpanInst
    );
    try {
      // bh.local.ticketData = {
      //     case_id: caseId,
      //     ticket_type: body.ticketType || "Incident",
      //     title: body.title || "",
      //     description: body.description || "",
      //     category: body.category || "",
      //     priority: body.priority || "",
      //     assignment_group: body.assignmentGroup || "",
      //     requester_name: body.requesterName || "",
      //     requester_email: body.requesterEmail || "",
      //     status: "NEW"
      // };
      // bh.local.policyPayload = {
      //    application_id:
      //     `APP-${Date.now()}`,
      //   fullname: bh.input.fullname || "",
      //   dob: body.formattedDob || "",
      //   gender: body.gender || "",
      //   age:body.age || "",
      //   mobile: body.mobile || "",
      //   address: body.address || "",
      //   base_premium: body.basePremium || "",
      //   discount_percentage: body.discountPercent || "",
      //   policy:body.selectedPolicyTerm,
      //   plan_type:body.selectedPlanType,
      //   status:"submitted"
      // };

      // console.log("test",bh);
      const body = bh.input.body || {};
      bh.local.policyPayload = {
        application_id: `APP-${Date.now()}`,
        ticket_type: body.ticket_type,
        fullname: body.fullname || '',
        dob: body.dob || null,
        gender: body.gender || '',
        email: body.email || '',
        age: body.age || 0,
        mobile: body.mobile || 0,
        address: body.address || '',
        base_premium: body.base_premium || 0,
        discount_percentage: body.discount_percentage || 0,
        final_premium: body.final_premium || 0,
        medical_declaration: body.medical_declaration,
        policy: body.policy || '',
        plan_type: body.plan_type || '',
        status: 'submitted',
      };

      // console.log("BODY =>", body);

      // console.log("ENTITY =>", policy);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_v4UwAoFunZ0Djc41(bh, parentSpanInst);
      //appendnew_next_sd_S7KpNOI3nzHTizfe
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_S7KpNOI3nzHTizfe',
        spanInst,
        'sd_S7KpNOI3nzHTizfe'
      );
    }
  }

  async sd_v4UwAoFunZ0Djc41(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_v4UwAoFunZ0Djc41',
      parentSpanInst
    );
    try {
      const dmUtilsInst = new DmUtils('sd_nbkKdk1GxCrX8E0j');
      bh.local.response = await dmUtilsInst.insert(
        '_EN_9ctpcuh1k',
        bh.local.policyPayload
      );

      this.tracerService.sendData(spanInst, bh);
      await this.sd_sXHk57R1nsWxch6a(bh, parentSpanInst);
      //appendnew_next_sd_v4UwAoFunZ0Djc41
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_v4UwAoFunZ0Djc41',
        spanInst,
        'sd_v4UwAoFunZ0Djc41'
      );
    }
  }

  async sd_sXHk57R1nsWxch6a(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_sXHk57R1nsWxch6a');
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
  //appendnew_flow_getPolicy_Catch
}
