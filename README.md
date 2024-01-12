# Spring_God
# Spring_God
https://www.ibm.com/topics/java-spring-boot
MAVEN- we dont have to manually install jar file for dependency it will do auto.
Bean- java class contains some getter and setter method.

____________*SPRING boot details*______________
Spring is framework which workas as an application framework and inversion of control container for the Java platform.

inversion of control->object creation ka control apne hath se htakar spring ko de de and spring runtime pr dynimacally object create krde and inject krde us process ko inversion of control kehte h.


Spring Framework offers a dependency injection feature that lets objects define their own dependencies that the Spring container later injects into them. This enables developers to create modular applications consisting of loosely coupled components that are ideal for microservices and distributed network applications.


Spring boot*___________________
Java Spring Boot (Spring Boot) is a tool that makes developing web application and microservices with Spring Framework faster and easier through three core capabilities:

Autoconfiguration

An opinionated approach to configuration

The ability to create standalone applications

Spring boot does all the configurations itself unlike jpa, jsp we have to add dependency and all other things manually.
It also add tomacat server we dont have to go though hectic process of configuring tomcat server.
dependencies like:- (POM.xml)
spring-boot-starter-data-jpa
spring-boot-starter-web
so when we add starter jar then it add all the files. META-INF/spring.factories file contains all the configurations.
what should be enable and disable is based on condition like when we add mvc then mvc configuration get added(it checks for classpath).

starting-a-project (may methods):
1. Create a maven project and add starter dependencies.
2. using spring initializer(https://start.spring.io/;)
3. use sts (spring tool suit)
4. using command line interface

Add auto save and start server
POM.xml
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-devtools</artifactId>
			<scope>runtime</scope>
			<optional>true</optional>
		</dependency>


---------------------------
