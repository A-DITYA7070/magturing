/**
 * Interface that defines user variables to store.
 */
export interface userInterface extends Document{
    _id:string;
    name:string;
    photo:string;
    email:string;
    password:string;
    role:"admin" | "user";
    gender:"male" | "female";
    createdAt:Date;
    updateAt:Date;
}