
// Redireccion 301 al home de ODI
export function redirect(res) {
    res.writeHead(301, { Location: '/' })
    res.end()
}
