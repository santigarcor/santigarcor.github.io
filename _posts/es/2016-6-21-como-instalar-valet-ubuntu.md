---
layout: post
title: Cómo instalar Laravel Valet en Ubuntu 16.04
ref: como-instalar-valet
lang: es
---

Cuando Tailor Otwell lanzó _Valet_ con este [video](https://www.youtube.com/watch?v=H3Z4Gk9Wc0s), 
quedé sorprendido y antojado de tener esta utilidad y simplemente relajarme al momento de hacer 
desarrollo web. El problema llegó cuando entré a la documentación de _[Valet](https://laravel.com/docs/valet)_ 
y leí la primera frase de la instroducción de _Valet_:

> Valet is a Laravel development environment for Mac minimalists...

Así que en ese momento decidí cerrar la pestaña del navegador e ignorar que _Valet_ existía _(Soy un usuario de Ubunutu)_.

Alrededor de un mes despues de la salida de _Valet_, encontré que uno de los forks que tenia valet 
estaba hecho especificamente para Ubuntu, así que decidí instalarlo y todo funcionó a la perfección.

Ahora, luego de todo lo anterior, acá viene la guía.

### Requisitos
- No tener ningún servicio usando el puerto 80 del sistema
- Ubuntu >= 15.04
- Dependencias: `sudo apt-get install libnss3-tools jq xsel`
- PHP >= 5.6
- Los siguientes paquetes de php:
    - `php7.0-cli php7.0-common php7.0-curl php7.0-json php7.0-mbstring php7.0-mcrypt php7.0-mysql php7.0-opcache php7.0-readline php7.0-xml php*-zip`
    - Opcionales: `php7.0-sqlite3 php7.0-mysql php7.0-pgsql`

### Instalación
Teniendo listos los requisitos para la instalación de _Valet_, procedemos a hacer en la consola el siguiente comando:

```bash
composer global require cpriego/valet-ubuntu
```

Luego de que termine el proceso de instalación en el composer, corremos el siguiente comando que instala los servicios de _Valet_ en el sistema:

```bash
valet install
```

### Uso
Luego de tener instalado _Valet_ en nuestro sistema