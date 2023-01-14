import random
import string

sig = [" + ", " - ", " * ", " : "]
numeros = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
signos = ["", "", "", "", "", " ", " ", " ", " ", " ="]
i = 0

print("biemvenido a creador de contraseñas")
cantnumstr = input("cuantos números quieres? ")
cantnum = int(cantnumstr)
for num in range(cantnum):
    numero = random.randrange(-100, 100)
    signo = random.choice(sig)
    numeros[i] = numero 
    signos[i] = signo
    print(i)
    i = i + 1
print (numeros)
print (signos)
operacion = str(numeros[0]) + signos[0] + str(numeros[1]) + signos[1] + str(numeros[2]) + signos[2] + str(numeros[3])\
 + signos[3] + str(numeros[4]) + signos[4] + str(numeros[5]) + signos[5] + str(numeros[6]) + signos[6] + str(numeros[7])\
+ signos[7] + str(numeros[8]) + signos[8] + str(numeros[9]) + signos[9] #+ str(numeros[9+1]) + signos[9+1]
print(operacion)
