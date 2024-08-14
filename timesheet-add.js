import {timesheet_add} from './utils.js'

const hours = [
	process.argv[2]||9,
	process.argv[3]||12,
	process.argv[4]||13,
	process.argv[5]||18,
].map(h => String(h).padStart(2,"0") + ":00")

const date = new Date().toISOString().split("T")[0]

console.log('Adding to date: ',date)

timesheet_add(date,hours[0],hours[1])
timesheet_add(date,hours[2],hours[3])

