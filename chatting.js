function user1() {
  var today = new Date();
  var time =
    ("0" + today.getHours()).slice(-2) +
    ":" +
    ("0" + today.getMinutes()).slice(-2);

  var msg1 = document.getElementById("text1").value;

  if (msg1 == "") {
  } else {
    var U1p1 = document.createElement("p");
    var span1 = document.createElement("span");
    U1p1.appendChild(span1);
    var User1pN1 = document.createElement("span");
    span1.appendChild(User1pN1);
    var User1text = document.createTextNode("\xa0" + msg1 + "\xa0\xa0\xa0");
    User1pN1.appendChild(User1text);

    var tSpan1 = document.createElement("span");
    var tSpanText1 = document.createTextNode("\xa0" + time + "\xa0");
    tSpan1.appendChild(tSpanText1);
    span1.appendChild(tSpan1);
    tSpan1.classList.add("time");

    span1.classList.add("parentSpan");

    var U1p2 = document.createElement("p");
    var span2 = document.createElement("span");
    U1p2.appendChild(span2);
    var User1pN2 = document.createElement("span");
    span2.appendChild(User1pN2);
    var User1text2 = document.createTextNode("\xa0" + msg1 + "\xa0\xa0\xa0");
    User1pN2.appendChild(User1text2);

    var tSpan2 = document.createElement("span");
    var tSpanText2 = document.createTextNode("\xa0" + time + "\xa0");
    tSpan2.appendChild(tSpanText2);
    span2.appendChild(tSpan2);
    tSpan2.classList.add("time");

    span2.classList.add("parentSpan");

    var User1parent1 = document.getElementById("divA");
    var User1parent2 = document.getElementById("divB");
    User1parent1.appendChild(U1p1);
    User1parent2.appendChild(U1p2);

    U1p1.classList.add("childA1");
    U1p2.classList.add("childA2");

    User1pN1.scrollIntoView(focus);
    User1pN2.scrollIntoView(focus);

    document.getElementById("text1").value = "";
  }
}

function user2() {
  var today = new Date();
  var time =
    ("0" + today.getHours()).slice(-2) +
    ":" +
    ("0" + today.getMinutes()).slice(-2);

  var msg2 = document.getElementById("text2").value;

  if (msg2 == "") {
  } else {
    var U2p1 = document.createElement("p");
    var span1 = document.createElement("span");
    U2p1.appendChild(span1);
    var User2pN1 = document.createElement("span");
    span1.appendChild(User2pN1);
    var User2text = document.createTextNode("\xa0" + msg2 + "\xa0\xa0\xa0");
    User2pN1.appendChild(User2text);

    var tSpan1 = document.createElement("span");
    var tSpanText1 = document.createTextNode("\xa0" + time + "\xa0");
    tSpan1.appendChild(tSpanText1);
    span1.appendChild(tSpan1);
    tSpan1.classList.add("time");

    span1.classList.add("parentSpan");

    var U2p2 = document.createElement("p");
    var span2 = document.createElement("span");
    U2p2.appendChild(span2);
    var User2pN2 = document.createElement("span");
    span2.appendChild(User2pN2);
    var User2text2 = document.createTextNode("\xa0" + msg2 + "\xa0\xa0\xa0");
    User2pN2.appendChild(User2text2);

    var tSpan2 = document.createElement("span");
    var tSpanText2 = document.createTextNode("\xa0" + time + "\xa0");
    tSpan2.appendChild(tSpanText2);
    span2.appendChild(tSpan2);
    tSpan2.classList.add("time");

    span2.classList.add("parentSpan");

    var User2parent1 = document.getElementById("divA");
    var User2parent2 = document.getElementById("divB");
    User2parent1.appendChild(U2p1);
    User2parent2.appendChild(U2p2);

    U2p1.classList.add("childB1");
    U2p2.classList.add("childB2");

    User2pN1.scrollIntoView(focus);
    User2pN2.scrollIntoView(focus);

    document.getElementById("text2").value = "";
  }
}

function submitUser1(event) {
  if (event.keyCode === 13 && !event.shiftKey) {
    event.preventDefault();
    user1();
  }
}

function submitUser2(event) {
  if (event.keyCode === 13 && !event.shiftKey) {
    event.preventDefault();
    user2();
  }
}
