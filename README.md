1. crear la carpeta src con  un index.ts adentro
2. creamos el gitignore
3. activamos el package.json con npm -y init
4. instalamos las dependencias 
+ npm i express
+ nodemon
+ typescript
+ ts-node
+ @types/node
+ @types/express
hoy instalamos esta nueva
+ body-parser
5. configurar typescript npx tsc --init
"rootDir": "./src"
"outDir": "./dist",
"strict": true, 
"include": [
    "src/**/*.ts"
  ]
6. configurar el run dev 
"dev": "nodemon src/index.ts"

7. agregar la configuracion y el listen
8. agregar el get



# Guia para agregar con GITHUB

+ Creamos el repo en github
+ hacemos para agregar
```git
git add .
```

+ hacemos para guardar
```git
git commit -am "First commit aquí lo que quieras"
```

+ revisamos los accesos globales y borramos los accesos tanto name como email

```git
git add .
```
git config --list --global
+ para salir
```terminal
:qa!
```


+ creamos mi loggin a git
```git
git config user.name user
git config user.email email@gmail.com
```


+ para darle la ruta a mi repo
```git
git remote add origin https://github.com/darwinyusef/pruebasprisma.git
```



