function loadProvince() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    //  document.getElementById("demo").innerHTML = this.responseText;
      var response = JSON.parse(this.responseText);
      var province_arr = [];
      for(var i = 0; i < response.data.length; ++i) {
        province_arr.push({"ProvinceName": response.data[i].ProvinceName, "ProvinceID": response.data[i].ProvinceID});
      }
      province_arr.sort((a, b) => {
        if(a.ProvinceName < b.ProvinceName) return -1;
        if(a.ProvinceName > b.ProvinceName) return 1;
        return 0;
      });
      
      var element = document.getElementById("province");
      province_arr.forEach((i) => {
        var node = document.createElement("option");
        node.setAttribute("data-id", i.ProvinceID);
        var text = document.createTextNode(i.ProvinceName);
        node.appendChild(text);
        element.appendChild(node);
      })
    }
  };
  xhttp.open("GET", "https://dev-online-gateway.ghn.vn/shiip/public-api/master-data/province", true);
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.setRequestHeader("token", "862af354-b9d9-11eb-8546-ca480ac3485e");
  xhttp.send();
}

window.addEventListener('load', loadProvince);

var province = document.getElementById("province");
function loadDistrict() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    //  document.getElementById("demo").innerHTML = this.responseText;
      var response = JSON.parse(this.responseText);
      var district_arr = [];
      for(var i = 0; i < response.data.length; ++i) {
        district_arr.push({"DistrictName": response.data[i].DistrictName, "DistrictID": response.data[i].DistrictID});
      }
      district_arr.sort((a, b) => {
        if(a.DistrictName < b.DistrictName) return -1;
        if(a.DistrictName > b.DistrictName) return 1;
        return 0;
      });
      console.log(district_arr);
      var element = document.getElementById("district");
      district_arr.forEach((i) => {
        var node = document.createElement("option");
        node.setAttribute("data-id", i.DistrictID);
        var text = document.createTextNode(i.DistrictName);
        node.appendChild(text);
        element.appendChild(node);
      })
    }
  };
  var value = province.options[province.selectedIndex].getAttribute("data-id");
  xhttp.open("GET", "https://dev-online-gateway.ghn.vn/shiip/public-api/master-data/district?province_id="+value, true);
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.setRequestHeader("token", "862af354-b9d9-11eb-8546-ca480ac3485e");
  
  xhttp.send();
}

province.addEventListener('change', loadDistrict);


