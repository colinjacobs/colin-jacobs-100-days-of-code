// ============================================================
//  100 DAYS OF CODE — COLIN JACOBS
//  Add new projects below. The site updates automatically.
//
//  TEMPLATE:
//  {
//    day: 4,
//    name: "Project Name",
//    desc: "One sentence about what this does.",
//    tags: ["tag1", "tag2"],
//    code: `# your python code here
//  print("hello")`
//  },
// ============================================================

const PROJECTS = [

  {
    day: 1,
    name: "Hello World",
    desc: "The classic first program — printing to the console.",
    tags: ["basics", "print"],
    code: `# Day 1 — Hello World
print("Hello, World!")
print("Python is running live in your browser.")
print("Built by Colin Jacobs — 100 Days of Code")`
  },

  {
    day: 2,
    name: "Band Name Generator",
    desc: "Asks for your city and pet name, then generates a band name.",
    tags: ["strings", "input"],
    code: `# Day 2 — Band Name Generator

print("Welcome to the Band Name Generator!")
print()

city = input("What city did you grow up in? ")
pet  = input("What is your pet's name? ")

band_name = city + " " + pet

print()
print(f"Your band name is: {band_name}")`
  },

  {
    day: 3,
    name: "Prime Number Checker",
    desc: "Enter any number and find out if it's prime.",
    tags: ["loops", "math", "input"],
    code: `# Day 3 — Prime Number Checker

def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False
    return True

print("Prime Number Checker")
print("--------------------")

num = int(input("Enter a number: "))

if is_prime(num):
    print(f"\\n{num} is a PRIME number.")
else:
    print(f"\\n{num} is NOT a prime number.")`
  },

];
