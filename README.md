![Node.js CI](https://github.com/alesut/host-services-manager/workflows/Node.js%20CI/badge.svg)
# host-services-manager

## setup

### environment variables

- PORT - port where server will listen to

## development

### install dependencies

```sh
npm install
```

### run server

set environment variable `MOCK_SERVICES` to `true`

```sh
npm start
```

### issues

- sudo is required for checking chef status. You can be asked to prompt for password in terminal depending on sudo setting on you system