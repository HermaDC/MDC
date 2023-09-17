
import random
import string


adjetives = ["dormilón", "lento", "tonto", "gracioso", "feo", "naranja", "azul"]
nouns = ["manzana", "pez", "dinosaurio", "pan", "casa", "perro"]
            

print("biemvenido a creador de contraseñas")
while True:

    for num in range(3):

          adjetivo = random.choice(adjetives)
          nombre = random.choice(nouns)
          numero = random.randrange(0, 100)
          contraseña = nombre + adjetivo  + str(numero)
          print('Tu contraseña es: %s' % contraseña)
    response = input('¿Quieres otra contraseña? s o n:')
    if response == 'n':
        break


    
