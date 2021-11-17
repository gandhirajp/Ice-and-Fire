


var board = document.createElement("div");
board.style.width = "100%"
board.style.flexDirection = "row"
board.style.display = "flex"
board.style.backgroundImage="url(blank.jpg)"
board.style.backgroundSize="cover"
board.style.flexWrap = "wrap"


async function getAllData() {
    try {
        var data = await fetch("https://www.anapioficeandfire.com/api/books/?pageSize=50")
        var obj = await data.json();
        console.log(obj)

        obj.forEach(function (element) {

            var box = document.createElement("div")
            box.style.width = "350px"
            box.style.height = "350px"
            box.style.borderLeft="10px solid black"
            box.style.borderRadius="10px"
            box.style.marginBottom = "20px"
            box.style.marginTop = "50px"
            box.style.fontSize="20px"
            box.style.color="black"
            box.style.marginLeft = "45px"
            box.style.backgroundImage="url(blank.jpg)"
            box.style.backgroundSize="cover"
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
            box5.innerText = "🤵  Publisher:" + element.name
            box.appendChild(box5)

            var box6=document.createElement("p")
            box6.innerText="⏰ Released date: " + element.released
            box.appendChild(box6)

        })

    }
    catch (error) {
        console.log(error);

    }

}
getAllData();
document.body.appendChild(board)
