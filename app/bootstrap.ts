import { bootstrap } from "angular2/platform/browser";
import { provide } from "angular2/core" ;

import { ROUTER_PROVIDERS, HashLocationStrategy, LocationStrategy } from 'angular2/router';

import {App} from "./app";

bootstrap(App, [
  ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: HashLocationStrategy})
]);
