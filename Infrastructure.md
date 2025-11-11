# Infrastructure

## AWS Services Used
- **RDS (PostgreSQL):** hosts the relational database for the application.
- **Elastic Beanstalk:** hosts the Node.js backend API.
- **S3 Bucket:** stores and serves the Angular frontend build files.
- **CloudFront:** distributes the frontend globally for faster access.
- **IAM Roles:** manage access permissions for AWS services.

## Connections
- The backend (Elastic Beanstalk) connects to the RDS instance using environment variables.
- The frontend (S3/CloudFront) communicates with the backend API endpoint hosted on Elastic Beanstalk.

## Deployment Flow
1. CircleCI builds and tests the project.
2. CircleCI deploys the backend to Elastic Beanstalk.
3. CircleCI deploys the frontend build to S3.
4. CloudFront caches and delivers the content worldwide.
