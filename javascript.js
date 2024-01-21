console.log(resources)

let resourcesHTML = document.getElementById('main-nav')
let DivContainer = document.getElementById('container_two')

let linksHTML = resources.map(resource => `
<a href="#${resource.category.toLowerCase()}"
onclick="updateMain('${resource.category}')">
${resource.category}
</a>`).join('')

resourcesHTML.innerHTML = linksHTML

if (resources.length > 0){
    updateMain(resources[0].category)
}

function updateMain(category){
    let findResource = resources.filter(resource => resource.category === category)

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



