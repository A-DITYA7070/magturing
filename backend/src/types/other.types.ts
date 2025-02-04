import { NextFunction,Request,Response } from "express";

/**
 * Types for controllers..
 */
export type ControllerType = (
    req:Request,
    res:Response,
    next:NextFunction
) => Promise<void | Response<any,Record<string,any>>>;
