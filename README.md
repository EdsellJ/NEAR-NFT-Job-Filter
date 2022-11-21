# NEAR NFT JOB FILTER
Here is a link to the Minting page: ![Minting Page](https://github.com/EdsellJ/hackathon-mint-page)

## Setting up a local Environment
 - run `yarn install`
 - install mongodb and set up a local server
 - create a .env file with these contents:
 ```
  PORT=3003
  MONGO_URL="mongodb://127.0.0.1:27017/job_test_local"
  REACT_APP_NEAR_ENV=testnet
  REACT_APP_CONTRACT_ID=haiiertest.testnet
```

 - run `yarn dev:server` to start the backend server
 - run `yarn db:seed` to seed the databas
 - run `yarn dev:client` to start the frontend
