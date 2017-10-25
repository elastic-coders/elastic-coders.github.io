
# Elastic site

Project based on Bootstrap

## Run

To Run

```shell
$ docker build -t elastic-coders/landing .
$ docker run --rm -it -p 8080:80 elastic-coders/landing
```


## Deploy

To Deploy

Prerequisites: If you haven't installed the AWS CLI, please follow the instructions here to do so. If you haven't installed Docker, please follow the instructions here to do so.
1) Retrieve the docker login command that you can use to authenticate your Docker client to your registry:

```shell
$ aws ecr get-login --region eu-west-1
```


NOTE: if you are getting an error as: A client error (AccessDeniedException) occurred when calling the GetAuthorizationToken operation: User: arn:aws:iam::XXX:user/YOURUSER is not authorized to perform: ecr:GetAuthorizationToken on resource: * , you might wanna use the following

```shell
export AWS_DEFAULT_PROFILE=YOURUSER
```

2) Run the docker login command that was returned in the previous step.

3) Build your Docker image using the following command. For information on building a Docker file from scratch see the instructions here. You can skip this step if your image is already built:

```shell
docker build -t elastic-website .
```

4) After the build completes, tag your image so you can push the image to this repository:

```shell
docker tag -f elastic-website:latest 949377834693.dkr.ecr.eu-west-1.amazonaws.com/elastic-website:latest
```

5) Run the following command to push this image to your newly created AWS repository:

```shell
docker push 949377834693.dkr.ecr.eu-west-1.amazonaws.com/elastic-website:latest
```

## License

Copyright © 2015 Elastic-Coders srl.
