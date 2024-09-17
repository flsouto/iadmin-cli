const projects = {
	sun: 101,
	legom: 104,
	urca: 74,
	abra: 19,
	wetalk: 85
}

let hour = 9;

for(const arg of process.argv.slice(2)){
	const [project, duration] = arg.split(':')
	const id = projects[project]
    const start = String(hour).padStart(2,"0")+':00';
    const end = String(hour+(+duration)).padStart(2,"0")+':00';
    hour+=+duration
    if(hour === 12) hour++
	console.log(`${project} (${id}): ${start} - ${end}`)
}
