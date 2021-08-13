let exch = document.createElement('div');
    exch.classList.add('wrapper_exchenge');

let contacts = document.querySelector('.contacts');

let exchenge = function(){

    const curr = async function(){
        let url = `https://developerhub.alfabank.by:8273/partner/1.0.0/public/rates`;

        let response = await fetch(url),
            data = await response.json();
            
            exch.innerHTML = `
            <div class="exch_text">Курсы валют<br> от Альфабанка:</div>
            <div class="currency">
                <div class="curr_v"><span>USD</span><br>${data.rates[5].buyRate}/${data.rates[5].sellRate}</div>
                <div class="curr_v"><span>EUR</span><br>${data.rates[4].buyRate}/${data.rates[4].sellRate}</div>
            </div>
            `
            contacts.appendChild(exch);
    };

    curr();

}();