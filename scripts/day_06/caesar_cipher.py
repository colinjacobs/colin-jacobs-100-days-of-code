from encrypt import encrypt
answer = 'yes'

while answer != 'no':
    action = input("Do you want to encode or decode the text?").lower()
    text = input("Type your message:\n").lower()
    shift = int(input("Type the shift number:\n"))

    encrypt(text,shift,action)
    answer = input("Would you like to encode or decode another word? Type 'yes' or 'no'")

    if answer != 'yes' and answer != 'no':
        answer = input("I didn't understand. Do you want to encode/decode another word? Type 'yes' or 'no'.")
print('Goodbye!')