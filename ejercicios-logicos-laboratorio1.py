# 1
# Hacer un programa para ingresar por teclado la cantidad de horas trabajadas por un operario y el valor que se le paga por hora trabajada y listar por pantalla el sueldo que le corresponda.

def sueldo(horas, valorPorHora):
    resultado = horas * valorPorHora
    print(resultado)

# sueldo(10,200)

# 2
# Hacer un programa que solicite por teclado que se ingresen dos números y luego guardarlos en dos variables distintas. A continuación se deben intercambiar mutuamente los valores en ambas variables y mostrarlos por pantalla.
# Ejemplo: Suponiendo que se ingresan 3 y 8 como valores y que la variables usadas son A y B, entonces A=3 y B=8, pero luego debe quedar A=8 y B=3.


def intercambio(n1, n2):
    numero1 = n1
    numero2 = n2
    print("Numero A es --->", n1)
    print("Numero B es --->", n2)
    n1 = numero2
    n2 = numero1
    print("Ahora numero A es --->", n1)
    print("Ahora numero B es --->", n2)

# intercambio(3,8)

# 3
# Una concesionaria de autos paga a los vendedores un sueldo fijo de $ 15.000 más $ 2.000 de premio por cada auto vendido. Hacer un programa que permita ingresar por teclado la cantidad de autos vendidos por un vendedor y luego informar por pantalla el sueldo total a pagar.
# Ejemplo. Si la cantidad de autos vendidos fuera 4 entonces el sueldo total a pagar es de $ 23.000.


def concesionaria(autosVendidos):
    sueldoFijo = 15000
    premioPorVenta = 2000
    print(sueldoFijo + (premioPorVenta * autosVendidos))

# concesionaria(4)


# 4
# Hacer un programa para ingresar por teclado la cantidad de asientos disponibles en un avión y la cantidad de pasajes ocupados y luego calcular e informar el porcentaje de ocupación y el porcentaje de no ocupación del mismo.
# Ejemplo si el avión tiene 200 asientos disponibles y se vendieron 80 pasajes, el porcentaje de ocupación que se informará será de un 40% y el porcentaje de no ocupación será de un 60%.

def asientosAvion(disponibles, vendidos):
    noVendidos = disponibles - vendidos
    porcentajeDisponibles = noVendidos * 100 / disponibles
    porcentajeVendidos = vendidos * 100 / disponibles

    print(
        f"El porcentaje de asientos disponible es {porcentajeDisponibles} \ny los no disponibles son {porcentajeVendidos}")


# asientosAvion(200, 80)


# 5
# Un comercio vende tres marcas de alfajores distintas A, B y C. Hacer un programa para ingresar por teclado la cantidad de alfajores vendidos de cada una de las tres marcas y luego se informe el porcentaje de ventas para cada una de ellas.

# Ejemplo. Si se ingresa 100, 25 y 75 como cantidades vendidas entonces el programa calculará e informará A: 50%, B: 12,50% y C: 37,50%.

def alfajores(cantidadA, cantidadB, cantidadC):
    alfajoresTotal = cantidadA+cantidadB+cantidadC
    cienSobreAlfajoresTotal = 100 / alfajoresTotal
    porcentajeA = cantidadA * cienSobreAlfajoresTotal
    porcentajeB = cantidadB * cienSobreAlfajoresTotal
    porcentajeC = cantidadC * cienSobreAlfajoresTotal
    print(f"A:{porcentajeA} B:{porcentajeB} y C:{porcentajeC}")


# alfajores(100, 25, 75)

# 6
# Hacer un programa para que un comercio ingrese por teclado la recaudación en pesos para cada una de las cuatro semanas del mes. El programa debe listar la recaudación promedio por semana y el porcentaje de recaudación por semana.
# Ejemplo. Si se ingresa $ 1600, $ 1200, $ 4800 y $ 400 se listara como recaudación promedio $ 2000 y como porcentajes por semana: 20%, 15%, 60% y 5%.

