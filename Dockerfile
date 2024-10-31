# A docker image with node
FROM node:22-bullseye-slim

# Set the work directory where the source code is available, also the project management
WORKDIR /demo-supertest

# Define volume for allure reports
VOLUME /demo-supertest/allure-report

# Copy the source code from the main root to the containter main root
COPY . .

# Ensure install script has execute permission, then run it
RUN chmod +x ./dependencies.sh && ./dependencies.sh

# Install the test dependencies
RUN npm i

# Run the tests and generate allure reports
ENTRYPOINT ["sh", "-c", "npm run test-report && allure generate"]

