# 1
# Hacer un programa para mostrar por pantalla los números del 1 al 20 salteando de a 3 elementos. Es decir: 1, 4, 7, 10, 13, 16, 19.

# Importante: El programa no tiene ningún ingreso de datos.

from asyncio.windows_events import NULL


def numeros1al20():
    for num in range(1, 20, 3):
        print(num)

# numeros1al20()


# 2
# Hacer un programa para mostrar por pantalla los números del 20 al 1 en orden decreciente.

# Importante: El programa no tiene ningún ingreso de datos.

def numeros20al1():
    numMax = 20
    for num in range(20):
        print(numMax - num)

# numeros20al1()

# 3
# Hacer un programa para que el usuario ingrese un número positivo y que luego se muestren por pantalla los números entre el 1 y el número ingresado por el usuario. Ejemplo. Si el usuario ingresa 15, se mostrarán los números entre el 1 y el 15.


def numerosRango():
    entradaPositivo = int(input("Ingresa un numero positivo: "))
    for num in range(2, entradaPositivo):
        print(num)


# numerosRango()


# 4
# Hacer un programa para que el usuario ingrese dos números y luego el programa muestre por pantalla los números entre el menor y el mayor de ambos. Ejemplo, si el usuario ingresa 3 y 15, se mostrarán los números entre el 3 y el 15; y si el usuario ingresa 25 y 8, se mostrarán los números entre el 8 y el 25.

def numerosRango2():
    entradaNum1 = int(input("Ingresa el primer numero: "))
    entradaNum2 = int(input("Ingresa el segundo numero: "))
    min = entradaNum1
    max = entradaNum2
    if not min < entradaNum2:
        min = entradaNum2
        max = entradaNum1

    for num in range(min + 1, max):
        print(num)

# numerosRango2()


# 5
# Hacer un programa para ingresar un N valor que indica la cantidad de números que componen una lista y luego solicitar se ingresen esos N números. Se pide informar cuantos son positivos

def programa(N):
    arr = []
    count = 0
    for num in range(N):
        arr.append(int(input(f"Ingresa el {num+1}° numero: ")))
        if arr[num] > 0:
            count += 1
    return print(f"Se ingresaron {count} numeros positivos")


# programa(8)

# 6
# Hacer un programa para ingresar una lista de 10 números, luego informar cuántos son positivos, cuántos son negativos, y cuántos iguales a cero.


def lista():
    pos = 0
    neg = 0
    ceros = 0
    arr = []
    for num in range(10):
        arr.append(int(input(f"Ingresa el {num+1} numero: ")))
        if arr[num] > 0:
            pos += 1
        elif arr[num] < 0:
            neg += 1
        else:
            ceros += 1
    print(f"Son {pos} numeros positivos, {neg} numeros negativos y {ceros} ceros.")

# lista()


# 7
# Hacer un programa que permita ingresar el sueldo de 10 empleados y determine:
# El sueldo máximo.
# El sueldo mínimo.
# El sueldo promedio.
# Cantidad de sueldos mayores a $50000.

def sueldos():
    arr = []
    sueldoMayor = 0
    sueldoMenor = 0
    promedio = 0
    countMayores50000 = 0
    for num in range(10):
        arr.append(int(input(f"Ingresa el {num+1} sueldo: ")))
        if sueldoMayor == 0 or sueldoMayor < arr[num]:
            sueldoMayor = arr[num]
        elif sueldoMenor == 0 or sueldoMenor > arr[num]:
            sueldoMenor = arr[num]

        if arr[num] > 50000:
            countMayores50000 += 1

    for value in arr:
        promedio += value

    promedio //= len(arr)
    print(f"\nEl sueldo máximo es {sueldoMayor}", f"El sueldo mínimo es {sueldoMenor}",
          f"El sueldo promedio es {promedio}", f"La cantidad de sueldos mayores a $50000 son {countMayores50000}", sep="\n")


# sueldos()


