alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

def encrypt(text,shift,action):
    if action == "decode":
        shift = shift *-1
    elif action != "encode":
        print("Invalid input. Type either 'encode' or 'decode'")
        return
    cipher_text=''
    for letter in text:
        if letter in alphabet:
            fixed_shift = (alphabet.index(letter)+shift) % len(alphabet)
            new_letter = alphabet[fixed_shift]
            cipher_text+=new_letter
        else:
            cipher_text+=letter
    if action == 'encode':
        print(f'Your encoded message is {cipher_text}')
    else:
        print(f'Your decoded message is {cipher_text}')