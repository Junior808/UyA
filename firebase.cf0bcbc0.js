parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"qL6A":[function(require,module,exports) {
var e={apiKey:"AIzaSyAYC2xOKqPvMKbQWxXxiQHpW3HbbDdCou0",authDomain:"introfirebase-e7ca2.firebaseapp.com",databaseURL:"https://introfirebase-e7ca2.firebaseio.com",projectId:"introfirebase-e7ca2",storageBucket:"introfirebase-e7ca2.appspot.com",messagingSenderId:"660691288615",appId:"1:660691288615:web:3c97023e6eeab131560402",measurementId:"G-S3377XEK4R"};firebase.initializeApp(e);var r=firebase.database();usuariosBdT=r.ref("usuariosBdT");var o=[];usuariosBdT.on("value",function(e){var r=e.val();for(var t in r)o.push(r[t].correo)});var t=document.querySelector("#btnSignUp");t.onclick=function(){var e=document.getElementById("first_name").value,r=document.querySelector(".first_name-error"),t=document.getElementById("last_name").value,a=document.querySelector(".last_name-error"),n=document.getElementById("email").value,i=document.querySelector(".email-error"),c=document.querySelector(".signup-error");""===e||""===t||""===n?(c.textContent="No pueden incluirse campos vacíos.",""===e&&(r.textContent="Debe incluir un nombre"),""===t&&(a.textContent="Debe incluir un apellido"),""===n&&(i.textContent="Ejemplo: sunombre@gmail.com")):o.includes(n)?alert("El correo electrónico introducido ya existe."):(localStorage.setItem("email",n),usuariosBdT.push().set({nombre:e,apellidos:t,correo:n,horas:0}),window.location.href="bancodetiempo.html")};
},{}]},{},["qL6A"], null)
//# sourceMappingURL=/UyA/firebase.cf0bcbc0.js.map