def recaudacionPromedio(semana1, semana2, semana3, semana4):
    totalMensual = semana1 + semana2 + semana3 + semana4
    cienSobreTotalMensual = 100 / totalMensual
    porcentajeSemana1 = semana1 * cienSobreTotalMensual
    porcentajeSemana2 = semana2 * cienSobreTotalMensual
    porcentajeSemana3 = semana3 * cienSobreTotalMensual
    porcentajeSemana4 = semana4 * cienSobreTotalMensual
    porcentajePromedioSemana = (porcentajeSemana1 +
                                porcentajeSemana2 +
                                porcentajeSemana3 +
                                porcentajeSemana4) / 4
    valorPromedioSemana = totalMensual * porcentajePromedioSemana / 100
    print(f"Recaudación promedio $ {valorPromedioSemana}")
    print(
        f"Porcentajes por semana: {porcentajeSemana1}% {porcentajeSemana2}% {porcentajeSemana3}% y {porcentajeSemana4}%")


# recaudacionPromedio(1600, 1200, 4800, 400)

# 7
# Hacer un programa para ingresar por teclado el importe de una venta y el porcentaje de descuento aplicada a la misma y luego informar por pantalla el importa a pagar.
# Ejemplo 1. Si el importe de la venta es $ 1.200 y el descuento es el 15% entonces el total a pagar será de $ 1.020.
# Ejemplo 2. Si el importe de la venta es $ 800 y el descuento es el 0% entonces el total a pagar será de $ 800.

def venta(importe, descuento):
    valorDescuento = importe * descuento / 100
    totalPagar = importe - valorDescuento
    print(f"El total a pagar es ${totalPagar}")

# venta(1200,15)
# venta(800,0)

# 8
# Hacer un programa para ingresar por teclado el importe de una venta sin el descuento y el importe de esa misma venta con el descuento aplicado y luego informar por pantalla el porcentaje de descuento aplicada a la misma.
# Ejemplo 1. Si el importe de la venta sin descuento es $ 1.500 y el importe de la venta con descuento es $ 1.200 entonces el porcentaje de descuento aplicado fue el 20%.
# Importante: Le sugerimos que haga una prueba con este ejemplo, ya que muchos lo resuelven y concluyen que el descuento es el 80%. Eso NO es el descuento. Si el descuento fuera de 80% entonces una venta de $ 1.500 se cobraría tan solo $ 300.
# Ejemplo 2. Si el importe de la venta sin descuento es $ 500 y el importe de la venta con descuento es $ 500 entonces el porcentaje de descuento aplicado fue el 0%.


def venta2(importeSinDes, importeConDes):
    diferenciaImportes = importeSinDes - importeConDes
    porcentaje = diferenciaImportes * 100 / importeSinDes
    print(f"descuento aplicado fue el {porcentaje}%")

# venta2(1500,1200)
# venta2(500,500)


# 9
# Hacer un programa para ingresar por teclado una cantidad de minutos y mostrar por pantalla a cuantas horas y minutos equivalen.
# Ejemplo 1: si se ingresan 380 minutos el programa mostrará por pantalla que equivalen a 6 horas y 20 minutos.
# Ejemplo 2: si se ingresan 720 minutos el programa mostrará por pantalla que equivalen a 12 horas y 0 minutos.
# Ejemplo 3: si se ingresan 50 minutos el programa mostrará por pantalla que equivalen a 0 horas y 50 minutos

def horasConversion(minutos):
    minPorHora = 60
    conversionHS = minutos // minPorHora
    minRestantes = minutos % minPorHora
    print(f"{minutos} minutos equivalen a {conversionHS} y {minRestantes} minutos")

# horasConversion(380)
# horasConversion(720)
# horasConversion(50)

# 10
# Hacer un programa para ingresar por teclado una cantidad de horas y mostrar por pantalla a cuantos días y horas equivalen.
# Ejemplo 1: si se ingresan 26 horas el programa mostrará por pantalla que equivalen a 1 día y 2 horas.
# Ejemplo 2: si se ingresan 72 horas el programa mostrará por pantalla que equivalen a 3 días y 0 horas.
# Ejemplo 3: si se ingresan 20 horas el programa mostrará por pantalla que equivalen a 0 días y 20 horas.


def diasConversion(horas):
    horasDia = 24
    conversionDia = horas // horasDia
    horasRestantes = horas % horasDia
    print(f"{horas} horas equivalen a {conversionDia} día y {horasRestantes} horas")

# diasConversion(26)
# diasConversion(72)
# diasConversion(20)

