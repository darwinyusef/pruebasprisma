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

