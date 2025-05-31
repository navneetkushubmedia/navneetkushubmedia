import {
  CommonActions,
  StackActions,
  NavigationContainerRef,
} from '@react-navigation/native';

let navigator: NavigationContainerRef<any> | null = null;

function setTopLevelNavigator(
  navigatorRef: NavigationContainerRef<any> | null,
) {
  navigator = navigatorRef;
}

export function navigate(name: string, params = {}, key = {}) {
  navigator?.dispatch(
    CommonActions.navigate({
      ...key,
      name,
      params,
    }),
  );
}

function goBack() {
  navigator?.dispatch(CommonActions.goBack());
}

function setRoot(name: string, params = {}) {
  navigator?.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [
        {
          name,
          params,
        },
      ],
    }),
  );
}

function remove(name: string) {
  navigator?.dispatch((state) => {
    // Remove the home route from the stack
    const routes = state.routes.filter((r) => r.name !== name);
    return CommonActions.reset({
      ...state,
      routes,
      index: routes.length - 1,
    });
  });
}

function setParams(params = {}, key = '') {
  navigator?.dispatch({
    ...CommonActions.setParams(params),
    source: key,
  });
}

function reset(resetArray: { name: string; params?: object }[] = []) {
  if (resetArray.length > 0) {
    navigator?.dispatch(
      CommonActions.reset({
        index: resetArray.length - 1,
        routes: [...resetArray],
      }),
    );
  }
}

function push(name: string, params?: object) {
  navigator?.dispatch(StackActions.push(name, params));
}

function pop(number = 1) {
  navigator?.dispatch(StackActions.pop(number));
}

function popToTop() {
  navigator?.dispatch(StackActions.popToTop());
}

function replace(name: string, params?: object) {
  navigator?.dispatch(StackActions.replace(name, params));
}

function replaceRoute(name: string, routekey: string, params?: object) {
  navigator?.dispatch({
    ...StackActions.replace(name, params),
    source: routekey,
    target: navigator?.getState().key,
  });
}

export default {
  navigate,
  setTopLevelNavigator,
  goBack,
  setRoot,
  remove,
  setParams,
  reset,
  push,
  pop,
  popToTop,
  replace,
  replaceRoute,
};
