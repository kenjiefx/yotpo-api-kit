export const resolvePlaceholders=(content:string,data:{[key:string]:string})=>{
    const regex = /(?<=\{{).+?(?=\}})/g
    let match = []
    while ((match = regex.exec(content)) !== null) {
        const [keyword] = match
        const value = data[keyword.trim()] ?? null
        if (null!==value) {
            content = content.replace('{{'+keyword+'}}',value)
        }
    }
    return content
}