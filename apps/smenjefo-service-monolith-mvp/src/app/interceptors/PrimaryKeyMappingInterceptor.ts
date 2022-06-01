import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from "@nestjs/common";

import { Observable, map } from "rxjs";

const isObject = (value) => {
  return !!(
    value !== null &&
    typeof value === "object" &&
    !Array.isArray(value)
  );
};

const idToUuidRecursive = (object) => {
  if (Array.isArray(object)) {
    return object.map(idToUuidRecursive);
  }
  
  if (isObject(object)) {
    // eslint-disable-next-line no-prototype-builtins
    if (object.hasOwnProperty('id')) {
      if (!object.uuid) {
        // remove extra id
        delete object.id;
      } else {
        // replace id with uuid, and then remove uuid
        object.id = object.uuid;
        delete object.uuid;
      }
    }

    Object.keys(object).forEach((key) => {
      return idToUuidRecursive(object[key]);
    });
  } else {
    return object;
  }
};

@Injectable()
export default class PrimaryKeyMappingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle()
      .pipe(map((data) => {
        idToUuidRecursive(data);
        
        return data;
      }));
  }
}