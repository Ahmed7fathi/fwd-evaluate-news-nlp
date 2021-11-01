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

        // Confidence, Subjectivity, Irony, Score_tag and Agreement.
        const {data} = await response.json();
        console.log('data: ', data);
        document.getElementById("results").innerHTML = `        
        <h3 class="d-header"> Sentence Text : <span class="result">${data.sentence_list[0].text}</span> </h3>
        <h3 class="d-header"> Confidence :<span class="result">${data.confidence}</span>  </h3>
        <h3 class="d-header"> Subjectivity : <span class="result">${data.subjectivity}</span> </h3>
        <h3 class="d-header"> Irony : <span class="result">${data.irony}</span></h3>
        <h3 class="d-header"> Score_tag : <span class="result">${data.score_tag}</span></h3>
        <h3 class="d-header"> Agreement : <span class="result">${data.agreement}</span> </h3>
    `;
    } else {
        alert(" Please Enter a valid Url !")
    }


};
export {handleSubmit}
