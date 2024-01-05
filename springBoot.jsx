installed java from https://www.oracle.com/java/technologies/downloads/
setup programFiles-java-jdk21-bin folder to enveronment veriable.

Javac appname.java
java appname

-----------springBoot install extension in vs code.
Spring Boot Tools.
Spring Boot extension Pack.
Spring Boot dashboard.
Spring initializr Java Support.

create app- https://start.spring.io/
Project-Maven  Language-Java
3.2.1 springBoot version.
Metadata:
Group com.FirstProject
Artifact: textproj
Name: demo testing project
Description: This is a testing project.
Packagename: com.firstproj.textproj(auto generete based on combine: Group+Artiface)
Packaging: Jar
Java: 17.
->GENERATE then unzip and open in vs code.


Else 
vs code me-> ctrl+p ->  >crate java project->choose your desired things.

-----------------------
Maven help to mange the project by providing things which is required to build it.
in project run->
./mvnw clean compile

mvnw use three phase (like lifecycle)-> clean(temp temp directory, files), default(building testing etc), site(report and files generated)
mvnw clean
	pre clean ->Hook before clean
	clean- Does actual clean
	post-clean- Hook after cleaning




------
errors
https://stackoverflow.com/questions/65331242/getting-error-java-home-not-found-in-your-environment-when-attempting-to-crea