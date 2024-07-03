import { Document, ObjectId } from 'mongoose';

export interface NewBlogRequestBody extends Document {
  title: string;
  name: string;
  description: string;
  content: string;
  image: string;
  date: Date;
  creator: ObjectId;
}
