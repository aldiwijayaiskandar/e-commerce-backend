"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadToS3 = void 0;
var aws_sdk_1 = __importDefault(require("aws-sdk"));
var config_1 = require("../../config");
var s3bucket = new aws_sdk_1.default.S3({
    accessKeyId: config_1.env.aws_key_id,
    secretAccessKey: config_1.env.aws_secret_key,
});
var uploadToS3 = function (name, image) {
    s3bucket.createBucket(function () {
        var params = {
            Bucket: "" + config_1.env.aws_bucket_name,
            Key: name,
            Body: image,
        };
        s3bucket.upload(params, function (err, data) {
            if (err) {
                throw err;
            }
            console.log("success");
            console.log(data);
        });
    });
};
exports.uploadToS3 = uploadToS3;
