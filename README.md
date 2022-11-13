<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

# Ref
https://github.com/ghulamabbas2/restaurants_api


# Module

provides metadata that Nest makes use of to organize the application structure. It's  as an effective way to organize your components.
<a href="https://docs.nestjs.com/modules" target="_blank"><img src="https://docs.nestjs.com/assets/Modules_1.png" alt="NPM Version" /></a>

- providers	- the providers that will be instantiated by the Nest injector and that may be shared at least across this module
- controllers	- the set of controllers defined in this module which have to be instantiated
- imports	- the list of imported modules that export the providers which are required in this module
- exports	- the subset of providers that are provided by this module and should be available in other modules which import this module. You can use either the provider itself or just its token (provide value)

# Controller

Controllers are responsible for handling incoming requests and returning responses to the client.
<a href="https://docs.nestjs.com/controllers" target="_blank"><img src="https://docs.nestjs.com//assets/Controllers_1.png" alt="NPM Version" /></a>

# Provider ( Service and so on )

Many of the basic Nest classes may be treated as a provider – services, repositories, factories, helpers, and so on. The main idea of a provider is that it can be injected as a dependency


# DTO (Data Tranfer Ojbect)
DTO is an object that defines how the data will be sent over the network

## Validation
https://docs.nestjs.com/techniques/validation


# Async function
https://docs.nestjs.com/controllers#asynchronicity


# Mongoose functions
https://mongoosejs.com/docs/api/model.html#model_Model-findOneAndUpdate


# Validator
https://github.com/typestack/class-validator


# Multipart form
https://docs.nestjs.com/techniques/file-upload


# S3 
https://www.npmjs.com/package/aws-sdk
Example: https://wanago.io/2020/08/03/api-nestjs-uploading-public-files-to-amazon-s3/


# JWT
https://github.com/nestjs/jwt

# Hasing and Encrytion
https://docs.nestjs.com/security/encryption-and-hashing#hashing



# Learn
promise
super() in herrict 


# Ordering middleware - guard - interceptor - pipe - filter

https://docs.nestjs.com/faq/request-lifecycle


# ORM 
https://typeorm.io/

# TypeOrm CLI
https://github.com/typeorm/typeorm/blob/master/docs/using-cli.md#installing-cli


# Test

npm run test -- auth.service.spec.ts



heroku logs --tail
heroku create my-nest
heroku git:remote -a my-nest
git push heroku master
heroku local web