const xmlString='<list>\n' +
    '  <student>\n' +
    '    <name lang="en">\n' +
    '      <first>Ivan</first>\n' +
    '      <second>Ivanov</second>\n' +
    '    </name>\n' +
    '    <age>35</age>\n' +
    '    <prof>teacher</prof>\n' +
    '  </student>\n' +
    '  <student>\n' +
    '    <name lang="ru">\n' +
    '      <first>Петр</first>\n' +
    '      <second>Петров</second>\n' +
    '    </name>\n' +
    '    <age>58</age>\n' +
    '    <prof>driver</prof>\n' +
    '  </student>\n' +
    '</list>'

const parser = new DOMParser()

const xmlDOM=parser.parseFromString(xmlString,"text/xml")

const listNode=xmlDOM.querySelector("list")

const studentNode=listNode.querySelectorAll("student")

const nameNode=listNode.querySelectorAll("student > name")

const firstNameNode= listNode.querySelectorAll("student > name > first")

const secondNameNode= listNode.querySelectorAll("student > name > second")

const ageNode= listNode.querySelectorAll("student > age")

const profNode= listNode.querySelectorAll("student > prof")

var result=[]

for (i = 0; i <= studentNode.length-1; i++) {
    result[i] = {
        first:firstNameNode[i].textContent,
        second:secondNameNode[i].textContent,
        age: ageNode[i].textContent,
        prof:profNode[i].textContent,
        lang:nameNode[i].getAttribute("lang")
    }
}

console.log(result)