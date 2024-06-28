/**
 * User types 
 */
export interface NewUserRequestBody {
   _id:string;
   name:string;
   email:string;
   image:string;
   role:string;
   gender:string;
   dob:Date;
}