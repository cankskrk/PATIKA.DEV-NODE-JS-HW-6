const Koa = require("koa")
const app = new Koa()
const port = 3000

app.use(ctx => {
    if (ctx.URL.pathname === "/") {
        ctx.status = 200
        ctx.body = "<h1>Ana sayfaya hosgeldiniz!</h1>"
    }
    else if (ctx.URL.pathname === "/hakkimda") {
        ctx.status = 200
        ctx.body = "<h1>Hakkimda sayfasina hosgeldiniz!</h1>"
    }
    else if (ctx.URL.pathname === "/iletisim") {
        ctx.status = 200
        ctx.body = "<h1>Iletisim sayfasina hosgeldiniz!</h1>"
    }
    else {
        ctx.status = 404
        ctx.body = "<h1>404 - Not Found</h1>"
    }
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}...`)
})