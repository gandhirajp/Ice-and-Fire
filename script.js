

var board = document.createElement("div");
board.style.width = "100%"
board.style.flexDirection = "row"
board.style.display = "flex"
board.style.backgroundImage = "url(blank.jpg)"
board.style.backgroundSize = "cover"
board.style.flexWrap = "wrap"


async function getAllData() {
    try {
        var data = await fetch("https://www.anapioficeandfire.com/api/books/?pageSize=50")
        var obj = await data.json();
        console.log(obj)

        obj.forEach(function (element) {

            var box = document.createElement("div")
            box.style.width = "550px"
            box.style.borderLeft = "10px solid black"
            box.style.borderRight = "10px solid black"
            box.style.borderRadius = "50px"
            box.style.marginBottom = "20px"
            box.style.flexDirection = "column"
            box.style.marginTop = "50px"
            box.style.fontSize = "20px"
            box.style.color = "black"
            box.style.marginLeft = "50px"
            box.style.padding = "10px"
            box.style.backgroundImage = "url(blank.jpg)"
            box.style.backgroundSize = "cover"
            board.appendChild(box)

            var box1 = document.createElement("p")
            box1.innerText = "📕  Book Name:" + element.name;
            box.appendChild(box1)

            var box2 = document.createElement("p")
            box2.innerText = "🔢  ISBN:" + element.isbn;
            box.appendChild(box2)

            var box3 = document.createElement("p")
            box3.innerText = "📃  pages:" + element.numberOfPages;
            box.appendChild(box3)

            var box4 = document.createElement("p")
            box4.innerText = "📝  Authors:" + element.authors
            box.appendChild(box4)

            var box5 = document.createElement("p")
            box5.innerText = "🤵  Publisher:" + element.publisher
            box.appendChild(box5)

            var box6 = document.createElement("p")
            box6.innerText = "⏰ Released date: " + element.released
            box.appendChild(box6)

            var character = document.createElement("h3")
            character.innerText = "characters:👇"
            box.appendChild(character)

            var character1 = document.createElement("p")
            character1.innerText = element.characters[0]
            box.appendChild(character1)

            var character2 = document.createElement("p")
            character2.innerText = element.characters[1]
            box.appendChild(character2)

            var character3 = document.createElement("p")
            character3.innerText = element.characters[2]
            box.appendChild(character3)

            var character4 = document.createElement("p")
            character4.innerText = element.characters[3]
            box.appendChild(character4)

            var character5 = document.createElement("p")
            character5.innerText = element.characters[4]
            box.appendChild(character5)


        })

    }
    catch (error) {
        console.log(error);

    }

}
getAllData()
document.body.appendChild(board);
