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
    name: "Prime Number Checker",
    desc: "Enter any number and find out if it's prime.",
    tags: ["loops", "math", "input"],
    code: `# Day 2 — Prime Number Checker

import math
number_to_check = int(input("Enter the number"))
dividers = []
num_sqrt = int(math.sqrt(number_to_check))
if number_to_check < 2:
    print("Numbers less than 2 are not prime.")
elif number_to_check == 2:
    print("Number is prime")
#elif number_to_check % 2 == 0:
#    print("Number is even and therefore not prime")
else:
    for number in range(2,num_sqrt+1):
        if number_to_check % number == 0:
            dividers.append(number)
            dividers.append(int(number_to_check/number))
    if not dividers:
        print(f"{number_to_check} is prime.")
    else:
        unique_dividers = list(dict.fromkeys(dividers))
        print(f"{number_to_check} is not prime.")
        print(f"Dividers: {sorted(unique_dividers)}")`
  },

];
