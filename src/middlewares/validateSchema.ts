import Joi from "joi";
import { Request, Response, NextFunction } from "express";
import { wrongSchemaError } from "../utils/errorUtils.js";

export function validateSchema(schema: Joi.ObjectSchema) {
  return async (req: Request, _res: Response, next: NextFunction) => {
    const validation = await schema.validateAsync(req.body, { abortEarly: false });
    if (validation.error) throw wrongSchemaError(validation.error.message);

    next();
  };
}
