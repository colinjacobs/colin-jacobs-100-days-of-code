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


  {
    day: 3,
    name: "Treasure Island Game",
    desc: "A quick choose your own adventure game.",
    tags: ["if", "nested if"],
    code: `# Day 3 - Treasure Island Game

print("Welcome to Treasure Island.")
print("Your mission is to find the treasure.")
print("You arrive at a crossroads. The right path leads across a bridge. The left path leads to the lake.").lower()
choice1= input("Which path will you choose? Type 'left' or 'right'.").lower()
if choice1 == "left":
    choice2 = input("You arrive at a lake. Will you swim across or wait for a boat? Type 'swim' or 'wait'.")
    if choice2 == "wait":
        print("A boat arrives to take you across. You arrive at a building with 3 doors.")
        choice3=input("Which will you choose? Type 'red', 'yellow' or 'blue'.").lower()
        if choice3=="red":
            print("Burned by fire. Game over")
        elif choice3=="blue":
            print("Eaten by wild beasts. Game over.")
        elif choice3 == "yellow":
            print("You win!")
        else:
            print("Game over.")
    else:
        print("Attacked by trout. Game Over.")
elif choice1 == 'right':
    print("Fall into a hole. Game over.")
else:
    print("Not a valid choice. Please try again.")`
  },

  {
    day: 4,
    name: "Rock, paper, scissors",
    desc: "Classic game where you select the number of rounds you want to play",
    tags: ["lists", "while loops", "index", "index"],
    code: `# Day 4 - Rock, Paper, Scissors
import random
rock = '''
    _______
---'   ____)
      (_____)
      (_____)
      (____)
---.__(___)
'''

paper = '''
    _______
---'   ____)____
          ______)
          _______)
         _______)
---.__________)
'''

scissors = '''
    _______
---'   ____)____
          ______)
       __________)
      (____)
---.__(___)
'''
game_images = [rock, paper, scissors]
selection_names = ["rock", "paper", "scissors"]
player_score = 0
computer_score = 0

while True:
    try:
        score = int(input("What score will you play to? Pick a number. "))
        if score > 0:
            break
        else:
            print("Choose a number greater than 0.")
    except ValueError:
        print("Choose number to play to.")

while player_score < score and computer_score < score:
    player_choice = input("Make your selection: Type 'r' for rock, 'p' for paper or 's' for scissors.").lower()
    while player_choice not in ['r', 'p', 's']:
        print("Please choose a valid input")
        player_choice = input("Make your selection: Type 'r' for rock, 'p' for paper or 's' for scissors.")
    selection_input = ['r', 'p', 's']
    selection_input_array = [0,1,2]
    print(f"Player choice: {selection_names[selection_input.index(player_choice)]}")
    print(f"{game_images[selection_input.index(player_choice)]}")
    computer_choice = random.randint(0,2)
    computer_select = [0,1,2]
    print(f"Computer choice: {selection_names[computer_select.index(computer_choice)]}")
    print(f"{game_images[computer_select.index(computer_choice)]}")
    player_choice_num = selection_input_array[selection_input.index(player_choice)]
    results = [player_choice_num, computer_choice]
    print(results)

    if results[0] == results[1]:
         print("Tie game!")
    elif results [0] == 0 and results [1] == 2:
         print("Player wins!")
         player_score += 1
    elif results [0] == 2 and results [1] == 0:
        print("Computer wins!")
        computer_score += 1
    elif results [0] > results [1]:
        print("Player wins!")
        player_score += 1
    else:
        print("Computer wins!")
        computer_score +=1
    print(f"Player score: {player_score}")
    print(f"Computer score: {computer_score}")
if computer_score > player_score:
    print("Computer wins the match!")
else:
    print("Player wins the match!")`
  }
];
