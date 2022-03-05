fetch('https://anapioficeandfire.com/api/books')
.then((data)=>{
    return data.json();
}).then((data1)=>{
    console.log(data1);
    for (let i = 0; i < data1.length; i++) {
        console.log(data1[i].name);
        console.log(data1[i].isbn);
        console.log(data1[i].numberOfPages);
        console.log(data1[i].authors[0]);
        console.log(data1[i].publisher);
        console.log(data1[i].released);
        
        let span = document.createElement("span");
        span.innerHTML = `<strong>${i}</strong>`;
        let p1 = document.createElement("p");
        p1.innerHTML = `<strong style="color:red;">Name</strong>: ${data1[i].name}`;
        let p2 = document.createElement("p");
        p2.innerHTML = `ISBN: ${data1[i].isbn}`;
        let p3 = document.createElement("p");
        p3.innerHTML = `Number of Pages: ${data1[i].numberOfPages}`;
        let p4 = document.createElement("p");
        p4.innerHTML = `Authors: ${data1[i].authors[0]}`;
        let p5 = document.createElement("p");
        p5.innerHTML = `Publisher: ${data1[i].publisher}`;
        let p6 = document.createElement("p");
        p6.innerHTML = `Released: ${data1[i].released}`;
        let p7 = document.createElement("p");
        p7.innerHTML = `Characters: ${data1[i].characters[0]}, ${data1[i].characters[1]}
        , ${data1[i].characters[2]} , ${data1[i].characters[3]} , ${data1[i].characters[4]}`;


        span.append(p1);
        span.append(p2);
        span.append(p3);
        span.append(p4);
        span.append(p5);
        span.append(p6);
        span.append(p7);
        document.body.append(span);
            
        
    }

}).catch((error)=>console.log(error));






