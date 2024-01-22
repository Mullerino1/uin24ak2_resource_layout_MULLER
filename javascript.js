console.log(resources)

let resourcesHTML = document.getElementById('main-nav')
let DivContainer = document.getElementById('container_two')

//using the .map i can have it look through information and store it and present it in a new array. Updating previous info.
let linksHTML = resources.map(resource => `
<a href="#${resource.category.toLowerCase()}"
onclick="updateMain('${resource.category}')">
${resource.category}
</a>`).join('')//using .join as i have previously used in "Innføring i programmering" I have it connect the different info into one string creating sentences. 

resourcesHTML.innerHTML = linksHTML

if (resources.length > 0){//.length counts the items in the string
    updateMain(resources[0].category)
}

function updateMain(category){ 
    let findResource = resources.filter(resource => resource.category === category)
//.filter filters through parts of ur code that follow the "rules" you have set and picks out items that follow that

    if (findResource.length > 0){
        let selectResource = findResource[0]
        DivContainer.innerHTML = `
        <h1 id="${category.toLowerCase()}">${selectResource.category}</h1>
        <p>${selectResource.text}</p>
            <ul>
                ${selectResource.sources.map(source => `
                <li><a href="${source.url}">${source.title}</a></li>
                `).join('')}
            </ul>`
    }
    }



