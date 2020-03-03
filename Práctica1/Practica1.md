# Introducción al protocolo HTTP.

### [Catálogo de API de eDatos](http://www.gobiernodecanarias.org/istac/api/)

**1.Qué peticiones desencadena la consulta.**

Todas son peticiones de tipo GET.

**2.¿Qué tipo de petición estás realizando?**

La petición que se está realizando es un consulta a la página: [www.gobiernodecanarias.org/istac/api/](www.gobiernodecanarias.org/istac/api/)

**3.Qué código de estatus devuelve.**

Los código de estatus de las peticiones son:

- 304: Not modified
- 302: Moved permanenty
- 200: OK

![Error al cargar la imagen](https://github.com/Junior808/UyA/blob/master/Pr%C3%A1ctica%201/images/codigo-status.png)

**4.Qué DNS tiene el servidor.**

El servidor tiene el DNS: www.gobiernodecanarias.org

**5.Qué IP tiene tiene el servidor.**

El servidor tiene la siguiente dirección IP: 93.188.137.123

![IP](https://github.com/Junior808/UyA/blob/master/Pr%C3%A1ctica%201/images/dir_IP.png)

**6.¿La página tiene alguna cookie?, ¿Cuáles?.**

Sí, son dos.

- \_ga
- \_gid

![Cookies](https://github.com/Junior808/UyA/blob/master/Pr%C3%A1ctica%201/images/cookies.png)

**7.¿Qué idioma acepta?.**

El idioma que acepta es el Español.

![Español](https://github.com/Junior808/UyA/blob/master/Pr%C3%A1ctica%201/images/idioma.png)

**8.Alguna línea de código JavaScript.**

No hay código JavaScript.

**9.Alguna línea de código CSS que se aplique.**

Sólo hay un fichero con contenido CSS: **istac.css** en el que la primera línea de código es la siguiente:

```
.section{font-family:"Droid Sans",sans-serif;font-size:15px;color:#000;max-width:960px;margin:0 auto;padding:5px 0 0 0;clear:both}

```

**10.Alguna línea de código HTML que se aplique.**

Hay varios ficheros HTML. El siguiente código corresponde al html principal (index.html):

```
<html>
    <head>
    <title> ISTAC | API | eDatos </title>
    ...
    </head>
    <body>
    ...
    </body>
</html>
```

### [Página de Cita Previa](https://www3.gobiernodecanarias.org/citasalud/)

**1.Qué peticiones desencadena la consulta.**

Todas las peticiones son del tipo GET.

**2.¿Qué tipo de petición estás realizando?**

Se está realizando una consulta a [https://www3.gobiernodecanarias.org/citasalud/](https://www3.gobiernodecanarias.org/citasalud/)

**3.Qué código de estatus devuelve.**

Los código de estatus de las peticiones son:

- 304: Not modified
- 200: OK

**4.Qué DNS tiene el servidor.**

El servidor tiene el DNS https://www3.gobiernodecanarias.org

**5.Qué IP tiene tiene el servidor.**

El servidor tiene la siguiente dirección IP: 93.188.137.126

![IP](https://github.com/Junior808/UyA/blob/master/Pr%C3%A1ctica%201/images/ip_citaprevia.png)

**6.¿La página tiene alguna cookie?, ¿Cuáles?.**

Sí, tiene 3 cookies.

- \_ga
- \_gid
- ASP.NET_SessionId

![Cookie](https://github.com/Junior808/UyA/blob/master/Pr%C3%A1ctica%201/images/cookies_citaprevia.png)

**7.¿Qué idioma acepta?.**

El idioma que acepta es el Español.

![Español](https://github.com/Junior808/UyA/blob/master/Pr%C3%A1ctica%201/images/idioma.png)

**8.Alguna línea de código JavaScript.**

```
function Checker(n,t){
    var r="",u=6,f="1234567890",i;
    for(t==0&&(f+="QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm",u=16),i=0;i<n.length;i++)
        f.indexOf(n.charAt(i))!=-1&r.length<u&&(r+=n.charAt(i));
        return checkerDisabled(),r
...
}
```

**9.Alguna línea de código CSS que se aplique.**

```
.body{padding-top:20px;padding-bottom:20px;background:#eee}
.container{border:1px solid #ddd;padding-top:25px;padding-bottom:25px;background:#fff;box-shadow:1px 1px 1px #888}
```

**10.Alguna línea de código HTML que se aplique.**

```
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    ...
</head>
<span id="warning-container"><i data-reactroot=""></i></span>
<body>
         <div class="container" style="padding-top:10px;">
             <div class="header clearfix" style="padding-bottom:5px;padding-top: 20px;">
                <div class="col-lg-12 text-right">
                ...
</body>
<\html>
```
