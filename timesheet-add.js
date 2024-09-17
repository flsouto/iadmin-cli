import {timesheet_add_multi} from './utils.js'

const projects = {
	sun: 101,
	legom: 104,
	urca: 74,
	abra: 19,
	wetalk: 85
}

const main = async() => {

	let hour = 9;
	const date = new Date().toISOString().split("T")[0]
	const points = []
	for(const arg of process.argv.slice(2)){
		const [project, duration] = arg.split(':')
		const projectId = projects[project]
	    const entrance = String(hour).padStart(2,"0")+':00';
	    const exit = String(hour+(+duration)).padStart(2,"0")+':00';
	    hour+=+duration
	    if(hour === 12) hour++
		console.log(`${project} (${projectId}): ${entrance} - ${exit}`)
		points.push({entrance,exit,projectId})
	}
	await timesheet_add_multi(date, points);

}

main()
