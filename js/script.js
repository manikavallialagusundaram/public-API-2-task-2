async function getPrices(){
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd');
    const data = await response.json();
    document.getElementById('prices').innerText = `Bitcoin: $${data.bitcoin.usd}, Ethereum: $${data.ethereum.usd}`;
}

