import fs from 'fs/promises'

//caminho do nosso arquivo db.json responsavel pelo banco de dados
const DATABASE_PATH = new URL("db.json", import.meta.url)

export class Database {
    #database = {}

    constructor() {
        //read the file db.json and pass to #database
        fs.readFile(DATABASE_PATH, "utf-8")
            .then((data) => {
                this.#database = JSON.parse(data)
            })
            .catch(() => {
                this.#persist()
            })
    }

    //save the data from #database to db.json 
    #persist() { 
        fs.writeFile(DATABASE_PATH, JSON.stringify(this.#database))
    }

    //put new key/value on #database
    insert(table, data) {
        if(Array.isArray(this.#database[table])) {
            this.#database[table].push(data)
        } else {
            this.#database[table] = [data]
        }

        this.#persist()
    }


    select(table, filters) {
        let data = this.#database[table] ?? []

        if(filters) {
            data = data.filter((row) => {
                return Object.entries(filters).some(([key, value]) => {
                    return row[key].toLowerCase().includes(value.toLowerCase())
                })
            })
        }
        return data
    }

    update(table, id, data) {
        const rowIndex = this.#database[table].findIndex((row) => { return row.id === id })

        if(rowIndex > -1) {
            this.#database[table][rowIndex] = {
                ...this.#database[table][rowIndex],
                ...data
            }
            this.#persist()
        }
    }

    remove(table, id) {
        const rowIndex = this.#database[table].findIndex((row) => { return row.id === id })
        if(rowIndex > -1) {
            this.#database[table].splice(rowIndex, 1)
            this.#persist()
        }
    }
}