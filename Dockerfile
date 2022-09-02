FROM maven:3.8.6-eclipse-temurin-18 as build
ENV HOME=/usr/app
RUN mkdir -p $HOME
WORKDIR $HOME
ADD . $HOME
RUN mvn clean package

FROM eclipse-temurin:18
COPY --from=build /usr/app/target/*.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]
EXPOSE 80