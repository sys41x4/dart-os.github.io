// [DONATE PAGE] JS CODE BLOCKS

function load_donate_crypto_section(qr_size="250px", donate_type="cryptocurrency", funds_data={}){
  // [funds_data] should be in json format
  // identifier may be id or class name | must include . before class_name and # before id
  var innerHTML = '';
  // generate tab headers
  var count = 0;
  innerHTML += `<ul class="nav nav-tabs tab-line">`;
  for (let i = 0; i < Object.keys(funds_data).length; i++) {
    if(funds_data[i]["type"]==donate_type){
      var active_tab = '';
      if(count==0){active_tab="active";}
      innerHTML += `<li class="nav-item">
            <a class="nav-link crypto-section-class-Identifier-tab ${active_tab}" data-toggle="tab" href="#crypto_tab_${i}" onclick="switchTab(this, 'crypto-section-class-Identifier-tab', 'crypto-section-class-Identifier', 'crypto_tab_${i}')">${funds_data[i]["name"]}</a>
          </li>`;
      count++;
    }
  }
  innerHTML += `</ul>`;
  // Generate the crypto qr info section
  innerHTML += `<div class="tab-content">`;
  var total_count = count;
  for (let i = 0; i < Object.keys(funds_data).length; i++) {
    if(funds_data[i]["type"]==donate_type){
      if(count==0){break;}
      var active_tab = '';
      if(count==total_count){active_tab="show active";}

      var qrcode_inner_HTML = '';
      if("img" in funds_data[i]["qr"]){
          qrcode_inner_HTML=`<img id="qr-img-${i}" src="${funds_data[i]["qr"]["img"]}" alt="img" style="max-height: ${qr_size};" alt=${funds_data[i]["name"]}_qr"><br><br>`;
      }
      else if("data" in funds_data[i]["qr"]){
          qrcode_inner_HTML=`<div id="qr-img-${i}" data="${funds_data[i]["qr"]["data"]}" class="qr"></div>`;
      }

      innerHTML += `<div class="tab-pane crypto-section-class-Identifier ${active_tab}" id="crypto_tab_${i}">
          <center>
          <p><strong>[ ${funds_data[i]["supported_micro_services"].join(" | ")} ]</strong><br><br>
          The above <strong>Tokens/Coins/Crypto-Funds</strong> can be donated through :<br>
          <strong>
          CHAIN : ${funds_data[i]["name"]}<br>
          WALLET ADDRESS : ${funds_data[i]["qr"]["data"]}
          </strong></p><br>
          <p><strong>${funds_data[i]["qr"]["data"]}</strong></p>
          ${qrcode_inner_HTML}
          </center>
      </div>`;
      count--;
    }
  }
  innerHTML += "</div>";

  return innerHTML;

}


function load_donate_funds_section(qr_size="250px", donate_type="funds", funds_data={}){
  // [funds_data] should be in json format
  // identifier may be id or class name | must include . before class_name and # before id
  var innerHTML = '';
  for (let i = 0; i < Object.keys(funds_data).length; i++) {
    if(funds_data[i]["type"]==donate_type){
      qrcode_inner_HTML = '';
      if("img" in funds_data[i]["qr"]){
          qrcode_inner_HTML=`<img id="qr-img-${i}" src="${funds_data[i]["qr"]["img"]}" alt="img" style="max-height: ${qr_size};" alt=${funds_data[i]["name"]}_qr"><br><br>`;
      }
      else if("data" in funds_data[i]["qr"]){
          qrcode_inner_HTML=`<div id="qr-img-${i}" data="${funds_data[i]["qr"]["data"]}" class="qr"></div>`;
      }
      
      innerHTML += `<div id="fund_tab_${i}" class="col-6">
          <h3>${funds_data[i]["name"]}</h3>
          ${qrcode_inner_HTML}
          <p>${funds_data[i]["comment"]}:</p>
          <a class="fa a-button" href="${funds_data[i]["link"]}" style="font-size: 1.5em;"><strong>${funds_data[i]["value"]}</strong></a><br><br>
      </div>`;
    }
  }

  return innerHTML;
  
}

function load_donate_sections(section_identifier, qr_size="250px", funds_data={}){
  // [funds_data] should be in json format
  // section_identifier must be class name | must include . before class_name

  if(funds_data=={}) return;
  var donateSectionDiv = document.querySelectorAll(section_identifier);
  if (donateSectionDiv.length==0) return; // return if element is not found

  for (let i = 0; i < donateSectionDiv.length; i++) {
    var sectionDiv = document.getElementById(donateSectionDiv[i].id);

    if(sectionDiv.id.split('-')[0]=="funds"){
      sectionDiv.innerHTML += load_donate_funds_section(qr_size, sectionDiv.id.split('-')[0], funds_data);
    }
    else if(sectionDiv.id.split('-')[0]=="cryptocurrency"){
      sectionDiv.innerHTML += load_donate_crypto_section(qr_size, sectionDiv.id.split('-')[0], funds_data);
    }
  }
}


// On js load perform the action
fetch('/assets/data/donate.json')
  .then(response => response.json())
  .then(data => {
    // console.log(data);
    load_donate_sections(".donate-section", "250px", data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });


// Switch tabs

function switchTab(tab, tabClassName, sectionClassName, sectionId) {

  // Active current Tab
  var tabs = document.getElementsByClassName(tabClassName);
  // Active Connected Section
  var section = document.getElementById(sectionId);
  var sections = document.getElementsByClassName(sectionClassName);
  for (var i = 0; i < sections.length; i++) {
    sections[i].classList.remove("show", "active");
    tabs[i].classList.remove("show", "active");
  }
  section.classList.add("show", "active");
  tab.classList.add("show", "active");
}