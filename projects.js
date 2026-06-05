// ============================================================
//  100 DAYS OF CODE — COLIN JACOBS
//  Add new projects here. The site updates automatically.
//
//  TEMPLATE — copy and paste to add a new day:
//
//  {
//    day: 3,
//    name: "Your Project Name",
//    desc: "One sentence about what this does.",
//    tags: ["lists", "loops", "functions"],
//    code: `# Your Python code here
//  print("Hello")`
//  },
//
// ============================================================

const PROJECTS = [
  {
    day: 1,
    name: "Hello World",
    desc: "The classic first program — printing to the console and getting Python running.",
    tags: ["basics", "print"],
    code: `# Day 1 — Hello World
# Every journey starts here.

print("Hello, World!")
print("Python is live in your browser.")
print()
print("Built by Colin Jacobs — 100 Days of Code")`
  },

  {
    day: 2,
    name: "Band Name Generator",
    desc: "Combines two inputs to generate a unique band name using string concatenation.",
    tags: ["strings", "variables"],
    code: `# Day 2 — Band Name Generator
# Combines a city and a pet name to create a band name.

city = "Detroit"
pet  = "Shadow"

band_name = city + " " + pet

print("Welcome to the Band Name Generator")
print("------------------------------------")
print(f"City : {city}")
print(f"Pet  : {pet}")
print()
print(f"Your band name is: {band_name}")`
  },

  {
    day: 3,
    name: "Treasure Island",
    desc: "A text-based adventure game using conditional logic and branching paths.",
    tags: ["conditionals", "if/else", "game"],
    code: `# Day 3 — Treasure Island
# A choose-your-own-adventure using if/else logic.

print("Welcome to Treasure Island.")
print("Your mission: find the treasure.")
print()

# Simulating user choices — change these to explore different paths
choice1 = "left"   # "left" or "right"
choice2 = "swim"   # "swim" or "wait"
choice3 = "blue"   # "red", "yellow", or "blue"

print(f"> You chose to go {choice1}.")
if choice1 == "right":
    print("You fell into a hole. Game Over.")
else:
    print(f"> You chose to {choice2}.")
    if choice2 == "swim":
        print("You were attacked by trout. Game Over.")
    else:
        print(f"> You chose the {choice3} door.")
        if choice3 == "red":
            print("Burned by fire. Game Over.")
        elif choice3 == "blue":
            print("Eaten by beasts. Game Over.")
        else:
            print("You found the treasure! You Win!")`
  },
];
