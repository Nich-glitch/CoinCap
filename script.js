function get_markets() {
    return fetch("https://api.coincap.io/v2/markets")
    .then ((response) => {
       return response.json(); 
})
.then ((data) => {
    let markets=data;
    return (data);
});
}


function render_market() {
    let market_info = document.querySelector(".javalist") ;

    let row_element= document.createElement("div");
    let rank_element=docuemnt.createElement("span");
    let name_element= document.createElement("span");
    let price_element= document.createElement("span");
    let market_cap_element= document.createElement("span");

    market_info.appendChild(row_element);
    row_element.appendChild(rank_element, name_element, price_element);
}