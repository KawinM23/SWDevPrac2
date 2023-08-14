function CheckRegisterFormInput() {
  let form = document.forms["organizerRegistration"];

  var alertMessage = "";

  // - ชื่อบริษัท ชื่อผู้ติดต่อ และเบอร์ผู้ติดต่อ ห้ำมเป็นค่ำว่ำง
  var empty = 0;
  var emptyMessage = "";
  if (CheckEmptyString(form["companyName"].value)) {
    empty++;
    emptyMessage += "Company name";
  }
  if (CheckEmptyString(form["contactName"].value)) {
    empty++;
    emptyMessage += (empty > 0 ? ", " : "") + "Contact name";
  }
  if (CheckEmptyString(form["contactPhoneNumber"].value)) {
    empty++;
    emptyMessage += (empty > 0 ? ", " : "") + "Contact phone number";
  }

  if (empty == 1) {
    emptyMessage += " is required.";
    alertMessage += emptyMessage;
  } else if (empty > 1) {
    emptyMessage += " are required.";
    alertMessage += emptyMessage;
  }

  // - ต้องมีกำรเลือกขนำดบูธ (สำมำรถใช้ html attribute แทน JavaScript ได้)

  // - จำนวนเก้ำอี้ ถ้ำมีกำรใส่ค่ำมำ ค่ำต้องเป็นตัวเลข ค่ำระหว่ำง 1 ถึง 10 เท่ำนั้น
  chairNumber = form["chairNumber"].value;
  if (chairNumber < 1 || chairNumber > 10) {
    alertMessage +=
      (alertMessage == "" ? "" : "\n") +
      "Number of chair must be full number between 1 to 10.";
  }

  if (alertMessage == "") {
    alert("Register Completed");
  } else {
    alert(alertMessage);
  }

  return true, "";
}

function CheckEmptyString(value) {
  value = value.trim();
  return value == null || value == undefined || value == "";
}
