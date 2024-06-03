
import dotenv from 'dotenv'
import fetch from 'node-fetch'
dotenv.config()

export async function login(){

	const response = await fetch("https://api.integraadmin.com.br/login", {
	    "credentials": "omit",
	    "headers": {
	        "Content-Type": "application/json",
	    },
	    "body": "{\"email\":\""+process.env.email+"\",\"password\":\""+process.env.password+"\"}",
	    "method": "POST",
	});

	return await response.json()
}

export async function timesheet_add(date, entrance, exit){
	let {token} = await login()
	const options = {
	    "headers": {
	        "Content-Type": "application/json",
	        "Authorization": "Bearer "+token,
	    },
	    "referrer": "https://app.integraadmin.com.br/",
	    "body": "{\"points\":[{\"entrance\":\""+entrance+"\",\"exit\":\""+exit+"\",\"date\":\""+date+"\",\"projectId\":"+process.env.project_id+"}],\"userId\":"+process.env.user_id+",\"date\":\""+date+"\"}",
	    "method": "POST"
	};
	await fetch("https://api.integraadmin.com.br/time-points", options);
}

