let data = {
    "coord": {
      "lon": 116.3972,
      "lat": 39.9075
    },
    "weather": [
      {
        "id": 803,
        "main": "Clouds",
        "description": "曇りがち",
        "icon": "04d"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 9.94,
      "feels_like": 8.65,
      "temp_min": 9.94,
      "temp_max": 9.94,
      "pressure": 1022,
      "humidity": 14,
      "sea_level": 1022,
      "grnd_level": 1016
    },
    "visibility": 10000,
    "wind": {
      "speed": 2.65,
      "deg": 197,
      "gust": 4.84
    },
    "clouds": {
      "all": 53
    },
    "dt": 1646542386,
    "sys": {
      "type": 1,
      "id": 9609,
      "country": "CN",
      "sunrise": 1646520066,
      "sunset": 1646561447
    },
    "timezone": 28800,
    "id": 1816670,
    "name": "北京市",
    "cod": 200
  };
  
  let ken = document.querySelector('#kensaku'); ken.addEventListener('click',sendRequest); function sendRequest() {
    let nyu = document.querySelector('select#weather'); let idx = nyu.selectedIndex;
    console.log(idx);
    let id ='';
    switch(idx){ case 1:
    id =''+ 360630;
    break; case 2:
    id = 524901;
    break; case 3:
    id = 993800; break;
    case 4:
    id = 1816670;
    break; case 5:
    id = 1850147;
    break; case 6:
    id = 1880252;
    break; case 7:
    id = 2147714; break;
    case 8:
    id = 2643743;
    break; case 9:
    id = 2968815;
    break; case 10:
    id = 3451189;
    break; case 11:
    id = 5128581; break;
    case 12:
    id = 5368361;
    break; }
    let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+id+'.json'; console.log(url);
    // 通信開始
    axios.get(url)
    .then(showResult) .catch(showError) .then(finish);
    }
    let kais=0;
    // 通信が成功した時の処理 function showResult(resp) {
    // 通信成功 // 通信失敗
    // 通信の最後の処理
    kais++;
    let s,ul,ul2,li,a,b,c,d,e,f,g,h,i; if(kais>1){
    let kesuli = document.querySelector('ul');
    kesuli.remove(); }
    // サーバから送られてきたデータを出力 let data = resp.data;
    // data が文字列型なら，オブジェクトに変換する if (typeof data === 'string') {
    data = JSON.parse(data); 
    // data をコンソールに出力
    
    // console.log(data);
    // data.x を出力
    //console.log(data.x);
    s = document.querySelector('div#result');
    ul = document.createElement('ul');
    ul2 = document.createElement('ul');
    li = document.createElement('li');
    a = document.createElement('li');
    b = document.createElement('li');
    c = document.createElement('li');
    d = document.createElement('li');
    e = document.createElement('li');
    f = document.createElement('li');
    g = document.createElement('li');
    h = document.createElement('li');
    i = document.createElement('li');
    li.textContent = "世界の天気(検索結果 1 件)"; a.textContent = "緯度:"+data.coord.lon; b.textContent = "経度:"+data.coord.lat; c.textContent = "天気:"+data.weather[0].description; d.textContent = "最低気温:"+data.main.temp_min; e.textContent = "最高気温:"+data.main.temp_max; f.textContent = "湿度:"+data.main.humidity; g.textContent = "風速:"+data.wind.speed; h.textContent = "風向き:"+data.wind.deg; i.textContent = "都市名:"+data.name; s.insertAdjacentElement('beforeend',ul2); ul2.insertAdjacentElement('beforeend',li); ul2.insertAdjacentElement('beforeend',ul); ul.insertAdjacentElement('beforeend',a); ul.insertAdjacentElement('beforeend',b); ul.insertAdjacentElement('beforeend',c); ul.insertAdjacentElement('beforeend',d); ul.insertAdjacentElement('beforeend',e); ul.insertAdjacentElement('beforeend',f);
    
    ul.insertAdjacentElement('beforeend',g); ul.insertAdjacentElement('beforeend',h); ul.insertAdjacentElement('beforeend',i);
    let ken = document.querySelector('#kensaku'); ken.addEventListener('click',sendRequest);
    }
    // 通信エラーが発生した時の処理 function showError(err) {
    console.log(err); 
    // 通信の最後にいつも実行する処理 function finish() {
    console.log('Ajax 通信が終わりました'); 