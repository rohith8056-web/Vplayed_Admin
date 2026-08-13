import fs from "fs"
import Papa from "papaparse"

export function readCSV(filepath)
{
    
    const fileContent=fs.readFileSync(filepath,"utf-8")

    const result=Papa.parse(fileContent,{header:true})

    return result.data
}

