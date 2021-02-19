const JsonString = `{"name":"Anton","age":36,"skills":["Javascript","HTML","CSS"],"salary":80000}`;

const data = JSON.parse(JsonString)

const result={
    name: data.name,
    age: Number(data.age),
    skills: data.skills,
    salary: Number(data.salary),
}

console.log(result)

console.log(JSON.stringify(result))