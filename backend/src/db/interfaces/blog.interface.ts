/**
 * Base Blog interface used in BlogModel.
 */
export interface blogInterface extends Document{
    title:string;
    name:string;
    description:string;
    content:string;
    image:string;
    date:Date;
    createdAt:Date;
    updatedAt:Date;
}