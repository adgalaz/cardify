# Proyecto Cardify2.0

Cardify2.0 es un complemento de jQuery que agrega un simple efecto de hover a tus imagenes. Este plugin busca todas las imágenes que se encuentran dentro de un contenedor y las reemplaza con un nuevo elemento ```<figure>``` que contiene la/s imagen/es (```<img>```), así como un ```<figcaption>``` con el texto del atributo "alt" de la imagen.

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

1. Agrega jQuery a tu proyecto

```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
```

2. Agrega el archivo main.css a tu carpeta css, escribiendo la ruta correcta en tu html.

```
<link rel="stylesheet" href="path-to-main.css">
```

3. Agrega el archivo index.js a tu carpeta js, escribiendo la ruta correcta en tu html.

```
<script src="path-to-index.js"></script>
```

4. Agrega un container en tu html con la clase "imgwrap"

```
<div class="imgwrap"><img src="path-to-image.jpg" alt="my image"></div>
```

# Uso

* El usuario puede instalar el plugin de manera local. Para ello, puede hacerlo descargando los archivos main.css e index.js directamente desde github y agregandolas a sus carpetas de proyecto css y js. 

```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1" />
  <title>Your web</title>
  <!--add main.css file-->
  <link rel="stylesheet" href="path-to-main.css">
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

  <!--add jQuery and index.js files-->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="path-to-index.js"></script>
  
</body>

</html>
```

# Autores

* Andrea Diaz
* Sabrina Villalobos

#Licencia

* ISC License