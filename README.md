# Proyecto Cardify2.0

Cardify2.0 es un Plugin de jQuery que agrega un simple efecto de hover a tus imagenes. Al agregarlo a tu proyecto busca todas las imágenes que se encuentran dentro de un contenedor y las reemplaza por un nuevo elemento <figure> que contiene la imagen <img> además de un <figcaption> que contine un alt con un texto sobre la imagen.
Al hacer hover aparece al pie de la imagen el texto incluido en el alt de la imagen.


# Requerimientos Técnicos

## Dependencias de Producción
* JQuery v3.2.1
* Bootstrap v4.0.0-alpha.6

## Dependencias de Desarrollo
* Mocha v5.0.0
* Chai v4.1.2
* JSDom v11.6.1

# Instalación

## Local

1. Agrega jquery a tu proyecto

```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
```

2. Agrega el archivo cardify.css a tu proyecto, escribiendo la ruta correcta en tu html.

```
<link rel="stylesheet" href="path-to-cardify.css">
```

3. Agrega el archivo cardify.js a tu proyecto, escribiendo la ruta correcta en tu html.

```
<script src="path-to-cardify.js"></script>
```

4. Agrega un container en tu html con la clase "imgwrap"

```
<div class="imgwrap"><img src="path-to-image.jpg" alt="my image"></div>
```

## Global (navegador)

1. Agrega jquery a tu proyecto

```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
```

2. Agrega los links de CDN en tu proyecto.

```
<link rel="stylesheet" href="https://cdn.rawgit.com/adgalaz/cardify/heidi/assets/css/cardify.css">
```

```
<script src="https://cdn.rawgit.com/adgalaz/cardify/heidi/src/cardify.js"></script>
```

# Uso

* El usuario puede instalar el plugin de dos maneras. 
- De manera local descargando los archivos cardify.css y cardify.js directamente desde github y agregandolas a sus carpetas de proyecto css y js. 
- De manera global puede hacerlo a traves de CDN agregando a su proyecto el link y script que corresponden.

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1" />
    <title>Your web</title>
    <!--add cardify.css file-->
    <link rel="stylesheet" href="path-to-cardify.css">
</head>

<body>

    <div class="container">
        <!--add div with class="imgwrap"-->
        <div class="row imgwrap">
            <div class="col-sm-12 col-md-12 col-lg-12">
                <!--add your image file-->
                <img class="img-fluid" src="path-to-image.jpg" alt="My Image">
            </div>
        </div>
    </div>

    <!--add jQuery and cardify.js files-->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="path-to-cardify.js"></script>

</body>

</html>
```

# Autores

* Andrea
* Sabrina

#Licencia

* ISC License