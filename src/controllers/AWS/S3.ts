import AWS from "aws-sdk";
import { env } from "../../config";

let s3bucket = new AWS.S3({
  accessKeyId: env.aws_key_id,
  secretAccessKey: env.aws_secret_key,
});

const uploadToS3 = (name: string, image: any) => {
  s3bucket.createBucket(() => {
    var params = {
      Bucket: `${env.aws_bucket_name}`,
      Key: name,
      Body: image,
    };
    s3bucket.upload(params, (err: Error, data: any) => {
      if (err) {
        throw err;
      }
      console.log("success");
      console.log(data);
    });
  });
};

export { uploadToS3 };