# 8
# Hacer un programa que permita ingresar el legajo y sueldo de 10 empleados y determine:
# El legajo del empleado con mayor sueldo

def legajoSueldo():
    arr = []
    obj = {}
    mayorSueldo = 0
    legajoConMasSueldo = NULL
    for num in range(2):
        obj["legajo"] = int(input("Ingrese el numero del legajo: "))
        obj["sueldo"] = int(input(
            f"Ingrese el sueldo del empleado numero {num+1} con legajo {obj['legajo']}: "))
        arr.append(obj)

        if mayorSueldo == 0 or mayorSueldo < obj["sueldo"]:
            mayorSueldo = obj["sueldo"]
            legajoConMasSueldo = obj["legajo"]

    print(
        f"El legajo del empleado con mayor sueldo es { legajoConMasSueldo }")


# legajoSueldo()


# 9
# Hacer un programa para ingresar una lista 10 números e informar el máximo de los negativos y el mínimo de los positivos. Ejemplo: 5, 8, 12, 2, -10, 15, -20, 8, -3, 24.
# Máximo Negativo: -3.
# Mínimo Positivo: 2.

def maxNegPos():
    arr = []
    maxNeg = 0
    minPos = 0

    for num in range(10):
        arr.append(int(input(f"Ingrese el {num+1}° numero: ")))
        if arr[num] < 0 and (maxNeg == 0 or maxNeg < arr[num]):
            maxNeg = arr[num]

        elif arr[num] > 0 and (minPos == 0 or minPos > arr[num]):
            minPos = arr[num]
    print(
        f"Máximo Negativo: {maxNeg}", f"Mínimo Positivo: {minPos}", sep="\n")


# maxNegPos()

# 10
# Dada una lista de 7 números informar cual es el primer y segundo número impar ingresado.
# Ejemplo: 8, 4, 5, 6, -9, 5,7 se informa 5 y -9.

def informe():
    arr = []
    primerNumImp = 0
    segundoNumImp = 0
    for num in range(7):
        arr.append(int(input(f"Ingresa el {num + 1}° numero: ")))
        if primerNumImp != 0 and segundoNumImp != 0:
            continue
        if arr[num] % 2 == 1:
            if primerNumImp != 0:
                segundoNumImp = arr[num]
            else:
                primerNumImp = arr[num]

    print(f"Primer impar: {primerNumImp}",
          f"Segundo impar: {segundoNumImp}", sep="\n")

# informe()


# 11
# Hacer un programa para ingresar una lista de 8 números y luego informar si todos están ordenados en forma creciente. En caso de haber dos números “empatados” considerarlos como crecientes.
# Por ejemplo si la lista fuera:
# Ejemplo 1: -10, 1, 5, 7, 15, 18, 20, 23 se emitirá un cartel: “Conjunto Ordenado”
# Ejemplo 2: 10, 10, 15, 20, 25, 25, 28, 33 se emitirá un cartel: “Conjunto Ordenado”
# Ejemplo 3: 10, 1, 15, 7, -15, 18, 20, 23 se emitirá un cartel: “Conjunto No Ordenado”

def orden():
    arr = []
    orden = "Ordenado"
    numBefore = NULL
    for num in range(8):
        arr.append(int(input(f"Ingresa el {num + 1}° numero: ")))
        if numBefore == NULL:
            numBefore = arr[num]
        elif not numBefore < arr[num]:
            orden = "No Ordenado"
        numBefore = arr[num]
    print(orden)

# orden()


# 12
# Hacer un programa para ingresar 5 números, luego informar los 2 mayores valores ingresados, aclarando cual es el máximo y cual el que le sigue.
# Ejemplo: 10, 8, 12, 14, 3 el resultado será 14 y 12.
# Ejemplo: 14, 8, 12, 14 ,3 el resultado será 14 y 14.
# Ejemplo: -4, -8, -12, -20, -2 el resultado será -2 y -4