# 11
# Hacer un programa para ingresar por teclado una cantidad de minutos y mostrar por pantalla a cuántos días, horas y minutos equivalen.
# Ejemplo 1: si se ingresan 1520 minutos el programa mostrará por pantalla que equivalen a 1 día, 1 hora y 20 minutos.
# Ejemplo 2: si se ingresan 480 minutos el programa mostrará por pantalla que equivalen a 0 día, 8 horas y 0 minutos.


def conversionGeneral(minutosParametro):
    minHora = 60
    horasDia = 24
    minDia = minHora * horasDia
    dias = 0
    horas = 0
    minutos = 0
    while (minutosParametro != 0):
        if minutosParametro >= minDia:
            dias += 1
            minutosParametro -= minDia
        elif minutosParametro >= minHora:
            horas += 1
            minutosParametro -= minHora
        else:
            minutos = minutosParametro
            minutosParametro = 0

    print(f"{minutosParametro} minutos equivalen a {dias} días, {horas} horas y {minutos} minutos")


# conversionGeneral(1520)
# conversionGeneral(480)

# 12
# Una granja vende la caja de 12 unidades a $ 100 y cada huevo suelto a $ 12.
# Hacer un programa para ingresar la cantidad de huevos que compra un cliente y mostrar por pantalla el importe total a pagar.
# Recordatorio. Por cada 12 huevos se debe calcular una caja y el excedente se calcula como suelto.
# Ejemplo 1. Si la cantidad ingresada son 15 huevos, el programa calculará 1 caja y 3 sueltos, es decir $ 100 + $ 12 x 3 = $ 136.
# Ejemplo 2. Si la cantidad ingresada son 28 huevos el programa calculará 2 cajas y 4 sueltos, es decir $ 100 x 2 + $12 x 4 = $ 248.
# Ejemplo 3.Si la cantidad ingresada son 8 huevos, el programa calculará: 0 cajas y 8 sueltos, es decir $ 12 x 8 = $ 96.


def granjaHuevos(cantidad):
    precioUnidad = 12
    precioDocena = 100
    total = 0
    cajas = 0
    sueltos = 0
    while cantidad != 0:
        if cantidad >= 12:
            cantidad -= 12
            total += precioDocena
            cajas += 1
        else:
            total += cantidad * precioUnidad
            sueltos = cantidad
            cantidad = 0
    print(f"{cajas} caja/s y {sueltos} suelto/s, total $ {total}")

# granjaHuevos(15)
# granjaHuevos(28)
# granjaHuevos(8)


# 13
# Hacer un programa para un cajero automático para ingresar un importe a retirar y convertir el mismo en la cantidad de billetes de $ 1.000, $ 500, $ 200 y $ 100 a entregar.
# Ejemplo 1: Si el importe a retirar es $ 2.500 se mostrará por pantalla que se deberán entregar 2 billetes de $ 1.000, 1 billete de $ 500 y 0 billetes de $ 200 y $ 100.
# Ejemplo 2: Si el importe a retirar es $ 3.400 se mostrará por pantalla que se deberán entregar 3 billetes de $ 1.000, 2 billetes de $ 200 y 0 billetes de $ 500 y $ 100.
# Ejemplo 3: Si el importe a retirar es $ 300 se mostrará por pantalla que se deberán entregar 1 billete de $ 200, 1 billete de $ 100, 0 billetes de $ 1.000 y 0 billetes de $ 500.
# Recordatorio. Considerar en todos los casos que el importe a retirar es en todos los casos múltiplo de $ 100 ya que el cajero no cuenta con billetes de $ 50, $ 20 o $ 10.


def cajeroAutomatico(importe):
    billetes1000 = 0
    billetes500 = 0
    billetes200 = 0
    billetes100 = 0
    while importe > 0:
        if importe >= 1000:
            importe -= 1000
            billetes1000 += 1
        elif importe >= 500:
            importe -= 500
            billetes500 += 1
        elif importe >= 200:
            importe -= 200
            billetes200 += 1
        elif importe >= 100:
            billetes100 += 1
            importe -= 100
        else:
            importe = 0

    print(f"Entregar {billetes1000} billete/s de $ 1.000, {billetes500} billete/s de $ 500, {billetes200} billete/s de $ 200 y {billetes100} billete/s de $ 100")

cajeroAutomatico(2500)
cajeroAutomatico(3400)
cajeroAutomatico(300)

