# snoopy-chat

Modern live-chat using React, NodeJS, Socket.io, MongoDB

**Refer from:**

[Youtube - 2022: Realtime Chat App with React, Node.js, Socket.io and MongoDB](https://www.youtube.com/watch?v=otaQKODEUFs)

[Github](https://github.com/koolkishan/chat-app-react-nodejs)

## MongoDB:

[Pull & Bash Mongodb in docker](https://hub.docker.com/_/mongo)
[Install & Interact Mongodb](https://techviewleo.com/install-mongodb-on-ubuntu-linux/)
[Mongodb guide](https://www.mongodb.com/compatibility/docker)

```
$ docker run --name mongodb -d -p 27017:27017 mongo
$ docker exec -it mongodb bash

# mongosh
> db.createUser({user: "mongodbuser", pwd: passwordPrompt(), roles: [{role: "userAdminAnyDatabase", db: "admin"}, "readWriteAnyDatabase"]})
> exit

# mongosh -u mongodbuser -p --authenticationDatabase admin
> show dbs
> use mongotestdb # create new db
> db.employeedetails.insertOne({F_Name: "John", L_NAME: "Doe", ID_NO: "23456", AGE: "25", TEL: "0123456789"}) # create new record
> show collections
> db.employeedetails.find().pretty() # list records
```

## Docker

**Dockerfile:**

[1](https://hevodata.com/learn/docker-nodejs-mongodb/)
[2](https://www.bezkoder.com/docker-compose-nodejs-mongodb/)
[3](https://www.bogotobogo.com/DevOps/Docker/Docker-Compose-Node-MongoDB.php)
[4](https://docs.docker.com/language/nodejs/build-images/)
