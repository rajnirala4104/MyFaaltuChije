import { Schema, model } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
   {
      videoFile: {
         type: String, // from cloudinary
         requied: true,
      },
      thumbnail: {
         type: String, // from cloudinary
         required: true,
      },
      title: {
         type: String,
         requied: true,
      },
      description: {
         type: String,
         requied: true,
      },
      duration: {
         type: Number, // from cloudinary
         requied: true,
      },
      view: {
         type: Number,
         default: 0,
      },
      isPhublished: {
         type: Boolean,
         requied: true,
      },
      owner: {
         type: Schema.Types.ObjectId,
         ref: "User",
      },
   },
   { timestamps: true },
);

videoSchema.plugin(mongooseAggregatePaginate);

const Video = model("Vidoe", videoSchema);
export { Video };
