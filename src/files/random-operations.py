import random

# Definir los signos y los números
signos = [" + ", " - ", " * ", " : "]
numeros = []

# Mensaje de bienvenida
print("Bienvenido al creador de contraseñas")

# Solicitar la cantidad de números
cantnum = int(input("¿Cuántos números quieres? "))

# Generar los números y los signos
for _ in range(cantnum):
    numero = random.randint(-100, 100)
    signo = random.choice(signos)
    numeros.append(f"{numero}{signo}")

# Crear la operación y mostrarla
operacion = ''.join(numeros) + "="
print(operacion)
