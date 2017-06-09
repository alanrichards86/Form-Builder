


// form.insertAdjacentHTML('beforeend', '<input type="text" id="fist_name"');








var formData = [
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current website url",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobil Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];


for (var i = 0; i < formData.length; i++) {
  let form = document.querySelector("form");
  let obj = formData[i];
  let text;
  if (obj.options.length === 0) {
    text = '<input class="puts" type="' + obj.type + '" id="' + obj.id + '" placeholder="' + obj.label +'">'
    form.insertAdjacentHTML("beforeend", text);

  } else {
      //parent Element
      let cell = document.createElement('select');
      cell.classList.add('selector');
      //parent Element
      let optionStart = document.createElement('option');

      optionStart.textContent = 'Select Language...';

      cell.appendChild(optionStart);

      for (n = 0; n < obj.options.length; n++) {
        let option = document.createElement('option');
        option.label = obj.options[n].label;
        option.value = obj.options[n].value;
        cell.appendChild(option);
      }

      form.appendChild(cell);


  }


}


console.log(formData);


// let input = document.createElement('input');
// input.type = obj.type;
// input.id = obj.id;
// input.placeholder = obj.label;
// form.appendChild(input);

// for (let i = 0; i < formData.length; i++) {
//   let form = document.querySelector('form1');
//   let obj = formData[i];
//   let text = '<input type="' + obj.type + '"id="' + obj.id +'""'
// }



// let text = document.createElement('select');
// console.log(text);
// text.appendChild(select);
// form.insertAdjacentHTML("beforeend", text);

// function optionPlace(hold) {
  // for (let n = 0; n < obj.options.length; n++){
  // console.log(n);

  // sel1 = '<option value="' + obj.options[n].value + '">' + obj.options[n].label + '  </options>';

  // console.log(sel1);

  // text = '<select class="select1" options="' + obj.options[i].label +'" type="' + obj.type + '" id="' + obj.id + '" placeholder="' + obj.label +'" value="' + obj.options[i].value +'"></select>';
  // console.log(text);
  // form.insertAdjacentHTML("beforeend", text);
