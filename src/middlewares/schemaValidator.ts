import { ObjectSchema } from "joi";
import { Request, Response, NextFunction } from "express";
export function validateSchema<T>(schema: ObjectSchema<T>){
  return (req: Request, res: Response, next: NextFunction) => { 
    const {error} = schema.validate(req.body, {abortEarly: false}); 
    if (error) {
      return res.status(422).send(error.details.map(detail => detail.message));
    }

    next();
  }
}
