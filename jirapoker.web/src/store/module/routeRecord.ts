import { EnumNoPermissionErrorSource } from '@/classes/enum';
// This state constructed for the browser, which surf miniTIS by keyin URL or press button lead to illage page
export default {
  state: {
    urlTo: {} as any,   // check whether action with to
    showNoPermissionErrorFlag: false as boolean,  // control permission modal
    errorSource: EnumNoPermissionErrorSource.FromButton as EnumNoPermissionErrorSource, // route error type
    errorPageName: {} as string, // route error msg
    loginNow: false as boolean,
  },
  getters: {
    urlTo: (state: any) => state.urlTo,
    showNoPermissionErrorFlag: (state: any) => state.showNoPermissionErrorFlag,
    errorSource: (state: any) => state.errorSource,
    errorPageName: (state: any) => state.errorPageName,
    loginNow: (state: any) => state.loginNow,
  },
  mutations: {
    setUrlTo(state: any, urlTo: any) {
      state.urlTo = urlTo;
    },
    setShowNoPermissionErrorFlag(state: any, flag: boolean) {
      state.showNoPermissionErrorFlag = flag;
    },
    setErrorSource(state: any, errorSource: EnumNoPermissionErrorSource) {
      state.errorSource = errorSource;
    },
    setErrorPageName(state: any, msg: any) {
      state.errorPageName = msg;
    },
    setLoginNow(state: any, flag: boolean) {
      state.loginNow = flag;
    },
    cleanRouteRecord(state: any) {
      state.urlTo = {};
      state.showNoPermissionErrorFlag = false;
      state.errorSource = EnumNoPermissionErrorSource.FromButton;
      state.errorPageName = {};
      state.loginNow = false;
    },
  },
  actions: {},
};
