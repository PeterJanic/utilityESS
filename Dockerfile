# Alpine Linux with OpenJDK JRE
FROM openjdk:8-jre-alpine
# copy fat WAR
COPY target/demo.jar /app.jar
# set port mapping
EXPOSE 80:8080
# runs application
CMD ["java", "-jar", "/app.jar"]
