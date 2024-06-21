from tkinter import messagebox, simpledialog, Tk

def is_even(number):
    return number % 2 == 0

def get_even_letters(message):
    even_letters = []
    for counter in range(0, len(message)):
        if is_even(counter):
            even_letters.append(message[counter])
    return even_letters

def get_odd_letters(message):
    odd_letters = []
    for counter in range(0, len(message)):
        if not is_even(counter):
            odd_letters.append(message[counter])
    return odd_letters

def swap_letters(message):
    letter_list = []
    if not is_even(len(message)):
        message = message + "X"
    even_letters = get_even_letters(message)
    odd_leters = get_odd_letters
    for counter in range(0, int(len(message)/2)):
        letter_list.append(odd_leters[counter])
        letter_list.append(even_letters[counter])
    new_message = "".join(letter_list)

def get_task():
    task = simpledialog.askstring("Task", "Quieres encriptar o desencriptar")
    return task

def get_message():
    message = simpledialog.askstring("message", "enter your message")
    return message

root = Tk()

while True:
    task = get_task()
    if task == "encriptar":
        message = get_message()
        encryped = swap_letters(message)
        messagebox.showinfo("your message is: ", encryped)
    elif task == "desencriptar":
        message = get_message()
        decryped = swap_letters(message)
        messagebox.showinfo("your message is: ", decryped)
    else:
        break

root.mainloop()