var province = document.getElementById("province");
var district = document.getElementById("district");
var ward = document.getElementById("ward");
var selectedProvince, selectedDistrict, selectedWard;

function loadProvince() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(this.responseText);
      // response.sort((a, b) => {
      //   if(a.Name < b.Name) return -1;
      //   if(a.Name > b.Name) return 1;
      //   return 0;
      // });

      var str = "<option value='' selected disabled>Chọn Tỉnh/Thành phố</option>";
      try {
        response.forEach((i, k) => {
          str += `<option data-province-index="${k}">${i.Name}</option>`;
        });
      } catch(e) {
        console.log(e);
      }
      
      province.innerHTML = str;
    }
  };
  xhttp.open("GET", "https://address-5bbe5-default-rtdb.firebaseio.com/address.json", true);
  xhttp.send();
}

window.addEventListener('load', loadProvince);

function loadDistrict() {
  // var selectedProvince = province.options[province.selectedIndex].getAttribute("data-province-index");
  // district.setAttribute("data-province-index", selectedProvince);
  selectedProvince = province.options[province.selectedIndex].getAttribute("data-province-index");

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(this.responseText);
      // console.log(response);
      // response.sort((a, b) => {
      //   if(a.Name < b.Name) return -1;
      //   if(a.Name > b.Name) return 1;
      //   return 0;
      // });

      var str = "<option value='' selected disabled>Chọn Quận/Huyện</option>";
      try {
        response.forEach((i, k) => {
          str += `<option data-district-index="${k}">${i.Name}</option>`;
        });
      } catch(e) {
        console.log(e);
      }
      
      district.innerHTML = str;
    }
  };

  xhttp.open("GET", `https://address-5bbe5-default-rtdb.firebaseio.com/address/${selectedProvince}/Districts.json`, true);
  xhttp.send();
}

// province.addEventListener('change', loadDistrict);

// Cách 1:
// province.addEventListener('change', () => {
//   loadDistrict();
//   loadWard();
// });

// Cách 2:
province.addEventListener('change', () => {
    loadDistrict();
    ward.innerHTML = "<option value='' selected disabled>Chọn Phường/Xã</option>";
});


function loadWard() {
  // var selectedProvince = district.getAttribute("data-province-index");
  // var selectedDistrict = district.options[district.selectedIndex].getAttribute("data-district-index");
  // ward.setAttribute("data-district-index", selectedDistrict);
  selectedDistrict = district.options[district.selectedIndex].getAttribute("data-district-index");

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(this.responseText);
      // console.log(response);
      // response.sort((a, b) => {
      //   if(a.Name < b.Name) return -1;
      //   if(a.Name > b.Name) return 1;
      //   return 0;
      // });

      var str = "<option value='' selected disabled>Chọn Phường/Xã</option>";
      try {
        response.forEach((i, k) => {
          str += `<option data-ward-index="${k}">${i.Name}</option>`;
        });
      } catch(e) {
        console.log(e);
      }
      
      ward.innerHTML = str;
    }
  };

  xhttp.open("GET", `https://address-5bbe5-default-rtdb.firebaseio.com/address/${selectedProvince}/Districts/${selectedDistrict}/Wards.json`, true);
  xhttp.send();
}

district.addEventListener('change', loadWard);


