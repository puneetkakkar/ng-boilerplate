import { methodBuilder, paramBuilder } from './http-utils.service';
import { HttpService, MediaType } from './http.service';

const enum RequestMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  OPTIONS = 'OPTIONS',
  HEAD = 'HEAD',
  PATCH = 'PATCH',
}

/* *********************************************
 * Class decorators
 * *********************************************/

/**
 * Set the base URL of REST resource
 * @param String url - base URL
 */
export function BaseUrl(url: string) {
  return <TFunction extends { new (...args: any[]) }>(Target: TFunction): TFunction => {
    Target.prototype.getBaseUrl = () => url;
    return Target;
  };
}

/**
 * Set default headers for every method of the HttpService
 * @param Object headers - deafult headers in a key-value pair
 */
export function DefaultHeaders(headers: any) {
  return <TFunction extends { new (...args: any[]) }>(Target: TFunction): TFunction => {
    Target.prototype.getDefaultHeaders = () => headers;
    return Target;
  };
}

/* *********************************************
 * Method decorators
 * *********************************************/

/**
 * GET method
 * @param string url - resource url of the method
 */
export let GET = methodBuilder(RequestMethod.GET);
/**
 * POST method
 * @param string url - resource url of the method
 */
export let POST = methodBuilder(RequestMethod.POST);
/**
 * PUT method
 * @param string url - resource url of the method
 */
export let PUT = methodBuilder(RequestMethod.PUT);
/**
 * DELETE method
 * @param string url - resource url of the method
 */
export let DELETE = methodBuilder(RequestMethod.DELETE);
/**
 * HEAD method
 * @param string url - resource url of the method
 */
export let HEAD = methodBuilder(RequestMethod.HEAD);
/**
 * PATCH method
 * @param string url - resource url of the method
 */
export let PATCH = methodBuilder(RequestMethod.PATCH);

/**
 * Set custom headers for a REST method
 * @param Object headersDef - custom headers in a key-value pair
 */
export function Headers(headersDef: any) {
  return (target: HttpService, propertyKey: string, descriptor: any) => {
    descriptor.headers = headersDef;
    return descriptor;
  };
}

/**
 * Set custom response type for a REST method
 * @param "arraybuffer" | "blob" | "json" | "text" responseType
 */
export function ResponseType(responseType: 'arraybuffer' | 'blob' | 'json' | 'text') {
  return (target: HttpService, propertyKey: string, descriptor: any) => {
    descriptor.responseType = responseType;
    return descriptor;
  };
}

/**
 * Defines the media type(s) that the methods can produce
 * @param MediaType producesDef - MediaType to be sent
 */
export function Produces(producesDef: MediaType) {
  return (target: HttpService, propertyKey: string, descriptor: any) => {
    descriptor.isJSON = producesDef === MediaType.JSON;
    descriptor.isFormData = producesDef === MediaType.FORM_DATA;
    return descriptor;
  };
}

/**
 * Defines the adatper function to modify the API response suitable for the app
 * @param TFunction adapterFn - function to be called
 */
export function Adapter(adapterFn: (...args: any[]) => any) {
  return (target: HttpService, propertyKey: string, descriptor: any) => {
    descriptor.adapter = adapterFn || null;
    return descriptor;
  };
}

/* *********************************************
 * Parameter decorators
 * *********************************************/

/**
 * Path variable of a method's url, type: string
 * @param string key - path key to bind value
 */
export let Path = paramBuilder('Path');
/**
 * Query value of a method's url, type: string
 * @param string key - query key to bind value
 */
export let Query = paramBuilder('Query')('Query');
/**
 * Body of a REST method, type: key-value pair object
 * Only one body per method!
 */
export let Body = paramBuilder('Body')('Body');
/**
 * Custom header of a REST method, type: string
 * @param string key - header key to bind value
 */
export let Header = paramBuilder('Header');
