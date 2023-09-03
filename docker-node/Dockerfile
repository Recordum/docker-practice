FROM node:14

WORKDIR /app

COPY package.json /app

# 이미지가 빌드될때 실행
RUN  npm install

COPY . /app

EXPOSE 8080

# 컨테이너가 실해된 이후 실행 
CMD [ "node", "app.mjs" ]