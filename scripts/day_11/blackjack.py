import random
from art import logo

cards = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]

def current_score(hand):
    score = 0
    for card in hand:
        score += card
    return score

def final_score(player, dealer):
    outcome = ""
    print(f'Dealer final score: {dealer}')
    print(f'Player final score: {player}')
    if player > dealer:
        print("You win!")
        outcome = "win"
        return outcome
    else:
        print("You lose!")
        outcome = "loss"
        return outcome
print(logo)
player_money = 2000
print(f'Your money = {player_money}')
again = 'y'
while again != 'n':
    wager = int(input('How much do you wager?'))
    while wager > player_money:
        wager = int(input("You don't have enough for that wager. Enter a new amount."))

    player_hand = []
    dealer_hand = []
    player_hand.append(random.choice(cards))
    player_hand.append(random.choice(cards))
    dealer_hand.append(random.choice(cards))
    dealer_hand.append(random.choice(cards))
    player_current_score = 0
    dealer_current_score = 0

    print(f'Your hand: {player_hand}')
    print(f'Dealer hand: {dealer_hand}')
    move = input('Do you want to stand or hit? Type s for stand or h for hit.').lower()
    while move != 's':
        player_hand.append(random.choice(cards))
        player_hand.sort()
        print(f'Your hand: {player_hand}')
        player_current_score = current_score(player_hand)
        #print(f'Current score = {current_score(player_hand,player_current_score)}')
        if player_current_score <= 21:
            move = input('Do you want to stand or hit? Type s for stand or h for hit.').lower()
        elif player_current_score > 21:
            if 11 in player_hand:
                player_hand[len(player_hand)-1] = 1
                current_score(dealer_hand)
                move = input('Do you want to stand or hit? Type s for stand or h for hit.').lower()
            else:
                print('You went over 21. You lose!')
                player_money -= wager
                break
    player_current_score = current_score(player_hand)
    if player_current_score <= 21:
        dealer_current_score = current_score(dealer_hand)
        dealer_bust = False
        dealer_hand.sort()
        while dealer_current_score < 17:
            dealer_hand.append(random.choice(cards))
            print(f'Dealer hand: {dealer_hand}')
            dealer_current_score = current_score(dealer_hand)
            if dealer_current_score > 21:
                if 11 in dealer_hand:
                    dealer_hand[-1] = 1
                    dealer_current_score = current_score(dealer_hand)
                else:
                    dealer_bust = True
                    break
        if not dealer_bust:
            if final_score(player_current_score,dealer_current_score) == "win":
                player_money += wager
            else:
                player_money -= wager
        else:
            print("Dealer bust. You win!")
            player_money += wager
    elif player_money == 0:
        print('You ran out of money. Game over.')
        break
    else:
        print('Would you like to play again?')

    if player_money == 0:
        break
    print(f'You currently have {player_money}.')
    again = input('Would you like to play again? Type y for yes or n for no.').lower()
print(f'Your final amount is {player_money}')