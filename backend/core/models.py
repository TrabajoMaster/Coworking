from django.db import models


class Rol(models.Model):
    nombre = models.CharField(max_length=45)

    def __str__(self):
        return self.nombre


class Suscripcion(models.Model):
    nombre = models.CharField(max_length=45)
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    permite_sala = models.BooleanField(default=False)
    limite_horas_mensuales = models.IntegerField()

    def __str__(self):
        return self.nombre


class Usuario(models.Model):
    nombre = models.CharField(max_length=45)
    email = models.EmailField(max_length=150)
    username = models.CharField(max_length=45)
    password = models.CharField(max_length=255)
    fecha_alta = models.DateTimeField(auto_now_add=True)
    vigente_hasta = models.DateTimeField()

    rol = models.ForeignKey(Rol, on_delete=models.CASCADE)
    suscripcion = models.ForeignKey(Suscripcion, on_delete=models.CASCADE)

    def __str__(self):
        return self.username


class Espacio(models.Model):
    TIPO_CHOICES = [
        ('puesto', 'Puesto'),
        ('sala', 'Sala'),
    ]

    nombre = models.CharField(max_length=45)
    capacidad = models.IntegerField()
    tipo = models.CharField(max_length=20, choices=TIPO_CHOICES)

    def __str__(self):
        return self.nombre


class Reserva(models.Model):
    ESTADO_CHOICES = [
        ('activa', 'Activa'),
        ('finalizada', 'Finalizada'),
        ('cancelada', 'Cancelada'),
    ]

    fecha_inicio = models.DateTimeField()
    fecha_fin = models.DateTimeField()
    estado = models.CharField(max_length=20, choices=ESTADO_CHOICES)

    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    espacio = models.ForeignKey(Espacio, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.usuario} - {self.espacio}"


class Analitica(models.Model):
    mes = models.IntegerField()
    anio = models.IntegerField()
    horas_ocupadas = models.IntegerField()

    espacio = models.ForeignKey(Espacio, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.mes}/{self.anio} - {self.espacio}"