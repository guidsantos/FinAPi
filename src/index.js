import express from express

const app = express()

app.use(express.json)

app.post('/account', () => {

})

app.listen(3333, () => {
    console.log('Servidor Iniciado na porta 3333')
})