def dosValMayor():
    arr = []
    primerNumMayor = segundoNumMayor = NULL
    for num in range(5):
        arr.append(int(input(f"Ingresa el {num + 1}° numero: ")))
    
    # No funciona este pedazo de código comentado
    """ cambio = False
    i = 0
    while(cambio == False):
        for j in range(len(arr)):
            j = i + 1
            if arr[i] > arr[j]:
                temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp

        i += 1 """ 
        
    arr = sorted(arr)

    primerNumMayor = arr[len(arr) - 1]
    segundoNumMayor = arr[len(arr) - 2]

    print(f"El mayor es: {primerNumMayor} y el que le sigue {segundoNumMayor}")


dosValMayor()

# 13
# Hacer un programa para ingresar un número y luego informar todos los divisores de ese número.
# Ejemplo 1. Si se ingresa 6 se listarán: 1, 2, 3 y 6
# Ejemplo 2. Si se ingresa 9 se listarán: 1, 3 y 9.
# Ejemplo 3. Si se ingresa 11 se listarán 1 y 11.


# 14
# Hacer un programa para ingresar un número y luego informar la cantidad de divisores de ese número.
# Ejemplo 1. Si se ingresa 6 se listarán: 4 divisores.
# Ejemplo 2. Si se ingresa 9 se listarán: 3 divisores.
# Ejemplo 3. Si se ingresa 11 se listará: 2 divisores.


# 15
# Hacer un programa para ingresar un número positivo y calcular e informar si el mismo es un número primero. Recordar que un número primo es un número natural que tiene exactamente dos divisores.


# 16
# Hacer un programa que muestre los números primos entre el 1 y el 10000. El usuario no debe ingresar nada en este programa.


# 17
# Una estación meteorológica registró una muestra climática de los últimos 15 días. Por cada día registró:
# Número de día (entero)
# Temperatura (float)
# Milímetros de lluvia (float)
# Visibilidad en km (float)

# Hay un registro por cada día. La información se encuentra ordenada por día. Se pide calcular e informar:
# El número de día que se haya registrado la temperatura máxima.
# La amplitud térmica de todo el período.
# La cantidad de días con neblina.
# Mostrar "Quincena lluviosa" si hubo más días de lluvia que días sin lluvia. Mostrar "Quincena húmeda" si llovió al menos un tercio de los días. De lo contrario mostrar "Quincena seca".

# NOTA: La amplitud térmica es la diferencia entre la temperatura máxima y la temperatura mínima.
# NOTA: Se considera neblina a una visibilidad menor a 2 km.


# 18
# La cuenta corriente de la famosa cantante Lady Lara ha registrado 14 movimientos durante la semana pasada. Por cada movimiento se registró:
# Número de movimiento
# Día
# Tipo ('E' - Extracción / 'D' - Depósito)
# Importe

# Existe un registro por movimiento. Se desea calcular e informar:
# El saldo final de la cuenta.
# El porcentaje de movimientos de extracción y el porcentaje de depósito.
# El depósito de mayor importe indicando también día y número de movimiento.
# La cantidad de movimientos del día 10.


# 19
# Dada una lista de 10 números enteros. Calcular e informar el primer número par, el primer número primo.

# 20
# Se dispone de la información de los últimos 19 partidos del futbolista Diego Armando Laradona. Por cada partido se registró:
# Número de partido
# Minutos jugados
# Tarjetas amarillas
# Tarjetas rojas
# Goles

# Existe un registro para cada partido. Los mismos se encuentran ordenados por número de partido. Se pide calcular e informar:
# La cantidad de partidos que no jugó (partidos con minutos igual a cero)
# La cantidad de partidos que jugó por completo (minutos >= 90)
# El promedio de tarjetas recibidas por partido.
# El número de partido en el que haya convertido mayor cantidad de goles. Indicar también los goles convertidos.
# La mejor racha de partidos convirtiendo goles. Se debe mostrar la mayor cantidad de partidos consecutivos en los que haya convertido.
