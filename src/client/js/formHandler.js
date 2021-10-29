const handleSubmit = async (event) => {
    event.preventDefault();
    let article_url = document.getElementById('name').value;
    if (Client.check_url(article_url)) {
        console.log("::: Form Submitted :::");
        document.getElementById("results").innerHTML = `<div class="lds-ring"><div></div><div></div><div></div><div></div></div>`;
        let response = await fetch("http://localhost:8081/get-article", {
            method: "POST",
            body: JSON.stringify({article_url}),
            headers: {
                "Content-Type": "application/json"
            },
        });


        const data = await response.json();
        console.log('data: ', data);
        document.getElementById("results").innerHTML = `
        <p> Server Message, Status : ${data.message} | ${data.status}</p>
        <h3> Text : ${data.data.text}</h3>
    
    `;
    }else{
        alert(" Please Enter a valid Url !")
    }


};
export {handleSubmit}
