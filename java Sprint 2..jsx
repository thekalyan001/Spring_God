
--------------------------------GIT & GITLAB------------------------------ 
***push to git***
git clone xxx..
make changes---
git status
git add *
git commit -m "your comment"
git push branch name.




bring latest changes from git..

git fetch  ->then git merge or
git pull.

--------------------
stash->made changes but in future more changes can happen (it is in local right now)

git stash (add to stash)
git stash pop (unstash)

stage->want to push to remote.

merge conflict->changes in same line locally and remotely but locally pull not taken-> then after git push will create merge conflict which one to prioritise.


----------------LINUX-------
We can use the ls -lah command to list as given

Long listing → -l
Show hidden files → -a
Show file size in human readable format → -h











----------------------Java---------------
Incapsulation, abstraction, polymorphism and inheritance.
What is Java Inheritance?
What are the different types of inheritance in Java?
Why to use inheritance in java?
How to access any data member or methods of the parent class in Java?
Is it possible for a class to extend itself in Java inheritance?
What is the output of the program, when derived class extends base class?
Why is Multiple Inheritance not supported in Java?

give each answer in breaf
ChatGPT
Java Inheritance:

Definition: Inheritance is a mechanism in Java that allows a class to inherit properties and behaviors from another class. The class that is inherited from is called the superclass, and the class that inherits is called the subclass.
Types of Inheritance in Java:

Single Inheritance: A class inherits from only one superclass.
Multilevel Inheritance: A class inherits from another class, and then a new class inherits from that derived class.
Hierarchical Inheritance: Multiple classes inherit from a single superclass.
Multiple Inheritance (interface-based): A class implements multiple interfaces.
Why to Use Inheritance in Java:

Code Reusability: Inheritance promotes code reuse by allowing the subclass to inherit attributes and behaviors from the superclass.
Method Overriding: Subclasses can provide a specific implementation for methods defined in the superclass.
Polymorphism: Inheritance supports polymorphism, enabling objects of the subclass to be treated as objects of the superclass.
Accessing Data Members or Methods of the Parent Class in Java:

Keyword super: To access members of the superclass, use the super keyword.
Example: super.methodName(); or super.variableName;
Class Extending Itself in Java Inheritance:

Not Possible: A class cannot extend itself in Java. This would lead to a circular dependency and is not allowed.
Output of Program When Derived Class Extends Base Class:

The derived class inherits the attributes and behaviors of the base class.
If methods are overridden in the derived class, the overridden methods in the derived class will be called.
Why Multiple Inheritance Not Supported in Java:

Diamond Problem: Multiple inheritance can lead to ambiguity when a class inherits from two classes with conflicting methods.
Complexity: Multiple inheritance adds complexity to the language and can make the code difficult to understand and maintain.
Interface-based Approach: Java supports multiple inheritance through interfaces, which avoids the issues associated with multiple inheritance in the traditional sense.

* overloading happens in same class. function has to be same but different parameter.  It may/maynot require inheritance. 
* overriding happens in different class. function and parameter both has to be same. Require inheritance.

JVM (Java Virtual Machine) is responsible for executing Java bytecode and translating it into machine-specific instructions. 
It provides a runtime environment for Java programs, handling tasks such as memory management, garbage collection, and bytecode interpretation. 
The JVM ensures platform independence by abstracting the underlying hardware and operating system,


JRE (Java Runtime Environment) provides the necessary runtime environment for executing Java applications. 
It includes the JVM, Java class libraries, and supporting files required to run Java programs. On the other hand, 
JDK (Java Development Kit) is required for Java application development and includes development tools such as compilers and debuggers. 
While options (a) and (b) correctly describe the purpose of JRE and JDK respectively, option (c) provides the distinction between the two.


The ClassPath specifies the location(s) where the JVM should look for Java class files.
JUnit is a unit testing open-source framework for the Java programming language.


https://www.javatpoint.com/java-annotation
https://www.geeksforgeeks.org/microservices/
https://www.baeldung.com/junit-5
https://www.devopsschool.com/blog/what-is-junit-and-how-it-works-an-overview-and-its-use-cases/

----------------------------------------------------------Terminal
gradle

