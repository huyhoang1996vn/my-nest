import { S3 } from 'aws-sdk';
import { config } from 'aws-sdk';

export class APIFeatures{
    constructor(){}

    async uploadFile(file: any){
        config.update({
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
            region: process.env.AWS_REGION  ,
          });
        const s3 = new S3();
        const uploadResult = await s3.upload({
            Bucket: process.env.AWS_S3_BUCKET,
            Body: file.buffer,
            Key: `${new Date().toLocaleDateString('en-ZA')}/${file.originalname}`
        }).promise();
        console.log("LOGGER uploadResult ", uploadResult);
        return uploadResult
    }
}


