/**
 * Interface that defines user variables to store.
 */
export interface userInterface extends Document{
    _id:string;
    name:string;
    photo:string;
    email:string;
    role:"admin" | "user";
    gender:"male" | "female";
    dob: Date;
    createdAt:Date;
    updateAt:Date;
}