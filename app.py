# Declare a variable
hello = None

# Declare a string
greet = "Hello"

# Declare a number 
num = 10

# Declare a boolean

bool = True

# Arithmetic Operations

num += 2;
num *= 2;
num /= 3;
num -= 4;

# Comparison Operations 

# print(1 <= 2)

# Logical Operators

# print(True and False);
# print(True or False);
# print(True and True);

# Type of

# print(type(1));

# Conditional Logic

if False:
    print("Statement is true")
else: print("Statement is false")

# Ternary Conditional
condition = False
x = "Condition Is True" if condition else "Condition is False"

print(x)

# Else If

y = True

if(y and False): 
    print("If statement")
elif y: 
    print("Else If statement")
else: 
    print("Else statement")

# Lists

fruits = ["Oranges", "Bananas", "Apple"]

for fruit in fruits: 
    print(fruit)

print(fruits[1])

# Objects 

person = {
    "name": "John",
    "last_name": "Doe",
    "age": 32
}

print(person["age"])