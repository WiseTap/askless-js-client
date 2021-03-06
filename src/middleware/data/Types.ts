import {ResponseError} from "./response/ResponseCli";

export enum ModificationType {
  CREATE = "CREATE",
  UPDATE = "UPDATE",
  DELETE = "DELETE",
}
//Atenção os campos de ModificationType precisam estar inclusos em RequestType
export enum RequestType {
  CREATE = "CREATE",
  UPDATE = "UPDATE",
  DELETE = "DELETE",
  LISTEN = "LISTEN",
  CONFIRM_RECEIPT = "CONFIRM_RECEIPT",
  CONFIGURE_CONNECTION = "CONFIGURE_CONNECTION",
  READ = "READ",
}

export enum CrudRequestType {
  CREATE = "CREATE",
  UPDATE = "UPDATE",
  DELETE = "DELETE",
  READ = "READ",
}
export type ResponseErrorCode = "PERMISSION_DENIED" | "BAD_REQUEST" | "NEED_CONFIGURE_HEADERS" | "INTERNAL_ERROR" | "TOKEN_INVALID" | "LAST_CONNECTION_ATTEMPT_IS_STILL_IN_PROGRESS";

