# OOP-Teaching

In Object Oriented Programming, encapsulation is used to make class members public or private. Classes can actually control the visibility of its data members. This is done using access modifiers. There are three types of access modifiers in TypeScript: public, private and protected.

Public, as you suspect is accessable to everyone with no restrictions.
The private access modifiers make sure that class members cannot be accessed by things outside of the class it's contained in. This is very important for hiding sensitive data, or just data that people don't need to see.
The protected access modifier is simmilar to the private modifier. The difference is that protected class members can be accessed by their derived classes. This is very useful for sensitive info that still needs to be accessed, just not by everyone.

The static members of a class are accessed using the class name and dot notation, without creating an object
ex: <ClassName>.<StaticMember>.
