export function read(file, callback) {
    const reader = new FileReader()
    reader.onload = event => {
        const json = JSON.parse(event.target.result)
        callback(json)
    }
    reader.readAsText(file)
}

export function download(name, json) {
    const blob = new Blob([json], { type: 'application/json' })
    const link = document.createElement('a')
    link.download = name
    link.href = URL.createObjectURL(blob)
    link.style = 'display: none'
    document.body.appendChild(link)
    link.click()
    URL.revokeObjectURL(link.href)
}
