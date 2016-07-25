$(document).ready(function(){

  $("#hmHdr").on('click',function(){//hide other than Home
    $("#hmCntnt").show();
    $("#cmpCntnt").hide();
    $("#abtCntnt").hide();
    $("#viewCntnt").hide();
    $("#msg").hide();
  });

  $("#cmpHdr").on('click',function(){//hide other than Add Complaint
    $("#hmCntnt").hide();
    $("#cmpCntnt").show();
    $("#abtCntnt").hide();
    $("#viewCntnt").hide();
    $("#msg").hide();
  });
  $("#abtHdr").on('click',function(){ //hide other than About
    $("#hmCntnt").hide();
    $("#cmpCntnt").hide();
    $("#abtCntnt").show();
    $("#viewCntnt").hide();
    $("#msg").hide();
    });

    $("#vewHdr").on('click',function(){ //hide other than View Complaint
      $("#hmCntnt").hide();
      $("#cmpCntnt").hide();
      $("#abtCntnt").hide();
      $("#viewCntnt").show();
      $("#msg").hide();
      //fire ajax get Request to get the data and add the results to view table
      $.ajax({
        dataType: "json",
        type: 'GET',
        url: '/getCmplnt',
        success: function(data){
          $("#viewTable tr:gt(0)").remove();//remove all rows other than Header
          var trHTML = '';
        $.each(data, function (i, item) { //Add the data from results to table
            trHTML += '<tr><td>' + item.city + '</td><td>' + item.area + '</td><td>' + item.cmplntDtl + '</td><td>'  + item.raisedBy + '</td></tr>';
        });
        $('#viewTable').append(trHTML);
        }
      });
      });

      //add Complaint form Submission -> POST Method to store the data in DB
  $("#addCmplnt").on('submit', function(){
    //get value from form
      var cmplnt = {city: $("#city").val(), area: $("#area").val(), cmplntDtl: $("#cmplntDtl").val(), raisedBy: $("#raisedBy").val() };
      $.ajax({
        type: 'POST',
        url: '/addCmplnt',
        data: cmplnt,
        success: function(data){
          $("#cmpCntnt").hide();
          $("#msg").text("Complaint Inserted Succesfully");
            $("#msg").show();
        }
      });
      return false;
  });

});
