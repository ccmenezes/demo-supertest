![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)![Mocha](https://img.shields.io/badge/-mocha-%238D6748?style=for-the-badge&logo=mocha&logoColor=white)![](https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)

# SuperTest project

Testing an API using superTest framework. Dockerise the tests, copy the allure report to a machine host.

## Introduction

This project have a proposal to use the rest assured to test an API Rest.

https://jsonplaceholder.typicode.com/

Limitation

    Only get requests tested.

## Prerequisites
Do you need to have docker installed.

### How to perform the tests using docker

- Create a dockerimage
```bash
docker build -t supertest-image .
```

- Run a container and copy the report into a server or your PC
```bash
docker run --name myrestnpm-container -v /home/claudia/allure-report:/demo-supertest/allure-report supertest-image --clean
```

### Playground

If you need to play in our machine it's necessary to have node, java and allure installed in your computer.


#### How to install Allure locally?

This stage it's not mandatory, in case to check the report, do you need to run the tests locally, also Java is required.

Run the script below to install Allure locally

- Download the most recently version

```bash
wget -c https://github.com/allure-framework/allure2/releases/download/2.31.0/allure_2.31.0-1_all.deb
```
- Install the app with sudo privileges
```bash
sudo dpkg -i allure_2.31.0-1_all.deb
```
- Check if the installation occured with sucess
```bash
allure --version
```

To perform the tests run
```bash
npm run test-report
```

To generate the allure report
```bash
allure serve allure-results
```
After run this command the browser will open the report

## Cleaning up

After performing the tests, you can delete the container and image.

```bash
docker container rm -f myrestnpm-container  && docker image rm -f supertest-image
```
<mark>The configuration was performed in a debian environment, keep it in mind.</mark>
