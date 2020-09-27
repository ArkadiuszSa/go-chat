FROM golang:latest

WORKDIR /backend

COPY ./go.mod ./
COPY ./go.sum ./

RUN go get -v all

COPY . .

CMD go run index.go