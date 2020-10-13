# Unit 10 OOP Homework: Template Engine - Employee Summary

## Description

This is a command-line interface for producing employee team summaries. Teams consist of 1 manager, and a number of engineers and interns.

## Usage

The user first specifies the number of engineers and interns present on a given squad, then are walked through prompts to fill in information for each employee.

The implementation is fairly robust, easily incorporating new employee types, extra questions, or policy changes as they happen (and they will happen. Imagine what happens when they finally insist on 2 managers per squad). There is some light error handling in the case a role isn't provided for some reason.

## Future possibilities

* In-app role editing; create new roles and designations, create new fields for existing roles, delete fields, etc
* More robust error handling/validation; nothing happens if you give the employee prompts a negative number
* Automatically open the HTML page when its done
