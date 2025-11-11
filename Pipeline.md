# CI/CD Pipeline

## Overview
The pipeline automates testing, building, and deployment for both frontend and backend.

## Steps

1. **Checkout Code**
   - CircleCI fetches the latest code from GitHub.

2. **Install Dependencies**
   - Runs `npm install` for both backend and frontend directories.

3. **Run Tests**
   - Executes automated tests to ensure code quality.

4. **Build Frontend**
   - Runs `npm run build` in the Angular app to generate the production build.

5. **Deploy Backend**
   - Deploys the Node.js API to AWS Elastic Beanstalk using AWS CLI.

6. **Deploy Frontend**
   - Uploads the Angular build folder to the S3 bucket and invalidates CloudFront cache.

7. **Notify**
   - Displays build success or failure in CircleCI dashboard.
