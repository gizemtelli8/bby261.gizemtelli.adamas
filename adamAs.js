var kelimeler = new Array('kütüphane','koleksiyon','veri tabanı','açık erişim','otomasyon','issn','isbn','açık ders malzemeleri'); 
 var kelimeSayisi = kelimeler.length; 
 var secilenKelimeNo = Math.floor(Math.random() * kelimeSayisi); 
 var secilenKelime = kelimeler[secilenKelimeNo]; 
 var harfSayisi = secilenKelime.length; 
 var hataSayisi = 0
 
 var harfTutucu = new Array(); 


 for (var j=0; j<harfSayisi; j++){ 
         harfTutucu[j] = ' _ '; 
         harfTutucu[secilenKelime.indexOf(' ',j)] = ' - '; 
} 
 
 
 function harfKontrol(secilenHarf){ 
//     for (var i=0; i<harfSayisi; i++){ 
         bulunanHarfNo = secilenKelime.indexOf(secilenHarf); 
         if (bulunanHarfNo == -1){
          hatalisayisi()   
         } else {
         harfTutucu[bulunanHarfNo] = secilenHarf; 
         document.getElementById("harfTutucuGoster").innerHTML = harfTutucu.join('&nbsp');
         }
    // } 
 } 

function hatalisayisi(){
hataSayisi += 1
console.log(hataSayisi)
if (hataSayisi == 3){
console.log("Vurun kellesini")
document.getElementById('klavye').innerHTML="KAYBETTİN ADİOS :)"
}
adamAs()
}

function adamAs(){
	switch(hataSayisi) {
    	case 1:
        	document.getElementById('adam').src="adamas1.png"
        break;
    	case 2:
        	document.getElementById('adam').src="adamas2.png"
        break;
			case 2:
					document.getElementById('adam').src="adamas3.png"
				break;
			case 3:
					document.getElementById('adam').src="adamas4.png"
				break;
	}
}